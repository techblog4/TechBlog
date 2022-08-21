import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import Swal from 'sweetalert2';

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
  deletePost(post:any)
  {
    this.postserve.deletePost(post)
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
              'Your file has been permenantly deleted.',
              'success'
            )
          }
        })
      })
    }
}
