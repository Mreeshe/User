import { Component, OnInit } from '@angular/core';
declare var $:any;
import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {Router} from '@angular/router';


import { OrganisationService } from './organisation.service';
import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';

import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css'],
  providers: [OrganisationService]
})
export class OrganisationComponent implements OnInit {

  resource_create:Array<any> =[];
  profile:Array<any>=[];
  profileInfo:Array<any>=[];
  postdata:FormGroup;
  putdata:FormGroup;
  profile_update: Array<any> = [];  
profile_id= {};
orgid1:any;
orgname1:any;
orgcode1:any;
orgid:any;
orgname:any;
orgcode:any;
description:any;
description1:any;

  constructor( private formBuilder: FormBuilder, private contentService:OrganisationService) { }



  ngOnInit() {
    this.contentService.getUser().subscribe(data => {
      this.profile = data.Results;
          
     // this.teacher_list_results = this.teacher_list;
      // console.log(this.board1);
      console.log(this.profile);
      this.profile.forEach((value, key) => {
        this.profileInfo.push(value);
      });
    });
    
    this.postdata = this.formBuilder.group({
      orgcode: '',
      orgname: '',
      description: '',
     "modifiedby":1,
     });


     this.putdata = this.formBuilder.group({
      "orgid":'',
      orgcode: '',
      orgname: '',
      description: '',
     "modifiedby":1,
     });
     
      $(function () {
        //Initialize Select2 Elements
        $(".select2").select2();
    
        //Datemask dd/mm/yyyy
        $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
        //Datemask2 mm/dd/yyyy
        $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
        //Money Euro
        $("[data-mask]").inputmask();
    
        //Date range picker
        $('#reservation').daterangepicker();
        //Date range picker with time picker
        $('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
        //Date range as a button
        $('#daterange-btn').daterangepicker(
           
            function (start, end) {
              $('#daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
            }
        );
    
        //Date picker
        $('#datepicker').datepicker({
          autoclose: true
        });
       $('#datepicker0').datepicker({
          autoclose: true
        });
    $('#datepicker1').datepicker({
          autoclose: true
        });
      $('#datepicker2').datepicker({
          autoclose: true
        });
      $('#datepicker3').datepicker({
          autoclose: true
        });
      $('#datepicker4').datepicker({
          autoclose: true
        });
      $('#datepicker5').datepicker({
          autoclose: true
        });
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
          checkboxClass: 'icheckbox_minimal-blue',
          radioClass: 'iradio_minimal-blue'
        });
        //Red color scheme for iCheck
        $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
          checkboxClass: 'icheckbox_minimal-red',
          radioClass: 'iradio_minimal-red'
        });
        //Flat red color scheme for iCheck
        $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
          checkboxClass: 'icheckbox_flat-green',
          radioClass: 'iradio_flat-green'
        });
    
        //Colorpicker
        $(".my-colorpicker1").colorpicker();
        //color picker with addon
        $(".my-colorpicker2").colorpicker();
    
        //Timepicker
        $(".timepicker").timepicker({
          showInputs: false
        });
      $(".timepicker1").timepicker({
          showInputs: false
        });
      $(".timepicker2").timepicker({
          showInputs: false
        });
      $(".timepicker3").timepicker({
          showInputs: false
        });
      $(".timepicker4").timepicker({
          showInputs: false
        });
      $(".timepicker5").timepicker({
          showInputs: false
        });
      $(".timepicker6").timepicker({
          showInputs: false
        });
      });
    
      $(function () {
        $('#example1').DataTable({
          "paging": true,
          "destroy": true,
          "lengthChange": true,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      $('#example2').DataTable({
          "paging": true,
          "lengthChange": true,
          "destroy": true,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      $('#example3').DataTable({
          "paging": true, 
          "destroy": true,
          "lengthChange": true,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      $('#example4').DataTable({
          "paging": true,
          "destroy": true,
          "lengthChange": true,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      $('#example5').DataTable({
          "paging": true,
          "destroy": true,
         
          "lengthChange": true,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      $('#example6').DataTable({
          "paging": true,
          "destroy": true,
         
          "lengthChange": true,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false
        });
      });

  }
   
demo()
{

  $('#org').modal('show');

}

onSubmitPost()
{
  $('.modal-backdrop').remove();
     $('#org').modal('hide');
let json_post_data=JSON.stringify(this.postdata.value);
   console.log(json_post_data);

  this.contentService.createUser(json_post_data).subscribe(
     data => {

      this.profile = data;
      console.log(this.profile);
     },
     error => {
       console.error("Error saving user!");
       return Observable.throw(error);
     }
  );
   window.location.reload();
}


// updatepost(orgid)
// {
//   console.log("DSd");
// console.log("orgid");
//         this.orgid= orgid
//         // this.subjectid= subjectid,

//         var param1 = {
//             orgid:orgid
//           //  subjectid:$event.target.
//           }
      
//   this.contentService.getUser_id(param1).subscribe((data: Array<Object>)=> {

//         this.profile_id = data;

//          console.log("test");
//            console.log(this.profile_id);

//        });

//     $('#edit').modal('show');
//   }

// onUpdatePost()
 
// {

  
// $('.modal-backdrop').remove();
//  $('#edit').modal('show');
 
 
// let json_post_data=JSON.stringify(this.updatedetails.value);
//    console.log(json_post_data);

//    this.contentService.updatedetail(json_post_data).subscribe(
//      data => {   

//       this.profile_update = data;
//       console.log(this.profile_update);
//      },
//      error => {
//        console.error("Error saving user!");
//        return Observable.throw(error);
//      }
//   );
//   //  window.location.reload();
// }

onSubmitPut()
{


 
let json_put_data=JSON.stringify(this.putdata.value);
   console.log(json_put_data);
//  let patientId1= localStorage.getItem('patientId');

  this.contentService.updateresource(json_put_data).subscribe(
     data => {

      this.resource_create = data;
      console.log(this.resource_create);
      $('#edit').modal('hide');
      // this.toastr.success("Successfully Updated" );
// this.display();
     },
     error => {
       console.error("Error saving user!");
       return Observable.throw(error);
     }
  );


}

updateresource(orgid,orgname,orgcode)
{
  console.log("DSd");

  this.orgid1=orgid;
//  this.slno=slno;
  this.orgname1=orgname;
  this.orgcode1=orgcode;
$('#edit').modal('show');

}


}
  