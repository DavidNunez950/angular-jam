"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JamListComponent = void 0;
var core_1 = require("@angular/core");
var JamListComponent = /** @class */ (function () {
    function JamListComponent(cart) {
        this.cart = cart;
        this.jams = [
            {
                flavor: 'orange',
                stock: 9999,
                // Modificación de la url de las img solo para que carguen en stackblizt
                img: 'https://raw.githubusercontent.com/DavidNunez950/angular-jam/master/src/assets/img/orange.png',
                price: 0.5,
                quantity: 0
            },
            {
                flavor: 'strowberry',
                stock: 100,
                img: 'https://raw.githubusercontent.com/DavidNunez950/angular-jam/master/src/assets/img/strowberry.png',
                price: 250,
                quantity: 0
            },
            {
                flavor: 'apple',
                stock: 200,
                img: 'https://raw.githubusercontent.com/DavidNunez950/angular-jam/master/src/assets/img/apple.png',
                price: 175,
                quantity: 0
            },
            {
                flavor: 'banana',
                stock: 676,
                img: 'https://raw.githubusercontent.com/DavidNunez950/angular-jam/master/src/assets/img/banana.png',
                price: 75,
                quantity: 0
            },
            {
                flavor: 'plum',
                stock: 255,
                img: 'https://raw.githubusercontent.com/DavidNunez950/angular-jam/master/src/assets/img/plum.png',
                price: 100,
                quantity: 0
            },
        ];
    }
    JamListComponent.prototype.ngOnInit = function () { };
    JamListComponent.prototype.addToCart = function (jam) {
        if (jam.stock > 0 && jam.quantity > 0) {
            jam.stock -= jam.quantity;
            this.cart.addToCart(jam);
        }
    };
    JamListComponent.prototype.maxReached = function (m) {
        alert(m);
    };
    JamListComponent = __decorate([
        core_1.Component({
            selector: 'app-jam-list',
            templateUrl: './jam-list.component.html',
            styleUrls: ['./jam-list.component.scss']
        })
    ], JamListComponent);
    return JamListComponent;
}());
exports.JamListComponent = JamListComponent;
