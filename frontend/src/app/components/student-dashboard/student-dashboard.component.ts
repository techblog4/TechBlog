import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostserviceService } from 'src/app/postservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  
  public model = {
      title: '',
      description: '',
      file:'',
      currentEmail : localStorage.getItem('studentEmailToken'),
      // currentUser:localStorage.getItem('userName')
    };
   
    // public userEmail={
    //   email :localStorage.getItem('studentEmailToken')
    // }
  //  userName: any;
  

    constructor(private service:PostserviceService,private router:Router) { }



    // selectImage(event:any){
    //   if(event.target.files.length>0){
    //     const file=event.target.files[0];
    //     this.model.file=file;
    //   }
    //    }



    onSubmit() {

      // const formData=new FormData();
      // formData.append('file', this.model.file)
      // formData.append('title',this.model.title)
      // formData.append('description',this.model.description)
      
      // this.service.useradd(formData)
      // .subscribe((data)=>{console.log(data)})
      // console.log("Called");
      // alert("Thank you, your post be will be uploaded soon!!!");
      // this.router.navigate(['studentnavbar/studentviewblogs']);




  this.service.useradd(this.model)
      .subscribe((data)=>{
       console.log("success");
          
        });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your post has been created',
          showConfirmButton: false,
          timer: 2000
        }) 
    this.router.navigate(['studentnavbar/studentviewblogs'])     
  }

  

  ngOnInit(): void {
    // this.service.getUserName(this.userEmail).subscribe((data)=>{
    //   this.userName=data[0].name;
    //   localStorage.setItem('userName',this.userName);
    //  })
  
    //  var name= localStorage.getItem('userName');
    //  console.log(name);
  
  
    }




}
