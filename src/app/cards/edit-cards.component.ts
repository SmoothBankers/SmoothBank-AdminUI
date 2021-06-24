import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './edit-cards.component.html',
  styleUrls: ['./edit-cards.component.css']
})
export class CardDetailsComponent implements OnInit {
  record: any;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) { }

  form = new FormGroup({
    holderName: new FormControl('', Validators.required),
  })


  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.cardService.getOne((id as string))
      .subscribe(response => {
        this.record = response;
        this.form.reset({
          holderName: this.record.holder.holderName,
          homePhone: this.record.holder.homePhone
        });
      })
      
  }

  submit(): void{
    console.log(this.record);
  }

}
