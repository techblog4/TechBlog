import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminApproveBlogComponent } from './components/admin-approve-blog/admin-approve-blog.component';
import { AdminBlogCategoryComponent } from './components/admin-blog-category/admin-blog-category.component';
import { AdminBlogListComponent } from './components/admin-blog-list/admin-blog-list.component';
import { AdminChangePasswordComponent } from './components/admin-change-password/admin-change-password.component';
import { AdminDashboardChildComponent } from './components/admin-dashboard-child/admin-dashboard-child.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminSingleBlogApproveComponent } from './components/admin-single-blog-approve/admin-single-blog-approve.component';
import { AdminSingleBlogPageComponent } from './components/admin-single-blog-page/admin-single-blog-page.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeCategoriesComponent } from './components/home-categories/home-categories.component';
import { HomeComponent } from './components/home/home.component';
import { HomecardsComponent } from './components/homecards/homecards.component';
import { HomesingleCategoryviewComponent } from './components/homesingle-categoryview/homesingle-categoryview.component';
import { InnerfooterComponent } from './components/innerfooter/innerfooter.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SinglepageComponent } from './components/singlepage/singlepage.component';
import { SingleviewPageComponent } from './components/singleview-page/singleview-page.component';
import { StudentDashboardChildComponent } from './components/student-dashboard-child/student-dashboard-child.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentNavbarComponent } from './components/student-navbar/student-navbar.component';
import { StudentSingleBlogpageComponentComponent } from './components/student-single-blogpage-component/student-single-blogpage-component.component';
import { StudentViewblogsComponent } from './components/student-viewblogs/student-viewblogs.component';
import { TrainerDashboardChildComponent } from './components/trainer-dashboard-child/trainer-dashboard-child.component';
import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';
import { TrainerNavbarComponent } from './components/trainer-navbar/trainer-navbar.component';
import { TrainerSingleBlogpageComponent } from './components/trainer-single-blogpage/trainer-single-blogpage.component';
import { TrainerviewblogsComponent } from './components/trainerviewblogs/trainerviewblogs.component';
import { UpadateblogStudentComponent } from './components/upadateblog-student/upadateblog-student.component';
import { UpdateblogsComponent } from './components/updateblogs/updateblogs.component';

 

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'footer',component:FooterComponent},


  {path:'admin-dashboard',canActivate:[AuthGuard],component:AdminDashboardComponent,
    children: [
      {path:'admin-blog-list',component:AdminBlogListComponent,},
      {path:'admin-single-blog-page/:_id',component:AdminSingleBlogPageComponent},
      {path:'admin-aprove/:_id',component:AdminSingleBlogApproveComponent},
      {path:'admin-blog-category',component:AdminBlogCategoryComponent},
      {path:'admin-approve-blog',component:AdminApproveBlogComponent},
      {path:'admin-dashboard-child',component:AdminDashboardChildComponent},
      {path:'admin-change-password',component:AdminChangePasswordComponent},
    
    ]
  },
  {path:'categorylist',component:CategorylistComponent},
  {path:'singlepage',component:SinglepageComponent},
  {path:'innerfooter',component:InnerfooterComponent},
  {path:"homecards",component:HomecardsComponent},
  {path:"singleviewpage",component:SingleviewPageComponent},
  {path:"homecategory/:id",component:HomeCategoriesComponent},
  {path:"homesinglecatagoryview",component:HomesingleCategoryviewComponent},
  
 
  {path:'studentnavbar',canActivate:[AuthGuard],component:StudentNavbarComponent,
 children:
 [
  {path:'studenthome',component:StudentDashboardComponent},
  {path:'studentviewblogs',component:StudentViewblogsComponent},
  {path:'student-dashboard-child',component:StudentDashboardChildComponent},
  {path:'student-single-blogpage/:_id',component:StudentSingleBlogpageComponentComponent},
  {path:"studentupdate",component:UpadateblogStudentComponent},

]
},







  {path:'trainernavbar',canActivate:[AuthGuard],component:TrainerNavbarComponent,

   children:
   [
    {path:'trainerhome',component:TrainerDashboardComponent},
    {path:'trainerviewblogs',component:TrainerviewblogsComponent},
    {path:'trainer-dashboard-child',component:TrainerDashboardChildComponent},
    {path:'trainer-single-blogpage/:_id',component:TrainerSingleBlogpageComponent},
    {path:"trainerupdate",component:UpdateblogsComponent},
   ]
  }
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
