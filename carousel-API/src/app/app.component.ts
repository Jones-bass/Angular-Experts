// src/app/app.component.ts
import { Component } from '@angular/core';
import { CarouselComponent } from './views/carousel/carousel.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CarouselComponent] 
})
export class AppComponent {
  title = 'carousel-API';
}
