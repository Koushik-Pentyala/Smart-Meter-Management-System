import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteDevice, findDeviceById } from '../../../services/deviceApi';
import { TiTick } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';

const ElectricityDeviceDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDeleteDevice = async (id) => {
    try {
      const res = await deleteDevice(id);
      if (res.status === 200) {
        navigate('/client/devices/meters/electricity');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const deviceFound = await findDeviceById(id);
        console.log(deviceFound);
        if (deviceFound.data.status === '200') {
          setDevice(deviceFound.data.meters.meter);

          setLoading(false);
        }
      } catch (error) {
        setDevice(null);
        console.error(error);
        setLoading(false);
      }
    };
    fetchDevice();
  }, [id]);

  if (loading) {
    return <p className='text-center'>Loading...</p>;
  }

  return (
    <div>
      <p className='font-bold text-xl p-1 px-4 text-center my-4'>
        Do you want to delete {device.electricMeterName}?
      </p>

      <div className='flex justify-center items-center mt-4 gap-8'>
        <button
          onClick={() => handleDeleteDevice(device._id)}
          className='flex justify-center items-center rounded-full p-2 bg-green-600 text-white font-bold'
        >
          <TiTick size={'4em'} />
        </button>
        <button
          onClick={() => navigate('/client/devices/meters/electricity')}
          className='flex justify-center items-center rounded-full p-2 bg-red-600 text-white font-bold'
        >
          <IoCloseSharp size={'4em'} />
        </button>
      </div>
    </div>
  );
};
export default ElectricityDeviceDelete;
