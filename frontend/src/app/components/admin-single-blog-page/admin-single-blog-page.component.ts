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
  title: any;
  description: any;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _postService:PostserviceService) {

   }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this._id = params.get('_id'); 
       let id = params.get('_id'); 
       this._postService.getBlogById(id).subscribe((res)=>
       {
         const myJSON = JSON.stringify(res);
         const myObj = JSON.parse(myJSON);
         this.title = myObj.title;
         this.description = myObj.description;
       });
   });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

