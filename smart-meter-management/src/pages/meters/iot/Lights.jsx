import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { findAllLights } from '../../../services/deviceApi';
import {  FaEye , FaRegEdit, FaTrash} from 'react-icons/fa';


const Lights = () => {
  const { state } = useApp();
  const { load } = state;
  const [lights, setLights] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const viewDeviceDetails = (id) => {
    navigate(`/client/devices/iot/lights/view/${id}`);
  };

  const updateDeviceDetails = (id) => {
    navigate(`/client/devices/iot/lights/update/${id}`);
  };

  const deleteDeviceDetails = (id) => {
    navigate(`/client/devices/iot/lights/delete/${id}`);
  };

  useEffect(() => {
    const getAllLights = async () => {
      try {
        const res = await findAllLights();

        if (res.status === 200) {
          console.log(res);
          setLights(res.data.user);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getAllLights();
  }, [load]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='p-4'>
      <p className='font-bold bg-orange-800 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Configured Lights list
      </p>

      <table className='table-auto w-full bg-green-100'>
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
          {lights.map((light) => (
            <tr className='text-center' key={light._id}>
              <td className='p-1 border border-black '>
                <div className='flex items-center justify-center gap-2'>
                
                  {light.lightId}
                </div>
              </td>
              <td className='p-1 border border-black uppercase'>
                {light.lightName}
              </td>
              <td className='p-1 border border-black uppercase'>
                {light.location}
              </td>
              <td className='p-1 border border-black uppercase'>
                {light.manufacturer}
              </td>
              <td className='p-1 border border-black uppercase'>
                {light.power}
              </td>
              <td className='p-1 border border-black uppercase'>
                {light.model}
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-green-600 text-white'
                  onClick={() => viewDeviceDetails(light._id)}
                  style={{fontSize:"11px", width:"80px", height:'35px',textAlign:"center",borderRadius:'10px'}}
                >
                 <FaEye /> View
                </button>
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-blue-600 text-white'
                  onClick={() => updateDeviceDetails(light._id)}
                  style={{fontSize:"11px", width:"80px", height:'35px',textAlign:"center",borderRadius:'10px'}}
                >
                 <FaRegEdit />  Update
                </button>
              </td>
              <td className='p-1 border border-black'>
                <button
                  className='p-2 px-8 bg-red-600 text-white'
                  onClick={() => deleteDeviceDetails(light._id)}
                  style={{fontSize:"11px", width:"80px", height:'35px',textAlign:"center",borderRadius:'10px'}}
                >
                <FaTrash/>  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* add fan */}
      <Link
        to='/client/devices/iot/lights/add'
        className='flex gap-4 items-center my-4' style={{marginLeft : "760px"}}
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
export default Lights;
