import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(public http:HttpClient) { }
  
homeadd(){
  return this.http.get("http://localhost:4001/home");
}
carouselAdd(){
  return this.http.get("http://localhost:4001/homecarosel");
}
getAllBlogs(){
  return this.http.get("http://localhost:4001/getAllBlogs");
}
getBlogCategory(){
  return this.http.get("http://localhost:4001/getBlogCategory");
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
// useradd(data:any){
//   return this.http.post<any>('http://localhost:4001/addpost', {data:data})
  
// }
getUserName(data:any){
  return this.http.post<any>('http://localhost:4001/getUserName', {data:data})
}

getPost(id:any){
  
    return this.http.get("http://localhost:4001/"+id);
  
}
singlePost(_id:any){
  
  return this.http.get("http://localhost:4001/"+_id);

}

editPost(post:any){
  console.log('client update')
    return this.http.put("http://localhost:4001/update",post).
    subscribe((data) =>{console.log(data)}) ;
    
}
deletePost(id:any){
  return this.http.delete("http://localhost:4001/remove/"+id)
}
deleteCategory(id:any){
  return this.http.delete("http://localhost:4001/deleteCategory/"+id)
}

approveBlog(data:any){
  return this.http.post('http://localhost:4001/approveBlog', {data:data})
  .subscribe(data=>{console.log(data)})
}

useradd(post:any){
  return this.http.post("http://localhost:4001/addpost", post)
  .subscribe(data=>{console.log(data)})
}

}
