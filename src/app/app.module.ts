import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import your library
import { NgSimpleSidebarModule } from 'ng-simple-sidebar';

import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MoviesTableComponent } from './movies-table/movies-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ActorsTableComponent } from './actors-table/actors-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesTableComponent,
    ActorsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Specify your library as an import
    NgSimpleSidebarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
