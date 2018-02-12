import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  timeline;
  comparison;

  constructor() { }

  ngOnInit() {
    this.initTimeline();
    this.initComparison();
  }

  initTimeline() {
    this.timeline = c3.generate({
      bindto: '#timeline',
      size: {
        width: 700,
        height: 500
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      padding: {
        top: 15,
        left: 50
      },
      data: {
        x: 'x',
        columns: [
          ['x', '2017-06-01', '2017-07-01', '2017-08-01', '2017-09-01', '2017-10-01', '2017-11-01', '2017-12-01'],
          ['Security', 250, 520, 1250, 2550, 3000, 3200, 3215],
          ['Home Automation', 3215, 3200, 1250, 2550, 3000, 520, 3215],
          ['Video Session', 3215, 3215, 3200, 520, 3000, 1250, 2550],
          ['Video Record', 250, 1250, 1250, 2550, 3000, 520, 250],
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      },
      zoom: {
        enabled: true
      },
      grid: {
        y: {
          show: true
        }
      }
    });
  }

  initComparison() {
    this.comparison = c3.generate({
      bindto: '#comparison',
      size: {
        width: 400,
        height: 500
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      padding: {
        top: 13,
        left: 50
      },
      data: {
        columns: [
          ['Security', 50],
          ['Home Automation', 12],
          ['Video Session', 30],
          ['Video Record', 7]
        ],
        type: 'bar'
      },
      bar: {
        width: 80,
        space: 0.4
      },
      axis: {
        x: {
          tick: {
            format: function (x) { return ''; }
          }
        },
        y: {
          tick: {
            format: function (d) {
              return d + '%';
            }
          }
        }
      },
      tooltip: {
        grouped: false,
      }
    });
  }
}
