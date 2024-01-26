import SalesChart from "./container/chart";
import TableContainer from "./container/table"
import TopPlatformsList from "./container/top-platform";

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
          <SalesChart />
          <TableContainer />
          <TopPlatformsList />
    </div>
  );
}

export default Dashboard;
