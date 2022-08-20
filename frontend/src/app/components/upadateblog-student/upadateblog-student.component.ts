import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-upadateblog-student',
  templateUrl: './upadateblog-student.component.html',
  styleUrls: ['./upadateblog-student.component.css']
})
export class UpadateblogStudentComponent implements OnInit {
  Blogs:any=[];
constructor(private serve:PostserviceService,private router:Router) { }

ngOnInit(): void {
    let postId = localStorage.getItem("editBlogId");
    this.serve.getPost(postId).subscribe((data)=>{
      this.Blogs=JSON.parse(JSON.stringify(data));
  })
  }
selectImage(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.Blogs.image=file;
    }
  }
editPost(){
    const formData=new FormData();
    formData.append('_id', this.Blogs._id)
    formData.append('image', this.Blogs.image)
    formData.append('title',this.Blogs.title)
    formData.append('description',this.Blogs.description)
    formData.append('currentEmail',localStorage.getItem('studentEmailToken') || '{}')
    this.serve.editPost(formData);
    Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Your post has been updated',
             showConfirmButton: false,
             timer: 2000
           }) 
       this.router.navigate(['studentnavbar/studentviewblogs'])     
  }
 
  
}
