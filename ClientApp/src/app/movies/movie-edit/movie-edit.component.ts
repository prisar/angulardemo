import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { FormBuilder } from '@angular/forms';

import { GenericValidator } from '../../shared/generic-validator';
import { NumberValidators } from '../../shared/numeric-validator';


@Component({
  selector: 'app-editmovie',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit, OnChanges, OnDestroy {

  selectedMovie: Movie;

  primaryLanguage = 'Tamil';
  languages = ['English', 'Hindi', 'Tamil']; // not saved in database


  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    fb: FormBuilder) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      movieName: {
        required: 'Movie name is required.',
        minlength: 'Movie name must be at least three characters.',
        maxlength: 'Movie name cannot exceed 50 characters.'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);

  }

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

  ngOnChanges() {

  }

  ngOnDestroy() {

  }

  saveChanges(): void {
    this.movieService.updateMovie(this.selectedMovie)
      .subscribe(
        (data: void) => console.log(`${this.selectedMovie.name} updated successfully.`),
        (err: any) => console.log(err)
      );
  }

}
