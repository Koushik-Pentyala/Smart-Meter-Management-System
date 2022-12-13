import Dropdown from 'react-bootstrap/Dropdown';
import GaugeChart from 'react-gauge-chart';
import Thermometer from 'react-thermometer-chart';
import { Line } from 'rc-progress';
import { IoBulbOutline } from 'react-icons/io5';

export const Adminmetrics = () => {
  return (
    <div className='basis-4/5'>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          SJSU buildings
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>KING </Dropdown.Item>
          <Dropdown.Item>IRC</Dropdown.Item>
          <Dropdown.Item>ADM</Dropdown.Item>
          <Dropdown.Item>YUH</Dropdown.Item>
          <Dropdown.Item>SPC</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div style={{ display: 'flex' }}>
        <div className='guage'>
          <span> Relative Humidity</span>
          <GaugeChart
            animate={true}
            nrOfLevels={10}
            percent={0.7}
            needleColor='#345243'
            textColor={'black'}
          />{' '}
        </div>
        <div className='guage'>
          <span> Temparature</span>
          <Thermometer
            width='100px'
            height='200px'
            steps={5}
            minValue={1000}
            maxValue={40000}
            currentValue={8500}
          ></Thermometer>{' '}
        </div>
        <div className='guage' align='center'>
          <br />
          <span> Soil PH value</span> <br />
          <p>4.6</p>
          <span>Acidic</span>{' '}
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className='guage'>
          <span> Soil Relative Humidity</span>
          <GaugeChart
            animate={true}
            nrOfLevels={10}
            percent={0.65}
            needleColor='#345243'
            textColor={'black'}
          />{' '}
        </div>
        <div className='guage'>
          <span> Luminosity</span> <br />
          <Line percent={50} strokeWidth={8} strokeColor='yellow' />
          <IoBulbOutline style={{ fontSize: '50px' }} />
        </div>
        <div className='guage'>
          <span> Fan speed</span>
          <GaugeChart
            animate={true}
            nrOfLevels={10}
            percent={0.4}
            needleColor='#345243'
            textColor={'black'}
          />{' '}
        </div>
      </div>
    </div>
  );
};
