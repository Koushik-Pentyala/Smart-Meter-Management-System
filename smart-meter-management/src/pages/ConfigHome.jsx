import { Outlet } from 'react-router-dom';
import ControlTopBar from '../components/ControlTopBar';

const ConfigHome = () => {
  return (
    <div>
      <ControlTopBar />
      <Outlet />
    </div>
  );
};

export default ConfigHome;
