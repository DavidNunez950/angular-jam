"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InputIntegerComponent = void 0;
var core_1 = require("@angular/core");
var InputIntegerComponent = /** @class */ (function () {
    function InputIntegerComponent() {
        this.quantityChange = new core_1.EventEmitter();
        this.maxReached = new core_1.EventEmitter();
    }
    InputIntegerComponent.prototype.ngOnInit = function () {
    };
    InputIntegerComponent.prototype.downQuantity = function () {
        // this.verifyValues();
        if (this.quantity > this.minValue) {
            this.quantity--;
            this.quantityChange.emit(this.quantity);
        }
    };
    InputIntegerComponent.prototype.upQuantity = function () {
        // debugger;
        // this.verifyValues();
        if (this.quantity < this.maxValue) {
            this.quantity++;
            this.quantityChange.emit(this.quantity);
        }
        else {
            this.maxReached.emit("Papu, se alzanzo el mazimó");
        }
    };
    InputIntegerComponent.prototype.changeQuantity = function (event) {
        console.log(Number.isNaN(event.target.value));
        this.quantity = Number.parseInt((String(this.quantity)), 10) + 0;
        if (this.quantity > this.maxValue || event.target.value > this.maxValue) {
            this.quantity = this.maxValue;
        }
        else if (this.quantity < this.minValue || event.target.value < this.minValue || Number.isNaN(this.quantity) || Number.isNaN(event.target.value)) {
            this.quantity = this.minValue;
        }
        this.quantityChange.emit(this.quantity);
    };
    __decorate([
        core_1.Input()
    ], InputIntegerComponent.prototype, "quantity");
    __decorate([
        core_1.Input()
    ], InputIntegerComponent.prototype, "minValue");
    __decorate([
        core_1.Input()
    ], InputIntegerComponent.prototype, "maxValue");
    __decorate([
        core_1.Output()
    ], InputIntegerComponent.prototype, "quantityChange");
    __decorate([
        core_1.Output()
    ], InputIntegerComponent.prototype, "maxReached");
    InputIntegerComponent = __decorate([
        core_1.Component({
            selector: 'app-input-integer',
            templateUrl: './input-integer.component.html',
            styleUrls: ['./input-integer.component.scss']
        })
    ], InputIntegerComponent);
    return InputIntegerComponent;
}());
exports.InputIntegerComponent = InputIntegerComponent;
