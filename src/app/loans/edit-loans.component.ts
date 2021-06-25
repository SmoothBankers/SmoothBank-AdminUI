import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './edit-loans.component.html',
  styleUrls: ['./edit-loans.component.css']
})
export class LoanDetailsComponent implements OnInit {
  record: any;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  form = new FormGroup({
    holderName: new FormControl('', Validators.required),
    homePhone: new FormControl('', Validators.required),
    cellPhone: new FormControl('', Validators.required),
    workPhone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    ssn: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    po_box: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    income: new FormControl('', Validators.required),
    expiryMonth: new FormControl('', Validators.required),
    expiryYear: new FormControl('', Validators.required),
    balance: new FormControl('', Validators.required),
    cashback: new FormControl('', Validators.required),
    active: new FormControl('', Validators.required),
    signUpDate: new FormControl('', Validators.required),
  })


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.cardService.getOne((id as string))
      .subscribe(response => {
        this.record = response;
        this.form.reset({
          holderName: this.record.holder.holderName,
          homePhone: this.record.holder.homePhone,
          cellPhone: this.record.holder.cellPhone,
          workPhone: this.record.holder.workPhone,
          email: this.record.holder.email,
          ssn: this.record.holder.ssn,
          address: this.record.holder.address,
          po_box: this.record.holder.poBox,
          zipcode: this.record.holder.zipcode,
          income: this.record.holder.monthlyIncome,
          expiryMonth: this.record.card.expiryMonth,
          expiryYear: this.record.card.expiryYear,
          balance: this.record.card.balance,
          cashback: this.record.card.cashback,
          active: this.record.active ? 1 : 0,
          signUpDate: this.record.signUpDate
        });
      })

  }

  submit(): void {
    this.record.active = this.form.value.active;
    this.record.holder.address = this.form.value.address;
    this.record.card.balance = this.form.value.balance;
    this.record.card.cashback = this.form.value.cashback;
    this.record.holder.cellPhone = this.form.value.cellphone;
    this.record.holder.email = this.form.value.email;
    this.record.card.expiryMonth = this.form.value.expiryMonth;
    this.record.card.expiryYear = this.form.value.expiryYear;
    this.record.holder.holderName = this.form.value.holderName;
    this.record.holder.homePhone = this.form.value.homePhone;
    this.record.holder.monthlyIncome = this.form.value.income;
    this.record.holder.po_box = this.form.value.po_box;
    this.record.signUpDate = this.form.value.signUpDate;
    this.record.holder.ssn = this.form.value.ssn;
    this.record.holder.workPhone = this.form.value.workPhone;
    this.record.holder.zipcode = this.form.value.zipcode;
    this.cardService.update(this.record);
  }

}
