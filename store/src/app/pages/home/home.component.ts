import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/gameModel';
import { GameService } from '../../services/game.service';
import { Data } from '../../services/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  listOptions: string[] = [
    "ps01",
    "ps02",
    "ps03",
    "ps04",
    "ps05",
    "ps06",
    "ps07",
    "ps08",
  ]

  constructor(private gameService: GameService, private mockData: Data) { }
  listNewGames: Game[] = [];
  listPreSale: Game[] = [];
  listDemos: Game[] = [];
  ngOnInit(): void {
    this.getListPreSaleValue();
    this.getListDemosValue();
    this.getListNewGamesValue();
  }

  getListNewGamesValue(): void {
    this.gameService.getListNewGames().subscribe({
      next: data => {
        this.listNewGames = data;
      },
      error: error => {
        this.listNewGames = this.mockData.games;
      }
    })
  }
  getListPreSaleValue(): void {
    this.gameService.getListPreSale().subscribe({
      next: data => {
        this.listPreSale = data;
      },
      error: error => {
        this.listPreSale = this.mockData.games;
      }
    })
  }
  getListDemosValue(): void {
    this.gameService.getListDemos().subscribe({
      next: data => {
        this.listDemos = data;
      },
      error: error => {
        this.listDemos = this.mockData.games;
      }
    })
  }
}

