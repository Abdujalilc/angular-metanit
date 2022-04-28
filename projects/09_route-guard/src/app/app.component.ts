import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
    <h1>Routing Guard</h1>
    <nav>
      <a routerLink="">Home</a>
      <a routerLink="/about">About Site</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {}
