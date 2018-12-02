import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Movie } from "../models/movie.model";


@Injectable()
export class MovieService {
    
    constructor(private http: HttpClient) { }

    getAllMovies(): Observable<Movie[]> {
        // const movies: Movie[] = [
        //     { id: 1, name: 'Batman', yearOfRelease: '2018-12-02T19:47:55.845Z', "plot":"string","poster":"string"},
        //     { id: 2, name: 'Batman Returns', yearOfRelease: '2018-12-02T19:47:55.845Z', "plot":"string","poster":"string"},
        // ];

        console.log('Movies..');
        return this.http.get<Movie[]>('https://dxmoviesapi.azurewebsites.net/api/v1/movies');;
    }
}
