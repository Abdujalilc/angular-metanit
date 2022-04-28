import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'item-info',
  template: `<h2>Production {{ id }}</h2>
    <router-outlet></router-outlet>`,
})
export class ItemComponent {
  id: any;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(
      (params) => (this.id = params['id'])
    );
  }
}
