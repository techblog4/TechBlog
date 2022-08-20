import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-trainer-navbar',
  templateUrl: './trainer-navbar.component.html',
  styleUrls: ['./trainer-navbar.component.css']
})
export class TrainerNavbarComponent implements OnInit {
  showFiller = false;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
constructor(public serve:ServiceService,private router:Router) { }

ngOnInit(): void {
  }
logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
   }
}
