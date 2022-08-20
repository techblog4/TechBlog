import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent implements OnInit {
  sub: any;
  title: any;
  description: any;
  date: any;
  image: any;
  id: string | null;
  blogs: any;
  catId: any;
           //  categories
  categories: any;
  selected: any;
  routeLink: string;

constructor(private _Activatedroute:ActivatedRoute,private _router:Router,private _postService:PostserviceService) { }

ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      let id = params.get('id'); 
      this._postService.getBlogByCategory(id).subscribe((res)=>
      {
        const myJSON = JSON.stringify(res);
        this.blogs = JSON.parse(myJSON);
      });
      this._postService.getCategoryById(id).subscribe((res)=>
      {
        const category = JSON.stringify(res);
        this.catId = JSON.parse(category);
      }
      )
          // category dropmenu
    this._postService.getBlogCategory().subscribe((data)=>{
        this.categories = JSON.parse(JSON.stringify(data));
        this.routeLink = "/homecategory/";
        console.log(this.categories);
      });
  });
  }
singleBlog(Blogs:any){
    {
      localStorage.setItem("editBlogId",Blogs._id.toString());
      this._router.navigate(['singleviewpage']);
    }
  }
}
