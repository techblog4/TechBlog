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
import { HttpClientModule} from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { TrainerDashboardComponent } from './components/trainer-dashboard/trainer-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import { AdminBlogListComponent } from './components/admin-blog-list/admin-blog-list.component';
import { AdminBlogCategoryComponent } from './components/admin-blog-category/admin-blog-category.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    FooterComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    TrainerDashboardComponent,
    AdminBlogListComponent,
    AdminBlogCategoryComponent,
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
