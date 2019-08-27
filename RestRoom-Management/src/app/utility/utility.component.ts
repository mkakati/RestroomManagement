import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import {AddDataService} from '../shared/add-data.service';
import { addutility } from './addutility';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss']
})
export class UtilityComponent implements OnInit {
 
  ngOnInit() {
    this.httpservice.get('http://localhost:58490/api/Utility/GetUtilities').subscribe
    (data =>{
       this.Utility=data as string[];
    }
    );
  }
  data=false;
  message=null;
  // index:null;
 // utility:FormGroup;

  constructor(private utilityservice:AddDataService,private httpservice:HttpClient,private router: Router,private _activatedroute:ActivatedRoute,private fb:FormBuilder) {   }
  Utility: string[];   
  get util(){
    return this.utility.get('Name');
  }

  utility=this.fb.group({
    Name:['',[Validators.required]]
  })
  // onSubmit():void{
  //   // this.router.navigate(['/checklist']);
  //    this.router.navigateByUrl('checklist');

  // }
   
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
