import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostserviceService } from 'src/app/postservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {
  title = 'Title';
  
  public model = {
      title: '',
      description: '',
      file:''
      
    };
    onSubmit() {
      // console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
      this.service.useradd(this.model)
        .subscribe((data)=>{
          // console.log(data);
          
        })
       
  }

  constructor(private service:PostserviceService,private router:Router) { }

  ngOnInit(): void {
    
  }

}
