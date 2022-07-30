import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient) { }
  addsignup=(item:any)=>{
    return  this.http.post("http://localhost:3000/signup",{item})
   .subscribe((data=>{console.log(data)}));
  }
}
