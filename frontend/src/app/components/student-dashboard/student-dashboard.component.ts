import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  // title = 'Title';
  
  public model = {
      title: '',
      description: '',
      file:'',
      authorname:'',
      date:''
    };
    onSubmit() {
      console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
      this.service.useradd(this.model)
        .subscribe((data)=>{
          console.log(data);
          
        })
        // this.router.navigate(['/'])
  }

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {
    
  }

}
