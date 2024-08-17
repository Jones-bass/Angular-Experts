import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  public movies: any = [];
  currentMovie = 0;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.filmService.getData().subscribe((data) => {
      data.forEach((item) => {
        this.movies.push(item); 
        
        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
      });

      /*
      this.movies.forEach((movie: any) => {
        this.filmService.getPosters(movie.id).subscribe((data) => {
          console.log(data);
          movie.image = data.posters[0].link;
          this.filmService.putPosters(movie.id, movie);
          return;
        });
      });

      console.log(this.movies); */

    });
  }
}
