import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie.model';

import { MoviesService } from '../movies/movies.service';
import {MatDialog} from '@angular/material';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieDeleteComponent } from './movie-delete/movie-delete.component';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie : Movie; //Geting the movie from movies component
  @Input() index: number; // The index of the movie from the movies array
     
  constructor(private moviesService :MoviesService,
              public dialog:MatDialog) { }
  
  ngOnInit() {

    this.movie=this.moviesService.getMovieByIndex(this.index)

  }
  
  //Open edit popup
  onEdit(){ 
     this.dialog.open(MovieEditComponent, {
      width: '800px',
      data: {movie: this.movie, index: this.index}

    });
  }

  //Open delete popup
  onDelete(){
    this.dialog.open(MovieDeleteComponent, {
      width: '400px',
      data: {movie: this.movie, index: this.index}

    });
  }

}
