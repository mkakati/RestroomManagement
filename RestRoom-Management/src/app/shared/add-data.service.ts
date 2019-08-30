import { Injectable } from '@angular/core';
import { addutility} from '../utility/addutility';
import {addshift } from '../shiftmaster/shift';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { addchecklist } from '../checklist-utility/check';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddDataService {

  //private readonly API_URL='http://localhost:58490/api/Utility';
  Urlutility:string;
  Urlshiftmaster:string;
  Urlchecklist:string;
  token:string;
  Header:any;
  
   constructor(private http:HttpClient) {
   this.Urlutility='http://localhost:58490/api/Utility';
   this.Urlshiftmaster='http://localhost:58490/api/Shift';
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

     dataChange: BehaviorSubject<addutility[]> = new BehaviorSubject<addutility[]>([]);
     dataChange1: BehaviorSubject<addshift[]> = new BehaviorSubject<addshift[]>([]);
     dialogData: any;

     get data1(): addshift[] {
      return this.dataChange1.value;
    }

    get data(): addutility[] {
      return this.dataChange.value;
    }
    getDialogData() {
      return this.dialogData;
    }

    // getAllutilities():void{
    //   this.http.get<addutility[]>(this.API_URL).subscribe
    //   (data =>{
    //      //this.Utility=data as string[];
    //      this.dataChange.next(data);
    // },
    //   (error: HttpErrorResponse) => {
    //   console.log (error.name + ' ' + error.message);
    //   }
    // );
    // }

    updateIssue (utility:addutility) {
      const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
      return this.http.put
        (this.Urlutility+'/PutUtility/',utility, httpOptions).subscribe();
    }
  
    deleteIssue(ID:string){
      //const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
       return this.http.delete
        (this.Urlutility+'/Delete/',{params: {ID: ID}}).subscribe();
      }


    updateshift(shift:addshift) {
  const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
  return this.http.put
    (this.Urlshiftmaster+'/PutShift/',shift, httpOptions).subscribe();
}

deleteshift(ShiftId:string){
  //const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
  debugger;
   return this.http.delete
    (this.Urlshiftmaster+'/DeleteShift/',{params: {id: ShiftId}}).subscribe();
  }
}