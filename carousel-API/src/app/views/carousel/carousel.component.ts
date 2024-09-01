// src/app/views/carousel/carousel.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { CarouselAnimation } from './carousel.animations';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() animationType = CarouselAnimation.Fade;

  public movies: any = [];
  currentMovie = 0;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.filmService.getData().subscribe((data) => {
      this.movies = data.slice(0, 10);
      console.log('Movies loaded:', this.movies); // Adicione este log para verificar
    });
  }
  

  onPreviousClick(): void {
    console.log('Previous button clicked'); // Adicione este log
    const previous = this.currentMovie - 1;
    this.currentMovie = previous < 0 ? this.movies.length - 1 : previous;
  }
  
  onNextClick(): void {
    console.log('Next button clicked'); // Adicione este log
    const next = this.currentMovie + 1;
    this.currentMovie = next === this.movies.length ? 0 : next;
  }  
}
