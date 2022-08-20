import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  url="./assets/images/tech-logo-blue.png";
constructor() { }

ngOnInit(): void {
  }

}
