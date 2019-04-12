import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { GetMoviesService } from './get-movies.service';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './movies/movies.service';
import { MovieDeleteComponent } from './movie/movie-delete/movie-delete.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { NonEnglishRemovePipe } from './non-english-remove.pipe';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesComponent,
    MovieEditComponent,
    MovieDeleteComponent,
    AddMovieComponent,
    NonEnglishRemovePipe,
    ShortenPipe
   
  ],
  

  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents: [ MovieEditComponent,MovieDeleteComponent,AddMovieComponent ],
  providers: [GetMoviesService,MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
