import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'my-app',
  template: `<ul>
    <li *ngFor="let user of users">
      <p>User name: {{ user?.name }}</p>
      <p>User age: {{ user?.age }}</p>
    </li>
  </ul>`,
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getData()
      .subscribe((data: any) => (this.users = data['userList']));
  }
}
