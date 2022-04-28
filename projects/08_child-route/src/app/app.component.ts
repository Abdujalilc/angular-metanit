import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
    <nav>
      <a routerLink="">Home</a> |
      <a routerLink="/item/5/details">Production Information</a> |
      <a routerLink="/item/5/stat">Production Statistics</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {}
