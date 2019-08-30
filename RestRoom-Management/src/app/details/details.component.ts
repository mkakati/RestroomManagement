import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  

  constructor(private httpservice:HttpClient) {}
   // Utility_Report: string[];   
    displayedColumns:string[] = ['position','Name','ShiftName','Status','Date'];
   dataSource : MatTableDataSource<string>;

  ngOnInit() {
   this. dataSource=new MatTableDataSource;

    this.httpservice.get('http://localhost:58490/api/report/GetSampleData').subscribe
    (data =>{
       this.dataSource.data=data as string[];
    }
    );
  }

}
