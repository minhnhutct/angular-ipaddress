import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
  ipAddress:any;

  constructor(private http: HttpClient){
    this.http.get<{ip:string}>('https://jsonip.com')
    .subscribe( data => {
      console.log('th data', data);
      this.ipAddress = data
    })
  }
}

// FOR V2/4
  // return this.http.get('http://jsonip.com')
  //     .map(res => res.json())
  //     .subscribe(data => {
  //       this.ipAddress = data.ip;
  //     })
