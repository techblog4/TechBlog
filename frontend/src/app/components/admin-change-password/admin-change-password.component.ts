import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-change-password',
  templateUrl: './admin-change-password.component.html',
  styleUrls: ['./admin-change-password.component.css']
})
export class AdminChangePasswordComponent implements OnInit {
pwdHide1=true;
pwdHide2=true;
pwdHide3=true;
submittedChangePwd=false;
adminEmail = localStorage.getItem('adminEmailToken');

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
  
    }
    )
    
}
get passwordChange(){
return this.changePwdForm.controls
} 



changePwd(values:any){
  this.submittedChangePwd=true;
    this.postService.changePwd(values,this.adminEmail)
     .subscribe((data)=>{
      this.router.navigate(['admin-dashboard/admin-dashboard-child']);
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
