import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true; 
submitted=false;
constructor(public fb:FormBuilder,private service:ServiceService,private router:Router) { }

 loginForm =this.fb.group({
     email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
      })
    
    
     get login() {
       return this.loginForm.controls
       }
      onsubmitlogin(values:any){
      this.submitted=true;
     console.log({values});
      //alert("submitted");
      } 
      ngOnInit(): void {}
  

}
