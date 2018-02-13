import { Component } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  data: any;
  data1: any;
  constructor(private http: HttpClient) {
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res => this.data = res);
  }

  // uri_to_hit = 'https://api.github.com/users/seeschweiler';
  // uri_to_hit = 'http://rest-service.guides.spring.io/greeting';
  uri_to_hit = 'http://gturnquist-quoters.cfapps.io/api/random';
  //https://stackoverflow.com/questions/47551458/how-to-pass-urlsearchparams-in-the-httpclient-get-method-angular-5


  apiRoot = 'http://httpbin.org';

  doGET() {

    let headers = new HttpHeaders();
    headers  = headers.append('Access-Control-Allow-Origin', '*');
    headers  = headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers  = headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    console.log('GET');
    let url = `${this.apiRoot}/get`;
    // this.http.get(url).subscribe(res => console.log(JSON.stringify(res)));
    this.http.get(url, {headers}).subscribe(res => this.data = res);
    console.log(this.data);
    this.data1 = this.data.origin;
    // console.log(JSON.stringify(this.data1));
    // console.log(this.data1);
    // console.log(this.data.url);
  }


}
