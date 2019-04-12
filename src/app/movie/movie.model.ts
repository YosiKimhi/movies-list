export class Movie{
    public id:number;
    public title:string;
    public year:string;
    public runtime:string;
    public genre:string;
    public director:string;
    public poster:string
    constructor(id:number ,title:string,year:string,runtime:string,genre:string,director:string ,poster:string){
        this.id=id;
        this.title=title;
        this.year=year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
        this.poster = poster;
    }
}