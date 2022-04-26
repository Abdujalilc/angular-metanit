import {TemplateRef, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
    
@Component({ 
    selector: 'my-app', 
    templateUrl: './app.component.html',
    providers: [UserService]
}) 
export class AppComponent implements OnInit {
    //types of templates
    @ViewChild('readOnlyTemplate', {static: false}) readOnlyTemplate: TemplateRef<any>|undefined;
    @ViewChild('editTemplate', {static: false}) editTemplate: TemplateRef<any>|undefined;
        
    editedUser: User|null = null;
    users: Array<User>;
    isNewRecord: boolean = false;
    statusMessage: string = "";
        
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
    // add user
    addUser() {
        this.editedUser = new User(1,"",0);
        this.users.push(this.editedUser);
        this.isNewRecord = true;
    }
     
    // edit user
    editUser(user: User) {
        this.editedUser = new User(user._id, user.name, user.age);
    }
    // load one og the two templates
    loadTemplate(user: User) {
        if (this.editedUser && this.editedUser._id === user._id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }
    // save user
    saveUser() {
        if (this.isNewRecord) {
            // add user
            this.serv.createUser(this.editedUser as User).subscribe(data => {
                this.statusMessage = 'Данные успешно добавлены',
                this.loadUsers();
            });
            this.isNewRecord = false;
            this.editedUser = null;
        } else {
            // change user
            this.serv.updateUser(this.editedUser as User).subscribe(data => {
                this.statusMessage = 'Данные успешно обновлены',
                this.loadUsers();
            });
            this.editedUser = null;
        }
    }
    // cancel editing
    cancel() {
        // если отмена при добавлении, удаляем последнюю запись
        if (this.isNewRecord) {
            this.users.pop();
            this.isNewRecord = false;
        }
        this.editedUser = null;
    }
    // удаление пользователя
    deleteUser(user: User) {
        this.serv.deleteUser(user._id.toString()).subscribe(data => {
            this.statusMessage = 'Данные успешно удалены',
            this.loadUsers();
        });
    }
}