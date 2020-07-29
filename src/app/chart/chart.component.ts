import { Component, OnInit } from '@angular/core';
import { chartData } from './../datasource';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public tooltip: Object;
  public stockchartData: Object[];
  public title: string;
  public crosshair: Object;
  
  ngOnInit(): void {
      // Title for chart
      this.title = 'Stock Chart';
      //this.crosshair = { enable: true };
      this.stockchartData = chartData;
      this.tooltip = { enable: true };
      this.crosshair= {
        enable: true
    };
   
  }

}
