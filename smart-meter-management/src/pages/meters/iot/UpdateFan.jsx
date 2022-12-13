import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findFanById, updateFan } from '../../../services/deviceApi';

const UpdateFan = () => {
  const [values, setValues] = useState({
    fanName: '',
    model: '',
    installationDate: '',
    fanId: '',
    speed: '',
    location: '',
    design: '',
    dimensions: '',
    deploymentDate: '',
    weight: '',
    manufacturer: '',
    power: '',
  });
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleInputChage = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const goBack= (e)=>{
    navigate('/client/devices/iot/fans');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateFan(id, values);

      if (res.data.status === '200') {
        navigate('/client/devices/iot/fans');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const deviceFound = await findFanById(id);
        // console.log(deviceFound);
        if (deviceFound.data.status === '200') {
          console.log(deviceFound.data);
          setValues({
            ...values,
            ...deviceFound.data.meters.meter,
          });

          setLoading(false);
        }
      } catch (error) {
        setValues(null);
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
    <div className='p-4'>
      <p className='font-bold bg-orange-800 rounded-sm p-1 px-4 mt-8 mb-4'>
        Update {values.fanName} Details
      </p>

      <form className='w-full ' onSubmit={handleSubmit}>
        <div className='bg-green-100 p-4'>
          <div className='flex gap-2 my-3 justify-between'>
            {/* device name */}
            <div className='flex gap-2'>
              <label
                htmlFor='fanName'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Device name:
              </label>
              <input
                type='text'
                name='fanName'
                id='fanName'
                value={values.fanName}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device model */}
            <div className='flex gap-2'>
              <label
                htmlFor='model'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Model:
              </label>
              <input
                type='text'
                name='model'
                id='model'
                value={values.model}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device install date */}
            <div className='flex gap-2'>
              <label
                htmlFor='installationDate'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Install Date:
              </label>
              <input
                type='date'
                name='installationDate'
                id='installationDate'
                value={values.installationDate}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>
          </div>

          {/* row 2 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device id */}
            <div className='flex gap-2'>
              <label
                htmlFor='fanId'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Device ID:
              </label>
              <input
                type='text'
                name='fanId'
                id='fanId'
                value={values.fanId}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device amp capacity */}
            <div className='flex gap-2'>
              <label
                htmlFor='speed'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                No of speeds:
              </label>
              <input
                type='text'
                name='speed'
                id='speed'
                value={values.speed}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device dimesnions */}
            <div className='flex gap-2'>
              <label
                htmlFor='dimensions'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Dimensions:
              </label>
              <input
                type='text'
                name='dimensions'
                id='dimensions'
                value={values.dimensions}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>
          </div>

          {/* row 3 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/*  location */}
            <div className='flex gap-2'>
              <label
                htmlFor='location'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Location:
              </label>
              <input
                type='text'
                name='location'
                id='location'
                value={values.location}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* installation method */}
            <div className='flex gap-2'>
              <label
                htmlFor='design'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Electric fan Design:
              </label>
              <input
                type='text'
                name='design'
                id='design'
                value={values.design}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device dimesnions */}
            <div className='flex gap-2'>
              <label
                htmlFor='deploymentDate'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Deployment Date:
              </label>
              <input
                type='date'
                name='deploymentDate'
                id='deploymentDate'
                value={values.deploymentDate}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>
          </div>

          {/* row 4 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device manufacturer */}
            <div className='flex gap-2'>
              <label
                htmlFor='manufacturer'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Manufacturer:
              </label>
              <input
                type='text'
                name='manufacturer'
                id='manufacturer'
                value={values.manufacturer}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* meas acc */}
            <div className='flex gap-2'>
              <label
                htmlFor='weight'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Item weight:
              </label>
              <input
                type='text'
                name='weight'
                id='weight'
                value={values.weight}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* power */}
            <div className='flex gap-2'>
              <label
                htmlFor='power'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Power:
              </label>
              <input
                type='text'
                name='power'
                id='power'
                value={values.power}
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='block mt-4 w-fit max-w-[120px] px-8 py-2 bg-green-500 font-bold mx-auto'
        >
          Submit
        </button>
        <button className='font-bold bg-orange-800 text-white rounded-sm p-1 px-4 w-fit mt-8 mb-4' onClick= {goBack} >
        Go Back
      </button>
      </form>
    </div>
  );
};
export default UpdateFan;
