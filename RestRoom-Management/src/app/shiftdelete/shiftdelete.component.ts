import { Component, OnInit, Inject } from '@angular/core';
import {AddDataService} from 'src/app/shared/add-data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-shiftdelete',
  templateUrl: './shiftdelete.component.html',
  styleUrls: ['./shiftdelete.component.scss']
})
export class ShiftdeleteComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ShiftdeleteComponent>,@Inject(MAT_DIALOG_DATA)public data:any,
  public dataservice:AddDataService) { }

  onNoClick():void{
    this.dialogRef.close();
  }

  confirmDelete():void{
  
    this.dataservice.deleteshift(this.data.ShiftId);
  }
  ngOnInit() {
  }

}
