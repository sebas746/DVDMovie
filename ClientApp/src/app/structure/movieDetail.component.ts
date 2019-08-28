import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Repository } from '../models/repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "movie-detail",
    templateUrl: "movieDetail.component.html"
})
export class MovieDetailComponent {
    constructor(private repo: Repository, router: Router, activateRoute: ActivatedRoute) {
        let id = Number.parseInt(activateRoute.snapshot.params["id"]);

        if(id) {
            this.repo.getMovie(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }

    get movie(): Movie {
        return this.repo.movie;
    }
}