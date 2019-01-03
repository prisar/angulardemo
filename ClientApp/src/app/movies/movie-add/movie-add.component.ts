import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  saveMovie(formValues: any): void {
    const newMovie: Movie = <Movie>formValues;
    newMovie.id = 0;
    console.log(newMovie);

    this.movieService
      .addMovie(newMovie)
      .subscribe(
        (data: Movie) => console.log(data),
        (err: any) => console.log(err)
      );
  }
}
