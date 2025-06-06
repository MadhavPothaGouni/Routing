import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];
  getUser() {
    return this.users;
  }
  getUsersFind(id: number) {
    const user = this.users.find((s) => {
      return s.id === id;
    });
    return user;
  }
}
