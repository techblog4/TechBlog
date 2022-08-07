import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';



// export interface UserData {
//   id: string;
//   title: string;
//   file: string;
//   authorname: string;
//   date: string;
//   actions: string;
// }



@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.css']
})


export class AdminBlogListComponent implements OnInit {
  Blogs:any=[];
  // pageSize:10;
  // pageSizeOptions: number[] = [5, 10, 25, 100];
  // length1 : 0;
  time: any;

  
constructor(private postserve:PostserviceService, private router:Router) {}
btnClick=  (_id: any) => {
  this.router.navigateByUrl('admin-dashboard/admin-single-blog-page/'+_id);
};
ngOnInit() {
 this.postserve.getAllBlogs().subscribe((res)=>
    {
      this.Blogs = res;
      // this.length1 = this.Blogs.length;
    });
    
}

}
