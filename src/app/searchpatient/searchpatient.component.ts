import { Component, OnInit } from '@angular/core';
declare var $:any;
import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {Router} from '@angular/router';

import { SearchpatientService } from './searchpatient.service';


import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';

import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-searchpatient',
  templateUrl: './searchpatient.component.html',
  styleUrls: ['./searchpatient.component.css'],
  providers: [SearchpatientService]
})
export class SearchpatientComponent implements OnInit {
  profile:Array<any>=[];
  profileInfo:Array<any>=[];
  patient_list22: Array<any> = [];
  private data: Array<any>;
           
// patientid:string;
// fullname:string;
// getallpatientsearch:any;
// getallpatientsearch_list: Array<any>=[];
  constructor( private formBuilder: FormBuilder, private contentService:SearchpatientService) { }



  




  ngOnInit() {

    this.contentService.getPatient().subscribe(data => {
      this.profileInfo = data.Results;
          
     // this.teacher_list_results = this.teacher_list;
      // console.log(this.board1);
      console.log(this.profileInfo);
      this.profileInfo.forEach((value, key) => {
        this.profile.push(value);
      });
    });

//     this.contentService.getUser(this.patientid, this.fullname).subscribe((data: Array<Object>)=> {

//       this.getallpatientsearch = data;
// console.log("this.getallpatientsearch");
// console.log(this.getallpatientsearch);
// this.getallpatientsearch_list=this.getallpatientsearch.Results;
//        console.log(this.getallpatientsearch.Results);
//        //this.getexercisedetails=this.getallexercise.Results;

//    });
    
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
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    });
  // $("#insert-more").click(function () {
  //      $("#mytable").each(function () {
  //          var tds = '<tr>';
  //         //  jQuery.each($('tr:last td', this), function () {
  //         //      tds += '<td>' + $(this).html() + '</td>';
  //          });
  //          tds += '</tr>';
  //          if ($('tbody', this).length > 0) {
  //              $('tbody', this).append(tds);
  //          } else {
  //              $(this).append(tds);
  //          }
  //      });
  // });
  
  // $("#insert-more1").click(function () {
  //      $("#mytable1").each(function () {
  //          var tds = '<tr>';
  //          jQuery.each($('tr:last td', this), function () {
  //              tds += '<td>' + $(this).html() + '</td>';
  //          });
  //          tds += '</tr>';
  //          if ($('tbody', this).length > 0) {
  //              $('tbody', this).append(tds);
  //          } else {
  //              $(this).append(tds);
  //          }
  //      });
  // });

//   setTimeout(()=>{  
//     // this.date_selected=(<HTMLInputElement>document.getElementById("date_selected")).value;


// this.contentService.getPatientSearch(this.patientid, this.fullname).subscribe((data: Array<Object>)=> {

//       this.getallpatientsearch = data;
//    });

//    },1000);



  }
  demo()
{

  $('#profile').modal('show');

}


inline_search(){
  $("#b1").show();

    var param = {
      name:$('#inline_search').val(),
      // patientid:$('#inline_search').val()
    }
console.log(param);
   this.contentService.getUser(param).subscribe(data => {
    this.profileInfo = data.Results;
          
    // this.teacher_list_results = this.teacher_list;
     // console.log(this.board1);
     console.log(this.profileInfo);
     this.profileInfo.forEach((value, key) => {
       this.profile.push(value);
     });
   });


}


}
