import { Component, OnInit } from '@angular/core';
import { CardService } from './../services/card.service';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.css']
})
export class ManageCardsComponent implements OnInit {
  cards: any;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    console.log("Test call of init");
    this.cardService.getAllCards()
      .subscribe(response => {
        this.cards = response;
        console.log("Response");
        console.log(response);
      })
  }

}
