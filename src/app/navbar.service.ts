import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {

 private navLinks = [{ title: "Home", link: "index.html" },
                    { title: "Search", link: "search.html" }];

  constructor() { }

  getNavLinks() {
    return this.navLinks;
  }
}
