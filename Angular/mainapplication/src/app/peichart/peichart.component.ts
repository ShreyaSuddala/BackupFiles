import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-peichart',
  templateUrl: './peichart.component.html',
  styleUrls: ['./peichart.component.css']
})
export class PeichartComponent implements AfterViewInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [25, 15, 44, 55, 41, 17],
      chart: {
        width: "400px",
        type: "pie",
        // height:700
        
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      theme: {
        monochrome: {
          enabled: true,
          color: '#5c6bc0'
          
        }
      },
      title: {
        text: "Number of leads"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            
              
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngAfterViewInit() {
  
  }
}
