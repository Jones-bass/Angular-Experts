import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-pricing',
	templateUrl: './card-pricing.component.html',
	styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent implements OnInit {

	@Input()
	gameType: string = "XPTO | PS4";
	@Input()
	gamePlatformTag: string = "";
	@Input()
	gamePrice: string = "";
	@Input()
	onSale: number = 10;
	constructor() { }

	ngOnInit(): void {
	}
}
