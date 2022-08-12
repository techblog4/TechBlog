import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostserviceService } from 'src/app/postservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
          
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your post has been created',
          showConfirmButton: false,
          timer: 2000
        }) 
   this.router.navigate(['studentnavbar/studentviewblogs'])     
  }

  constructor(private service:PostserviceService,private router:Router) { }

  ngOnInit(): void {
    
  }

}
