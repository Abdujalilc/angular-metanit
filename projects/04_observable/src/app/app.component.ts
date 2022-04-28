import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'my-app',
  template: `<div>{{ this.httpService.errorMessage }}</div>
    <ul>
      <li *ngFor="let user of users">
        <p>User name: {{ user?.name }}</p>
        <p>User age: {{ user?.age }}</p>
      </li>
    </ul>`,
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  users: User[] = [];
  error: any;
  constructor(public httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => (this.users = data));
  }
}
