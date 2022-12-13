import { AiFillBell } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import { FaPlus } from 'react-icons/fa';


const TopNavBar = () => {
  return (
    <div className='w-full flex items-center justify-between gap-4  bg-#123454-800 p-1' style={{backgroundColor: "#c7c7c7", marginBottom:"10px"}}>
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
        {/* <NavLink
          to='/client/iot'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 p-2 px-8 font-bold text-green-600'
              : 'bg-gray-300 p-2 px-8 font-bold'
          }
        >
          IoT
        </NavLink>
        <NavLink
          to='/client/meters'
          className={({ isActive }) =>
            isActive
              ? 'bg-gray-300 p-2 px-8 font-bold text-green-600 shadow'
              : 'bg-gray-300 p-2 px-8 font-bold'
          }
        >
          Meter
        </NavLink> */}
        <span style={{fontSize: "30px"}}>IoT Based Smart Meter Management System</span>
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
     
     

      <Link
         to='/login'
        className='flex gap-4 items-center my-4'
      >
       

        <button className='bg-green-600 text-4xl p-3  flex justify-center rounded-full items-center text-white font-bold'>
        <AiIcons.AiOutlineLogout /> 
        </button>
      </Link>
      
      
    </div>
  );
};
export default TopNavBar;
