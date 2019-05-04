import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-evens-observable',
  template: ` <hr /><h2>Evens Observable</h2>
              <button (click)="getObservableData()">Subscribe</button>
              {{ numbers }}`
})
export class EvensObservableComponent implements OnInit, OnDestroy {

  numbers = [];
  evensObservable: Observable<number>;
  subscription: Subscription;

  ngOnInit() {
    this.evensObservable =
      Observable.create((observer) => {
        let evenNumber = 0;
        setInterval(() => {
          observer.next(evenNumber += 2);
        }, 1000);
      });
  }

  getObservableData() {
    this.subscription = this.evensObservable
      .subscribe(
        val => {
          this.numbers = [...this.numbers, val];
          console.log(val);
        }
      );
  }

  unsubscribe() {
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
