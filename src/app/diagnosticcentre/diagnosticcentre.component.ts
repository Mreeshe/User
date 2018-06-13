import { Component, OnInit } from '@angular/core';
declare var $:any;
import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {Router} from '@angular/router';


import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';


import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';

import { Observable } from 'rxjs/Rx';
import { DiagnosticcentreService } from './diagnosticcentre.service';

@Component({
  selector: 'app-diagnosticcentre',
  templateUrl: './diagnosticcentre.component.html',
  styleUrls: ['./diagnosticcentre.component.css'],
  providers:[DiagnosticcentreService]
})
export class DiagnosticcentreComponent implements OnInit {

  profile:Array<any>=[];
  profileInfo:Array<any>=[];
  postdata:FormGroup;

  constructor(private formBuilder: FormBuilder, private contentService:DiagnosticcentreService) { }


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
      diagnosticcentrename: '',
      specialization: '',
      tagline: '',
      address:'',
      city:'',
      locality:'',
      pincode:'',
      photourl:'',
      summary:'',
      websiteurl:'',
      email:'',
      mobile:'',
      accredition:'',
     pickuptime:'',
     homepickupsample:'',
     starttime:'',
     closingtime:'',
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
       $(function () {
                    $('#timepicker').datetimepicker({
                        format: 'LT',
              
                    });
            $('#timepicker1').datetimepicker({
                        format: 'LT',
              
                    });
            $('#timepicker2').datetimepicker({
                        format: 'LT',
              
                    });
            $('#timepicker3').datetimepicker({
                        format: 'LT',
              
                    });
            $('#timepicker4').datetimepicker({
                        format: 'LT',
              
                    });
            $('#timepicker5').datetimepicker({
                        format: 'LT',
              
                    });
            $('#timepicker6').datetimepicker({
                        format: 'LT',
              
                    });
            $('#timepicker7').datetimepicker({
                        format: 'LT',
              
                    });
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
      $(".timepicker7").timepicker({
          showInputs: false
        });
      });
      $(function () {
        $('#example1').DataTable({
          "paging": true,
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

  $('#diagnostic').modal('show');

}

onSubmitPost()
{
  $('.modal-backdrop').remove();
     $('#diagnostic').modal('hide');
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

}
