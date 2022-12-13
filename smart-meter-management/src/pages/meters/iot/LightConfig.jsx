import { useEffect, useState } from 'react';
import LightControl from '../../../components/lights/LightControl';
import { useApp } from '../../../context/AppContext';
import {
  findAllLights,
  updateDeviceActiveStatus,
  updateLightStartStatus,
} from '../../../services/deviceApi';

const LightConfig = () => {
  const { state } = useApp();
  const { load } = state;
  const [lights, setLights] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateMeterActive = async (id, data) => {
    try {
      await updateDeviceActiveStatus(id, data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateLightStart = async (id, status) => {
    try {
      await updateLightStartStatus(id, status);
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateMeterCloudConnection = async (id, data) => {
    try {
      // await updateFanActiveStatus(id, data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await findAllLights();

        if (res.status === 200) {
          setLights(res.data.user);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getAllMeters();
  }, [load]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className='p-4'>
      <p className='font-bold bg-orange-800 rounded-sm p-1 px-4  mt-8 mb-4'>
        Devices List
      </p>

      <table className='table-auto w-full bg-white'>
        <thead className='border border-black bg-yellow-600 border-collapse'>
          <tr className='text-center'>
            <th className='p-2 border border-black'>Device ID</th>
            <th className='p-2 border border-black'>Device Name</th>
            <th className='p-2 border border-black'>Active/Deactive</th>
            <th className='p-2 border border-black'>Start/Stop</th>
            <th className='p-2 border border-black'>Connect to cloud</th>
          </tr>
        </thead>
        <tbody className='font-bold bg-green-100'>
          {lights.map((light) => (
            <LightControl
              light={light}
              key={light._id}
              onActiveUpdate={updateMeterActive}
              onStartUpdate={updateLightStart}
              onCloudConnectUpdate={updateMeterCloudConnection}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LightConfig;
