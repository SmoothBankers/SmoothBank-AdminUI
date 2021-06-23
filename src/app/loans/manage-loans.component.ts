import { Component, OnInit } from '@angular/core';
import { LoanService } from './../services/loan.service';

@Component({
  selector: 'app-manage-loans',
  templateUrl: './manage-loans.component.html',
  styleUrls: ['./manage-loans.component.css']
})
export class ManageLoansComponent implements OnInit {
  loanRecords: any;

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loanService.getAllLoans()
      .subscribe(response => {
        this.loanRecords = response;  
        console.log(this.loanRecords);
      })
      
  }

}
