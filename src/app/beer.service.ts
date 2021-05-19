import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {HttpParams} from "@angular/common/http";
import { Subject } from 'rxjs';
import { Page } from './page';
import { PagedData } from './paged-data';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private beerAPI_url = 'https://api.punkapi.com/v2/beers';
  public page = '1' 
  public per_page = '10'

  changeSubject$ = new Subject();
  
  constructor(private http: HttpClient) { 
   
  }

  
  getBeerData(page: any) {
    const pageNum = page.pageNumber + 1
    
    const options = 
    { params: new HttpParams({fromObject: {page:pageNum, per_page: page.size_per_page}})};
    
    return this.http.get(this.beerAPI_url, options)
          .pipe(
            map(d => this.getPagedData(page, d)),
            )
  }

  searchBeerData(query: any) {
    const options = 
    { params: new HttpParams({fromObject: {beer_name: query}})}

    return this.http.get(this.beerAPI_url, options)
                    .pipe(tap((res:any)=>console.log(res)))
  }

  getSingleBeerData(id: any) {
  
    return this.http.get(`${this.beerAPI_url}/${id}`)
          .pipe(tap((res:any)=>console.log(res)))
  }

  private getPagedData(page: any, data: any) {
    const pagedData = new PagedData();
    pagedData.page = page;
    pagedData.data = data;
    return pagedData;
  }
}
