import { useEffect, useState } from 'react';
import { findAllLights } from '../../../services/deviceApi';

const LightMonitor = () => {
  const [lights, setLights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await findAllLights();

        if (res.status === 200) {
          console.log(res);
          setLights(res.data.user);
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
      <table className='table-auto m-0 bg-grey-300 ml-20 min-w-[800px]'>
        <thead className='bg-orange-800'>
          <tr>
          <th className='border-8 border-white p-10'>  Name</th>
            {lights.map((light) => (
              <th
                className='border-8 border-white p-4 bg-orange-800'
                key={light._id}
              >
                {light.lightName}
              </th>
            ))}
          </tr>

        </thead>
        <tbody className='bg-green-100'>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>
              Device current status{' '}
            </td>
            {lights.map((light) => (
              <td
                className={
                  light.start
                    ? 'p-2 my-2 text-green-500'
                    : 'p-2 my-2 text-gray-600'
                }
                key={light._id}
              >
                {light.start ? 'Running' : 'Not Running'}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>
              Electricity Capacity{' '}
            </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '70%' : ''}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Voltage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '200V' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Current </td>

            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10A' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Today Usage </td>

            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '60KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Last 24hr usage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>This week's usage </td>

            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>This Months's usage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>This Year's usage </td>
            {lights.map((light) => (
              <td className='p-2 my-2' key={light._id}>
                {light.start ? '10KWh' : ''}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default LightMonitor;
