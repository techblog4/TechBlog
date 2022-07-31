import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { signupmodel } from './signupmode';
import { Router } from '@angular/router';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';


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
    private router:Router,private MatDialog:MatDialog) { }

   
  signupForm =this.fb.group({
    name:['',[Validators.required]],
    
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
  
    })
    
    
  get signup(){
    return this.signupForm.controls
  }
  
  onsubmitsignup(values:any){
  this.submittedsignup=true;
  console.log({values});
  //  alert("submitted")
  
   var register=this.service.addsignup(this.sign);
  //  if (register){
  //   alert(JSON.stringify(register));
  //  }else{
  //   alert(JSON.stringify(register));
  //  }
  //  register(function (err) {
  //   if (!err) {
  //     res.status(200);
      
  //   }
  //   else{
  //       console.log("error");
    // }
  // });
  // .subscribe((data)=>{
  //   alert(data);
  //this.router.navigate(['/admin-dashboard']);
  // window.location.reload;
  
  };

  oncreate(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.disableClose=true;
    dialogconfig.autoFocus=true;
    dialogconfig.width="40%";
    
    this.MatDialog.open(LoginComponent,dialogconfig);
    
}
  ngOnInit(): void {
  }

}
