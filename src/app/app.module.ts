import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LargeTableComponent } from './home/large-table/large-table.component';
import { CombinedTableComponent } from './home/combined-table/combined-table.component';
import { NavbarService } from './navbar.service';
import { SearchFilterPipe } from './search-filter.pipe';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { BeerComponent } from './beer/beer.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LargeTableComponent,
    CombinedTableComponent,
    SearchFilterPipe,
    SearchComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NavbarService, SearchFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
