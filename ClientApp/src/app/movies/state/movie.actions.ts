import { Movie } from 'src/app/movies/movie.model';
import { Action } from '@ngrx/store';

export enum MovieActionTypes {
  CREATE_MOVIE = '[Movie] CREATE_MOVIE',
  CREATE_MOVIE_SUCCESS = '[Movie] CREATE_MOVIE_SUCCESS',
  CREATE_MOVIE_FAIL = '[Movie] CREATE_MOVIE_FAIL',
  UPDATE_MOVIE = '[Movie] UPDATE_MOVIE',
  UPDATE_MOVIE_SUCCESS = '[Movie] UPDATE_MOVIE_SUCCESS',
  UPDATE_MOVIE_FAIL = '[Movie] UPDATE_MOVIE_FAIL'
}

export class CreateMovie implements Action {
  readonly type = MovieActionTypes.CREATE_MOVIE;

  constructor(public payload: Movie) {}
}

export class CreateMovieSuccess implements Action {
  readonly type = MovieActionTypes.CREATE_MOVIE_SUCCESS;

  constructor(public payload: Movie) {}
}

export class CreateMovieFail implements Action {
  readonly type = MovieActionTypes.CREATE_MOVIE_FAIL;

  constructor(public payload: string) {}
}

export class UpdateMovie implements Action {
  readonly type = MovieActionTypes.UPDATE_MOVIE;

  constructor(public payload: Movie) {}
}

export class UpdateMovieSuccess implements Action {
  readonly type = MovieActionTypes.UPDATE_MOVIE_SUCCESS;

  constructor(public payload: Movie) {}
}

export class UpdateMovieFail implements Action {
  readonly type = MovieActionTypes.UPDATE_MOVIE_FAIL;

  constructor(public payload: string) {}
}

export type MovieActions =
  | CreateMovie
  | CreateMovieSuccess
  | CreateMovieFail
  | UpdateMovie
  | UpdateMovieSuccess
  | UpdateMovieFail;
