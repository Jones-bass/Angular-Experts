import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmModel } from './film.model';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  baseUrl: string = 'http://localhost:3000/items';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<FilmModel[]> {
    return this.httpClient.get<FilmModel[]>(this.baseUrl);
  }
}
