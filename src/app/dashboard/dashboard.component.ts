import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  top3services;
  top3veticals;
  top3extensions;
  platforms;
  usersTimeline;

  constructor() { }

  ngOnInit() {
    this.initTop3Services();
    this.initTop3Verticals();
    this.initTop3Extensions();
    this.initPlatforms();
    this.initUsersTimeline();
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

  initTop3Verticals() {
    this.top3veticals = c3.generate({
      bindto: '#top3verticals',
      size: {
        width: 360,
        height: 265
      },
      color: {
        pattern: ['#4ed8da'],
      },
      padding: {
        top: 13,
        left: 50
      },
      data: {
        x : 'x',
        columns: [
          ['x', '43400 - DX Security package', '44202 - Self-Monitoring, Video, Automat…', '44204 - Security, Video, Automation an...'],
          ['Total', 18, 32, 27],
        ],
        type: 'bar'
      },
      bar: {
        width: 60,
      },
      axis: {
        x: {
          type: 'category',
          tick: {
            multiline: true
          },
        },
        y: {
          tick: {
            format: function (d) { return d + '%'; }
          }
        }
      },
      tooltip: {
        grouped: false,
      },
      legend: {
        hide: true
      }
    });
  }

  initTop3Extensions() {
    this.top3extensions = c3.generate({
      bindto: '#top3extensions',
      size: {
        width: 360,
        height: 265
      },
      color: {
        pattern: ['#b9f6f7'],
      },
      padding: {
        top: 13,
        left: 50
      },
      data: {
        x : 'x',
        columns: [
          ['x', '60221 - Security extension w…', '44207 - Energy Extension…', '44206 - Automation Extention'],
          ['Total', 20, 40, 26],
        ],
        type: 'bar'
      },
      bar: {
        width: 60,
      },
      axis: {
        x: {
          type: 'category',
          tick: {
            multiline: true
          },
        },
        y: {
          tick: {
            format: function (d) { return d + '%'; }
          }
        }
      },
      tooltip: {
        grouped: false,
      },
      legend: {
        hide: true
      }
    });
  }

  initPlatforms() {
    this.platforms = c3.generate({
      bindto: '#platforms',
      size: {
        width: 360,
        height: 265
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      // padding: {
      //   top: 13,
      //   left: 50
      // },
      data: {
        columns: [
          ['Web', 26],
          ['Mobile', 24],
          ['IFTTT', 32.5],
          ['Alexa', 17.5],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log('onclick', d, i); },
        onmouseover: function (d, i) { console.log('onmouseover', d, i); },
        onmouseout: function (d, i) { console.log('onmouseout', d, i); }
      },
      donut: {
        title: 'All Services Usage'
      },
      legend: {
        position: 'right'
      }
    });
  }

  initUsersTimeline() {
    this.usersTimeline = c3.generate({
      bindto: '#users-timeline',
      size: {
        width: 740,
        height: 300
      },
      color: {
        pattern: ['#4ed8da'],
      },
      padding: {
       top: 15,
      left: 50
      },
      data: {
        x: 'x',
        columns: [
          ['x', '2017-06-01', '2017-07-01', '2017-08-01', '2017-09-01', '2017-10-01', '2017-11-01', '2017-12-01'],
          ['data1', 250, 520, 1250, 2550, 3000, 3200, 3215]
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
      legend: {
        hide: true
      },
      grid: {
        y: {
          show: true
        }
      }
    });
  }
}
