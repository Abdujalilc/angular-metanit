import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';

@Component({
  selector: 'my-app',
  template: `<div class="form-group">
      <label>Name</label>
      <input class="form-control" name="username" [(ngModel)]="user.name" />
    </div>
    <div class="form-group">
      <label>Age</label>
      <input class="form-control" type="number" name="age" [(ngModel)]="user.age" />
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="submit(user)">Send</button>
    </div>
    <div *ngIf="done">
      <div>Received from Server:</div>
      <div>Name: {{ receivedUser?.name }}</div>
      <div>Age: {{ receivedUser?.age }}</div>
    </div>`,
  providers: [HttpService],
})
export class AppComponent {
  user: User = new User('', 0);

  receivedUser: User | undefined;
  done: boolean = false;
  constructor(private httpService: HttpService) {}
  submit(user: User) {
    this.httpService.postData(user).subscribe(
      (data: any) => {
        this.receivedUser = data;
        this.done = true;
      },
      (error) => console.log(error)
    );
  }
}
