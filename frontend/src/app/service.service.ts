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
  addBlogCategory=(item:any)=>{
    return  this.http.post("http://localhost:4001/addBlogCategory",item);
  }
 loginadd=(data:any)=>{
   return this.http.post("http://localhost:4001/login",{data});
 }
}







