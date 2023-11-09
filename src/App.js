import React, { useState, useEffect } from 'react';
import './styles/App.css';
import ListDashboard from './components/ListDashboard';
import { loadDashboards } from './utils/function';

function App() {
  const [dashboards, setDashboards] = useState([]);
  const [dashbardURL, setDashboardUrl] = useState('https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/dashboards.json')

  const getDashboards = async () => {
    try {
      const dashboardData = await loadDashboards(dashbardURL);
      setDashboards(dashboardData);
    } catch (error) {
      console.error('Error fetching dashboards:', error);
    }
  };

  useEffect(() => {
    getDashboards();
  }, []);

  return (
    <div className="App">
      <h1>DHIS2 Dashboard List</h1>
      <ListDashboard dashboards={dashboards} />
    </div>
  );
}

export default App;