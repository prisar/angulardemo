import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  saveMovie(formValues: any): void {
    const newMovie: Movie = <Movie>formValues;
    newMovie.id = 0;
    console.log(newMovie);

    this.movieService.addMovie(newMovie)
      .subscribe(
        (data: Movie) => console.log(data),
        (err: any) => console.log(err)
      );
  }
}
