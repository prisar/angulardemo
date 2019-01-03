import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./home/dashboard/dashboard.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieEditComponent } from "./movies/movie-edit/movie-edit.component";
import { MovieAddComponent } from "./movies/movie-add/movie-add.component";
import { PageNotFoundComponent } from "./home/page-not-found.component";
import { LocationComponent } from "./maps/location/location.component";
import { LocationSearchComponent } from "./maps/location-search/location-search.component";
import { RoutesComponent } from "./maps/routes/routes.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent, pathMatch: "full" },
  { path: "movies", component: MovieListComponent },
  { path: "editmovie/:id", component: MovieEditComponent },
  { path: "addmovie", component: MovieAddComponent },
  { path: "location", component: LocationComponent },
  { path: "location/search", component: LocationSearchComponent },
  { path: "location/routes", component: RoutesComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
