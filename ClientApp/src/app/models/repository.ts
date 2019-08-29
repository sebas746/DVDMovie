import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Filter, Pagination } from './configClasses.repository';
import { Studio } from './studio.model';
import { keyframes } from '@angular/animations';

const moviesUrl = "api/movies";
const studiosUrl = "api/studios";

@Injectable()
export class Repository {

    private filterObject = new Filter();
    private paginationObject = new Pagination();

    constructor(private http: HttpClient) {
        //this.filter.category = "Romance";

        this.getMovies();
    }

    getMovie(id: number) {
        console.log("Movie data Request");
        this.http.get(moviesUrl + "/" + id)
            .subscribe(response => { this.movie = response });
    }

    getMovies(related = true) {
        let url = moviesUrl + "?related=true";
        if (this.filter.category) {
            url += "&category=" + this.filter.category;
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
        }

        url += "&metadata=true";
        console.log(url);
        this.http.get<any>(url)
            .subscribe(response => {                
                this.movies = response.data;
                this.categories = response.categories;
                this.pagination.currentPage = 1;
            });
    }

    getStudios() {
        this.http.get<Studio[]>(studiosUrl)
            .subscribe(response => this.studios == response);
    }

    createMovie(mov: Movie) {
        let data = {
            Image: mov.image, name: mov.image, category: mov.category,
            description: mov.description, price: mov.price,
            Studio: mov.studio ? mov.studio.studioId : 0
        };

        this.http.post<number>(moviesUrl, data)
            .subscribe(response => {
                mov.movieId = response;
                this.movies.push(mov);
            });
    }

    createMovieAndStudio(mov: Movie, stu: Studio) {
        let data = {
            name: stu.name, city: stu.city, state: stu.state
        };


        this.http.post<number>(studiosUrl, data)
            .subscribe(response => {
                stu.studioId = response;
                mov.studio = stu;
                if (mov != null) {
                    this.createMovie(mov);
                }
            });
    }

    replaceMovie(mov: Movie) {
        let data = {
            image: mov.image, name: mov.name, category: mov.category,
            description: mov.description, price: mov.price,
            studio: mov.studio ? mov.studio.studioId : 0
        };

        this.http.put(moviesUrl + "/" + mov.movieId, data)
            .subscribe(response => {
                this.getMovies();
            });
    }

    replaceStudio(stu: Studio) {
        let data = {
            name: stu.name, city: stu.city, state: stu.state
        };

        this.http.put(studiosUrl + "/" + stu.studioId, data)
            .subscribe(response => {
                this.getStudios();
            });
    }

    updateMovie(id: number, changes: Map<string, any>) {
        let patch = [];

        changes.forEach((value, key) =>
            patch.push({ op: "replace", path: key, value: value }));
        console.log(patch);

        this.http.patch(moviesUrl + "/" + id, patch)
            .subscribe(response => this.getMovies());
    }

    deleteMovie(id: number) {
        this.http.delete(moviesUrl + "/" + id)
            .subscribe(response => { this.getMovies(); });
    }

    deleteStudio(id: number) {
        this.http.delete(studiosUrl + "/" + id)
            .subscribe(response => {
                this.getMovies();
                this.getStudios();
            });
    }

    studios: Studio[] = [];
    movie: Movie;
    movies: Movie[];
    categories: string[] = []; 
    get filter(): Filter {
        return this.filterObject;
    }
    get pagination(): Pagination {
        return this.paginationObject;
    }

    storeSessionData(dataType: string, data: any) {
        console.log(data);
        return this.http.post("/api/session/" + dataType, data)
            .subscribe(response => {});
    }

    getSessionData(dataType: string): any {
        //console.log('session store getting');
        return this.http.get("/api/session/" + dataType);
    }
}