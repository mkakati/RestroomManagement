import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";
import {AddDataService} from '../shared/add-data.service';
import { addutility } from './addutility';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatTableDataSource } from '@angular/material';
import {EditComponent} from '../dialogs/edit/edit.component';
import {DeleteComponent} from '../dialogs/delete/delete.component';


@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {
 // Utility: string[]; 
  displayedColumns:string[] = ['position','Name','action'];
   dataSource: MatTableDataSource<string>;
  
   index: number;
   ID: number;
  

  constructor(private utilityservice:AddDataService,private httpservice:HttpClient,private router: Router,
    private _activatedroute:ActivatedRoute,private fb:FormBuilder,public dialog: MatDialog) {   }
 

  ngOnInit() {
    this.dataSource = new MatTableDataSource(); 
    this.httpservice.get('http://localhost:58490/api/Utility/GetUtilities').subscribe
    (data =>{
      this.dataSource.data=data as string[];
    }
    );
   
  }

  startEdit(ID:number, Name: string) {
    this.ID = ID;
    const dialogRef = this.dialog.open(EditComponent, {
      data: {ID:ID,Name: Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.utilityservice.dataChange.value.findIndex(x => x.ID === this.ID);
        this.utilityservice.dataChange.value[foundIndex] = this.utilityservice.getDialogData();
        this.ngOnInit();
      }
    });
  }

  deleteItem(i: number,ID:number,Name: string,) {
    this.index = i;
    this.ID = ID;
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {ID:ID,Name: Name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.utilityservice.dataChange.value.findIndex(x => x.ID === this.ID);
        this.utilityservice.dataChange.value.splice(foundIndex, 1);
        this.ngOnInit();
        
      }
    });
  }


  data=false;
  message=null;
 
  get util(){
    return this.utility.get('Name');
  }

  utility=this.fb.group({
    Name:['',[Validators.required]]
  })
   
  onSubmit()    
{    
  const add= this.utility.value;    
  this.Createutility(add);    
}    
Createutility(utility:addutility)    
{    
this.utilityservice.CreateUtility(utility).subscribe(    
  ()=>    
  {    
    this.data = true;    
    this.message = 'Data saved Successfully';    
    this.utility.reset();   
    this.ngOnInit(); 
  });    
}
}
