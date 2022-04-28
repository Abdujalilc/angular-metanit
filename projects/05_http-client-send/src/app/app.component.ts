import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'my-app',
  template: `<div *ngIf="done">Sum = {{ sum }}</div>
    <div class="form-group">
      <label>Enter the first number</label>
      <input class="form-control" type="number" name="num1" [(ngModel)]="num1" />
    </div>
    <div class="form-group">
      <label>Enter the second number</label>
      <input class="form-control" type="number" name="num2" [(ngModel)]="num2" />
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="submit()">Send</button>
    </div>`,
  providers: [HttpService],
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number | undefined;
  done: boolean = false;
  constructor(private httpService: HttpService) {}
  submit(): void {
    this.httpService.getSum(this.num1, this.num2).subscribe((data: any) => {
      this.sum = data.result;
      this.done = true;
    });
  }
}
