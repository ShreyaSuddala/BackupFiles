import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import casesChart from './casesChart.json'

const data = [
  { value :casesChart.closed , label: 'closed' },
  { value: casesChart.open, label: 'open' },
  { value: casesChart.overdue, label: 'Overdue' },

];

export default function CustomPieChart({colors}) {
  
  const totalCount = data.reduce((acc, item) => acc + item.value, 0);


  console.log(casesChart.closed);

  return (
    <PieChart

      series={[
        {
          arcLabel: (item) => `${item.value}`,
          arcLabelMinAngle: 45,
          data,
          innerRadius:30,
          outerRadius:60,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
          fontSize:"12px",
          alignItems:"center"
        },
      }}
      slotProps={{

        legend: {
          labelStyle: {
            fontSize: 12,
          },

          itemMarkWidth: 10,
          itemMarkHeight: 9,
          markGap: 5,
          itemGap: 10,
        },
      }}
      width={400}
      height={150}
      alignItems='left'
// margin={{
//   left: 0,
//   right: 0,
//   top: 0,
//   bottom: 0,
// }}

colors={colors}

title={{
  verticalAlign: 'middle',
  floating: true
}}
      
  >
    <text
    aria-orientation='horizontal'
    x="39%"
    y="50%"
    textAnchor='middle'
    fontSize={"13px"}
      >
        Total:{totalCount}
      </text>
  </PieChart>

  );
}