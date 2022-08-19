import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';


@Component({
  selector: 'app-admin-approve-blog',
  templateUrl: './admin-approve-blog.component.html',
  styleUrls: ['./admin-approve-blog.component.css']
})
export class AdminApproveBlogComponent implements OnInit {
  Blogs:any=[];
  public model = {
    currentEmail : localStorage.getItem('emailToken')
  };

  constructor(private postserve:PostserviceService, private router:Router) {}
  btnClick =  (_id: any) => {
    this.router.navigateByUrl('admin-dashboard/blog-approve-page/'+_id);
  };
  
  ngOnInit(): void {
    this.postserve.getNotApprovedBlogs().subscribe((res)=>
    {
      this.Blogs = res;
      console.log(this.Blogs);
      if(res == null || res == "")
      {
        this.Blogs = "No data found";
      }
    });
    
  }
 
  }