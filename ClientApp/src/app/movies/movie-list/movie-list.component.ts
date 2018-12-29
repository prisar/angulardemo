import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/shared/models/movie.model";
import { MovieService } from "src/app/shared/services/movie.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  public movies: Movie[];

  displayedColumns: string[] = [
    "name",
    "yearOfRelease",
    "plot",
    "poster",
    "action"
  ];
  dataSource = this.movies;

  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.movieService
      .getAllMovies()
      .subscribe(
        (data: Movie[]) => (this.movies = data),
        (err: any) => console.log(err),
        () => console.log("All done getting movies.")
      );
  }

  deleteMovie(movieId: number): void {
    this.movieService.deleteMovie(movieId).subscribe(
      (data: void) => {
        const index: number = this.movies.findIndex(
          movie => movie.id === movieId
        );
        this.movies.splice(index, 1);
        this.ngOnInit();
      },
      (err: any) => console.log(err)
    );
  }
}
