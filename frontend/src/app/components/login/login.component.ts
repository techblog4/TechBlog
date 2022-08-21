import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide=true; 
  submitted=false;
  loginForm!: FormGroup; 
  totalBlogs: any;

constructor(public fb:FormBuilder,private postserve:PostserviceService,private service:ServiceService,
private router:Router) { }

ngOnInit(): void {
    this.loginForm =this.fb.group({
    email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})$')]],
    password:['',[Validators.required,Validators.minLength(5)]]
    })
    
}
get login() {
    return this.loginForm.controls
    }
      
onsubmitlogin(values:any){
        this.submitted=true;
        this.service.loginadd(values)
         .subscribe((res)=>{
          var x=JSON.parse(JSON.stringify(res));
          console.log(x);
          console.log(x.decoded1);
         
          if(x.student){
              localStorage.setItem('token',x.token);
              localStorage.setItem('studentEmailToken',x.decoded1);
              localStorage.setItem('userStudent',"Student");
              this.postserve.getCurrentUser(x.decoded1)
              .subscribe((res)=>{
              var y=JSON.parse(JSON.stringify(res));
              localStorage.setItem('currentStudent',y.name);
              })
              this.router.navigate(['studentnavbar/student-dashboard-child']);
          }
          else if(x.trainer){
              localStorage.setItem('token',x.token);
              localStorage.setItem('emailToken',x.decoded);
              localStorage.setItem('userTrainer',"Trainer");
              this.postserve.getCurrentUser(x.decoded)
              .subscribe((res)=>{
              var y=JSON.parse(JSON.stringify(res));
              localStorage.setItem('currentTrainer',y.name);
              })
              this.router.navigate(['trainernavbar/trainer-dashboard-child']);
            }
          else if(x.admin){
              localStorage.setItem('token',x.token);
              localStorage.setItem('adminEmailToken',x.decodedAdminEmail);
              localStorage.setItem('userAdmin',"Admin");
              this.router.navigate(['admin-dashboard/admin-dashboard-child']);
            }
          else if(x.unathorised){
            alert("Invalid email or password");
          }
        });
          
      }   
      
    }
    