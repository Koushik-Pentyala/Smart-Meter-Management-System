import React from 'react';
import Table from 'react-bootstrap/Table';
import { Chart } from 'react-google-charts';

import '../styles/Buttons.css';

export default function HomePage() {
  const curDT = new Date().toLocaleString();


  const options = {
      chart: {
        title: "Current Trends",
        subtitle: "30 days",
      },
    };
  const data = [
      [
        "Day",
        " KING_LIGHT_1",
        " ENG_BUILD_LIGHT_1",
        " STD_UNION_LIGHT_1",
      ],
      [1, 37.8, 10.8, 41.8],
      [2, 30.9, 33.5, 50.4],
      [3, 25.4, 57, 25.7],
      [4, 11.7, 18.8, 10.5],
      [5, 11.9, 17.6, 10.4],
      [6, 8.8, 13.6, 7.7],
      [7, 7.6, 12.3, 20.6],
      [8, 12.3, 29.2, 10.6],
      [9, 16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11, 5.3, 7.9, 4.7],
      [12, 6.6, 8.4, 5.2],
      [20, 4.8, 6.3, 3.6],
      [30, 50.2, 44.2, 3.4],
    ];

  return (
    <>
    <div className='p-4'>
      {/* overview */}
      <p className='font-bold bg-yellow-600 rounded-sm p-1 px-4 w-fit mt-2 mb-4'>
        Last 24 hours
      </p>
      <div className='flex justify-evenly gap-4 text-center'>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Today Usage</p>
          <p className='font-bold text-2xl text-black-600'>40 KWh</p>
        </div>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Last 24Hr Usage</p>
          <p className='font-bold text-2xl text-black-600'>65 KWh</p>
        </div>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Last Update</p>
          <p className='font-bold text-2xl text-black-600'>
           {curDT}
          </p>
        </div>
      </div>

      {/* week's overview */}
      <p className='font-bold bg-yellow-600 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        This Week's Overview
      </p>
      <div className='flex justify-evenly gap-4 text-center'>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Total Usage</p>
          <p className='font-bold text-2xl text-black-600'>95 KWh</p>
        </div>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Avg Daily Usage</p>
          <p className='font-bold text-2xl text-black-600'>80 KWh</p>
        </div>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Max Usage</p>
          <p className='font-bold text-2xl text-black-600'>112 KWh</p>
        </div>
      </div>

      {/* Month's overview */}
      <p className='font-bold bg-yellow-600 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        This Month's Overview
      </p>
      <div className='flex justify-evenly gap-4 text-center'>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Total Usage</p>
          <p className='font-bold text-2xl text-black-600'>2450 KWh</p>
        </div>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Avg Daily Usage</p>
          <p className='font-bold text-2xl text-black-600'>2300 KWh</p>
        </div>
        <div className='bg-green-600 rounded-sm flex justify-center flex-col items-center w-48 h-32'>
          <p className='font-bold'>Max Usage</p>
          <p className='font-bold text-2xl text-black-600'>2600 KWh</p>
        </div>
      </div>

      {/* Usgae chart */}
      <p className='font-bold bg-yellwo-600 rounded-sm p-1 px-4 w-fit mt-8 mb-4'>
        Usage Chart 

      </p>

      <div>
                <Chart
                    chartType="Line"
                    width="85%"
                    height="300px"
                    style={{position: 'relative'}}
                    data={data}
                    options={options}
                    />
                <br></br>
               </div>
    </div>


      {/* <div className='text-left p-4' style={{ width: '100%' }}>
        <h5>Today's Usuage</h5>
        <Table borderless>
          <thead>
            <tr>
              <th></th>
              <th className='light-grey'>
                Todays's Usage <p>29 KWh</p>
              </th>
              <th></th>
              <th className='light-grey'>
                last 24hr Usage <p>68 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Last Update <p>Date,Time</p>{' '}
              </th>
              <th></th>
            </tr>
          </thead>
        </Table>
        <h5>Week's Usuage</h5>
        <Table table borderless>
          <thead>
            <tr>
              <th></th>
              <th className='light-grey'>
                Total daily Usage <p>574 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Avg Daily Usage <p>82 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Max Usage<p>97 KWh</p>{' '}
              </th>
              <th></th>
            </tr>
          </thead>
        </Table>
        <h5>Month's Usuage</h5>
        <Table table borderless>
          <thead>
            <tr>
              <th></th>
              <th className='light-grey'>
                Total daily Usage <p>2370 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Avg Daily Usage <p>79 KWh</p>{' '}
              </th>
              <th></th>
              <th className='light-grey'>
                Max Usage <p>112 KWh</p>{' '}
              </th>
              <th></th>
            </tr>
          </thead>
        </Table>{' '}
        <br />
        <div>
          <Chart
            chartType='Line'
            width='90%'
            height='300px'
            style={{ position: 'relative' }}
            data={data}
            options={options}
          />
        </div>
      </div> */}
    </>
  );
}
