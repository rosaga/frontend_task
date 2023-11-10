import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import { loadDashboardDetails } from '../utils/function';

const ListDashboard = ({ dashboards }) => {
    const baseUrl = 'https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/'
    const defaultDashboardId = dashboards.length > 0 ? dashboards[0].id : 'nghVC4wtyzi';
    const [dashboardId, setDashboardId] = useState(defaultDashboardId);
    const [dashboardUrl, setDashboardUrl] = useState(baseUrl+defaultDashboardId+'.json');
    const [dashboardDetails, setDashboardDetails] = useState([]);
    const [expandedDashboards, setExpandedDashboards] = useState({});
    const [starredDashboards, setStarredDashboards] = useState({});
    const [selectedFilter, setSelectedFilter] = useState(''); 



    const handleCardClick = (id) => {
        setDashboardId(id);
        setDashboardUrl(baseUrl+`${id}.json`);

        setExpandedDashboards((prevExpandedDashboards) => ({
            // ...prevExpandedDashboards,
            [id]: !prevExpandedDashboards[id],
        }));

    };
    //check if the dashboard is expanded when a user clicks on it.
    const isDashboardExpanded = (id) => expandedDashboards[id] || false;

    const getDashboardDetails = async () => {
        try {
            const dashboardData = await loadDashboardDetails(dashboardUrl);
            setDashboardDetails(dashboardData);
        } catch (error) {
            console.error('Error fetching dashboard details:', error);
        }
    };

    const handleToggleStar = (dashboardId) => {
        // Toggle the star state
        const updatedStarred = { ...starredDashboards };
        updatedStarred[dashboardId] = !updatedStarred[dashboardId];
        setStarredDashboards(updatedStarred);

        // Store the updated starred states in localStorage
        localStorage.setItem('starredDashboards', JSON.stringify(updatedStarred));
    };

        //handle filtering of dashboard items
    const filterDashboardItems = () => {
        if (!selectedFilter) {
            return dashboardDetails.dashboardItems;
        }
        return dashboardDetails.dashboardItems.filter((item) => item.type === selectedFilter);
    }


    useEffect(() => {
        //Loads the dashboard items
        getDashboardDetails();
        // Load starred states from localStorage on component mount
        const storedStarred = JSON.parse(localStorage.getItem('starredDashboards')) || {};
        setStarredDashboards(storedStarred);
        //Expands the first dashboard on initial load.
        setExpandedDashboards({
            [dashboardId]: true,
    });
    }, [dashboardId]);


    return (
        <div className="dashboard-listz" style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <div>
                <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="VISUALIZATION">Visualizations</option>
                    <option value="MAP">Maps</option>
                    <option value="TEXT">Text</option>
                </select>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {dashboards.map((dashboard, id) => (
                    <Dashboard
                        key={dashboard.id}
                        title={dashboard.displayName}
                        dashboardItems={filterDashboardItems()}
                        onClick={() => handleCardClick(dashboard.id)}
                        isExpanded={isDashboardExpanded(dashboard.id)}
                        onToggleStar={() => handleToggleStar(dashboard.id)}
                        isStarred={starredDashboards[dashboard.id]} />
                ))}
            </div>
        </div>
    );
};

export default ListDashboard;