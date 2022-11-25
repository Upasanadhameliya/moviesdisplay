import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesTableComponent } from './movies-table/movies-table.component'
import { ActorsTableComponent } from './actors-table/actors-table.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies',
  },
  {
    path: 'movies',
    component: MoviesTableComponent,
  },
  {
    path: 'actors',
    component: ActorsTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
