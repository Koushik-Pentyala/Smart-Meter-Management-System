import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

const FanControl = ({
  fan,
  onActiveUpdate,
  onStartUpdate,
  onCloudConnectUpdate,
}) => {
  const [activeStatus, setactiveStatus] = useState(fan.active);
  const [start, setStart] = useState(fan.start);
  const [connectedToCloud, setConnectedToCloud] = useState(
    fan.connectedToCloud
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
    <tr className='text-center' key={fan._id}>
      <td className='p-1 border border-black '>
        <div className='flex items-center justify-center gap-2'>
          {/* <img src='/imgs/electry-fan.png' className='w-6 h-6 m-0' alt='' />{' '} */}
          {fan.fanId}
        </div>
      </td>
      <td className='p-1 border border-black uppercase'>{fan.fanName}</td>
      <td className='p-1 border border-black'>
        <button>
          <div className='toggle-container relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              defaultChecked={activeStatus}
              onChange={() => handleActiveStatusToggle(fan._id)}
              name='toggle-active'
              id={'toggle-active' + fan._id}
              className='toggle-checkbox bg-white absolute block w-6 h-6 rounded-full  border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-active' + fan._id}
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
              onChange={() => handleStartToggle(fan._id)}
              name='toggle-start'
              id={'toggle-start' + fan._id}
              className='toggle-checkbox bg-white absolute block w-6 h-6 rounded-full  border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-start' + fan._id}
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
              onChange={() => handleConnectToCloudToggle(fan._id)}
              name='toggle-cloud'
              id={'toggle-cloud' + fan._id}
              className='toggle-checkbox  absolute block w-6 h-6 rounded-full bg-white border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-cloud' + fan._id}
              className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
            ></label>
          </div>
        </button>
      </td>
      {/* <td className='p-1 border border-black'>
        <button>
          <AiOutlineSetting size={'1.5em'} />
        </button>
      </td> */}
    </tr>
  );
};
export default FanControl;
