import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  top3services;
  constructor() { }

  ngOnInit() {
    this.initTop3Services();
  }

  initTop3Services() {
    this.top3services = c3.generate({
      bindto: '#top3services',
      size: {
        width: 360,
        height: 265
      },
      color: {
        pattern: ['#c04dd8', '#4ed8da', '#e06950'],
      },
      padding: {
        top: 13,
        left: 50
      },
      data: {
        columns: [
          ['Video Session', 20],
          ['Security', 50],
          ['Home Automation', 30]
        ],
        type: 'bar'
      },
      bar: {
        width: 65,
        space: 0.3
      },
      axis: {
        y: {
          tick: {
              format: function (d) {
                return d + '%';
              }
          }
        }
      },
      grid: {
        y: {

        }
      },
      tooltip: {
        grouped: false,
      },

    });
  }
}
