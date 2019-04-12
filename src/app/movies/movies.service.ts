import { Movie } from '../movie/movie.model';


export class MoviesService{
    movies: Movie[] = [];

    constructor( ){}
    
    //Just a default movie poster
    defaultMoviePoster(){
        return 'https://www.greyhound.co.za/wp-content/uploads/2018/12/movie.jpg';
    }
    
    //add movie to movies Array
    addMovie(movie:Movie){
        this.movies.push(movie);
    }
    
    //Add array of movies to movies array
    addMovies(movies:Movie[]){
        this.movies.push(...movies);
    }

    //Generate random ID
    generateId() {
        return Math.round(Math.random() * 10000);
    }
    
    //get specific movie by index
    getMovieByIndex(index:number){
        return this.movies[index];
    }
    
    //Get all movies 
    getMovies(){
        return this.movies;
    }
    
    //Used to change or replace movie from movies array
    changeMovies(movie:Movie,index:number){
        this.movies.splice(index,1,movie);
    }

    //Remove movie by the index of the movie
    removeMovie(index:number){
        this.movies.splice(index,1);
    }
    

}