import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PostserviceService } from 'src/app/postservice.service';
import { usermongo } from './product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-single-blog-page',
  templateUrl: './admin-single-blog-page.component.html',
  styleUrls: ['./admin-single-blog-page.component.css']
})

export class AdminSingleBlogPageComponent implements OnInit {
  _id: string | null;
  sub: any;
  product: usermongo;
  Blogs: Object;
  title: any;
  description: any;
  date: any;
  image: any;
  categories: any;

constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _postService:PostserviceService) {

   }
   optionArray1: string;
   optionArray2: string;
   optionArray3: string;
   options: string[] = ['Yes', 'No']; 
   selected:'';
   

approveBlog =  (selected: any) => {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
    this._id = params.get('_id'); 
    });

    Swal.fire({
      title: 'Are you sure?',
      text: 'Approve Blog Post!!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, approve!',
      cancelButtonText: 'Cancel approval'
    }).then((result) => {
      if (result.isConfirmed) {
        this._postService.approveBlog(this._id,selected);
        this._router.navigate(['admin-dashboard/admin-approve-blog'])
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Approved successfully',
        showConfirmButton: false,
        timer: 1500
      })
    }
    })
  };
  
rejectBlog =  () => {
    this.sub = this._Activatedroute.paramMap.subscribe(params => { 
      this._id = params.get('_id'); 
      });
  
      Swal.fire({
        title: 'Are you sure?',
        text: 'Reject Blog Post!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, reject!',
        cancelButtonText: 'Cancel reject'
      }).then((result) => {
        if (result.isConfirmed) {
          this._postService.rejectBlog(this._id);
          this._router.navigate(['admin-dashboard/admin-approve-blog'])
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Rejected successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
      })
  };
ngOnInit(): void {
    this._postService.getBlogCategory().subscribe((data)=>{
      this.categories = JSON.parse(JSON.stringify(data))
    })
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this._id = params.get('_id'); 
       let id = params.get('_id'); 
       this._postService.getBlogById(id).subscribe((res)=>
       {
         const myJSON = JSON.stringify(res);
         const myObj = JSON.parse(myJSON);
         this.title = myObj.title;
         this.description = myObj.description;
         this.date = myObj.date1;
         this.image = myObj.image;
         var temporalDivElement = document.createElement("div");
        // Set the HTML content with the providen
        temporalDivElement.innerHTML = this.description;
        // Retrieve the text property of the element (cross-browser support)
        this.description = temporalDivElement.textContent || temporalDivElement.innerText || "";
       });
   });

  }
ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

