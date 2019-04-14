import { Component, OnInit,Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Movie } from '../movie.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MoviesService } from 'src/app/movies/movies.service';

export interface DialogData {
  movie: Movie;
  index: number;
}

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
 
  editMovieForm: FormGroup;
  forbidenMoviesTitles = [];

  constructor(
    public dialogRef: MatDialogRef<MovieEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,private movieService:MoviesService) {}

  ngOnInit() {
  
    this.editMovieForm=new FormGroup({
      'title': new FormControl (this.data.movie.title,[Validators.required,this.forbidenTitles.bind(this)]),
      'year': new FormControl(this.data.movie.year,[Validators.required,this.yearValidation]),
      'runtime':new FormControl (this.data.movie.runtime,Validators.required),
      'genre': new FormControl(this.data.movie.genre,Validators.required),
      'director':new FormControl(this.data.movie.director,Validators.required)
    });
    this.getMoviesTitles();
    
  }

  //Get all movies titles beside the movie we are editing
  getMoviesTitles(){
    for(const movie of this.movieService.movies)
    {
      if(movie.title!==this.data.movie.title )
      {
        this.forbidenMoviesTitles.push(movie.title);
      }
      
    }
    
  }

  onCancel(){
    this.dialogRef.close();
  }

  onSave(){
    if(this.editMovieForm.valid===true){
      this.movieService.changeMovies(new Movie(this.data.movie.id,
        this.editMovieForm.value.title,
        this.editMovieForm.value.year ,
        this.editMovieForm.value.runtime,
        this.editMovieForm.value.genre,
        this.editMovieForm.value.director,
        this.data.movie.poster),this.data.index);
      this.dialogRef.close();
    }
  }

  forbidenTitles(control :FormControl):{[s:string]:boolean}{
    if(this.forbidenMoviesTitles.indexOf(control.value) !==-1){
      return {'titleIsForbidden':true};
    }
    return null;
  }
  yearValidation(control :FormControl):{[s:string]:boolean}{
    var regex=control.value.match(/^[0-9]+$/g);
    var toInt=+control.value;
    console.log(toInt);
    if(regex=== null ){
      return {'yearNotValid':true};
    }
    else if(toInt>3000){
      return {'yearNotValid':true};
    }
    else{
      return null;
    }
  }

}
