import { Component, OnInit } from '@angular/core';
import { usermongo } from '../admin-single-blog-page/product';
import { PostserviceService } from 'src/app/postservice.service';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trainer-single-blogpage',
  templateUrl: './trainer-single-blogpage.component.html',
  styleUrls: ['./trainer-single-blogpage.component.css']
})
export class TrainerSingleBlogpageComponent implements OnInit {
  _id: string | null;
  sub: any;
  product: usermongo;
  userName: Object;
  title: any;
  description: any;
  image:any;

  public model = {
    
    currentEmail : localStorage.getItem('emailToken')
    
    
  };
  date: any;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _postService:PostserviceService) {

   }
  

  ngOnInit(): void {

    this._postService.getUserName(this.model).subscribe((data)=>{
     this.userName=data[0].name;
    })

    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this._id = params.get('_id'); 
      let id = params.get('_id'); 
      this._postService.getBlogById(id).subscribe((res)=>
      {
        const myJSON = JSON.stringify(res);
        const myObj = JSON.parse(myJSON);
        this.title = myObj.title;
        this.date = myObj.date1;
        this.description = myObj.description;
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
