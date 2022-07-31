// import {FlatTreeControl} from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { categoryModel} from './categoryModel';



@Component({
  selector: 'app-admin-blog-category',
  templateUrl: './admin-blog-category.component.html',
  styleUrls: ['./admin-blog-category.component.css']
})
export class AdminBlogCategoryComponent implements OnInit {
  categoryModel=new categoryModel( "" );
  hide=true; 
  submitted=false;
  constructor(public fb:FormBuilder,private service:ServiceService,private router:Router) {}
  categoryForm =this.fb.group({
    blogCategory:['',[Validators.required]]
     })
     get blogCategory(){
      return this.categoryForm.controls
    }
  oncategorysubmit(values:any){
    this.submitted=true;
    this.service.addBlogCategory(this.categoryModel);
    } 

  ngOnInit(): void {
  }

}
