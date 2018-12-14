import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'yearOfRelease', 'plot', 'poster', 'action'];

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

  deleteMovie(movieId: number): void {
    this.movieService.deleteMovie(movieId)
      .subscribe(
        (data: void) => {
          let index: number = this.movies.findIndex(movie => movie.id === movieId);
          this.movies.splice(index, 1);
        },
        (err: any) => console.log(err)
      );    
  }
}
