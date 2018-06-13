import { Component, OnInit,ViewContainerRef } from '@angular/core';
declare var $:any;
import {Router, Params,ActivatedRoute } from '@angular/router';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';

import { RegisterService } from './register.service';
import {ToastsManager,ToastOptions} from 'ng2-toastr/ng2-toastr';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  postdata:FormGroup; 
  profile:Array<any>=[];

  constructor( private route:ActivatedRoute,private router:Router,private formBuilder: FormBuilder, private contentService:RegisterService ,private toastroptions:ToastOptions, private toastr:ToastsManager,private vRef: ViewContainerRef) 
  { this.toastr.setRootViewContainerRef(vRef); 
    this.toastroptions.positionClass="toast-top-center";
  }


      
  ngOnInit() {

   

    this.postdata = this.formBuilder.group({
      name: '',
      email: '',
      mobile: '',
      password:'',
     usertypeid:2

     
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
  $('.modal-backdrop').remove();
     $('#org').modal('hide');
let json_post_data=JSON.stringify(this.postdata.value);
   console.log(json_post_data);

  this.contentService.createUser(json_post_data).subscribe(
     data => {
      let objResponse: SaveResponse = data;
      
      if (objResponse.Code==200)
      {
      this.profile = data;
      console.log(this.profile);
      this.toastr.success('You have registered successfully.');
      console.log("created");
   
      setTimeout((router:Router) =>{

        this.router.navigate(['/login']);
      }, 5000);
     
      }
      else if (objResponse.Code==409)
      {
      this.toastr.success('Already Registered');
      console.log("exists");
      setTimeout((router:Router) =>{

        this.router.navigate(['/login']);
      }, 5000);
      }
     },
     error => {
       console.error("Error saving user!");
       return Observable.throw(error);
     }
  );
  //  window.location.reload();
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