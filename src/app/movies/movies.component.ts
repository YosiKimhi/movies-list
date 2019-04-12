import { Component, OnInit, OnChanges } from '@angular/core';
import { Movie } from '../movie/movie.model';
import { MoviesService } from './movies.service';
import { GetMoviesService } from '../get-movies.service';
import { MatDialog } from '@angular/material';
import { AddMovieComponent } from './add-movie/add-movie.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  
})
export class MoviesComponent implements OnInit{
  movies : Movie [] =[];
 
  constructor(private movieService:MoviesService,
              private getMoviesService:GetMoviesService,
              public dialog:MatDialog) {
              }
                
  ngOnInit() {
  
    this.getTheMovies();
  }
  
  onAddMovie(){
    this.dialog.open(AddMovieComponent, {
      width: '800px'
      
    });
    
  }
  getTheMovies(){
    this.getMoviesService.getMovies()
    .subscribe(
      (movies: any[])=>{
                        for(const movie of movies[ 'results'])
                        {
                          //Get the full detials of each movie
                          this.getMoviesService.getMoviesByName(movie['title'])
                          .subscribe(
                            (movieRData:any[])=>{
                              this.movies.push(new Movie(
                                movie['id'],
                                movie['title'],
                                movieRData['Year'],
                                movieRData['Runtime'],
                                movieRData['Genre'],
                                movieRData['Director'],
                                movieRData['Poster']));
                            }
                          )
                          
                        }
                        this.movieService.movies=this.movies;
                      }
    );
  }
  



}
