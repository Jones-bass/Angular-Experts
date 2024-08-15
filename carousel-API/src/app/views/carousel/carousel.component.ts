import { Component } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  public movies: any = [];
  currentMovie = 0;

  constructor(private filmData: FilmService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.filmData.getData().subscribe((data) => {
      data.forEach((item) => {
        this.movies.push(item); 
        
        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
      });

      console.log(this.movies);
    });
  }
}
