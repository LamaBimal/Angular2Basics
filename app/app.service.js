"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppService = (function () {
    function AppService(http) {
        this.headers = new http_1.Headers({ 'content-Type': 'application/json' });
        this.http = http;
    }
    AppService.prototype.create = function (body, controller, action) {
        var options = new http_1.RequestOptions({ headers: this.headers });
        this.http = new http_1.Http(this.headers, options);
        var url = "/Api/" + controller + "/" + action;
        return this.http.post(url, body, this.headers).toPromise.then(function (res) { return res.json(); });
    };
    AppService.prototype.update = function (body, id, controller, action) {
        var options = new http_1.RequestOptions({ headers: this.headers });
        this.http = new http_1.Http(this.headers, options);
        var url = "/Api/" + controller + "/" + action;
        return this.http.put(url, id, body, this.headers).toPromise.then(function (res) { return res.json(); });
    };
    AppService.prototype.delete = function (_id, controller, action) {
        var Options = new http_1.RequestOptions({ headers: this.headers });
        this.http = new http_1.Http(this.headers, Options);
        var url = "/Api/" + controller + "/" + action + "/" + _id;
        return this.http.delete(url);
    };
    AppService.prototype.get = function (controller, action) {
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map