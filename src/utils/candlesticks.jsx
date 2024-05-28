import { memo, useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import {data1} from './data';

const CandleStick = (() => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const data = {
      series: [
        {
          data: data1,
        },
      ],
      options: {
        chart: {
          type: 'candlestick',
          height: 470,
        },
        xaxis: {
          type: 'datetime',
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };

    setState(data);
  }, []);

  return (
    <>
    
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        Piyasa geçmişi
      </div>
      <div className='box-content box-content-height-nobutton'>
        {state && (
          <ReactApexChart
            options={state.options}
            series={state.series}
            type='candlestick'
            height={470}
          />
        )}
      </div></>
    // <Box>
    // </Box>
  );
});

export default CandleStick;
