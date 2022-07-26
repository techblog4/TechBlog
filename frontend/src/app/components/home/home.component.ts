import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private MatDialog:MatDialog) { }

  
  
oncreate(){
  const dialogconfig=new MatDialogConfig();
  dialogconfig.disableClose=true;
  dialogconfig.autoFocus=true;
  dialogconfig.width="40%";
  this.MatDialog.open(LoginComponent,dialogconfig);
}
ngOnInit(): void {  }
 }

