import { NgModule } from "@angular/core";
import { CartSummaryComponent } from "./cartSummary.component";
import { CategoryFilterComponent } from "./categoryFilter.component";
import { PaginationComponent } from "./pagination.component";
import { MovieListComponent } from "./movieList.component";
import { RatingsComponent } from "./ratings.component";
import { MovieSelectionComponent } from "./movieSelection.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: 
    [
        CartSummaryComponent, CategoryFilterComponent, PaginationComponent, 
        MovieListComponent, RatingsComponent, MovieSelectionComponent
    ],
    imports: [BrowserModule],
    exports: [MovieSelectionComponent]
})
export class StoreModule {}