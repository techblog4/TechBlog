import { Component, OnInit } from '@angular/core';
// import { homeModel } from './homemodel';
import { ServiceService } from 'src/app/service.service';
import { homeModel } from './homemodel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
img:homeModel[]|any;
  constructor(private service:ServiceService) { }

ngOnInit(): void { 
this.service.homeadd().subscribe((data)=>{
   this.img= JSON.parse(JSON.stringify(data));
   console.log(data);
  
})
 }
 }

