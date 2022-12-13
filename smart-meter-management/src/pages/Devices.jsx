import { Outlet } from 'react-router-dom';
import TopDeviceBar from '../components/TopDeviceBar';

const Devices = () => {
  return (
    <div>
      <TopDeviceBar />
      <Outlet />
    </div>
  );
};

export default Devices;
