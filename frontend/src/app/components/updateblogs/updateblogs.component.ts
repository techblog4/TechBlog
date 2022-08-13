import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-updateblogs',
  templateUrl: './updateblogs.component.html',
  styleUrls: ['./updateblogs.component.css']
})
export class UpdateblogsComponent implements OnInit {
    Blogs:any=[];

  

  constructor(public serve:PostserviceService,public router:Router) { }

  ngOnInit(): void {
  let postId = localStorage.getItem("editBlogId");
    this.serve.getPost(postId).subscribe((data)=>{
      this.Blogs=JSON.parse(JSON.stringify(data));
  })
  }
  editPost()
  {    
    this.serve.editPost(this.Blogs);  
    
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your post has been Updated',
      showConfirmButton: false,
      timer: 2000
    })
    this.router.navigate(['trainernavbar/trainerviewblogs']);
  }
}


