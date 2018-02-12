import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent implements OnInit {
  allServices;
  security;
  ha;
  vs;
  vr;

  constructor() { }

  ngOnInit() {
    this.initAllServices();
    this.initSecurity();
    this.initHA();
    this.initVS();
    this.initVR();
  }

  initAllServices() {
    this.allServices = c3.generate({
      bindto: '#all-services',
      size: {
        width: 1191,
        height: 400
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      data: {
        columns: [
          ['Web', 26],
          ['Mobile', 24],
          ['FTTT', 32.5],
          ['Alexa', 17.5],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log('onclick', d, i); },
        onmouseover: function (d, i) { console.log('onmouseover', d, i); },
        onmouseout: function (d, i) { console.log('onmouseout', d, i); }
      },
    });
  }

  initSecurity(){
    this.security = c3.generate({
      bindto: '#security',
      size: {
        width: 300,
        height: 250
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      padding: {
        top: 5,
        left: 50,
        bottom: 50
      },
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
        title: 'Usage',
      },
      legend: {
        position: 'right'
      }
    });
  }

  initHA(){
    this.ha = c3.generate({
      bindto: '#ha',
      size: {
        width: 300,
        height: 250
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      padding: {
        top: 5,
        left: 50,
        bottom: 50
      },
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
        title: 'Usage',
      },
      legend: {
        position: 'right'
      }
    });
  }

  initVS(){
    this.vs = c3.generate({
      bindto: '#video-session',
      size: {
        width: 300,
        height: 250
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      padding: {
        top: 5,
        left: 50,
        bottom: 50
      },
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
        title: 'Usage',
      },
      legend: {
        position: 'right'
      }
    });
  }

  initVR(){
    this.vr = c3.generate({
      bindto: '#video-record',
      size: {
        width: 300,
        height: 250
      },
      color: {
        pattern: ['#4ed8da', '#c04dd8', '#e06950', '#f8e71c'],
      },
      padding: {
        top: 5,
        left: 50,
        bottom: 50
      },
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
        title: 'Usage',
      },
      legend: {
        position: 'right'
      }
    });
  }
}
