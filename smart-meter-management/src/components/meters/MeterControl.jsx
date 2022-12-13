import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

const MeterControl = ({
  meter,
  onActiveUpdate,
  onStartUpdate,
  onCloudConnectUpdate,
}) => {
  const [activeStatus, setactiveStatus] = useState(meter.active);
  const [start, setStart] = useState(meter.start);
  const [connectedToCloud, setConnectedToCloud] = useState(
    meter.connectedToCloud
  );

  const handleActiveStatusToggle = (id) => {
    setactiveStatus(!activeStatus);
    onActiveUpdate(id, { activeStatus: !activeStatus });
  };

  const handleStartToggle = (id) => {
    setStart(!start);
    onStartUpdate(id, !start);
  };

  const handleConnectToCloudToggle = (id) => {
    setConnectedToCloud(!connectedToCloud);
    onCloudConnectUpdate(id, { connectedToCloud });
  };

  return (
    <tr className='text-center' key={meter._id}>
      <td className='p-1 border border-black '>
        <div className='flex items-center justify-center gap-2'>
          <img src='/imgs/electry-meter.png' className='w-6 h-6 m-0' alt='' />{' '}
          {meter.electricMeterId}
        </div>
      </td>
      <td className='p-1 border border-black uppercase'>
        {meter.electricMeterName}
      </td>
      <td className='p-1 border border-black'>
        <button>
          <div className='toggle-container relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              defaultChecked={activeStatus}
              onChange={() => handleActiveStatusToggle(meter._id)}
              name='toggle-active'
              id={'toggle-active' + meter._id}
              className='toggle-checkbox bg-white absolute block w-6 h-6 rounded-full  border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-active' + meter._id}
              className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
            ></label>
          </div>
        </button>
      </td>
      <td className='p-1 border border-black'>
        <button>
          <div className='toggle-container relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              defaultChecked={start}
              onChange={() => handleStartToggle(meter._id)}
              name='toggle-start'
              id={'toggle-start' + meter._id}
              className='toggle-checkbox bg-white absolute block w-6 h-6 rounded-full  border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-start' + meter._id}
              className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
            ></label>
          </div>
        </button>
      </td>
      <td className='p-1 border border-black'>
        <button>
          <div className='toggle-container relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              defaultChecked={connectedToCloud}
              onChange={() => handleConnectToCloudToggle(meter._id)}
              name='toggle-cloud'
              id={'toggle-cloud' + meter._id}
              className='toggle-checkbox  absolute block w-6 h-6 rounded-full bg-white border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-cloud' + meter._id}
              className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
            ></label>
          </div>
        </button>
      </td>
      <td className='p-1 border border-black'>
        <button>
          <AiOutlineSetting size={'1.5em'} />
        </button>
      </td>
    </tr>
  );
};
export default MeterControl;
