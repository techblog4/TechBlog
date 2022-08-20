import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/postservice.service';

@Component({
  selector: 'app-admin-dashboard-child',
  templateUrl: './admin-dashboard-child.component.html',
  styleUrls: ['./admin-dashboard-child.component.css']
})
export class AdminDashboardChildComponent implements OnInit {
    totalBlogs = localStorage.getItem('totalBlogs'); 
    approvedBlogs = localStorage.getItem('approvedBlogs');  
    rejectedBlogs = localStorage.getItem('rejectedBlogs'); 
    pendingBlogs = localStorage.getItem('pendingBlogs');
  counts: any;
  constructor(private postService:PostserviceService) { }

  ngOnInit(): void {
    this.postService.getBlogCounts().subscribe((data)=>{
      this.counts = JSON.parse(JSON.stringify(data));
      localStorage.setItem('totalBlogs',this.counts.totalBlogs);
      localStorage.setItem('approvedBlogs',this.counts.approvedBlogs);
      localStorage.setItem('pendingBlogs',this.counts.pendingBlogs);
      localStorage.setItem('rejectedBlogs',this.counts.rejectedBlogs);
    });
  }

}
