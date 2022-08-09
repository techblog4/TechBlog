import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostserviceService } from 'src/app/postservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
 
  
  public model = {
      title: '',
      description: '',
      file:'',
      currentEmail : localStorage.getItem('studentEmailToken')
      
    };
    onSubmit() {
      
      this.service.useradd(this.model)
        .subscribe((data)=>{
          console.log("success");
          
        })
        
  }

  constructor(private service:PostserviceService,private router:Router) { }

  ngOnInit(): void {
    
  }

}
