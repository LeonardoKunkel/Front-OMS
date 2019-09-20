import { Component } from '@angular/core';

import { single, multi } from '../../data/data';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  single: any[];
  multi: any[];


  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  
  autoScale = true;

  constructor() {
    Object.assign(this, {single, multi});
  }

  ionViewWillEnter() {
    this.drawChart();
    this.drawCharts();
  }

  drawChart() {
    
    this.showXAxis = true;
    this.showYAxis = true;
    this.gradient = false;
    this.showLegend = true;
    this.showXAxisLabel = true;
    this.xAxisLabel = 'Country';
    this.showYAxisLabel = true;
    this.yAxisLabel = 'Population';

    this.colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#0C2CF5', '#6E79BC', '#F007DB', '#FBF004']
    };

    
    this.autoScale = true;

    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }

  drawCharts() {
    // options
    this.showLegend = true;
    this.gradient = false;
    this.colorScheme = {
      domain: ['#5AA454', '#FF0606', '#C7B42C', '#AAAAAA','#0C2CF5', '#6E79BC', '#F007DB', '#FBF004', '#53FB04', '#FF5303','#03FBFF']
    };

    // pie
    this.showLabels = true;
    this.explodeSlices = false;
    this.doughnut = false;

    Object.assign(this, { single, multi });
  }

}
