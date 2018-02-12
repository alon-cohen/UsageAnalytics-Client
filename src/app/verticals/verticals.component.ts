import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-verticals',
  templateUrl: './verticals.component.html',
  styleUrls: ['./verticals.component.css']
})
export class VerticalsComponent implements OnInit {
  offer;
  extension;

  constructor() { }

  ngOnInit() {
    this.initOffer();
    this.initExtension();
  }

  initOffer() {
    this.offer = c3.generate({
      bindto: '#offer',
      size: {
        width: 1150,
        height: 320
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
          ['x', '43400 - DX Security package', '44202 - Self-Monitoring, Video, Automat…', '44204 - Security, Video, Automation an...', '45400 - DX Security package', '46202 - Self-Monitoring, Video, Automat…', '47204 - Security, Video, Automation an...'],
          ['Total', 18, 32, 0, 0, 32, 27],
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

  initExtension() {
    this.extension = c3.generate({
      bindto: '#extension',
      size: {
        width: 1150,
        height: 320
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
          ['x', '43400 - DX Security package', '44202 - Self-Monitoring, Video, Automat…', '44204 - Security, Video, Automation an...', '45400 - DX Security package', '46202 - Self-Monitoring, Video, Automat…', '47204 - Security, Video, Automation an...'],
          ['Total', 18, 32, 27, 18, 32, 27],
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
}
