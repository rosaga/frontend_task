//loads the dashboards
export const loadDashboards = async (dashboardURL) => {

    try{
        let response = await fetch(
            dashboardURL,{
                method: 'GET'
            }
        );
        if (!response.ok){
            throw new Error('Failed to fetch dashboards');
        }
        let dashboardData = await response.json()
        return dashboardData.dashboards

    }catch (err) {
        console.error('Error fetching dashboards:', err);
        throw err;
    }

}
//loads dashboard details
export const loadDashboardDetails = async (dashboardURL) => {

    try{

        let response = await fetch(
            dashboardURL,{
                method: 'GET'
            }
        );
        if (!response.ok){
            throw new Error('Failed to fetch dashboards');
        }
        let dashboardData = await response.json()
        return dashboardData

    }catch (err) {
        console.error('Error fetching dashboards:', err);
        throw err;
    }

}

