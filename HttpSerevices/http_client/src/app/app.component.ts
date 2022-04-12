import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {User} from './user';
   
@Component({
    selector: 'my-app',
    template: `<div>
                    <p>Имя пользователя: {{user?.name}}</p>
                    <p>Возраст пользователя: {{user?.age}}</p>
               </div>`
})
export class AppComponent implements OnInit { 
   
    user: User | undefined;
 
    constructor(private http: HttpClient){}
      
    ngOnInit(){
          
        this.http.get('assets/user.json').subscribe((data:any) => this.user=new User(data.name, data.age));
    }
}