import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
// import { environment } from 'environment/environment';
// import { environment } from 'environment/environment';

// const API_URL = environment.apiUrl;


@Injectable()
export class RegisterService {

  public base_url = "http://132.148.155.154:8080";
  
  constructor(private http:Http) { }
  
  
  createUser(postdata) {

  
  let headers = new Headers();
    headers.append('Content-Type',
       'application/json; charset=utf-8');
  
  console.log(postdata);
  
      return this.http.post(this.base_url + "/diagnosticAPI/webapi/user/superadmincreate", postdata, {headers:headers}).map(res=> res.json());
  
    }
}
