import { AfterViewInit, Component, DoCheck, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { BeerService } from 'src/app/beer.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChild('searchInput') searchInput: any;
  searchValue:any;

  inputSubscription: any;

  searchResults: any;

  ColumnMode = ColumnMode;
  constructor(private beerService: BeerService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.inputSubscription = fromEvent(this.searchInput.nativeElement, 'keyup')
                            .pipe(
                              map((e:any) => e.target.value),
                              // tap((text:any) => {if(text === "") {this.searchResults = null}}), 
                              filter((text: any) => text.length > 1),
                              map((text:any) => text = text.replace(/ /g, "_")),
                              debounceTime(400),
                              tap((text:any) => console.log(text)),
                              switchMap((query:any) => this.beerService.searchBeerData(query)))
                            .subscribe((res:any) => {
                              console.log(res);
                              this.searchResults = res})
  }

  

  ngOnDestroy() {
    this.inputSubscription.unsubscribe();
  }

}
