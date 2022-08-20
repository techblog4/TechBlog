import { Component, OnInit } from '@angular/core';
import { PostserviceService } from 'src/app/postservice.service';
@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.css']
})
export class HomecardsComponent implements OnInit {
 images:any; 
constructor(public postserve:PostserviceService) { }

ngOnInit(): void {
    this.postserve.carouselAdd().subscribe ((data)=>{
      this.images= JSON.parse(JSON.stringify(data));
    });
}

}
