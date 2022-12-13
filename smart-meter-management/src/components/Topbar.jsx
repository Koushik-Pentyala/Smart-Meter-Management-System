import { NavLink } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='w-full flex items-center justify-center gap-4 p-4'>
      <div className='flex items-center gap-4'>
        {/* <NavLink
          to="/solar"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-300 p-2 px-8 font-bold text-green-600"
              : "bg-gray-300 p-2 px-8 font-bold"
          }
        >
          Solar
        </NavLink>
        <NavLink
          to="/storage"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-300 p-2 px-8 font-bold text-green-600"
              : "bg-gray-300 p-2 px-8 font-bold"
          }
        >
          Storage
        </NavLink>
        <NavLink
          to="/camera"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-300 p-2 px-8 font-bold text-green-600"
              : "bg-gray-300 p-2 px-8 font-bold"
          }
        >
          Camera
        </NavLink> */}
        <NavLink
          to='/client/iot'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 p-2 px-8 font-bold bg-orange-800 text-white-600'
              : 'bg-gray-300 p-2 px-8 font-bold'
          }
        >
          IoT
        </NavLink>
        <NavLink
          to='/client/meters'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 p-2 px-8 font-bold bg-orange-800 text-white-600 shadow'
              : 'bg-gray-300 p-2 px-8 font-bold'
          }
        >
          Meter
        </NavLink>
      </div>

      {/* <div className='flex items-center gap-4'>
        <input
          type='search'
          name='search'
          id='search'
          className='block border rounded-xl'
        />

        <Link to='notifications'>
          <AiFillBell />
        </Link>

        <div className='w-[1px] h-[16px] bg-gray-500'></div>
      </div> */}

      {/* <img
        className='w-12 h-12 p-[2px] rounded-full border-2 border-rose-700'
        src='https://randomuser.me/api/portraits/med/men/24.jpg'
        alt=''
      /> */}
    </div>
  );
};
export default Topbar;
