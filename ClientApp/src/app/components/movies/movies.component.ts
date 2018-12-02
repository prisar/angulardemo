import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movies: Movie[]

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllMovies()
    .subscribe(
      (data: Movie[]) => this.movies = data,
      (err: any) => console.log(err),
      () => console.log("All done getting movies.")
      );
  }

  onEdit() {
    alert('Edit movie');
  }
}
