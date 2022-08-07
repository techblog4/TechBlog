import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-navbar',
  templateUrl: './trainer-navbar.component.html',
  styleUrls: ['./trainer-navbar.component.css']
})
export class TrainerNavbarComponent implements OnInit {
  showFiller = false;
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  constructor() { }

  ngOnInit(): void {
  }

}
