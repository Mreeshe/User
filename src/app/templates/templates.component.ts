import { Component, OnInit } from '@angular/core';

declare var $:any;
import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {Router} from '@angular/router';


import {Http,URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {FormGroup,FormControl, FormArray,FormBuilder} from '@angular/forms';

import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
    $('#example2').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    $('#example3').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    $('#example4').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    $('#example5').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    $('#example6').DataTable({
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false
      });
    });
    $(function () {
      $("#t1").hide()
    $("#t2").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
     $("#info1").click(function(){
      $("#t1").show();
    $("#t2").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
  });
  $("#t1").hide()
    $("#t2").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
     $("#info2").click(function(){
      $("#t2").show();
    $("#t1").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
  });
  $("#t1").hide()
    $("#t2").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
     $("#info3").click(function(){
      $("#t3").show();
    $("#t2").hide()
    $("#t1").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
  });
  $("#t1").hide()
    $("#t2").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
     $("#info4").click(function(){
      $("#t4").show();
    $("#t2").hide()
    $("#t1").hide()
    $("#t3").hide()
    $("#t5").hide()
    $("#t6").hide()
  });
  $("#t1").hide()
    $("#t2").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
     $("#info5").click(function(){
      $("#t5").show();
    $("#t2").hide()
    $("#t1").hide()
    $("#t4").hide()
    $("#t3").hide()
    $("#t6").hide()
  });
  $("#t1").hide()
    $("#t2").hide()
    $("#t3").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t6").hide()
     $("#info6").click(function(){
      $("#t6").show();
    $("#t2").hide()
    $("#t1").hide()
    $("#t4").hide()
    $("#t5").hide()
    $("#t3").hide()
  });
    });
  }

}
