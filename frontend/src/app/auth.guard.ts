import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private serve:ServiceService,private route:Router){}
  canActivate():boolean{
    if(this.serve.loggedin()){
     return true;
    }
    else{
      
      this.route.navigate(['trainerviewblogs']);
      return false;
      
    
    }
  }
    
   
  
}
