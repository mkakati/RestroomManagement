import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AddDataService } from '../shared/add-data.service';
import { addshift } from './shift';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Time } from '@angular/common';
import { ShifteditComponent } from '../shiftedit/shiftedit.component';
import { ShiftdeleteComponent } from '../shiftdelete/shiftdelete.component';
import { IgxTimePickerComponent } from "igniteui-angular";


@Component({
  selector: 'app-shiftmaster',
  templateUrl: './shiftmaster.component.html',
  styleUrls: ['./shiftmaster.component.scss']
})
export class ShiftmasterComponent implements OnInit {
  
  displayedColumns:string[] = ['position','ShiftName','StartTime','EndTime','Action'];
  dataSource: MatTableDataSource<string>;
  index: number;
  ShiftId: number;
  isSubmitted = false;

  
 // Shift: string[];
  ngOnInit() {
    this.dataSource = new MatTableDataSource(); 
    this.httpservice.get('http://localhost:58490/api/Shift/GetShifts').subscribe
    (data =>{
       this.dataSource.data=data as string[];
    }
    );
  }

  data=false;
  message1:string;

  constructor(public dialog: MatDialog,private httpservice:HttpClient,private shiftservice:AddDataService,private router: Router,private _activatedroute:ActivatedRoute,private fb:FormBuilder) { 

    }

  //shifts=['Morning','Afternoon','Evening'];


  shiftmas=this.fb.group({
    StartTime:[''],
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


  startEdit(ShiftId:number, ShiftName:string,StartTime:Time,EndTime:Time) {
    this.ShiftId = ShiftId;debugger;
    const dialogRef = this.dialog.open(ShifteditComponent, {
      
      data: {ShiftId:ShiftId,ShiftName: ShiftName,StartTime:StartTime,EndTime:EndTime}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.shiftservice.dataChange1.value.findIndex(x => x.ShiftId === this.ShiftId);
        this.shiftservice.dataChange1.value[foundIndex] = this.shiftservice.getDialogData();
        this.ngOnInit();
      }
    });
  }

  deleteItem(i: number,ShiftId:number,ShiftName:string,StartTime:Time,EndTime:Time) {
    this.index = i;
    this.ShiftId = ShiftId;
    const dialogRef = this.dialog.open(ShiftdeleteComponent, {
      data: {ShiftId:ShiftId,ShiftName: ShiftName,StartTime:StartTime,EndTime:EndTime}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.shiftservice.dataChange1.value.findIndex(x => x.ShiftId === this.ShiftId);
        this.shiftservice.dataChange1.value.splice(foundIndex, 1);
        this.ngOnInit();
        
      }
    });
  }
 }


