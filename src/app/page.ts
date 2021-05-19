export class Page {
    size_per_page: number = 10;
    
    totalElements: number = 234;
   
    totalPages: number = Math.ceil(this.totalElements/ this.size_per_page);
    
    pageNumber: number = 0;
}
