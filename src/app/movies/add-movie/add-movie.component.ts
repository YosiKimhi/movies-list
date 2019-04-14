import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovieEditComponent, DialogData } from 'src/app/movie/movie-edit/movie-edit.component';
import { MoviesService } from '../movies.service';
import { Movie } from 'src/app/movie/movie.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  poster = '';
  addMovieForm: FormGroup;
  forbidenMoviesTitles = [];

  constructor(
    public dialogRef: MatDialogRef<AddMovieComponent>,
    private movieService:MoviesService) {}

  ngOnInit() {
    // console.log(this.data.movie.title)
    this.addMovieForm=new FormGroup({
      'title': new FormControl (null,[Validators.required,this.forbidenTitles.bind(this)]),
      'year': new FormControl(null,[Validators.required,this.yearValidation]),
      'runtime':new FormControl (null,Validators.required),
      'genre': new FormControl(null,Validators.required),
      'director':new FormControl(null,Validators.required),
      'poster':new FormControl(null)
    });
  
    this.getMoviesTitles();
  }
  getMoviesTitles(){
    for(const movie of this.movieService.movies)
    {
        this.forbidenMoviesTitles.push(movie.title);
    }
    
  }
  onCancel(){
    this.dialogRef.close();
  }
  onSave(){
    if(this.addMovieForm.valid===true){
      
      //checking if there is a poster link
      if(this.addMovieForm.value.poster===null){
        this.poster=this.movieService.defaultMoviePoster();
        
      }else{
        this.poster=this.addMovieForm.value.poster;
      }
      this.movieService.addMovie(new Movie(this.movieService.generateId(),
        this.addMovieForm.value.title,
        this.addMovieForm.value.year,
        this.addMovieForm.value.runtime,
        this.addMovieForm.value.genre,
        this.addMovieForm.value.director,
        this.poster));
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
    if (control.value===null){
      return {'yearNotValid':true};
    }
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
