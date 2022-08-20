import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { PostserviceService } from 'src/app/postservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any;
  selected: any;
  routeLink: string;
  

constructor(public postService:PostserviceService) { }

ngOnInit(): void { 
  this.postService.getBlogCategory().subscribe((data)=>{
    this.categories = JSON.parse(JSON.stringify(data));
    this.routeLink = "/homecategory/";
    console.log(this.categories);
  })

 }
 
 }

