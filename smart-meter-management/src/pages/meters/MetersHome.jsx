import { NavLink, Outlet } from 'react-router-dom';

const MetersHome = () => {
  return (
    <>
      <div className='flex justify-center items-center gap-4 meters'>
        <NavLink
          to='/client/devices/meters/electricity'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 p-2 px-4 font-bold text-green-600 shadow'
              : 'bg-gray-300 p-2 px-4 font-bold'
          }
        >
          Electricity
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};
export default MetersHome;
