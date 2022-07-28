import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validator, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide=true; 
signuphide=true;
submitted=false;
submittedsignup=false;
constructor(private fb:FormBuilder) { }


/*loginform*/
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



/*signup form*/
signupForm =this.fb.group({
  name:['',[Validators.required]],
  lastname:['',[Validators.required]],
  user:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
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

  } 
  
  )
get signup(){
  return this.signupForm.controls
}

onsubmitsignup(values:any){
this.submittedsignup=true;
console.log({values});
// alert("submitted");
}

 ngOnInit(): void {
 } 

}
