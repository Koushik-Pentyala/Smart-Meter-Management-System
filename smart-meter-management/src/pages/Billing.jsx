import { useEffect, useState } from 'react';
import {
  findAllDevices,
  findAllFans,
  findAllLights,
} from '../services/deviceApi';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';


const Billing = () => {
  const [allDevices, setAllDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllDevices = async () => {
      const metersRes = await findAllDevices();
      const meters = metersRes.data.meters;
      // console.log(metersRes.data.meters);
      const fansRes = await findAllFans();
      const fans = fansRes.data.user;
      // console.log(fansRes.data.user);
      const lightsRes = await findAllLights();
      const lights = lightsRes.data.user;
      // console.log(lightsRes.data.user);
      setAllDevices([...meters, ...lights, ...fans]);
      setLoading(false);
    };
    fetchAllDevices();
  }, []);

  if (loading) {
    return <p>Loading...please wait!</p>;
  }

  return (
    <div className='p-4'>
      <h1 className='font-bold bg-orange-800 rounded-sm p-1 px-4 mt-8 mb-4' style={{fontSize : "25px"}}>Billing Information</h1>

      <table className='table-auto w-full bg-green-100'>
        <thead className='border border-black bg-yellow-600 border-collapse'>
          <tr className='text-left'>
            <th className='p-4 border border-black'>Device name</th>
            <th className='p-4  border border-black'>
               Consumed Units
            </th>
            <th className='p-4  border border-black'>
              Cost per Unit
            </th>
            <th className='p-4  border border-black'>Total Cost</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-y-zinc-300'>
          {allDevices.map((device) => (
            <tr>
              <td className='p-2 text-center'>
                {device.electricMeterName || device.fanName || device.lightName}
              </td>
              <td className='p-2 text-center'>{device.totalSeconds || 200}</td>
              <td className='p-2 text-center'>0.25</td>
              <td className='p-2 text-center'>
                {device.totalSeconds * 0.25 || 200 * 0.25}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link
        to='/payment'
        className='bg-green-600 mt-4 inline-block w-fit text-white px-8 rounded-md py-2'
      >
        Next
      </Link> */}

      <Link 
      to='/client/service' >
      <Button className='bg-yellow-600 mt-10' style={{width : "250px", marginTop :"30px", borderRadius:"8px"}} type="submit" >Raise Service Request</Button>
      </Link>
        
    </div>
  );
};

export default Billing;
