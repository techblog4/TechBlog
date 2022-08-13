import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PostserviceService } from 'src/app/postservice.service';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {
  posts:any;
  constructor(private postserve:PostserviceService,private router:Router) { }

  ngOnInit(): void {
    this.postserve.homeadd().subscribe((data)=>{
      this.posts= JSON.parse(JSON.stringify(data));
     //  console.log(data);
     
   })    
  }
//   var temporalDivElement = document.createElement("div");
//   // Set the HTML content with the providen
//      temporalDivElement.innerHTML = this.description;
//   // Retrieve the text property of the element (cross-browser support)
//   this.description = temporalDivElement.textContent || temporalDivElement.innerText || "";
 }
