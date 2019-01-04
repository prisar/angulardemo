import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/movie.reducer';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forFeature('movies', reducer)]
})
export class MovieModule {}
