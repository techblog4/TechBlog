import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import { usermongo } from './model';

@Component({
  selector: 'app-admin-single-blog-approve',
  templateUrl: './admin-single-blog-approve.component.html',
  styleUrls: ['./admin-single-blog-approve.component.css']
})
export class AdminSingleBlogApproveComponent implements OnInit {
  _id: string | null;
  sub: any;
  product: usermongo;
  Blogs: Object;
  title: any;
  description: any;
  date: any;
  image: any;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _postService:PostserviceService) { }

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
        this.date = myObj.date1;
        this.image = myObj.image;
        var temporalDivElement = document.createElement("div");
       // Set the HTML content with the providen
       temporalDivElement.innerHTML = this.description;
       // Retrieve the text property of the element (cross-browser support)
       this.description = temporalDivElement.textContent || temporalDivElement.innerText || "";
      });
  });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
