import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(public serve:ServiceService) { }

ngOnInit(): void { 


 }
 
 }

