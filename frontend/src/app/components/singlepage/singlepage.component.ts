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
  userName:any;
  categories: any;
  selected: any;
  routeLink: string;
  
constructor(private postserve:PostserviceService,private router:Router) { }

ngOnInit(): void {
   this.postserve.homeadd().subscribe((data)=>{
   this.posts= JSON.parse(JSON.stringify(data));
    })
      this.postserve.getBlogCategory().subscribe((data)=>{
      this.categories = JSON.parse(JSON.stringify(data));
      this.routeLink = "/homecategory/";
      console.log(this.categories);
})
}

singleBlog(Blogs:any){
  {
    localStorage.setItem("editBlogId",Blogs._id.toString());
    this.router.navigate(['singleviewpage']);
  }

}
}
