import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
// import {MatSort} from '@angular/material/sort';
import { PostserviceService } from 'src/app/postservice.service';
// import { blogListModel } from './blogListModel';
// import {PageEvent} from '@angular/material/paginator';



export interface UserData {
  id: string;
  title: string;
  file: string;
  authorname: string;
  date: string;
  actions: string;
}

/** Constants used to fill up our data base. */
// const FRUITS: string[] = [
//   'blueberry',
//   'lychee',
//   'kiwi',
//   'mango',
//   'peach',
//   'lime',
//   'pomegranate',
//   'pineapple',
// ];
// const NAMES: string[] = [
//   'Maia',
//   'Asher',
//   'Olivia',
//   'Atticus',
//   'Amelia',
//   'Jack',
//   'Charlotte',
//   'Theodore',
//   'Isla',
//   'Oliver',
//   'Isabella',
//   'Jasper',
//   'Cora',
//   'Levi',
//   'Violet',
//   'Arthur',
//   'Mia',
//   'Thomas',
//   'Elizabeth',
// ];

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.css']
})


export class AdminBlogListComponent implements OnInit {
  // blogs:blogListModel[]|any;
  Blogs:any=[];
  // length:100;
  pageSize:10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length1 : 0;
  // pageEvent: PageEvent;


  displayedColumns: string[] = ['id', 'title', 'file', 'authorname','date','actions'];
  dataSource: MatTableDataSource<UserData>;
  time: any;

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  
constructor(private postserve:PostserviceService) {
  // // Create 100 users
  // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

  // // Assign the data to the data source for the table to render
  // this.dataSource = new MatTableDataSource(users);
}

ngOnInit() {
//   this.postserve.getAllBlogs().subscribe((data)=>{
//     this.blogs= JSON.parse(JSON.stringify(data));
//     var allBlogs = this.blogs;
//     console.log(allBlogs);
   
//  })
 this.postserve.getAllBlogs().subscribe((res)=>
    {
      // this.books=JSON.parse(JSON.stringify(data))
      console.log(res);
      this.Blogs = res;
      // this.time = this.Blogs._id.getTimestamp();
      console.log(this.Blogs._id.getTimestamp());
      alert(this.time);
      this.length1 = this.Blogs.length;
      
      // id: id.toString();
      // title: name;
      // file: ;
      // authorname: ;
      // date: ;
      // actions: ;
    });
  // this.dataSource.paginator = this.paginator;
  // this.dataSource.sort = this.sort;
}

// applyFilter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();

//   if (this.dataSource.paginator) {
//     this.dataSource.paginator.firstPage();
//   }
// }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
// const name =
//   NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//   ' ' +
//   NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//   '.';

// return {
//   id: id.toString(),
//   name: name,
//   progress: Math.round(Math.random() * 100).toString(),
//   fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
// };
// }
