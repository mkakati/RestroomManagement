import { Injectable } from '@angular/core';
import { addutility} from '../utility/addutility';
import {addshift } from '../shiftmaster/shift';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { addchecklist } from '../checklist-utility/check';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  Urlutility:string;
  Urlshiftmaster:string;
  Urlchecklist:string;
  token:string;
  Header:any;
   constructor(private http:HttpClient) {
   this.Urlutility='http://localhost:58490/api/Utility';
   this.Urlshiftmaster='http://localhost:58490/api/shift';
   this.Urlchecklist='http://localhost:58490/api/Checklist';
}
CreateUtility(utility:addutility){
  const httpOptions={headers:new HttpHeaders
    ({'Content-Type':'application/json'})};
    return this.http.post<addutility[]>
    (this.Urlutility+'/PostUtility',utility,httpOptions)
  }
  Createshift(shift:addshift){
    const httpOptions={headers:new HttpHeaders
      ({'Content-Type':'application/json'})};
      return this.http.post<addutility[]>
      (this.Urlshiftmaster+'/PostShift',shift,httpOptions)
    }

    Createchecklist(check:addchecklist){
      const httpOptions={headers:new HttpHeaders
     ({'Content-Type':'application/json'})};
     return this.http.post<addchecklist[]>
     (this.Urlchecklist+'/PostChecklist',check,httpOptions)
    }
}
