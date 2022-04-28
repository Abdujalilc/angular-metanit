import { Component } from '@angular/core';
import { ComponentCanDeactivate } from './exit.about.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'about-app',
  template: `<h3>О сайте</h3>
    <button class="btn btn-default" (click)="save()">Сохранить</button>
    <a routerLink="">На главную</a> `,
})
export class AboutComponent implements ComponentCanDeactivate {
  saved: boolean = false;
  save() {
    this.saved = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved) {
      return confirm('Do you really want to leave the page?');
    } else {
      return true;
    }
  }
}
