import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './home/nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { MovieService } from './shared/services/movie.service';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';
import { MovieAddComponent } from './movies/movie-add/movie-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    DashboardComponent,
    MovieListComponent,
    MovieEditComponent,
    MovieAddComponent
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
