import { Outlet } from 'react-router-dom';
import { SideBar } from './Admin';

const AdminContainer = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Outlet />
    </div>
  );
};
export default AdminContainer;
