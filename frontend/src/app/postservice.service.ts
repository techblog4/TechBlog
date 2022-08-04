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
useradd(data:any){
  return this.http.post('http://localhost:4001/addpost' , {data:data})
}
}
