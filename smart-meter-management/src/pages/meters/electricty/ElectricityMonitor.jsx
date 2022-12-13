import { useEffect, useState } from 'react';
import { findAllDevices } from '../../../services/deviceApi';

const ElectricityMonitor = () => {
  const [meters, setMeters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await findAllDevices();

        if (res.status === 200) {
          setMeters(res.data.meters);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    getAllMeters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='p-4'>
      <table className='table-auto m-0'>
        <thead>
          <tr>
          <th className='border-8 border-white p-10'>  Name</th>
            {meters.map((meter) => (
              <th
                className='border-8 border-white p-4 bg-gray-100'
                key={meter._id}
              >
                {meter.electricMeterName}
              </th>
            ))}
          </tr>

          <tr>
            <th className=''></th>
            {meters.map((meter) => (
              <th className='border-4 border-white p-4' key={meter._id}>
                <img
                  src='/imgs/electry-meter.png'
                  className='w-16 h-16 m-auto'
                  alt=''
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className=''>
          <tr className='text-center font-bold'>
            <td className='text-left font-bold p-2 my-2'>Work status </td>
            {meters.map((meter) => (
              <td
                className={
                  meter.start
                    ? 'p-2 my-2 text-green-500'
                    : 'p-2 my-2 text-gray-600'
                }
                key={meter._id}
              >
                {meter.start ? 'Running' : 'Not Running'}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left font-bold p-2 my-2'>
              Electricity Capacity
            </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.electricCapacity}</p>
                ) : (
                  <p className='text-gray-600'>{meter.electricCapacity}</p>
                )}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left font-bold p-2 my-2'>Voltage </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.voltage ? meter.voltage : '100V'}</p>
                ) : (
                  <p className='text-gray-600'>
                    {meter.voltage ? meter.voltage : '100V'}
                  </p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left font-bold p-2 my-2'>Current </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.current ? meter.current : '20A'}</p>
                ) : (
                  <p className='text-gray-600'>
                    {meter.current ? meter.current : '20A'}
                  </p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left p-2 my-2'>Today Usage </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.totalSeconds}s</p>
                ) : (
                  <p className='text-gray-600'>{meter.totalSeconds}s</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left p-2 my-2'>Last 24hr usage </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.totalSeconds * 24}s</p>
                ) : (
                  <p className='text-gray-600'>{meter.totalSeconds * 24}s</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left p-2 my-2'>This week's usage </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.totalSeconds * 24 * 7}s</p>
                ) : (
                  <p className='text-gray-600'>
                    {meter.totalSeconds * 24 * 7}s
                  </p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left p-2 my-2'>This Months's usage </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.totalSeconds * 24 * 30}s</p>
                ) : (
                  <p className='text-gray-600'>
                    {meter.totalSeconds * 24 * 30}s
                  </p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left p-2 my-2'>This Year's usage </td>
            {meters.map((meter) => (
              <td className='p-2 my-2'>
                {meter.start ? (
                  <p>{meter.totalSeconds * 24 * 360}s</p>
                ) : (
                  <p className='text-gray-600'>
                    {meter.totalSeconds * 24 * 360}s
                  </p>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ElectricityMonitor;
