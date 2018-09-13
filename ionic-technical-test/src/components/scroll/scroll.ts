import { Component } from '@angular/core';

/******************Infinite Scroll **************************/
@Component({
  selector: 'scroll',
  templateUrl: 'scroll.html'
})
export class ScrollComponent {
  items = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    /******************Load the next list until end of items **************************/
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}

