import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import Swal from 'sweetalert2';

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
    });
  }
editPost(Blogs:any){
    {
      localStorage.setItem("editBlogId", Blogs._id.toString());
      this.router.navigate(['trainernavbar/trainerupdate']);
  
    }
  }


deletePost(post:any)
  {
    this.postserve.deletePost(post._id)
      .subscribe((data) => {
        this.Blogs = this.Blogs.filter((p:any) => p !== post);
        
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      })
    }
}
