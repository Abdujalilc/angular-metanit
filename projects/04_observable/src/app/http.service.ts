import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
  errorMessage: String = '';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get('assets/users.json').pipe(
      map((data: any) => {
        console.log(data);
        let usersList = data['userList'];

        return usersList.map(function (user: any): User {
          return new User(user.name, user.age);
        });
      }),
      catchError((err) => {
        console.log(err);
        this.errorMessage = err.message;
        return [];
      })
    );
  }
}
