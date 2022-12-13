import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';

const LightControl = ({
  light,
  onActiveUpdate,
  onStartUpdate,
  onCloudConnectUpdate,
}) => {
  const [activeStatus, setactiveStatus] = useState(light.active);
  const [start, setStart] = useState(light.start);
  const [connectedToCloud, setConnectedToCloud] = useState(
    light.connectedToCloud
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
    <tr className='text-center' key={light._id}>
      <td className='p-1 border border-black '>
        <div className='flex items-center justify-center gap-2'>
          {/* <img src='/imgs/light.png' className='w-6 h-6 m-0' alt='' />{' '} */}
          {light.lightId}
        </div>
      </td>
      <td className='p-1 border border-black uppercase'>{light.lightName}</td>
      <td className='p-1 border border-black'>
        <button>
          <div className='toggle-container relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
              type='checkbox'
              defaultChecked={activeStatus}
              onChange={() => handleActiveStatusToggle(light._id)}
              name='toggle-active'
              id={'toggle-active' + light._id}
              className='toggle-checkbox bg-white absolute block w-6 h-6 rounded-full  border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-active' + light._id}
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
              onChange={() => handleStartToggle(light._id)}
              name='toggle-start'
              id={'toggle-start' + light._id}
              className='toggle-checkbox bg-white absolute block w-6 h-6 rounded-full  border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-start' + light._id}
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
              onChange={() => handleConnectToCloudToggle(light._id)}
              name='toggle-cloud'
              id={'toggle-cloud' + light._id}
              className='toggle-checkbox  absolute block w-6 h-6 rounded-full bg-white border-4 border-red appearance-none cursor-pointer'
            />
            <label
              htmlFor={'toggle-cloud' + light._id}
              className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'
            ></label>
          </div>
        </button>
      </td>
     
    </tr>
  );
};
export default LightControl;
