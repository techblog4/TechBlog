import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApproveBlogComponent } from './components/admin-approve-blog/admin-approve-blog.component';
import { AdminBlogCategoryComponent } from './components/admin-blog-category/admin-blog-category.component';
import { AdminBlogListComponent } from './components/admin-blog-list/admin-blog-list.component';
import { AdminChangePasswordComponent } from './components/admin-change-password/admin-change-password.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
 

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'footer',component:FooterComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,
    children: [
      {path:'admin-blog-list',component:AdminBlogListComponent},
      {path:'admin-approve-blog',component:AdminApproveBlogComponent},
      {path:'admin-blog-category',component:AdminBlogCategoryComponent},
      {path:'admin-change-password',component:AdminChangePasswordComponent}
    ]
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
