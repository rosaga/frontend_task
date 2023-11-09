import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ListDashboard from '../components/ListDashboard';
import { loadDashboards } from '../utils/function';


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
    
describe('ListDashboard Integration Tests', () => {
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
        // ... (check other dashboard titles)
      });






//   it('renders a list of dashboards', async () => {
//     render(<ListDashboard dashboards={mockDashboards} />);

//     // Verify that dashboards are rendered
//     expect(screen.getByText(/Dashboard 1/i)).toBeInTheDocument();
//     expect(screen.getByText(/Dashboard 2/i)).toBeInTheDocument();
//   });

//   it('expands and collapses dashboards', async () => {
//     render(<ListDashboard dashboards={mockDashboards} />);

//     // Click on the first dashboard card to expand
//     userEvent.click(screen.getByText(/Dashboard 1/i));
//     expect(screen.getByText(/Dashboard 1 details/i)).toBeInTheDocument();

//     // Click again to collapse
//     userEvent.click(screen.getByText(/Dashboard 1/i));
//     expect(screen.queryByText(/Dashboard 1 details/i)).toBeNull();
//   });

//   it('toggles starred state', async () => {
//     render(<ListDashboard dashboards={mockDashboards} />);

//     // Click on the star icon to toggle the star state
//     userEvent.click(screen.getByLabelText(/star Dashboard 1/i));
//     expect(screen.getByLabelText(/star Dashboard 1/i)).toHaveClass('starred');

//     // Click again to toggle off
//     userEvent.click(screen.getByLabelText(/star Dashboard 1/i));
//     expect(screen.getByLabelText(/star Dashboard 1/i)).not.toHaveClass('starred');
//   });

//   it('filters dashboard items', async () => {
//     render(<ListDashboard dashboards={mockDashboards} />);

//     // Select "Visualizations" filter
//     userEvent.selectOptions(screen.getByRole('combobox'), 'VISUALIZATION');

//     // Verify that only visualizations are displayed
//     expect(screen.getByText(/Visualization 1/i)).toBeInTheDocument();
//     expect(screen.getByText(/Visualization 2/i)).toBeInTheDocument();
//     expect(screen.queryByText(/Map 1/i)).toBeNull();
//   });
});
