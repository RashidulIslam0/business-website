import { AreaTable, AreaTop, FormTable, Video } from "../../components";

const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />

      <AreaTable />
      <FormTable />
      <Video />
    </div>
  );
};

export default Dashboard;
