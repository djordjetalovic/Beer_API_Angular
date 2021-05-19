import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchValue:any;

  ColumnMode = ColumnMode;
  constructor() {

   }

  ngOnInit() {
  }

  

}
