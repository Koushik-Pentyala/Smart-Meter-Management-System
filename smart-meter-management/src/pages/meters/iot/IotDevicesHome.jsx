const IotDevicesHome = () => {
  return (
    <div className='p-4'>
      {/* overview */}
      <div className='flex justify-evenly gap-4 text-center'>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Today Usage</p>
          <p className='font-bold text-2xl text-green-600'>29 KWh</p>
        </div>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Last 24Hr Usage</p>
          <p className='font-bold text-2xl text-green-600'>71 KWh</p>
        </div>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Last Update</p>
          <p className='font-bold text-2xl text-green-600'>
            9/04/2022 <br />
            18:22
          </p>
        </div>
      </div>

      {/* week's overview */}
      <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        This Week's Overview
      </p>
      <div className='flex justify-evenly gap-4 text-center'>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Total Usage</p>
          <p className='font-bold text-2xl text-green-600'>574 KWh</p>
        </div>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Avg Daily Usage</p>
          <p className='font-bold text-2xl text-green-600'>82 KWh</p>
        </div>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Max Usage</p>
          <p className='font-bold text-2xl text-green-600'>92 KWh</p>
        </div>
      </div>

      {/* Month's overview */}
      <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        This Month's Overview
      </p>
      <div className='flex justify-evenly gap-4 text-center'>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Total Usage</p>
          <p className='font-bold text-2xl text-green-600'>574 KWh</p>
        </div>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Avg Daily Usage</p>
          <p className='font-bold text-2xl text-green-600'>82 KWh</p>
        </div>
        <div className='bg-gray-200 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Max Usage</p>
          <p className='font-bold text-2xl text-green-600'>92 KWh</p>
        </div>
      </div>

      {/* Usgae chart */}
      <p className='font-bold bg-gray-200 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Usage Chart
      </p>
    </div>
  );
};
export default IotDevicesHome;
