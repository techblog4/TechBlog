import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {
  showFiller = false;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  
  constructor() { }

  ngOnInit(): void {
  
  }
}
