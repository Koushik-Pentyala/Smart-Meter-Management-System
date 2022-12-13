import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { TbDeviceNintendo } from 'react-icons/tb';
import { ImStatsBars } from 'react-icons/im';
import { FcDataConfiguration } from 'react-icons/fc';
import { MdLogout, MdOutlineMiscellaneousServices } from 'react-icons/md';
import { FaMoneyBillAlt } from 'react-icons/fa';
import logo from "../assets/images/logo.png"
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons



const Sidebar = () => {
  return (
    <div className='sideBar basis-1/5 min-w-[30vh] min-h-screen bg-green-800  text-white'>
      {/* <h2 className='flex items-center gap-4 font-bold text-lg p-4'>
        <div className='logo w-8 h-8 rounded-full text-base bg-green-500 flex justify-center items-center'>
          G
        </div>{' '}
        Green Energy Cloud
      </h2> */}

      {/* links */}
      <img src = {logo}  width="60px" height="40px"  alt="logo" style={{marginTop:"10px",marginLeft:"80px",marginBottom:"30px"}} />
      

      <div className='my-2 mt-4'>
        <NavLink
          to='/client/home'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-green-600 p-2 px-4 font-semibold my-2 text-lg flex items-center gap-4'
              : 'p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
          }
        >
          <AiFillHome /> Home
        </NavLink>

        <NavLink
          to='client/devices/iot/'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-green-600 p-2 px-4 font-semibold my-2 text-lg flex items-center gap-4'
              : 'p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
          }
        >
          <TbDeviceNintendo /> Device Management
        </NavLink>

        <NavLink
          to='/client/monitor/iot/'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-green-600 p-2 px-4 font-semibold my-2 text-lg flex items-center gap-4'
              : 'p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
          }
        >
          <ImStatsBars /> Monitor & Tracking
        </NavLink>

        <NavLink
          to='client/config/iot/'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-green-600 p-2 px-4 font-semibold my-2 text-lg flex items-center gap-4'
              : 'p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
          }
        >
          <FcDataConfiguration /> Control & Configuration
        </NavLink>

        {/* <Link
          to='/client/home'
          className='p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
        >
          <AiFillCalendar /> Calender
        </Link> */}

        <NavLink
          to='/client/service'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-green-600 p-2 px-4 font-semibold my-2 text-lg flex items-center gap-4'
              : 'p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
          }
        >
          <MdOutlineMiscellaneousServices /> Services
        </NavLink>

        <NavLink
          to='/client/billing'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-green-600 p-2 px-4 font-semibold my-2 text-lg flex items-center gap-4'
              : 'p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
          }
        >
          <FaIcons.FaDollarSign/>  Billing
        </NavLink>
        {/* <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 text-green-600 p-2 px-4 font-semibold my-2 text-lg flex items-center gap-4'
              : 'p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
          }
        >
          <MdLogout /> Logout
        </NavLink> */}
      </div>

      {/* <div className='bg-gray-500 w-full h-[1px] '></div> */}

      {/* <div className='my-2'> */}
      {/* <Link
          to='/client/home'
          className='p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'
        >
          <AiFillSetting /> Settings
        </Link> */}

      {/* <button className='p-2 px-4 my-2 text-lg flex items-center gap-4 text-gray-300'>
          <MdLogout /> Logout
        </button>
      </div> */}
            <div className='bg-gray-500 w-full h-[1px] '></div>

    </div>

  );
};
export default Sidebar;
