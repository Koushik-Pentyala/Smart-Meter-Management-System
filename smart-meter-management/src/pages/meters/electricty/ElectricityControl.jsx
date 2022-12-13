import { useEffect, useState } from 'react';
import { useApp } from '../../../context/AppContext';
import {
  findAllDevices,
  updateDeviceActiveStatus,
  updateDeviceStartStatus,
} from '../../../services/deviceApi';
import MeterControl from '../../../components/meters/MeterControl';

const ElectricityControl = () => {
  const { state } = useApp();
  const { load } = state;
  const [meters, setMeters] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateMeterActive = async (id, data) => {
    try {
      await updateDeviceActiveStatus(id, data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateMeterStart = async (id, status) => {
    try {
      await updateDeviceStartStatus(id, status);
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
        const res = await findAllDevices();

        if (res.status === 200) {
          console.log(res.data);
          setMeters(res.data.meters);
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
      <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Devices List
      </p>

      <table className='table-auto w-full bg-white'>
        <thead className='border border-black border-collapse'>
          <tr className='text-center'>
            <th className='p-2 border border-black'>Device ID</th>
            <th className='p-2 border border-black'>Device Name</th>
            <th className='p-2 border border-black'>Active/Deactive</th>
            <th className='p-2 border border-black'>Start/Stop</th>
            <th className='p-2 border border-black'>Connect to cloud</th>
            <th className='p-2 border border-black'></th>
          </tr>
        </thead>
        <tbody className='font-bold'>
          {meters.map((meter) => (
            <MeterControl
              meter={meter}
              key={meter._id}
              onActiveUpdate={updateMeterActive}
              onStartUpdate={updateMeterStart}
              onCloudConnectUpdate={updateMeterCloudConnection}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ElectricityControl;
