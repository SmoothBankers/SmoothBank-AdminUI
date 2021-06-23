import { Component, OnInit } from '@angular/core';
import { CardService } from './../services/card.service';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.component.html',
  styleUrls: ['./manage-cards.component.css']
})

export class ManageCardsComponent implements OnInit {
  cardRecords: any;
  currentIndex: any; //keeps track of what accordion is opened

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getAllCards()
      .subscribe(response => {
        this.cardRecords = response;  
      })
      
  }

  expand(index: any){
    if(this.currentIndex === index){
      this.currentIndex = null; //closes the tab
      return;
    }
    this.currentIndex = index; //changes the opened tab to the newly chosen one
  }

}
