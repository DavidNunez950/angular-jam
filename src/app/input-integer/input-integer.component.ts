import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-input-integer',
    templateUrl: './input-integer.component.html',
    styleUrls: ['./input-integer.component.scss']
})

export class InputIntegerComponent implements OnInit {

    constructor() { }

    @Input()
    quantity: number;

    @Input()
    maxValue: number;

    // Uso un atributo del objeto para representar el valor minimo para que sea más prolijo
    minValue: number = 0;

    @Output()
    quantityChange: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    maxReached: EventEmitter<String> = new EventEmitter<String>();

    ngOnInit(): void { }

    downQuantity(): void {
        if(this.quantity>this.minValue) {
            this.quantity--;
            this.quantityChange.emit(this.quantity);
        }
    }

    upQuantity(): void  {
        if(this.quantity<this.maxValue) {
            this.quantity++;
            this.quantityChange.emit(this.quantity);
        } else {
            this.maxReached.emit("You can't buy anything else");
        }
    }

    changeQuantity(event): void {
        this.quantity = Number.parseInt((String(this.quantity)), 10);
        if(this.quantity>this.maxValue || event.target.value > this.maxValue) {
            this.quantity = this.maxValue;
        } else if(this.quantity<this.minValue || event.target.value < this.minValue || Number.isNaN(this.quantity)) {
            this.quantity = this.minValue;
        }
        this.quantityChange.emit(this.quantity);
    }
}
