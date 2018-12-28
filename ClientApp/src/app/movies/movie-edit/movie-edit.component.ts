import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  selectedMovie: Movie;

  primaryLanguage = 'Tamil';
  languages = ['English', 'Hindi', 'Tamil']; // not saved in database

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const movieId: number = parseInt(this.route.snapshot.params['id']);
    this.movieService.getMovieById(movieId)
    .subscribe(
      (data: Movie) => this.selectedMovie = data,
      (err: any) => console.log(err),
      () => console.log('All done getting movie.')
    );
  }

  saveChanges(): void {
    this.movieService.updateMovie(this.selectedMovie)
      .subscribe(
        (data: void) => console.log(`${this.selectedMovie.name} updated successfully.`),
        (err: any) => console.log(err)
      );
  }

}
