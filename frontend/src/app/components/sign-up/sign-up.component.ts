import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { signupmodel } from './signupmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  sign=new signupmodel( "" , "", "", "");
  signuphide=true;
  submittedsignup=false;
  

  constructor(private fb:FormBuilder,private service:ServiceService,
  private router:Router) { }

   
    signupForm =this.fb.group({
    name:['',[Validators.required]],
    
    user:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password:['',[Validators.required,Validators.minLength(5)]],
    confirmpassword:['',[Validators.required]]
    },{
      validator:()=>{
        if(this.signupForm?.controls?.['password'].value !=this.signupForm?.controls?.['confirmpassword'].value){
          console.log("inside condition")
          this.signupForm.controls?.['confirmpassword'].setErrors({passwordMismatch:true})
          console.log("success",this.signupForm)
        }
      }
  
    })
    
    
  get signup(){
    return this.signupForm.controls
  }
  
  onsubmitsignup(values:any){
  this.submittedsignup=true;
  //console.log({values});

  this.service.addsignup(this.sign)
  .subscribe((res)=>{
    console.log(res);
    this.router.navigate(["/"]);
});
  }

  ngOnInit(): void {
    
  }
}




  
    