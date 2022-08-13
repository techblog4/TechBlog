import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';


@Component({
  selector: 'app-student-viewblogs',
  templateUrl: './student-viewblogs.component.html',
  styleUrls: ['./student-viewblogs.component.css']
})
export class StudentViewblogsComponent implements OnInit {
  Blogs:any=[];
  time: any;
  public model = {
    
    currentEmail : localStorage.getItem('studentEmailToken')
    
    
  };
  constructor(private postserve:PostserviceService, private router:Router) { }
  btnClick=  (_id: any) => {
    this.router.navigateByUrl('studentnavbar/student-single-blogpage/'+_id);
  };
  ngOnInit(): void {
    this.postserve.getTrainerBlogs(this.model).subscribe((res)=>
    {
      this.Blogs = res;
      // this.length1 = this.Blogs.length;
    });
  }

  editPost(blog:any){
    {
      localStorage.setItem("editBlogId", blog._id.toString());
      this.router.navigate(['update']);
  
    }
  }
}
