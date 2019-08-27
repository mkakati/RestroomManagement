import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AddDataService } from '../shared/add-data.service';
import { addshift } from './shift';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shiftmaster',
  templateUrl: './shiftmaster.component.html',
  styleUrls: ['./shiftmaster.component.scss']
})
export class ShiftmasterComponent implements OnInit {
  isSubmitted = false;

  time: Date = new Date();
  
  Shift: string[];
  ngOnInit() {
    this.httpservice.get('http://localhost:58490/api/Shift/GetShifts').subscribe
    (data =>{
       this.Shift=data as string[];
    }
    );
  }

  data=false;
  message1:string;

  constructor(private httpservice:HttpClient,private shiftservice:AddDataService,private router: Router,private _activatedroute:ActivatedRoute,private fb:FormBuilder) {   }

  shifts=['Morning','Afternoon','Evening'];


  shiftmas=this.fb.group({
    StartTime:['',],
    EndTime:[''],
    ShiftName:['',[Validators.required]]
  })

  changeshift(e) {
    console.log(e.value)
    this.ShiftName.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get start() {
    return this.shiftmas.get('StartTime');
  }
  get end() {
    return this.shiftmas.get('EndTime');
  }
  get ShiftName() {
    return this.shiftmas.get('ShiftName');
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.shiftmas.valid) {
      return
       false;
    } else {
     // alert(JSON.stringify(this.shiftmas.value))
     const add= this.shiftmas.value;    
     this.Createshift(add); 
      
    }
 }
 Createshift(shiftmas:addshift){
  this.shiftservice.Createshift(shiftmas).subscribe(    
    ()=>    
    { debugger;
      this.data = true;    
      this.message1 = 'Data saved Successfully';    
      this.shiftmas.reset();   
      this.ngOnInit(); 
    });    
  }
 }


