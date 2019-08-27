import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ModelModule } from './models/model.module';
import { MovieTableComponent } from './structure/movieTable.component';
import { CategoryFilterComponent } from './structure/categoryFilter.component';
import { MovieDetailComponent } from './structure/movieDetail.component';

@NgModule({
  declarations: [
    MovieTableComponent,
    CategoryFilterComponent,
    MovieDetailComponent,
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
