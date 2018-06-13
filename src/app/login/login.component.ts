import { Component, OnInit,ViewContainerRef } from '@angular/core';
declare var $:any;
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {Router, Params,ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from './login.service';

import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import {ToastsManager,ToastOptions} from 'ng2-toastr/ng2-toastr';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {


  postdata:FormGroup; 
  profile:Array<any>=[];
token:any;

  constructor( private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder,private location: Location,private contentService:LoginService,private toastroptions:ToastOptions,  private toastr:ToastsManager,private vRef: ViewContainerRef)
   { this.toastr.setRootViewContainerRef(vRef);
    this.toastroptions.positionClass="toast-top-center";
  }

  ngOnInit() {
    
    

    // this.sub = this.router.params.subscribe(params => {
    //   this.dcid = params['dcid']; // (+) converts string 'id' to a number
    //   this.test_id = params['test_id'];
    //   this.total_amount=params['total_amount'];
    //   console.log(this.total_amount);
    //   console.log(this.test_id);
    //   console.log("this.test_id");
    //    console.log(this.dcid);
    //   console.log("this.dcid");
    // });



    console.log("history length");
    console.log(window.history.length);
   //  this.contentService.getCheckUser().subscribe((data: Array<Object>)=> {

  //      this.profile = data;

  //       console.log(this.profile);
  //   });

this.postdata = this.formBuilder.group({

      email: '',
      password: '',
     });

     


     $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  });

  }

 onSubmitPost()
  {
   // this.toastr.success("Data saved.","Success!");

    let email = $('#email').val();
     let password = $('#password').val();
     console.log(email);
     console.log(password);
     
    //   let email1 = $('#email').val();
    //  let password1 = $('#password').val();
    //  console.log(email1);    
    //  console.log(password1);
     let json_post_data=JSON.stringify(this.postdata.value);
     console.log(json_post_data);
 this.contentService.CheckUserauthenticate(email,password).subscribe(
       data => {
        // let objResponseToken: SaveResponse1 = data;
        console.log("token get");
         console.log(data[Object.keys(data)[0]] );
         this.token=data;
         console.log("token");
         localStorage.setItem('access_token', data[Object.keys(data)[0]]);

         console.log(this.token);

       });
   this.contentService.getCheckUser(email,password).subscribe(
       data => {
         let objResponse: SaveResponse = data;
         let objUserData: UserDetails = objResponse.Results[0];

         if (objResponse.Code==200)
         {
          this.profile = data;
        console.log(this.profile);
        console.log("test");
        // this.router.navigate(['/userlogin']);
        localStorage.setItem('LoginId', objUserData.userid.toString());
        localStorage.setItem('fullname', objUserData.name);
        localStorage.setItem('superadminId', objUserData.patientid);
        localStorage.setItem('mobile', objUserData.mobile);
        localStorage.setItem('EmailID', objUserData.email.toString());
        console.log("objUserData.mobile");
        console.log(objUserData.mobile);
        console.log("objUserData.fullname");
        console.log(objUserData.name);
        // localStorage.setItem('UserTypeName', objUserData.UserTypeName);
        this.toastr.success("Login.", "Success!")
        setTimeout((router:Router) =>{
   
          this.router.navigate(['/dashboard']);
        }, 5000);

         }

         else if (objResponse.Code==409)
         {
         this.toastr.success('Your Username Or Password Is Incorrect');
         console.log("incorrect");
         
         }

       },    
       
       error => {
         console.error("Error saving user!");

         return Observable.throw(error);
       }
   );
  }
}
export interface SaveResponse {
    Code: number;
    Results: any;
}
export interface UserDetails {
    userid: number;
    name: string;
    patientid: string;
    mobile: string;
    email: number;
    
}
export interface SaveResponse1 {

    xaccesstoken:any;
}