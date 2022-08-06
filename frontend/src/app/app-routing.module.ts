import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApproveBlogComponent } from './components/admin-approve-blog/admin-approve-blog.component';
import { AdminBlogCategoryComponent } from './components/admin-blog-category/admin-blog-category.component';
import { AdminBlogListComponent } from './components/admin-blog-list/admin-blog-list.component';
import { AdminChangePasswordComponent } from './components/admin-change-password/admin-change-password.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSingleBlogPageComponent } from './components/admin-single-blog-page/admin-single-blog-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';

 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'footer',component:FooterComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,
    children: [
      {path:'admin-blog-list',component:AdminBlogListComponent,
      children:[
        {path:'admin-single-blog-page/:_id',component:AdminSingleBlogPageComponent}
      ]},
      {path:'admin-blog-category',component:AdminBlogCategoryComponent},
      {path:'admin-approve-blog',component:AdminApproveBlogComponent},
    
    ]
  },
  {path:'studenthome',component:StudentDashboardComponent},
  {path:'trainerhome',component:TrainerDashboardComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
