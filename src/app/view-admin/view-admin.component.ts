import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {
  admins: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllAdmins()
      .subscribe(response => {
        this.admins = response;
      })
  }

}
