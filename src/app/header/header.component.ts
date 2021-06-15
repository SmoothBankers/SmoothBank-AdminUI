import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: string;

  constructor(
    public authService: AuthService,
    route: ActivatedRoute
  ) {
    this.url = route.snapshot.url.join('');

  }

  ngOnInit(): void { }


}
