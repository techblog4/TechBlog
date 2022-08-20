import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor( private http:HttpClient) { }
addsignup=(item:any)=>{
    return  this.http.post("http://localhost:4001/signup",{item});
  }
addblogcategory=(item:any)=>{
    return  this.http.post("http://localhost:4001/addblogcategory",{item});
  }
loginadd=(data:any)=>{
   return this.http.post<any>("http://localhost:4001/login",{data});
 }
loggedin(){
  return !!localStorage.getItem('token');
 }
 
getToken(){
  return localStorage.getItem('token');
}
}







