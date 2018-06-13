import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
 import { Observable } from 'rxjs/Rx'

@Injectable()
export class DiagnosticcentreService {

  public base_url = "http://132.148.155.154:8080";
  constructor(private http:Http) { }

  getUser() {

    let headers = new Headers();
      headers.append('Content-Type','application/json');
        // this.createAuthorizationHeader(headers);
        return this.http.get(this.base_url + "/diagnosticAPI/webapi/superadmindiagnosticcentre/get", {headers:headers})
        .map((res:Response) => res.json());
       }
    
       createUser(postdata) {
   
        let headers = new Headers();
          headers.append('Content-Type',
             'application/json; charset=utf-8');
             
        console.log(postdata);
              
        return this.http.post(this.base_url + "/diagnosticAPI/webapi/superadmindiagnosticcentre/create", postdata, {headers:headers}).map(res=> res.json());
        
          }


}
