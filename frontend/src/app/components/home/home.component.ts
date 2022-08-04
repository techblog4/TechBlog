import { Component, OnInit } from '@angular/core';
// import { homeModel } from './homemodel';
import { PostserviceService } from 'src/app/postservice.service';
import { homeModel } from './homemodel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
img:homeModel[]|any;
  constructor(private postserve:PostserviceService) { }

ngOnInit(): void { 
this.postserve.homeadd().subscribe((data)=>{
   this.img= JSON.parse(JSON.stringify(data));
   console.log(data);
  
})
 }
 }

