import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostserviceService } from 'src/app/postservice.service';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {
  posts:any;
  description: any;
  constructor(private postserve:PostserviceService,private router:Router) { }

  ngOnInit(): void {
    this.postserve.homeadd().subscribe((data)=>{
      this.posts= JSON.parse(JSON.stringify(data));
      //  console.log(this.posts);
   

    for(let i = 0;i<=this.posts.length;i++) {
     this.posts.description = this.posts[i].description.replace(/<[^>]*>/g, '');
    console.log(this.posts.description); 
  }
      //  this.posts= this.posts.replace(/(<([^>]+)>)/gi, "");
     //  console.log(data);
  //    var temporalDivElement = document.createElement("div");
  //    // Set the HTML content with the providen
  //       temporalDivElement.innerHTML = this.posts.description;
  //    // Retrieve the text property of the element (cross-browser support)
  //  this.posts.description = temporalDivElement.textContent || temporalDivElement.innerText || "";
     
   })  
   
   
  }

singleBlog(Blogs:any){
  {
    localStorage.setItem("editBlogId",Blogs._id.toString());
    this.router.navigate(['singleviewpage']);

  }

}



}
