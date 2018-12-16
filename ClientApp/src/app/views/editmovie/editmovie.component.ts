import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

  selectedMovie: Movie;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
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
