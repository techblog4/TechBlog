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
  public model = {
    
    currentEmail : localStorage.getItem('emailToken')
    
    
  };
  constructor(private postserve:PostserviceService, private router:Router) { }
  btnClick=  (_id: any) => {
    this.router.navigateByUrl('trainernavbar/trainer-single-blogpage/'+_id);
  };
  ngOnInit(): void {
    this.postserve.getTrainerBlogs(this.model).subscribe((res)=>
    {
      this.Blogs = res;
      // this.length1 = this.Blogs.length;
    });
  }
  editPost(Blogs:any){
    {
      localStorage.setItem("editBlogId", Blogs._id.toString());
      this.router.navigate(['trainerupdate']);
  
    }
  }
}
