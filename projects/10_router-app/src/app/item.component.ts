import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'item-info',
  template: `<h3>Model {{ id }}</h3>
    <div>Production: {{ product }}</div>
    <div>Proce: {{ price }}</div>`,
})
export class ItemComponent {
  id: any;
  product: any;
  price: any;

  private routeSubscription: Subscription;
  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(
      (params) => (this.id = params['id'])
    );
    this.querySubscription = route.queryParams.subscribe((queryParam: any) => {
      this.product = queryParam['product'];
      this.price = queryParam['price'];
    });
  }
}
