import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
// import { environment } from 'environments/environment';
 
// const API_URL = environment.apiUrl;

@Injectable()
export class SearchpatientService {

  public base_url = "http://132.148.155.154:8080";
  
  constructor(private http:Http) { }

  getPatient() {
   
    let headers = new Headers();
      headers.append('Content-Type',
         'application/json;charset=utf-8');
    
         return this.http.get(this.base_url + "/diagnosticAPI/webapi/patient/getall", {headers:headers})
         
         .map((res:Response) => res.json());
   
       }

       getUser(param) {
   
        let headers = new Headers();
          headers.append('Content-Type',
             'application/json; charset=utf-8');
            //  headers.append('x-access-token',
            //             "eyJraWQiOiJrMSIsImFsZyI6IlJTMjU2In0.eyJpc3MiOiJpbm5vdmVsbGVudCIsImV4cCI6MTUwOTkwNDU3OCwianRpIjoibzgzTVM0V3pUaUt5TENGOHU1N213QSIsImlhdCI6MTUwOTkwMjc3OCwibmJmIjoxNTA5OTAyNjU4LCJpZCI6bnVsbH0.XHFD9IwtUOvDvyo_tO8oK6-fm2c-u4ORjVjTN0DlphQZMSUmuQWO389cTFBqn1Sb6PITP3pBSZmGs4-NlquPwVpnWvXLw9Io2biQ0aBeoXEKpvwNtx9wlM_j8sPxZHCKDVUyzjalUz-NDHZXIsRKNtX0jAURtTdgfltX8uinEqrOKlCZ4YQKnig7LnZPLyBFZkZYebKy_gBmJR0iasdjXU1bE1497mQqavE2A4iTEuF4SST9Kv7gxeDnBEMeaQDtLKfqtG8eRalwCN6T7qXP4ezmaZ693TsZgSQ57dg0SIgATkrl_Aup476xalWsUpShVX8mxQAh0D2-hG4pBH9LZQ");
        
        console.log(param);
             
        console.log(name);
            return this.http.post(this.base_url + "/diagnosticAPI/webapi/patient/getsearch", param, {headers:headers})
            .map(res=> res.json());
        
           }
}
