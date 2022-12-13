import Map from './Map';
import SjsuMap from '../../assets/images/SjsuMap.png';
import '../../styles/device.css';

export const AdminHome = () => {
  return (
    <div className='basis-4/5'>
      <div className='sjsu'>
        <img src={SjsuMap} width='800px' height='600px' alt='SJSU'></img> <br />
      </div>
      {/* <div>
        <h4>Active IoT Stations</h4>
        <br />
        <h4>
          <span className='logged-in'>●</span> KING{' '}
        </h4>
        <h4>
          <span className='logged-in'>●</span> IRC{' '}
        </h4>
        <h4>
          <span className='logged-in'>●</span> ADM{' '}
        </h4>
        <h4>
          <span className='logged-in'>●</span> DBH{' '}
        </h4>
        <h4>
          <span className='logged-in'>●</span> SPC{' '}
        </h4>
        <h4>
          <span className='logged-in'>●</span> CCB{' '}
        </h4>
        <h4>
          <span className='logged-in'>●</span> YUH
        </h4>
        <h4>
          <span className='logged-in'>●</span> SWC
        </h4>
      </div> */}
    </div>
  );
};
