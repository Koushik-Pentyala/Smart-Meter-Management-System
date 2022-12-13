import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findDeviceById, updateDevice } from '../../../services/deviceApi';


const ElectricityDeviceUpdate = () => {

  const { id } = useParams();
  const [device, setDevice] = useState({
    electricMeterName: '',
    model: '',
    installationDate: '',
    electricMeterId: '',
    electricCapacity: '',
    dimensions: '',
    location: '',
    installationMethod: '',
    deploymentDate: '',
    manufacturer: '',
    meausurementAccuracy: '',
    power: '',
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const goBack= (e)=>{
    navigate('/client/devices/meters/electricity');
  }


  const handleInputChange = (e) => {
    setDevice({
      ...device,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateDevice(id, device);

      if (res.data.status === '200') {
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
        // console.log(deviceFound);
        if (deviceFound.data.status === '200') {
          console.log(deviceFound.data.meters.meter);
          setDevice({
            ...device,
            ...deviceFound.data.meters.meter,
          });

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
      <p className='font-bold bg-orange-800 rounded-sm p-1 px-4  mt-8 mb-4'>
         Update {device.electricMeterName} Device Information:
      </p>

      <form className='w-full' onSubmit={handleSubmit}>
        <div className='bg-green-100 p-4'>
          <div className='flex gap-2 my-3 justify-between'>
            {/* device name */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='electricMeterName'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Device name:
              </label>
              <input
                type='text'
                name='electricMeterName'
                id='electricMeterName'
                value={device.electricMeterName}
                onChange={handleInputChange}
              />
            </div>

            {/* device model */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='model'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Model:
              </label>
              <input
                type='text'
                name='model'
                id='model'
                value={device.model}
                onChange={handleInputChange}
              />
            </div>

            {/* device install date */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='installationDate'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Install Date:
              </label>
              <input
                type='date'
                name='installationDate'
                id='installationDate'
                defaultValue={device.installationDate}
                value={device.installationDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* row 2 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device id */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='electricMeterId'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Device ID:
              </label>
              <input
                type='text'
                name='electricMeterId'
                id='electricMeterId'
                value={device.electricMeterId}
                onChange={handleInputChange}
              />
            </div>

            {/* device amp capacity */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='electricCapacity'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Amperage Capacity:
              </label>
              <input
                type='text'
                name='electricCapacity'
                id='electricCapacity'
                value={device.electricCapacity}
                onChange={handleInputChange}
              />
            </div>

            {/* device dimesnions */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='dimensions'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Dimensions:
              </label>
              <input
                type='text'
                name='dimensions'
                id='dimensions'
                value={device.dimensions}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* row 3 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/*  location */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='location'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Location:
              </label>
              <input
                type='text'
                name='location'
                id='location'
                value={device.location}
                onChange={handleInputChange}
              />
            </div>

            {/* installation method */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='installationMethod'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Installation method:
              </label>
              <input
                type='text'
                name='installationMethod'
                id='installationMethod'
                value={device.installationMethod}
                onChange={handleInputChange}
              />
            </div>

            {/* device dimesnions */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='deploymentDate'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Deployment Date:
              </label>
              <input
                type='date'
                name='deploymentDate'
                id='deploymentDate'
                value={device.deploymentDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* row 4 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device manufacturer */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='manufacturer'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Manufacturer:
              </label>
              <input
                type='text'
                name='manufacturer'
                id='manufacturer'
                value={device.manufacturer}
                onChange={handleInputChange}
              />
            </div>

            {/* meas acc */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='meausurementAccuracy'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Measurement Accuracy:
              </label>
              <input
                type='text'
                name='meausurementAccuracy'
                id='meausurementAccuracy'
                value={device.meausurementAccuracy}
                onChange={handleInputChange}
              />
            </div>

            {/* power */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='power'
                className='py-1 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Power:
              </label>
              <input
                type='text'
                name='power'
                id='power'
                value={device.power}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='block mt-4 w-fit max-w-[120px] px-8 py-2 bg-green-500 font-bold mx-auto'
        >
          Update
        </button>
        <button className='font-bold bg-orange-800 text-white rounded-sm p-1 px-4 w-fit mt-8 mb-4' onClick= {goBack} >
        Go Back
      </button>
      </form>
      
    </div>
  );
};
export default ElectricityDeviceUpdate;
