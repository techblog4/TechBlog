import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-trainerviewblogs',
  templateUrl: './trainerviewblogs.component.html',
  styleUrls: ['./trainerviewblogs.component.css']
})
export class TrainerviewblogsComponent implements OnInit {
  Blogs:any=[];
  time: any;
  constructor(private postserve:PostserviceService, private router:Router) { }
  btnClick=  (_id: any) => {
    this.router.navigateByUrl('admin-dashboard/admin-single-blog-page/'+_id);
  };
  ngOnInit(): void {
    this.postserve.getTrainerBlogs().subscribe((res)=>
    {
      this.Blogs = res;
      // this.length1 = this.Blogs.length;
    });
  }

}
