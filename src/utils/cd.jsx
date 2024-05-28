"use client"
import {  useEffect, useRef } from 'react';
import { init } from 'klinecharts';

const CandleStick = (() => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch('http://localhost:8290/trade/chart/history?symbol=KAITCOIN%2FINR&resolution=60&from=1694160729&to=1695456790');
        const data = await response.json();
        
        // Format the data for klinecharts
        const formattedData = data.t.map((time, index) => ({
          timestamp: time * 1000, // Convert to milliseconds
          open: data.o[index],
          high: data.h[index],
          low: data.l[index],
          close: data.c[index],
        }));

        // Initialize the chart
        const chart = init(chartRef.current);
        
        // Set the data
        chart.applyNewData(formattedData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    fetchChartData();
  }, []);

  return (
    <>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        Piyasa geçmişi
      </div>
      <div className='box-content box-content-height-nobutton'>
        <div ref={chartRef} style={{ height: 470 }} />
      </div>
    </>
  );
});

export default CandleStick;
