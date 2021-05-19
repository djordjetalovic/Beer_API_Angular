import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  max_items: number = 234;
  page: number = 1;
  per_page: number = 10;

  pages_num = Math.ceil(this.max_items / this.per_page);
  page_before = this.page - 1;
  page_after = this.page + 1;

  constructor() { 
    
  }
}
