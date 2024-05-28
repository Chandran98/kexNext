"use client";
import { DateTime } from '@syncfusion/ej2-react-charts';
import {  useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = (() => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
        const date= Date.parse(new Date().toString())
        console.log("date",date);
      try {
        const response = await fetch(`http://localhost:8290/trade/chart/history?symbol=BTC%2FINR&resolution=1d&from=1694160729&to=${date}`);
        const data = await response.json();

        console.log("response",response)
        // Assuming the API response structure
        const { t, o, h, l, c } = data;

        // Formatting data for the candlestick chart
        const formattedData = t.map((time, index) => ({
          x: new Date(time * 1000), // Convert timestamp to milliseconds
          y: [o[index], h[index], l[index], c[index]],
        }));

        // Chart data configuration
        const chartData = {
          series: [
            {
              data: formattedData,
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

        setState(chartData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        My chart
      </div>
      <div className='box-content box-content-height-nobutton'>
        {state && (
          <ReactApexChart
            options={state.options}
            series={state.series}
            type='candlestick'
            height={470}
            width={1000}
          />
        )}
      </div>
    </>
  );
});

export default Chart;
