import { Component} from '@angular/core';
   
@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>Маршрутизация в Angular 13</h1>
                    <nav>
                        <a routerLink="">Главная</a>
                        <a routerLink="/about">О сайте</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}