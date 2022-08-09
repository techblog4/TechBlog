import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostserviceService } from 'src/app/postservice.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
const URL = 'http://localhost:4001/api/upload';
@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {
  title = 'Title';
  public uploader: FileUploader = new FileUploader({
    url: URL,
   itemAlias: 'file',
 });
  public model = {
      title: '',
      description: '',
      file:''
     
      
      
    };
    
    onSubmit() {
      

      // console.log( `Form submit, model: ${ JSON.stringify( this.model ) }` );
      // let postId = localStorage.getItem("token");
      this.service.useradd(this.model)
      .subscribe((data)=>{
      // console.log(data);
          
  })
       
  }

  constructor(private service:PostserviceService,private router:Router) { }

  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
  }
  
  }
}
