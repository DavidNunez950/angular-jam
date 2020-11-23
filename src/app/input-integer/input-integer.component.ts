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
    minValue: number;

    @Input()
    maxValue: number;

    @Output()
    quantityChange: EventEmitter<number> = new EventEmitter<number>();

    @Output()
    maxReached: EventEmitter<String> = new EventEmitter<String>();
    
    ngOnInit(): void {
    }

    downQuantity(): void {
        // this.verifyValues();
        if(this.quantity>this.minValue) {
            this.quantity--;
            this.quantityChange.emit(this.quantity);
        }
    }

    upQuantity(): void  {
        // debugger;
        // this.verifyValues();
        if(this.quantity<this.maxValue) {
            this.quantity++;
            this.quantityChange.emit(this.quantity);
        } else {
            this.maxReached.emit("Papu, se alzanzo el mazimó");
        }
    }

    changeQuantity(event): void {
        console.log(Number.isNaN(event.target.value))

        this.quantity = Number.parseInt((String(this.quantity)), 10);

        if(this.quantity>this.maxValue || event.target.value > this.maxValue) {
            this.quantity = this.maxValue;
        } else if(this.quantity<this.minValue  || event.target.value < this.minValue || Number.isNaN(this.quantity)) {
            this.quantity = this.minValue;
        }
        this.quantityChange.emit(this.quantity);
    }
}
