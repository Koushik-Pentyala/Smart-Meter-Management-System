import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addLight } from '../../../services/deviceApi';

const AddLight = () => {
  const [values, setValues] = useState({
    lightName: '',
    model: '',
    installationDate: '',
    lightId: '',
    illumination: '',
    location: '',
    illuminationTime: '',
    dimensions: '',
    deploymentDate: '',
    wattage: '',
    manufacturer: '',
    power: '',
  });

  const navigate = useNavigate();

  const handleInputChage = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const goBack= (e)=>{
    navigate('/client/devices/iot/lights');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addLight(values);

      if (res.data.status === '200') {
        navigate('/client/devices/iot/lights');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-4'>
      <p className='font-bold bg-orange-800 rounded-sm p-1 px-4  mt-8 mb-4'>
        Add Light Details
      </p>

      <form className='w-full ' onSubmit={handleSubmit}>
        <div className='bg-green-100 p-4'>
          {/* row 1 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device name */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='lightName'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Light name:
              </label>
              <input
                type='text'
                name='lightName'
                id='lightName'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device model */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='model'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Model:
              </label>
              <input
                type='text'
                name='model'
                id='model'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device install date */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='installationDate'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Install Date:
              </label>
              <input
                type='date'
                name='installationDate'
                id='installationDate'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>
          </div>

          {/* row 2 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device id */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='lightId'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Device ID:
              </label>
              <input
                type='text'
                name='lightId'
                id='lightId'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device amp capacity */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='illumination'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Illumination:
              </label>
              <input
                type='text'
                name='illumination'
                id='illumination'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device dimesnions */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='dimensions'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Dimensions:
              </label>
              <input
                type='text'
                name='dimensions'
                id='dimensions'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>
          </div>

          {/* row 3 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/*  location */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='location'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Location:
              </label>
              <input
                type='text'
                name='location'
                id='location'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* installation method */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='illuminationTime'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Illumination time:
              </label>
              <input
                type='text'
                name='illuminationTime'
                id='illuminationTime'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device dimesnions */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='deploymentDate'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Deployment Date:
              </label>
              <input
                type='date'
                name='deploymentDate'
                id='deploymentDate'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>
          </div>

          {/* row 4 */}
          <div className='flex gap-2 my-3 justify-between'>
            {/* device manufacturer */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='manufacturer'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Manufacturer:
              </label>
              <input
                type='text'
                name='manufacturer'
                id='manufacturer'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* meas acc */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='wattage'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Wattage:
              </label>
              <input
                type='text'
                name='wattage'
                id='wattage'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* power */}
            <div className='flex basis-1/3 gap-2'>
              <label
                htmlFor='power'
                className='py-2 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-yellow-600'
              >
                Power:
              </label>
              <input
                type='text'
                name='power'
                id='power'
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
export default AddLight;
