import { Component, OnInit } from '@angular/core';
import { Jam } from '../jam-list/jam';
import { CartListService } from '../cart-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.scss']
})
export class CarComponentComponent implements OnInit {

  cartList$: Observable<Jam[]>;

  // total: number = this.caomputerTotal();

  constructor(private cart: CartListService) {
    this.cartList$ = cart.cartList.asObservable();
  }

    ngOnInit(): void {
    }

    // addToCart(jam: Jam): void {
    //     this.cart.addToCart(jam);
    // }

    caomputerTotal() {
      let total: number = 0;
      this.cart.cartList.getValue().forEach( j  => {
          total += j.price * j.quantity;
        });
      return total;
    }
}
