import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import { usermongo } from './product';


@Component({
  selector: 'app-admin-single-blog-page',
  templateUrl: './admin-single-blog-page.component.html',
  styleUrls: ['./admin-single-blog-page.component.css']
})
export class AdminSingleBlogPageComponent implements OnInit {
  _id: string | null;
  sub: any;
  product: usermongo;
  Blogs: Object;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _postService:PostserviceService) {

   }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      // console.log(params);
      // console.log("Heelllooo");
       this._id = params.get('_id'); 
      //  console.log(this._id);
      //  let products=this._postService.getAllBlogs();
      //  this.product=products.find(this._id);    
   });
   
 this._postService.getBlogById(this._id).subscribe((res)=>
 {
   // this.books=JSON.parse(JSON.stringify(data))
   console.log(res);
   this.Blogs = res;
   // this.time = this.Blogs._id.getTimestamp();
   // console.log(this.Blogs._id.getTimestamp());
   // alert(this.time);
  //  this.length1 = this.Blogs.length;
   
   // id: id.toString();
   // title: name;
   // file: ;
   // authorname: ;
   // date: ;
   // actions: ;
 });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
  onBack(): void {
    //  this._router.navigate(['product']);
  }

}
