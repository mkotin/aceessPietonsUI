import { __assign, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
var AppHttpService = /** @class */ (function () {
    function AppHttpService(httpClient) {
        this.httpClient = httpClient;
    }
    AppHttpService.prototype.getHeader = function (headerOptions) {
        var headerParams = {};
        if (headerOptions) {
            headerParams = __assign(__assign({}, headerParams), headerOptions);
        }
        if (localStorage.getItem('access_token')) {
            headerParams.Authorization = localStorage.getItem('access_token');
        }
        var headers = new HttpHeaders(headerParams);
        return headers;
    };
    AppHttpService.prototype.get = function (url, params, headerOptions) {
        if (params === void 0) { params = {}; }
        if (headerOptions === void 0) { headerOptions = {}; }
        return this.httpClient.get(url, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    };
    AppHttpService.prototype.post = function (url, data, params, headerOptions) {
        if (params === void 0) { params = {}; }
        if (headerOptions === void 0) { headerOptions = {}; }
        return this.httpClient.post(url, data, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    };
    AppHttpService.prototype.put = function (url, data, params, headerOptions) {
        if (params === void 0) { params = {}; }
        if (headerOptions === void 0) { headerOptions = {}; }
        return this.httpClient.put(url, data, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    };
    AppHttpService.prototype.delete = function (url, params, headerOptions) {
        if (params === void 0) { params = {}; }
        if (headerOptions === void 0) { headerOptions = {}; }
        return this.httpClient.delete(url, {
            headers: this.getHeader(headerOptions),
            params: params
        });
    };
    AppHttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AppHttpService);
    return AppHttpService;
}());
export { AppHttpService };
//# sourceMappingURL=app-http.service.js.map