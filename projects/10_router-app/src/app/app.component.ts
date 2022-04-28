import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class Item {
  constructor( public id: number, public product: string, public price: number ) {}
}

@Component({
  selector: 'my-app',
  template: `<div>
    <nav>
      <a routerLink="">Home</a>
      <a routerLink="/about">About Site</a>
    </nav>
    <div class="form-group">
      <h3>Object Parameters</h3>
      <input type="number" [(ngModel)]="item.id" class="form-control" placeholder="Model Number" /><br />
      <input type="number" [(ngModel)]="item.price" class="form-control" placeholder="Price" /><br />
      <input [(ngModel)]="item.product" class="form-control" placeholder="Production" /><br />
      <button (click)="goToItem(item)" class="btn">GO</button>
    </div>
    <router-outlet></router-outlet>
  </div>`,
})
export class AppComponent {
  item: Item = new Item(1, '', 0);

  constructor(private router: Router) {}

  goToItem(myItem: Item) {
    this.router.navigate(['/item', myItem.id], {
      queryParams: {
        product: myItem.product,
        price: myItem.price,
      },
    });
  }
}
