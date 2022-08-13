import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';


@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.css']
})


export class AdminBlogListComponent implements OnInit {
  Blogs:any=[];
  time: any;

  
constructor(private postserve:PostserviceService, private router:Router) {}
btnClick=  (_id: any) => {
  this.router.navigateByUrl('admin-dashboard/admin-aprove/'+_id);
};
ngOnInit() {
 this.postserve.getAllBlogs().subscribe((res)=>
    {
      this.Blogs = res;
    });
    
}

}
