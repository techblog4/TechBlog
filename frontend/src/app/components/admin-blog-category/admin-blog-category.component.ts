import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { PostserviceService } from 'src/app/postservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-blog-category',
  templateUrl: './admin-blog-category.component.html',
  styleUrls: ['./admin-blog-category.component.css']
})
export class AdminBlogCategoryComponent implements OnInit {
  blogcategoryhide=true;
  submittedblogcategory=false;
  blogcategoryForm!: FormGroup;
  blogCategories: any;
  categories: any;
  category: any;

  constructor(private fb:FormBuilder,private service:ServiceService, private postService:PostserviceService, private router:Router) { }  
    
  ngOnInit(): void {
    this.blogcategoryForm =this.fb.group({
      blogCategory:['',[Validators.required]]
    })
    this.postService.getBlogCategory().subscribe((data)=>{
      this.categories = JSON.parse(JSON.stringify(data))
    })
  }
  get blogcategory(){
    return this.blogcategoryForm.controls
  } 
  editPost(Blogs:any){
    {
      localStorage.setItem("editBlogId", Blogs._id.toString());
      this.router.navigate(['studentnavbar/studentupdate']);
  
    }
  }
  deletePost(blogCat:any)
  {

    this.postService.deleteCategory(blogCat._id)
      .subscribe((data) => {
        this.router.navigate(['admin-dashboard/admin-blog-category']);
        this.category = this.categories.filter((p:any) => p !== blogCat);
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
  onsubmitblogcategory(values:any){
    this.submittedblogcategory=true;
    this.service.addblogcategory(values)
    .subscribe((data)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your category has been updated',
        showConfirmButton: false,
        timer: 2000
      }) 
  });
    
  } 

}
