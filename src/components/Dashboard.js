import React, { useEffect, useState } from 'react';
import { getIconForItemType } from '../utils/function';
import { IconVisualizationPie16, IconVisualizationBar16, IconTable16, IconVisualizationColumnStacked16, IconWorld16, IconTextBox16, IconVisualizationLine16, IconStarFilled16, IconStar16, IconChevronDown24, IconChevronUp24 } from '@dhis2/ui-icons'

const iconMapping = {
    PIE: <IconVisualizationPie16 />,
    COLUMN: <IconVisualizationBar16 />,
    MAP: <IconWorld16 />,
    PIVOT_TABLE: <IconTable16 />,
    STACKED_COLUMN: <IconVisualizationColumnStacked16 />,
    TEXT: <IconTextBox16 />,
    LINE: <IconVisualizationLine16 />


    // Add more mappings for other visualization types as needed
};

const Dashboard = ({ title, details, onClick, isExpanded, dashboardItems, onToggleStar, isStarred }) => {

    const [expandedDashboardItems, setExpandedDashboardItems] = useState(null);

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const handleExpand = (items) => {
        setExpandedDashboardItems(items);
    };

    const handleToggleStar = () => {
        if (onToggleStar) {
            onToggleStar();
        }
    };

    useEffect(() => {
        // Clear the dashboard details when the card is collapsed
        if (!isExpanded) {
            setExpandedDashboardItems(null);
        }
    }, [isExpanded]);

    return (
        <div className={`dashboard-card ${!isExpanded ? 'expanded' : ''}`} onClick={handleClick}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h3>{title}</h3>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8, color: '#458'}}>
                    <span onClick={handleToggleStar}>
                        {isStarred ? <IconStarFilled16 /> : <IconStar16 />}
                    </span>
                    <span>
                        {isExpanded ? <IconChevronUp24 /> : <IconChevronDown24 />}
                    </span>
                </div>
            </div>
            {isExpanded && dashboardItems && (
                <div className="dashboard-items">
                    {dashboardItems.map((item) => {
                        let itemName = ''
                        let iconComponent = null;
                        if (item.type === 'VISUALIZATION') {
                            itemName = item.visualization.name
                            iconComponent = iconMapping[item.visualization.type]
                        } else if (item.type === 'MAP') {
                            itemName = item.map.name
                            iconComponent = iconMapping[item.type]
                        } else if (item.type === 'TEXT') {
                            itemName = item.text
                            iconComponent = iconMapping[item.type]

                        }

                        return (
                            <div className='item-item' key={item.id} onClick={() => handleExpand(item)}>
                                <div className="item-icon">{iconComponent}</div>
                                <div className="item-details">
                                    <span className="item-name">{itemName}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>)}
        </div>
    );
};

export default Dashboard;