import * as fromRoot from '../../state/app.state';
import * as fromMovies from './movie.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  movies: fromMovies.MovieState;
}

// selector functions
const getMovieFeatureState = createFeatureSelector<fromMovies.MovieState>(
  'movies'
);

export const getMovies = createSelector(
  getMovieFeatureState,
  state => state.movies
);

export const getError = createSelector(
  getMovieFeatureState,
  state => state.error
);
