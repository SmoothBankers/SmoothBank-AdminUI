import { Component, OnInit } from '@angular/core';
import { LoanService } from './../services/loan.service';

@Component({
  selector: 'app-manage-loans',
  templateUrl: './manage-loans.component.html',
  styleUrls: ['./manage-loans.component.css']
})
export class ManageLoansComponent implements OnInit {
  loanRecords: any;
  currentIndex: any; //keeps track of what accordion is opened

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loanService.getAllLoans()
      .subscribe(response => {
        this.loanRecords = response;  
        console.log(this.loanRecords);
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
