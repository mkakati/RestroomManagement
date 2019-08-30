import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {AddDataService} from 'src/app/shared/add-data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent  {

  constructor(public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public dataservice:AddDataService) { }

    formControl = new FormControl('', [Validators.required]);
    
    getErrorMessage() {
      return this.formControl.hasError('required') ? 'Required field' :
        this.formControl.hasError('Name') ? 'Not a valid Name' :'';
    }
    submit() {
      // emppty stuff
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    stopEdit(): void {
      this.dataservice.updateIssue(this.data);
    }
  }

