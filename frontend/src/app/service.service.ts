import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { }
  addsignup=(item:any)=>{
    return  this.http.post<any>("http://localhost:3000/register",item)
   .subscribe((data=>{console.log(data)}));
  }
}
