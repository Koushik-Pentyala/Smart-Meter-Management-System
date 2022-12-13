import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { findAllFans } from '../../../services/deviceApi';
import {  FaEye , FaRegEdit, FaTrash} from 'react-icons/fa';


const Fans = () => {
  const { state } = useApp();
  const { load } = state;
  const [fans, setFans] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const viewDeviceDetails = (id) => {
    navigate(`/client/devices/iot/fans/view/${id}`);
  };

  const updateDeviceDetails = (id) => {
    navigate(`/client/devices/iot/fans/update/${id}`);
  };

  const deleteDeviceDetails = (id) => {
    navigate(`/client/devices/iot/fans/delete/${id}`);
  };

  useEffect(() => {
    const getAllFans = async () => {
      try {
        const res = await findAllFans();

        if (res.status === 200) {
          console.log(res);
          setFans(res.data.user);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getAllFans();
  }, [load]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='p-4' >
      <p className='font-bold bg-orange-800 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Configured Fans List
      </p>

      <table className='table-auto w-full bg-gray-300'>
        <thead className='border border-black border-collapse bg-yellow-600'>
          <tr className='text-center'>
            <th className='p-2 border border-black'>Device ID</th>
            <th className='p-2 border border-black'>Device Name</th>
            <th className='p-2 border border-black'>Location</th>
            <th className='p-2 border border-black'>Manufacturer</th>
          <th className='p-2 border border-black'>Power</th>
          <th className='p-2 border border-black'>Model</th>
            <th className='p-2 border border-black'>View</th>
            <th className='p-2 border border-black'>Update</th>
            <th className='p-2 border border-black'>Delete</th>
          </tr>
        </thead>
        <tbody className='font-bold'>
          {fans.map((meter) => (
            <tr className='text-center' key={meter._id}>
              <td className='p-1 border border-black '>
                <div className='flex items-center justify-center gap-2'>
                  {/* <img src='/imgs/fan.png' className='w-6 h-6' alt='' />{' '} */}
                  {meter.fanId}
                </div>
              </td>
              <td className='p-1 border border-black uppercase'>
                {meter.fanName}
              </td>
              <td className='p-1 border border-black uppercase'>
                {meter.location}
              </td>
              <td className='p-1 border border-black uppercase'>
                {meter.manufacturer}
              </td>
              <td className='p-1 border border-black uppercase'>
                {meter.power}
              </td>
              <td className='p-1 border border-black uppercase'>
                {meter.model}
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-green-600 text-white'
                  onClick={() => viewDeviceDetails(meter._id)} style={{fontSize:"11px", width:"80px", height:'35px',textAlign:"center",borderRadius:'10px'}}
                >
                 <FaEye /> View
                </button>
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-orange-800 text-white'
                  onClick={() => updateDeviceDetails(meter._id)} style={{fontSize:"11px", width:"80px", height:'35px',textAlign:"center",borderRadius:'10px'}}
                >
                 <FaRegEdit /> Update
                </button>
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8  bg-red-600 text-white'
                  onClick={() => deleteDeviceDetails(meter._id)} style={{fontSize:"11px", width:"80px", height:'35px',textAlign:"center",borderRadius:'10px'}}
                >
                  <FaTrash/>Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
<br></br>
      {/* add fan */}
      <Link
        to='/client/devices/iot/fans/add'
        className='flex gap-4 items-center my-4 ' style={{marginLeft : "770px"}}
      >
        <p className='font-bold bg-yellow-600 rounded-sm p-1 px-4 w-fit'>
          Add a new device
        </p>

        <button className='bg-orange-800 text-4xl p-3  flex justify-center rounded-full items-center text-white font-bold'>
          <FaPlus />
        </button>
      </Link>

      <Outlet />
    </div>
  );
};
export default Fans;
