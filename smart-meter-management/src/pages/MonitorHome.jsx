import { Outlet } from 'react-router-dom';
import TopMonitorBar from '../components/TopMonitorBar';

const MonitorHome = () => {
  return (
    <div>
      <TopMonitorBar />
      <Outlet />
    </div>
  );
};

export default MonitorHome;
