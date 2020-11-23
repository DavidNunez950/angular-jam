import { Component, OnInit } from '@angular/core';
import {Jam} from './jam';
import { CartListService } from '../cart-list.service';

@Component({
    selector: 'app-jam-list',
    templateUrl: './jam-list.component.html',
    styleUrls: ['./jam-list.component.scss']
})
export class JamListComponent implements OnInit {


    constructor(private cart: CartListService) { }

    ngOnInit(): void { }


    addToCart(jam: Jam): void {
        if(jam.stock > 0 && jam.quantity > 0) {
            jam.stock -= jam.quantity;
            this.cart.addToCart(jam);
        }
    }

    jams: Jam[] = [
        {
            flavor: 'orange',
            stock: 9999,
            img: 'assets/img/orange.png',
            price: 0.5,
            quantity: 0,
        },
        {
            flavor: 'strowberry',
            stock: 76,
            img: 'assets/img/strowberry.png',
            price: 20,
            quantity: 0,
        },
        {
            flavor: 'apple',
            stock: 200,
            img: 'assets/img/apple.png',
            price: 15,
            quantity: 0,
        },
        {
            flavor: 'banana',
            stock: 676,
            img: 'assets/img/banana.png',
            price: 10,
            quantity: 0,
        },
        {
            flavor: 'plum',
            stock: 255,
            img: 'assets/img/plum.png',
            price: 500,
            quantity: 0,
        },
    ];

    maxReached(m: String): void {
        alert(m);
    }

}
