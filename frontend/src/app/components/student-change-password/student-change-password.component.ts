import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-student-change-password',
  templateUrl: './student-change-password.component.html',
  styleUrls: ['./student-change-password.component.css']
})
export class StudentChangePasswordComponent implements OnInit {
  
  pwdHide2=true;
  pwdHide3=true;
  submittedChangePwd=false;
  email = localStorage.getItem('studentEmailToken');
  changePwdForm!: FormGroup;
  
constructor(private fb:FormBuilder,private postService:PostserviceService,
private router:Router) { }
  
ngOnInit(): void {
  
    this.changePwdForm =this.fb.group({ 
      password:['',[Validators.required,Validators.minLength(5)]],
      confirmpassword:['',[Validators.required,Validators.minLength(5)]],
      }
      ,{
        validator:()=>{
          if(this.changePwdForm?.controls?.['password'].value != this.changePwdForm?.controls?.['confirmpassword'].value){
            this.changePwdForm.controls?.['confirmpassword'].setErrors({passwordMismatch:true})
          }
        }
      })
      
}
  
get passwordChange(){
  return this.changePwdForm.controls
} 

changePwd(values:any){
  this.submittedChangePwd=true;
  this.postService.changePwd(values,this.email)
    .subscribe((data)=>{
     this.router.navigate(['studentnavbar/student-dashboard-child']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your password has been updated',
          showConfirmButton: false,
          timer: 2000
        }) 
    });
  }
}    
  
