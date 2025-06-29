import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersComponent) {
    console.log(activatedRoute);
  }

  ngOnInit() {
    this.user = {
      id: +this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };
    this.activatedRoute.params.subscribe((params: Params) => {
      this.user = this.usersService.getUsersFind(+params['id']);
    })
  }
}
