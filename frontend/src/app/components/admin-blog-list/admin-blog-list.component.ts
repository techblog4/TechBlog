import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement1 {
  name1: string;
  position1: number;
  weight1: number;
  symbol1: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  {position1: 1, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H'},
  {position1: 2, name1: 'Helium', weight1: 4.0026, symbol1: 'He'},
  {position1: 3, name1: 'Lithium', weight1: 6.941, symbol1: 'Li'},
  {position1: 4, name1: 'Beryllium', weight1: 9.0122, symbol1: 'Be'},
  {position1: 5, name1: 'Boron', weight1: 10.811, symbol1: 'B'},
  {position1: 6, name1: 'Carbon', weight1: 12.0107, symbol1: 'C'},
  {position1: 7, name1: 'Nitrogen', weight1: 14.0067, symbol1: 'N'},
  {position1: 8, name1: 'Oxygen', weight1: 15.9994, symbol1: 'O'},
  {position1: 9, name1: 'Fluorine', weight1: 18.9984, symbol1: 'F'},
  {position1: 10, name1: 'Neon', weight1: 20.1797, symbol1: 'Ne'},
];
export interface PeriodicElement2 {
  name2: string;
  position2: number;
  weight2: number;
  symbol2: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {position2: 1, name2: 'Hydrogen', weight2: 1.0079, symbol2: 'H'},
 
];
export interface PeriodicElement3 {
  name1: string;
  position3: number;
  weight1: number;
  symbol1: string;
}

const ELEMENT_DATA3: PeriodicElement3[] = [
  {position3: 1, name1: 'Hydrogen', weight1: 1.0079, symbol1: 'H'},
  {position3: 2, name1: 'Helium', weight1: 4.0026, symbol1: 'He'},
  {position3: 3, name1: 'Lithium', weight1: 6.941, symbol1: 'Li'},
  {position3: 4, name1: 'Beryllium', weight1: 9.0122, symbol1: 'Be'},
  {position3: 5, name1: 'Boron', weight1: 10.811, symbol1: 'B'},
  {position3: 6, name1: 'Carbon', weight1: 12.0107, symbol1: 'C'},
  
];

@Component({
  selector: 'app-admin-blog-list',
  templateUrl: './admin-blog-list.component.html',
  styleUrls: ['./admin-blog-list.component.css']
})


export class AdminBlogListComponent implements OnInit {
  displayedColumns1: string[] = ['position1', 'name1', 'weight1', 'symbol1'];
  displayedColumns2: string[] = ['position2', 'name2', 'weight2', 'symbol2'];
  displayedColumns3: string[] = ['position3', 'name3', 'weight3', 'symbol3'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);
  dataSource3 = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA3);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource1.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator;
    this.dataSource3.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
