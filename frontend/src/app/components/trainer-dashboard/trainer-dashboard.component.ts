import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/postservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-trainer-dashboard',
  templateUrl: './trainer-dashboard.component.html',
  styleUrls: ['./trainer-dashboard.component.css']
})
export class TrainerDashboardComponent implements OnInit {
  public posts = {
      title: '',
      description: '',
      image:'', 
    };
constructor(private service:PostserviceService,private router:Router) { }
ngOnInit(): void {}
    selectImage(event:any){
      if(event.target.files.length>0){
        const file=event.target.files[0];
        this.posts.image=file;
      }
    }
createpost(){
      const formData=new FormData();
      formData.append('image', this.posts.image)
      formData.append('title',this.posts.title)
      formData.append('description',this.posts.description)
      formData.append('currentEmail',localStorage.getItem('emailToken') || '{}')
      formData.append('userType',localStorage.getItem('userTrainer') || '{}')
      formData.append('currentUser',localStorage.getItem('currentTrainer') || '{}')
      this.service.useradd(formData);
         Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your post has been created',
                  showConfirmButton: false,
                  timer: 2000
                }) 
      this.router.navigate(['trainernavbar/trainerviewblogs'])     
          }
}
