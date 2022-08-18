import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {
// hide=true; 
signuphide=true;
submittedsignup=false;
signupForm!: FormGroup;

constructor(private fb:FormBuilder,private service:ServiceService,
private router:Router) { }

ngOnInit(): void {

  this.signupForm =this.fb.group({
    currentpassword:['',[Validators.required,Validators.minLength(5)]],
    password:['',[Validators.required,Validators.minLength(5)]],
    confirmpassword:['',[Validators.required]]
    },{
      validator:()=>{
        if(this.signupForm?.controls?.['password'].value !=this.signupForm?.controls?.['confirmpassword'].value){
          // console.log("inside condition")
          this.signupForm.controls?.['confirmpassword'].setErrors({passwordMismatch:true})
          // console.log("success",this.signupForm)
        }
      }
  
    })
    
}
get signup(){
return this.signupForm.controls
} 



onsubmitsignup(values:any){
this.submittedsignup=true;


} 
}    
