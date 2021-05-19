import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks: {title:string, link:string}[];
  
  constructor(private navService: NavbarService) {
    this.navLinks = navService.getNavLinks();
    
  }

}
