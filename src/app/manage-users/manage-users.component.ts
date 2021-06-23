import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { UserService } from './../services/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  users: any;
  sortColumn: string = 'lastName';
  sortOrder: any = 'asc';

  constructor(
    private userService: UserService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe(response => {
        // this.users = response;
        this.users = _.orderBy(response, [this.sortColumn], [this.sortOrder]);
      })
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  deleteUser(user: any) {
    this.userService.delete(user.id)
      .subscribe(response => {
        // this.ngOnInit();
        user.status = 'deactivated'
      })
  }

  handleSort(column: string) {
    this.sortColumn = column;
    if (column === 'status') {
      this.users = _.orderBy(this.users, [column, 'lastName'], [this.toggleSortOrder(), 'asc']);
    }
    else {
      this.users = _.orderBy(this.users, [column], [this.toggleSortOrder()]);
    }
  }

  toggleSortOrder() {
    return this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  displayChevron(column: string) {
    return this.sortColumn === column;
  }

  directionChevron() {
    return (this.sortOrder === 'asc') ? 'arrow_drop_down' : 'arrow_drop_up';
  }

}
