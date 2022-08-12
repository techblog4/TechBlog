import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import { AdminBlogListComponent } from './components/admin-blog-list/admin-blog-list.component';
import { AdminBlogCategoryComponent } from './components/admin-blog-category/admin-blog-category.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTreeModule} from '@angular/material/tree';
import { AdminApproveBlogComponent } from './components/admin-approve-blog/admin-approve-blog.component';
import { MatSortModule } from '@angular/material/sort';
import { AdminChangePasswordComponent } from './components/admin-change-password/admin-change-password.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { PostserviceService } from './postservice.service';
import { ServiceService } from './service.service';
import { AdminSingleBlogPageComponent } from './components/admin-single-blog-page/admin-single-blog-page.component';


import { StudentNavbarComponent } from './components/student-navbar/student-navbar.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentViewblogsComponent } from './components/student-viewblogs/student-viewblogs.component';
import { TrainerNavbarComponent } from './components/trainer-navbar/trainer-navbar.component';
import { TrainerviewblogsComponent } from './components/trainerviewblogs/trainerviewblogs.component';
import { SinglepageComponent } from './components/singlepage/singlepage.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { InnerfooterComponent } from './components/innerfooter/innerfooter.component';
import { FileUploadModule } from 'ng2-file-upload';
import { AdminDashboardChildComponent } from './components/admin-dashboard-child/admin-dashboard-child.component';
import { TrainerDashboardChildComponent } from './components/trainer-dashboard-child/trainer-dashboard-child.component';
import { StudentDashboardChildComponent } from './components/student-dashboard-child/student-dashboard-child.component';
import { HomecardsComponent } from './components/homecards/homecards.component';
import { TrainerSingleBlogpageComponent } from './components/trainer-single-blogpage/trainer-single-blogpage.component';
import { StudentSingleBlogpageComponentComponent } from './components/student-single-blogpage-component/student-single-blogpage-component.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { UpdateblogsComponent } from './components/updateblogs/updateblogs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    FooterComponent,
    AdminDashboardComponent,
    TrainerDashboardComponent,
    AdminBlogListComponent,
    AdminBlogCategoryComponent,
    AdminApproveBlogComponent,
    AdminChangePasswordComponent,
    AdminSingleBlogPageComponent,
    StudentNavbarComponent,
    StudentDashboardComponent,
    StudentViewblogsComponent,
    TrainerNavbarComponent,
    TrainerviewblogsComponent,
    SinglepageComponent,
    CategorylistComponent,
    InnerfooterComponent,
    AdminDashboardChildComponent,
    TrainerDashboardChildComponent,
    StudentDashboardChildComponent,
    HomecardsComponent,
    TrainerSingleBlogpageComponent,
    StudentSingleBlogpageComponentComponent,
    UpdateblogsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatTreeModule,
    MatSortModule,
    CKEditorModule,
    FileUploadModule 
    
  ],
  providers: [ PostserviceService,ServiceService,
             {
            provide:HTTP_INTERCEPTORS,
            useClass:TokenInterceptorService,
            multi: true
             }
            ],
  
  bootstrap: [AppComponent],
  // entryComponents:[SignUpComponent,LoginComponent]
  
})
export class AppModule { }
