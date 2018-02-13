import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ServerService {
  private vendorId = 'DX';

  constructor(private http: Http) { }
  getVendorId() {
    return this.vendorId;
  }

  getTotalUsers() {
    return this.http.get('http://localhost:8080/api/v1/usersamount?vendor=' + this.vendorId);
  }

  getNewUsers() {
    return this.http.get('http://localhost:8080/api/v1/newusersamount?vendor=' + this.vendorId);
  }

  getLastUpdate(){
    return this.http.get('http://localhost:8080/api/v1/lastupdate?vendor=' + this.vendorId);
  }

  getTopThreeServices() {
    return this.http.get('http://localhost:8080/api/v1/topthreeservices?vendor=' + this.vendorId);
  }

  getTopThreeVerticals() {
    return this.http.get('http://localhost:8080/api/v1/topthreeverticals?vendor=' + this.vendorId);
  }

  getPlatforms() {
    return this.http.get('http://localhost:8080/api/v1/platformcomparison?startDate=' + '2018-02-06' + '&endDate=' + '2018-02-13' + '&service=ALL&vendor=' + this.vendorId);
  }

  getUsersTimeline() {
    return this.http.get('http://localhost:8080/api/v1/userstimeline?vendor=' + this.vendorId);
  }
}
