import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(public http:HttpClient) { }
  
homeadd(){
  return this.http.get("http://localhost:4001/home");
}
getAllBlogs(){
  return this.http.get("http://localhost:4001/getAllBlogs");
}
getNotApprovedBlogs(){
  return this.http.get("http://localhost:4001/getNotApprovedBlogs");
}
getTrainerBlogs(data:any){
  return this.http.post("http://localhost:4001/currentUserBlogs",{data:data});
}
getBlogById(data:any){
  return this.http.post("http://localhost:4001/getBlogById",{data:data})
}
useradd(data:any){
  return this.http.post<any>('http://localhost:4001/addpost', {data:data})
}
getUserName(data:any){
  return this.http.post<any>('http://localhost:4001/getUserName', {data:data})
}
}
