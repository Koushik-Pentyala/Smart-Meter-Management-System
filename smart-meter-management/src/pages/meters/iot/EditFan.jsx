import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateFan } from '../../../services/deviceApi';

const EditFan = () => {
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
      const res = await updateFan(values);

      if (res.data.status === '200') {
        navigate('/client/devices/iot/fans');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-4'>
      <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Add Fan Details
      </p>
      <Button onClick= {goBack} >
        Go Back
      </Button>

      <form className='w-full ' onSubmit={handleSubmit}>
        <div className='bg-gray-200 p-4'>
          <div className='flex gap-2 my-3 justify-between'>
            {/* device name */}
            <div className='flex gap-2'>
              <label
                htmlFor='fanName'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
              >
                Device name:
              </label>
              <input
                type='text'
                name='fanName'
                id='fanName'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device model */}
            <div className='flex gap-2'>
              <label
                htmlFor='model'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
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
            <div className='flex gap-2'>
              <label
                htmlFor='installationDate'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
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
            <div className='flex gap-2'>
              <label
                htmlFor='fanId'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
              >
                Device ID:
              </label>
              <input
                type='text'
                name='fanId'
                id='fanId'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device amp capacity */}
            <div className='flex gap-2'>
              <label
                htmlFor='speed'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
              >
                No of speeds:
              </label>
              <input
                type='text'
                name='speed'
                id='speed'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device dimesnions */}
            <div className='flex gap-2'>
              <label
                htmlFor='dimensions'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
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
            <div className='flex gap-2'>
              <label
                htmlFor='location'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
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
            <div className='flex gap-2'>
              <label
                htmlFor='design'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
              >
                Electric fan Design:
              </label>
              <input
                type='text'
                name='design'
                id='design'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* device dimesnions */}
            <div className='flex gap-2'>
              <label
                htmlFor='deploymentDate'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
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
            <div className='flex gap-2'>
              <label
                htmlFor='manufacturer'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
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
            <div className='flex gap-2'>
              <label
                htmlFor='weight'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
              >
                Item weight:
              </label>
              <input
                type='text'
                name='weight'
                id='weight'
                onChange={handleInputChage}
                className='basis-3/5'
              />
            </div>

            {/* power */}
            <div className='flex gap-2'>
              <label
                htmlFor='power'
                className='py-1 grow basis-2/5 flex justify-center items-center text-center min-w-[140px] text-sm font-bold bg-gray-300'
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
          className='block mt-4 w-fit max-w-[120px] px-8 py-2 bg-gray-400 font-bold mx-auto'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default EditFan;
