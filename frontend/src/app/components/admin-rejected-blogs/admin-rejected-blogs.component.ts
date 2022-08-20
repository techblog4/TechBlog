import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-admin-rejected-blogs',
  templateUrl: './admin-rejected-blogs.component.html',
  styleUrls: ['./admin-rejected-blogs.component.css']
})
export class AdminRejectedBlogsComponent implements OnInit {
  Blogs:any=[];

constructor(private postserve:PostserviceService, private router:Router) { }

ngOnInit(): void {
    this.postserve.rejectedBlogs().subscribe((res)=>
    {
      this.Blogs = res;
    });
  }
btnClick=  (_id: any) => {
    this.router.navigateByUrl('admin-dashboard/admin-blog-view/'+_id);
  };

}
