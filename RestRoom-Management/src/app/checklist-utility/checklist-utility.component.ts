import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { addchecklist } from './check';
import { AddDataService } from '../shared/add-data.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
//import { addshift } from '../shiftmaster/shift';

@Component({
  selector: 'app-checklist-utility',
  templateUrl: './checklist-utility.component.html',
  styleUrls: ['./checklist-utility.component.scss']
})
export class ChecklistUtilityComponent implements OnInit {
  isSubmitted = false;
  //minDate: Date;
  maxDate: Date;

 data=false;
 message=null;


  // utils = [{'id':'1','name':'HandWash'},{'id':'2','name':'Floor'},{'id':'3','name':'HandTowel'},
  //          {'id':'4','name':'TissuePaper'},{'id':'5','name':'ToiletBowl'},{'id':'6','name':'Water'},
  //          {'id':'7','name':'WashBasin'},{'id':'8','name':'Mirror'}];

  //shifts = [{'id':'1','name':'Morning'}, {'id':'2','name':'Afternoon'},{'id':'3','name':'Evening'}];

  constructor(private httpservice:HttpClient,private checkservise:AddDataService,private router: Router, private _activatedroute: ActivatedRoute, private fb: FormBuilder) {

  }
    utils:string[];
    shifts:string[];
  ngOnInit() {
   // this.minDate = new Date();
    this.maxDate = new Date();
    this.httpservice.get('http://localhost:58490/api/Utility/GetUtilities').subscribe
    (data =>{
       this.utils=data as string[];
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
    this.httpservice.get('http://localhost:58490/api/Shift/GetShifts').subscribe
    (data =>{
       this.shifts=data as string[];
    },
    (err: HttpErrorResponse) => {
      console.log (err.message);
    }
    ); 
  }

  checklistutility = this.fb.group({
    ReadingDate: [''],
    U_ID: ['', [Validators.required]],
    IsDone: ['', [Validators.required]],
    Feedback: [''],
    ShiftId: ['', [Validators.required]]
  });

  // changeutil(e) {
  //   console.log(e.value)
  //   this.U_ID.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }
  get U_ID() {
    return this.checklistutility.get('U_ID');
  }

  get IsDone() {
    return this.checklistutility.get('IsDone');
  }

  // changeshift(e) {
  //   console.log(e.value)
  //   this.ShiftId.setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }

  get ShiftId() {
    return this.checklistutility.get('ShiftId');
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.checklistutility.valid) {
      return false;
    } else {
     // alert(JSON.stringify(this.checklistutility.value))
     const add= this.checklistutility.value;    
     this.Createchecklist(add); 
      
    }

  }
  Createchecklist(checklistutility:addchecklist) {
   this.checkservise.Createchecklist(checklistutility).subscribe(
     ()=>{
      debugger;
      this.data = true;    
      this.message = 'Data saved Successfully';    
      this.checklistutility.reset();   
     
    });    
   }
   
  }


