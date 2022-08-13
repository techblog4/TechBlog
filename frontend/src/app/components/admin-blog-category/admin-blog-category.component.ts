// import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';



@Component({
  selector: 'app-admin-blog-category',
  templateUrl: './admin-blog-category.component.html',
  styleUrls: ['./admin-blog-category.component.css']
})
export class AdminBlogCategoryComponent implements OnInit {
  blogcategoryhide=true;
  submittedblogcategory=false;
  blogcategoryForm!: FormGroup;

  constructor(private fb:FormBuilder,private service:ServiceService,
    private router:Router) { }  
    
  ngOnInit(): void {
    this.blogcategoryForm =this.fb.group({
      blogCategory:['',[Validators.required]]
    })
    
  }
  get blogcategory(){
    return this.blogcategoryForm.controls
  } 
  onsubmitblogcategory(values:any){
    this.submittedblogcategory=true;
    this.service.addblogcategory(values)
    .subscribe((data)=>{
    var x=JSON.parse(JSON.stringify(data))
    if(x.status){
    }else{
        alert("error");
      }
  });
    
  } 

}
