import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs"; // https://stackoverflow.com/questions/49840152/i-get-an-error-when-learning-angular-has-no-exported-member-observable

import { Movie } from "../models/movie.model";

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    console.log("Movies..");
    return this.http.get<Movie[]>(
      "https://dxmoviesapi.azurewebsites.net/api/v1/movies"
    );
  }

  getMovieById(id: number): Observable<Movie> {
    console.log("Movie " + id);
    const movie = this.http.get<Movie>(
      "https://dxmoviesapi.azurewebsites.net/api/v1/movies/" + id
    );
    return movie;
  }

  updateMovie(movie: Movie): Observable<void> {
    return this.http.put<void>(
      "https://dxmoviesapi.azurewebsites.net/api/v1/movies/" + movie.id,
      movie,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(
      "https://dxmoviesapi.azurewebsites.net/api/v1/movies/",
      newMovie,
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    );
  }

  deleteMovie(movieId: number): Observable<void> {
    return this.http.delete<void>(
      `https://dxmoviesapi.azurewebsites.net/api/v1/movies/${movieId}`
    );
  }
}
