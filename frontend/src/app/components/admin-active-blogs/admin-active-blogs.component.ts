import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';


@Component({
  selector: 'app-admin-active-blogs',
  templateUrl: './admin-active-blogs.component.html',
  styleUrls: ['./admin-active-blogs.component.css']
})
export class AdminActiveBlogsComponent implements OnInit {
  Blogs:any=[];

  constructor(private postserve:PostserviceService, private router:Router) { }

  ngOnInit(): void {
    this.postserve.activeBlogs().subscribe((res)=>
    {
      this.Blogs = res;
    });
  }
  btnClick=  (_id: any) => {
    this.router.navigateByUrl('admin-dashboard/admin-blog-view/'+_id);
  };

}
