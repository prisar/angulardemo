import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MoviesComponent } from './views/movies/movies.component';
import { AddmovieComponent } from './views/addmovie/addmovie.component';
import { EditmovieComponent } from './views/editmovie/editmovie.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'editmovie/:id', component: EditmovieComponent },
  { path: 'addmovie', component: AddmovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
