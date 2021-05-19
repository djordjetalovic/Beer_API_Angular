import { Component, OnInit, Input, SimpleChange, OnChanges, ViewChild } from '@angular/core';
import { pipe } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { BeerService } from 'src/app/beer.service';
import { CalcService } from 'src/app/calc.service';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-combined-table',
  templateUrl: './combined-table.component.html',
  styleUrls: ['./combined-table.component.css']
})
export class CombinedTableComponent implements OnInit, OnChanges {
 
  @Input() searchTerm:any;
  unfilteredData: any
  ColumnMode = ColumnMode;
  beerData: any;

  

  constructor(private beerService: BeerService,
              private calcService: CalcService) { 

  }

  ngOnInit() {
    // this.beerService.getBeerData()
    // .subscribe((res) => {
    //   this.beerData = this.calcService.getCalcBeerData(res);
    // })

    this.beerService.changeSubject$
    .pipe(
      
    )
    .subscribe((res) => {
      this.unfilteredData = res;
      this.beerData = this.calcService.getCalcBeerData(res);
      
    })
  }

  ngOnChanges(changes: any) {
    
    if(changes.searchTerm.currentValue !== undefined) {
      let filteredData
      if(this.unfilteredData) {
        filteredData = this.unfilteredData.filter((info: any) => {
        return info.name.toLocaleLowerCase().includes(this.searchTerm);
      })}
      
        this.beerData = this.calcService.getCalcBeerData(filteredData);  
    }

  }

}
