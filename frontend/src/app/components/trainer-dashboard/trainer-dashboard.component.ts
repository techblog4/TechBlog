import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {
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
