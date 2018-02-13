import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import {ServerService} from '../shared/server.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vendorId: string;
  totalUsers;
  newUsers;
  lastUpdate;
  topServices;
  topVerticals;
  platformsArray;
  usersTimelineArray;
  namesArray = ['x'];
  valuesArray = ['data1'];

// Charts Variables
  top3services;
  top3veticals;
  top3extensions;
  platforms;
  usersTimeline;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.vendorId = this.serverService.getVendorId();
    this.getTotalUsers();
    this.getNewUsers();
    this.getLastUpdate();

    this.initCharts();
  }

  initCharts(){
    this.getTopThreeServices();
    this.getTopVerticals();
    // this.initTop3Extensions();
    this.getPlatforms();
    this.getUsersTimeline();
  }

  getTotalUsers() {
    const request = this.serverService.getTotalUsers();
    request
      .subscribe(
        (response: Response) => {
          const amount: number = response.json();
          this.totalUsers = amount;
        });
  }

  getNewUsers() {
    const request = this.serverService.getNewUsers();
    request
      .subscribe(
        (response: Response) => {
          const amount: number = response.json();
          this.newUsers = amount;
        });
  }

  getLastUpdate() {
    const request = this.serverService.getLastUpdate();
    request
      .subscribe(
        (response: Response) => {
          const date: Date = response.json();
          this.lastUpdate = date;
        });
  }

  getTopThreeServices() {
    const request = this.serverService.getTopThreeServices();
    request
      .subscribe(
        (response: Response) => {
          const servicesList: any[] = response.json();
          this.topServices = servicesList;
          this.initTop3Services();
        });
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
          [this.topServices[0]['service'], this.topServices[0]['usageAmount']],
          [this.topServices[1]['service'], this.topServices[1]['usageAmount']],
          [this.topServices[2]['service'], this.topServices[2]['usageAmount']]
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
        // y: {
        //   tick: {
        //       format: function (d) {
        //         return d + '%';
        //       }
        //   }
        // }
      },
      tooltip: {
        grouped: false,
      }
    });
  }


  getTopVerticals() {
    const request = this.serverService.getTopThreeVerticals();
    request
      .subscribe(
        (response: Response) => {
          const verticalsList: any[] = response.json();
          this.topVerticals = verticalsList;
          this.initTop3Verticals();
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
          ['x', this.topVerticals[0]['vertical'], this.topVerticals[1]['vertical'], this.topVerticals[2]['vertical']],
          ['Total', this.topVerticals[0]['amount'], this.topVerticals[1]['amount'], this.topVerticals[2]['amount']],
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
        // y: {
        //   tick: {
        //     format: function (d) { return d + '%'; }
        //   }
        // }
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

  getPlatforms() {
    const request = this.serverService.getPlatforms();
    request
      .subscribe(
        (response: Response) => {
          const platformsList: any[] = response.json();
          this.platformsArray = platformsList;
          this.initPlatforms();
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
      //   left: 100
      // },
      data: {
        columns: [
          [this.platformsArray[0]['platform'], this.platformsArray[0]['usageAmount']],
          [this.platformsArray[1]['platform'], this.platformsArray[1]['usageAmount']],
          [this.platformsArray[2]['platform'], this.platformsArray[2]['usageAmount']],
          [this.platformsArray[3]['platform'], this.platformsArray[3]['usageAmount']],
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


  getUsersTimeline() {
    const request = this.serverService.getUsersTimeline();
    request
      .subscribe(
        (response: Response) => {
          const timelineList: any[] = response.json();
          this.usersTimelineArray = timelineList;
          this.modifyArray();
          this.initUsersTimeline();
        });
  }

  modifyArray() {
    this.namesArray = ['x'];
    this.valuesArray = ['data1'];
    let index = 1;

    for (let item of this.usersTimelineArray) {
      this.namesArray.push(item['date']);
      this.valuesArray.push(item['amount']);
      index++;
    }
  }

  initUsersTimeline() {
    this.usersTimeline = c3.generate({
      bindto: '#users-timeline',
      size: {
        width: 1180,
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
          this.namesArray,
          this.valuesArray,
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
