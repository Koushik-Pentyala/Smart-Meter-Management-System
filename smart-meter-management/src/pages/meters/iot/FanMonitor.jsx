import { useEffect, useState } from 'react';
import { findAllFans } from '../../../services/deviceApi';

const FanMonitor = () => {
  const [fans, setFans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllMeters = async () => {
      try {
        const res = await findAllFans();

        if (res.status === 200) {
          setFans(res.data.user);
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
            {fans.map((fan) => (
              <th
                className='border-8 border-white p-10 '
                key={fan._id}
              >
                {fan.fanName}
              </th>
            ))}
          </tr>

          {/* <tr>
            <th className=''></th>
            {fans.map((fan) => (
              <th className='border-4 border-white p-4' key={fan._id}>
                <img
                  src='/imgs/electry-meter.png'
                  className='w-16 h-16 m-auto'
                  alt=''
                />
              </th>
            ))}
          </tr> */}
        </thead>
        <tbody className='bg-green-100'>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>
              Work status{' '}
            </td>
            {fans.map((fan) => (
              <td
                className={
                  fan.start
                    ? 'p-2 my-2 text-green-500'
                    : 'p-2 my-2 text-gray-600'
                }
                key={fan._id}
              >
                {fan.start ? 'Running' : 'Not Running'}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>
              Electricity Usage Capacity{' '}
            </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? <p>80%</p> : <p className='text-gray-600'>70%</p>}
              </td>
            ))}
          </tr>
          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Voltage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>200V</p>
                ) : (
                  <p className='text-gray-600'>200V</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg font-bold p-2 my-2'>Current </td>

            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? <p>10A</p> : <p className='text-gray-600'>10A</p>}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Today Usage </td>

            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>fan.</p>
                ) : (
                  <p className='text-gray-600'>fan.</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>Last 24hr usage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>This week's usage </td>

            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>This Months's usage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>

          <tr className='text-center font-bold'>
            <td className='text-left text-lg p-2 my-2'>This Year's usage </td>
            {fans.map((fan) => (
              <td className='p-2 my-2' key={fan._id}>
                {fan.start ? (
                  <p>10KwH</p>
                ) : (
                  <p className='text-gray-600'>10KwH</p>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FanMonitor;
