import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  title = 'Title';
  
  public model = {
      name: '',
      description: '<p></p>',
      file:''
    };
    onSubmit() {
      console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
