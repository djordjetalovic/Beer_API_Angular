import { Pipe, PipeTransform } from '@angular/core';
import { BeerService } from 'src/app/beer.service';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  constructor(private beerService: BeerService) {

  }

  transform(items: any[], searchText: string) {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    
    let filteredItems = items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
    
    return filteredItems;

  }

}
