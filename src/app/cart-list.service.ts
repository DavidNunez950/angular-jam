import { Injectable } from '@angular/core';
import { Jam } from './jam-list/jam';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartListService {

  private _cartList: Jam[] = [];
  cartList: BehaviorSubject<Jam[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(jam: Jam): void {
    let item = this._cartList.find((c) => c.flavor == jam.flavor);
    (!item) ? this._cartList.push({ ... jam}) : item.quantity += jam.quantity;
    this.cartList.next(this._cartList);
  }


}
