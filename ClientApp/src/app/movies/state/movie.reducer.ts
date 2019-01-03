import { Movie } from '../movie.model';
import { MovieActions, MovieActionTypes } from './movie.actions';

export interface MovieState {
  movies: Movie[];
  error: string;
}

const initialState: MovieState = {
  movies: [],
  error: ''
};

export function reducer(state = initialState, action: MovieActions) {
  switch (action.type) {
    case MovieActionTypes.UPDATE_MOVIE_SUCCESS:
      console.log('exsisting state: ' + JSON.stringify(state));
      console.log('payload: ' + action.payload);
      return {
        ...state,
        movie: action.payload
      };

    case MovieActionTypes.UPDATE_MOVIE_FAIL:
      return {
        ...state,
        movie: action.payload
      };

    default:
      return state;
  }
}
