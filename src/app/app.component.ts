import { Component, computed, effect } from '@angular/core';
import counterService from './services/counter.service';

@Component({
  selector: 'app-root',
  template: `
    <div>Count: {{ counter() }}</div>
    <div>Double: {{ double() }}</div> 
    <div>This number is {{ isEven()}}</div>
  
    <button (click)="increment()">Increment</button>
    <button (click)="random()">Random</button>
    `
})
export class AppComponent {


  counter = counterService.counter;

  double = counterService.double;

  isEven = computed(() => counterService.isEven() ? 'even' : 'odd');

  increment() {
    this.counter.update((counter) => counter = counter + 1);
  }

  random() {
    this.counter.set(Math.floor(Math.random() * 100));
  }
  
}

