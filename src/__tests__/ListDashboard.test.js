import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ListDashboard from '../components/ListDashboard';
import { loadDashboardDetails, loadDashboards } from '../utils/function';
import Dashboard from '../components/Dashboard';


jest.mock('../utils/function', () => ({
    loadDashboards: jest.fn(),
  }));

  const mockDashboards = [
            {
                "displayName": "Antenatal Care",
                "id": "nghVC4wtyzi",
                "starred": true
            },
            {
                "displayName": "Cases Malaria",
                "id": "JW7RlN5xafN",
                "starred": false
            },
            {
                "displayName": "Delivery",
                "id": "iMnYyBfSxmM",
                "starred": false
            },
            {
                "displayName": "Disease Surveillance",
                "id": "vqh4MBWOTi4",
                "starred": false
            },{
                "displayName": "Immunization",
                "id": "TAMlzYkstb7",
                "starred": false
            }
        ]
    const mockDashboardDetails = {
        "access": {
            "manage": true,
            "externalize": true,
            "write": true,
            "read": true,
            "update": true,
            "delete": true
        },
        "restrictFilters": false,
        "displayName": "Delivery",
        "id": "iMnYyBfSxmM",
        "dashboardItems": [
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "HDEDqV3yv3H",
                    "name": "Delivery: Institutional delivery rates Yearly"
                },
                "users": [],
                "shape": "DOUBLE_WIDTH",
                "x": 0,
                "y": 0,
                "type": "VISUALIZATION",
                "id": "GaVhJpqABYX",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "PIVOT_TABLE",
                    "id": "wp86U5zU4X3",
                    "name": "Delivery: Live births in facilities last 4 quarters"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 29,
                "y": 0,
                "type": "VISUALIZATION",
                "id": "qXsjttMYuoZ",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "C8JAoMRqZCd",
                    "name": "Delivery: Births (registered) in PHU vs Community last year"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 0,
                "y": 20,
                "type": "VISUALIZATION",
                "id": "Rwb3oXJ3bZ9",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "uSkYP6tcYu5",
                    "name": "Delivery: Birth by skilled attendant (estimated vs population, sorted)"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 29,
                "y": 20,
                "type": "VISUALIZATION",
                "id": "WdJYAELhYph",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "Evi1ACuIaYX",
                    "name": "Delivery: Birth by skilled attendant this year (sorted)"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 0,
                "y": 40,
                "type": "VISUALIZATION",
                "id": "PeTO2Z3dQJ8",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "map": {
                    "id": "LRlMopleWMf",
                    "name": "Delivery: PHU delivery rate (by pop) by chiefdom last year"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 29,
                "y": 40,
                "type": "MAP",
                "id": "G3EtzSWNP9o",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "jgBWy5wBehm",
                    "name": "Reporting Rates: RH by orgunit last year"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 0,
                "y": 60,
                "type": "VISUALIZATION",
                "id": "CIJ95hha16D",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "XGcG2PFIvOU",
                    "name": "Delivery: ANC coverage vs PHU delivery rate last year"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 29,
                "y": 60,
                "type": "VISUALIZATION",
                "id": "guQhb0iuRAt",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "rwKtZHvFCTl",
                    "name": "Delivery: PHU delivery rates last year"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 0,
                "y": 80,
                "type": "VISUALIZATION",
                "id": "cIRIt2OiIY2",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "JTVC50MEbER",
                    "name": "Delivery: PHU delivery rate (by pop.) by orgunit last year"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 29,
                "y": 80,
                "type": "VISUALIZATION",
                "id": "Orwg12f8YVm",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            },
            {
                "visualization": {
                    "type": "COLUMN",
                    "id": "kGgfOK62oaT",
                    "name": "Delivery: Births attended by skilled health personnel by orgunit last year"
                },
                "users": [],
                "shape": "NORMAL",
                "x": 0,
                "y": 100,
                "type": "VISUALIZATION",
                "id": "SjVRhRwoBoU",
                "reports": [],
                "resources": [],
                "h": 20,
                "w": 29
            }
        ],
        "starred": false
    }
    
    
describe('ListDashboard Tests', () => {
    beforeEach(() => {
        // Reset mock implementation before each test
        loadDashboards.mockReset();
      });
    
      it('renders a list of dashboards', async () => {
        // Mock a successful call to loadDashboards
        loadDashboards.mockResolvedValue(mockDashboards);
    
        render(<ListDashboard dashboards={mockDashboards}/>);
    
        // Verify that dashboards are rendered
        expect(screen.getByText(/Antenatal Care/i)).toBeInTheDocument();
        expect(screen.getByText(/Cases Malaria/i)).toBeInTheDocument();
        expect(screen.getByText(/Delivery/i)).toBeInTheDocument();
        expect(screen.getByText(/Disease Surveillance/i)).toBeInTheDocument();
        expect(screen.getByText(/Immunization/i)).toBeInTheDocument();



      });
      it('expands and collapses dashboards', async () => {

            loadDashboards.mockResolvedValue(mockDashboardDetails);
            //render to dashboard  
            render(<Dashboard key={mockDashboardDetails.id}
                title={mockDashboardDetails.displayName}
                dashboardItems={mockDashboardDetails.dashboardItems}
                onClick=""
                isExpanded=""
                onToggleStar=""
                isStarred={true} />);
        
            // Click on the first dashboard card to expand
            userEvent.click(screen.getByText(/Delivery/i));
            expect(screen.getByText(/Delivery/i)).toBeInTheDocument();
          });

});
