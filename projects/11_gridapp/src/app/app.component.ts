import { TemplateRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [UserService],
})
export class AppComponent implements OnInit {
  //types of templates
  @ViewChild('readOnlyTemplate')
  readOnlyTemplate: TemplateRef<any> | undefined;

  @ViewChild('editTemplate')
  editTemplate: TemplateRef<any> | undefined;

  editedUser: User | null = null;
  users: Array<User>;
  isNewRecord: boolean = false;
  statusMessage: string = '';

  constructor(private serv: UserService) {
    this.users = new Array<User>();
  }

  ngOnInit() {
    this.loadUsers();
  }

  //load users
  private loadUsers() {
    this.serv.getUsers().subscribe((data: Array<User>) => {
      this.users = data;
    });
  }

  addUser() {
    this.editedUser = new User(1, '', 0);
    this.users.push(this.editedUser);
    this.isNewRecord = true;
  }

  editUser(user: User) {
    this.editedUser = new User(user._id, user.name, user.age);
  }
  // load one of the two templates
  loadTemplate(user: User) {
    if (this.editedUser && this.editedUser._id === user._id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveUser() {
    if (this.isNewRecord) {
      this.serv.createUser(this.editedUser as User).subscribe((data) => {
        (this.statusMessage = 'User added successfully'), this.loadUsers();
      });
      this.isNewRecord = false;
      this.editedUser = null;
    } else {
      this.serv.updateUser(this.editedUser as User).subscribe((data) => {
        (this.statusMessage = 'Updated successfully'), this.loadUsers();
      });
      this.editedUser = null;
    }
  }
  // cancel editing
  cancel() {
    // delete last record if adding cancelled
    if (this.isNewRecord) {
      this.users.pop();
      this.isNewRecord = false;
    }
    this.editedUser = null;
  }

  deleteUser(user: User) {
    this.serv.deleteUser(user._id.toString()).subscribe((data) => {
      (this.statusMessage = 'User deleted successfully'), this.loadUsers();
    });
  }
}
