import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditMovieComponent implements OnInit {

  selectedMovie: Movie;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    let movieId: number = parseInt(this.route.snapshot.params['id']);
    this.movieService.getMovieById(movieId)
    .subscribe(
      (data: Movie) => this.selectedMovie = data,
      (err: any) => console.log(err),
      () => console.log("All done getting movie.")
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
