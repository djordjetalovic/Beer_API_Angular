import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { BeerService } from '../beer.service';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beer$:any;

  constructor(private route: ActivatedRoute,
              private beerService: BeerService) { }

  ngOnInit() {
   
    this.beer$ = this.route.paramMap
    .pipe(
      switchMap((params:any) => this.beerService.getSingleBeerData(params.get('id')))
    )
    .subscribe((res:any) => this.beer$ = res)
  }

}
