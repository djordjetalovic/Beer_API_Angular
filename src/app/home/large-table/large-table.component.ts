import { Component, Input, OnChanges, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BeerService } from 'src/app/beer.service';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Page } from 'src/app/page';



@Component({
  selector: 'app-large-table',
  templateUrl: './large-table.component.html',
  styleUrls: ['./large-table.component.css']
})
export class LargeTableComponent implements OnInit {
  @ViewChild('editTmpl', { static: true }) editTmpl: any;
  @Input() searchTerm:any;
  beerData: any;
  resultArray:any;

  ColumnMode = ColumnMode;

  rows = new Array();

  page = new Page();

  columns:any;
  

  constructor(private beerService: BeerService) { 
    
  }
  
  ngOnInit() {
    this.columns = [{ name: 'id' }, 
  { name: 'Name' }, { name: 'Image', cellTemplate: this.editTmpl }, 
  { name: 'First brewed', prop: 'first_brewed' }, 
  { name: 'ABV' }];
  
    this.setPage({ offset: 0 });

  }


  setPage(pageInfo: any) {
    this.page.pageNumber = pageInfo.offset;
    this.beerService.getBeerData(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
      
      this.beerService.changeSubject$.next(this.rows);
    });
  }

}
