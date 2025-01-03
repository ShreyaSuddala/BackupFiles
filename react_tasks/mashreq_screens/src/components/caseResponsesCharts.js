import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import caseChart from './casesChart.json'

const ApexChart = () => {
  const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'];

  const [chartData, setChartData] = useState({
    series: [{
      data: [caseChart.RFI,caseChart.RFA,caseChart.STR]
    }],
    options: {
      chart: {
        height: 350,
      
        type: 'bar',
        events: {
          click: (chart, w, e) => {
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '25%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['RFI'],
          ['RFA'],
          ['STR'],
    
        ],
        labels: {
          style: {
            colors: colors,
            fontSize: '12px'
          }
        }
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={200}
        width={350}
      />
    </div>
  );
};

export default ApexChart;


