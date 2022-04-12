import { Component} from '@angular/core';
  
@Component({
    selector: 'my-app',
    template: `<div>
                    <nav>
                        <a routerLink="">Главная</a> |
                        <a routerLink="/item/5/details">Информация о товаре</a> |
                        <a routerLink="/item/5/stat">Статистика товара</a>
                    </nav>
                    <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}