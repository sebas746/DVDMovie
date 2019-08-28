import { Component } from '@angular/core';
import { Repository } from '../models/repository';


@Component({
    selector: "store-cartsummary",
    templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {
    constructor(private repo: Repository) {}
}