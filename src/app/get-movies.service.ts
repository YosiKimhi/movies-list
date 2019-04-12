import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GetMoviesService {
    constructor(private http:Http){}
    theMovieDbApiKey = "b5d6a29c981eb231a3523ac7b5abf320";
    OmdbApiKey="d401dfa8";
    
    getMovies(){
        //this is the first Api call method
        return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.theMovieDbApiKey+'&language=en-')
        .map(
            (response:Response) =>{
                const data = response.json()
                return data;
            }
        )
        .catch(
            (error:Response) =>{
                return Observable.throw('Somethig went wrong');
            }
        );
    }
    getMoviesByName(name:string){
        //this is the second Api call method (by name)
        return this.http.get('http://www.omdbapi.com/?t='+name+'&apikey='+this.OmdbApiKey)
        .map(
            (response:Response) =>{
                const data = response.json();
                return data;
            }
        )
        .catch(
            (error:Response)=>{
                return Observable.throw('Somethig went wrong')
            }
        )
    }
}