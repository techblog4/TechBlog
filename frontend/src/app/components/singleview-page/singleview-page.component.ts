import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-singleview-page',
  templateUrl: './singleview-page.component.html',
  styleUrls: ['./singleview-page.component.css']
})
export class SingleviewPageComponent implements OnInit {
constructor(public serve:PostserviceService) { }
  Blogs:any=[];
    //  categories
  categories: any;
  selected: any;
  routeLink: string;
  
ngOnInit(): void {
    let postId = localStorage.getItem("editBlogId");
    this.serve.singlePost(postId).subscribe((data)=>{
      this.Blogs=JSON.parse(JSON.stringify(data));
      
      var temporalDivElement = document.createElement("div");
      // Set the HTML content with the providen
      temporalDivElement.innerHTML = this.Blogs.description;
      // Retrieve the text property of the element (cross-browser support)
      this.Blogs.description = temporalDivElement.textContent || temporalDivElement.innerText || "";
  
  })
  //categorydropdown menu
  this.serve.getBlogCategory().subscribe((data)=>{
    this.categories = JSON.parse(JSON.stringify(data));
    this.routeLink = "/homecategory/";
   
  })
  
}
}