import { Component } from '@angular/core';
import { Repository } from './models/repository';
import { Movie } from './models/movie.model';
import { Studio } from './models/studio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to DVD Application';

  constructor(private repo: Repository){}

  get movie(): Movie {
    return this.repo.movie;
  }

  get movies(): Movie[] {
    
    return this.repo.movies;
  }

  createMovie() {
    let movie = new Movie(0, "bit.ly/2D8C6ha", "X-Men Final War", "Drama", "Mutants movie",
    45, this.repo.movies[0].studio);
    this.repo.createMovie(movie);
  }

  createMovieAndStudio() {
    let s = new Studio(0, "SkyTaylor Films", "Brooklyn", "NY");
    let m = new Movie(0, "bit.ly/2D7Vtqo", "Chef", "Romance", "A head chef quits his restaurant", 100, s);
    this.repo.createMovieAndStudio(m, s);
  }

  replaceMovie() {
    let m = this.repo.movies[0];    
    m.name = "Modified Movie";
    m.category = "Modified Category";
    this.repo.replaceMovie(m);
  }

  replaceStudio() {
    let s = new Studio(3, "Modified Studio", "New York", "NY");
    this.repo.replaceStudio(s);
  }
  
  updateMovie() {
    let changes = new Map<string, any>();
    changes.set("name", "Green Hornet");
    changes.set("studio", null);
    this.repo.updateMovie(1, changes);
  }

  deleteMovie() {
    this.repo.deleteMovie(1);
  }

  deleteStudio() {
    this.repo.deleteStudio(2);
  }
}
