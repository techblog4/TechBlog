import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
// import {MatSort} from '@angular/material/sort';
import { PostserviceService } from 'src/app/postservice.service';
// import { blogListModel } from './blogListModel';
// import {PageEvent} from '@angular/material/paginator';



export interface UserData {
  id: string;
  title: string;
  file: string;
  authorname: string;
  date: string;
  actions: string;
}



@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.css']
})


export class AdminBlogListComponent implements OnInit {
  Blogs:any=[];
  pageSize:10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length1 : 0;


  displayedColumns: string[] = ['id', 'title', 'file', 'authorname','date','actions'];
  dataSource: MatTableDataSource<UserData>;
  time: any;

  
constructor(private postserve:PostserviceService, private router:Router) {}
btnClick=  () => {
  alert("hello");
  this.router.navigateByUrl('admin-dashboard/admin-single-blog-page');
};
ngOnInit() {
 this.postserve.getAllBlogs().subscribe((res)=>
    {
      this.Blogs = res;
      this.length1 = this.Blogs.length;
    });
    
}

}
