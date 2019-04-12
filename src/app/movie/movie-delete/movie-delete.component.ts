import { Component, OnInit, Inject } from '@angular/core';
import { Movie } from '../movie.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';
import { MoviesService } from 'src/app/movies/movies.service';

export interface DialogData {
  movie: Movie;
  index: number;
}

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MovieDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData ,private movieService:MoviesService) {}


  ngOnInit() {
  }
  onCancel(){
    this.dialogRef.close();
  }
  onDeleteMovie(){
    this.movieService.removeMovie(this.data.index);
    this.dialogRef.close();
  }

}
