import { Component, OnInit } from '@angular/core';
import { User } from '../../../pojo/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  selectedUser: User;

  constructor() {
    this.selectedUser =
      { id: 20, name: 'Tornado' };
   }

  ngOnInit() {
  }

}
