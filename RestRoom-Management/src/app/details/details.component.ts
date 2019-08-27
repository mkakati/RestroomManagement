import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  

  constructor(private httpservice:HttpClient) {}
    Utility_Report: string[];   
  

  ngOnInit() {
    this.httpservice.get('http://localhost:58490/api/report/GetSampleData').subscribe
    (data =>{
       this.Utility_Report=data as string[];
    }
    );
  }

}
