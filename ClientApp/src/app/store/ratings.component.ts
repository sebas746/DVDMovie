import { Component } from '@angular/core';
import { Repository } from '../models/repository';


@Component({
    selector: "store-ratings",
    templateUrl: "ratings.component.html"
})
export class RatingsComponent {
    constructor(private repo: Repository) {}
}