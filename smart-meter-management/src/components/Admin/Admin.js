import '../../styles/device.css';
import { AiFillHome } from 'react-icons/ai';
import { GrUserSettings } from 'react-icons/gr';
import { GoGraph } from 'react-icons/go';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillChatRightDotsFill } from 'react-icons/bs';



export const SideBar = () => {
  return (
    <>
      <div className='sidebar bg-green-700 min-w-[150px] min-h-[800px]' style={{width: "125px", margin: '0px'}}>
      <br></br>
      <br></br>

        <div>
          <Link to='/adminhome'>
            {' '}
            <AiFillHome style={{ fontSize: '31px' }} />{' Admin Home'}
          </Link>
        </div>{' '}
        {/* <div>
          <Link to='/adminmetrics'>
            {' '}
            <GoGraph style={{ fontSize: '31px' }} />{' Monitoring'}
          </Link>
        </div> */}
        <br />
        <div>
          <Link to='/addclients'>
            {' '}
            <GrUserSettings style={{ fontSize: '31px' }} />{' Add Clients'}
          </Link>
        </div>
        <br />
        <div>
          <Link to='/allservices'>
            {' '}
            <BsFillChatRightDotsFill style={{ fontSize: '31px' }} />{' Servcie Requests'}
          </Link>
        </div>
        <div>
          {' '}
          <br />
          <Link to='/'>
            {' '}
            <FaSignOutAlt style={{ fontSize: '31px' }} />{'Logout'}
          </Link>
        </div>
      </div>
    </>
  );
};