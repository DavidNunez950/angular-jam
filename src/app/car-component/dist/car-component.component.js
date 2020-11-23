"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarComponentComponent = void 0;
var core_1 = require("@angular/core");
var CarComponentComponent = /** @class */ (function () {
    // total: number = this.caomputerTotal();
    function CarComponentComponent(cart) {
        this.cart = cart;
        this.cartList$ = cart.cartList.asObservable();
    }
    CarComponentComponent.prototype.ngOnInit = function () {
    };
    // addToCart(jam: Jam): void {
    //     this.cart.addToCart(jam);
    // }
    CarComponentComponent.prototype.caomputerTotal = function () {
        var total = 0;
        this.cart.cartList.getValue().forEach(function (j) {
            total += j.price * j.quantity;
        });
        return total;
    };
    CarComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-car-component',
            templateUrl: './car-component.component.html',
            styleUrls: ['./car-component.component.scss']
        })
    ], CarComponentComponent);
    return CarComponentComponent;
}());
exports.CarComponentComponent = CarComponentComponent;
