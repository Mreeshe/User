import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'
// import {environment } from 'environments/environment';


// const API_URL = environment.apiUrl;
@Injectable()
export class LoginService {
  public base_url = "http://132.148.155.154:8080";
  
  constructor(private http:Http) { }

   
getCheckUser(email,password) {

  let headers = new Headers();
    // let pos = new Pos(); 
   headers.append('Content-Type',
    'application/json');
    // console.log(postdata);
    
    console.log(email);
   // let postdata1 =postdata();
   //  let em=postdata.email;
    console.log(password);
   //  console.log(postdata.email);
   //diagnosticAPI/webapi/Login/validateUser/userid/1231231231/password/123/loginFrom/A
    return this.http.post(this.base_url + "/diagnosticAPI/webapi/user/superadminvalidate",{"userid":email,"password":password}, {headers:headers})
      .map((res:Response) => res.json());
     
   } 
   CheckUserauthenticate(email,password) {

  let headers = new Headers();
    // let pos = new Pos(); 
   headers.append('Content-Type',
    'application/json');
    // console.log(postdata);
    
    console.log(email);
   // let postdata1 =postdata();
   //  let em=postdata.email;
    console.log(password);
   //  console.log(postdata.email);
   //diagnosticAPI/webapi/Login/validateUser/userid/1231231231/password/123/loginFrom/A
    return this.http.post(this.base_url + "/diagnosticAPI/webapi/user/superadminauthenticate",{ "userid":email,
"password":password}, {headers:headers})
      .map((res:Response) => res.json());
     
   } 
   


}
