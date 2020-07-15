import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './home/nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MovieService } from './movies/movie.service';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './shared/material.module';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { LocationComponent } from './maps/location/location.component';
import { LocationSearchComponent } from './maps/location-search/location-search.component';
import { AutocompleteComponent } from './maps/autocomplete/autocomplete.component';
import { RoutesComponent } from './maps/routes/routes.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MovieModule } from './movies/movie.module';
import { ParentComponent } from './io/parent/parent.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PostsComponent } from './posts/posts/posts.component';
import { PostComponent } from './posts/post/post.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DashboardComponent,
    MovieListComponent,
    MovieEditComponent,
    MovieAddComponent,
    PageNotFoundComponent,
    LocationComponent,
    LocationSearchComponent,
    AutocompleteComponent,
    RoutesComponent,
    ParentComponent,
    CheckoutComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    LayoutModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'angular demo devtools',
      maxAge: 25,
      logOnly: environment.production
    }),
    MovieModule, // remove
    Ng2SearchPipeModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
