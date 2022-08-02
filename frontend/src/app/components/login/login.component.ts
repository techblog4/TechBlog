import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
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
loginForm!: FormGroup; 

constructor(public fb:FormBuilder,private service:ServiceService,
            private router:Router) { }

 ngOnInit(): void {
        

     this.loginForm =this.fb.group({
     email:['',[Validators.required,Validators.pattern('^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$')]],
     password:['',[Validators.required,Validators.minLength(5)]]
      })
    
}
get login() {
      return this.loginForm.controls
      }
      
onsubmitlogin(values:any){
        this.submitted=true;
        //console.log({values});
        
      this.service.loginadd(this.loginForm)
      .subscribe((data)=>{
           var x=JSON.parse(JSON.stringify(data))
          console.log(x);
          if(x.student){
              this.router.navigate(['studenthome']);
          }
          else if(x.trainer) {
            this.router.navigate(['trainerhome']);
            }
          else{
              alert("error");
            }
        });
          
      }   
       
    }


      
     

