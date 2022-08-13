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
  

  ngOnInit(): void {
    let postId = localStorage.getItem("editBlogId");
    console.log(postId);
    this.serve.singlePost(postId).subscribe((data)=>{
      this.Blogs=JSON.parse(JSON.stringify(data));
      console.log(this.Blogs);
  })
  
  
}
}