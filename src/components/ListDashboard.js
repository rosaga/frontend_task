import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import { loadDashboardDetails } from '../utils/function';

const ListDashboard = ({ dashboards }) => {
    const [dashboardId, setDashboardId] = useState(dashboards?.length > 0 ? dashboards[0]?.id : '');
    const [dashboardUrl, setDashboardUrl] = useState('');
    const [dashboardDetails, setDashboardDetails] = useState([]);
    const [expandedDashboards, setExpandedDashboards] = useState({});
    const [starredDashboards, setStarredDashboards] = useState({});
    const [selectedFilter, setSelectedFilter] = useState(''); // Add selected filter state



    const handleCardClick = (id) => {
        setDashboardId(id);
        setDashboardUrl(`https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/${id}.json`);

        setExpandedDashboards((prevExpandedDashboards) => ({
            // ...prevExpandedDashboards,
            [id]: !prevExpandedDashboards[id],
        }));

    };
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

    const filterDashboardItems = () => {
        if (!selectedFilter) {
            return dashboardDetails.dashboardItems;
        }
        return dashboardDetails.dashboardItems.filter((item) => item.type === selectedFilter);
    }

    useEffect(() => {
        if (dashboardId) {
            getDashboardDetails();
        }
    }, [dashboardId]);

    useEffect(() => {
        // Load starred states from localStorage on component mount
        const storedStarred = JSON.parse(localStorage.getItem('starredDashboards')) || {};
        setStarredDashboards(storedStarred);
    }, []);

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