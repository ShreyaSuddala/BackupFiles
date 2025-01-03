import React from 'react';
import Chart from 'react-apexcharts';
import 'apexcharts';
import 'apexcharts/dist/apexcharts.css';

const LineChart = () => {
  const chartOptions = {
    chart: {
      id: 'line-chart',
      toolbar: {
        show: false,
      },
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      min:0,
      max:50,
      tickAmount:10
    },
  };

  const chartSeries = [
    {
      name: 'Triage',
      data: [5, 10,15,20,15,30,30,45,40,25,10,5],
      
    },
    {
        name: 'Investigator',
        data: [5,12,23,5,9,23,9,12,14,20,15,3]
        
      },
      {
        name: 'Analysts',
        data: [10,30,45,20,15,10,15,40,50,25,35,5]
        
      },
  ];


  return (
    <div className="line-chart">
      <Chart options={chartOptions} series={chartSeries} type="line" height={300} width={850} />
      
    </div>
  );
};

export default LineChart;
