(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-product-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-menu-filter/product-menu-filter.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-menu-filter/product-menu-filter.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>product-menu-filter works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-3\">\r\n\r\n    <div class=\"theme-container\">\r\n\r\n        <mat-sidenav-container class=\"all-properties mt-3\">\r\n            <mat-sidenav #sidenav [autoFocus]=\"false\" [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\"\r\n                class=\"search-sidenav\">\r\n                <mat-accordion multi=\"true\">\r\n                    <mat-expansion-panel *ngFor=\"let faq of faqs; let i = index;\" [expanded]=\"i === 0\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                <span style=\"text-transform:uppercase;\">{{faq.title}}</span>\r\n                            </mat-panel-title>\r\n                        </mat-expansion-panel-header>\r\n                        Đây là phần body\r\n                    </mat-expansion-panel>\r\n                </mat-accordion>\r\n            </mat-sidenav>\r\n\r\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\r\n\r\n                <div class=\"theme-container\">\r\n\r\n                    <div fxLayout=\"row wrap\">\r\n\r\n                        <div class=\"home-vertical-menu\">\r\n                            <div class=\"menu-item\">\r\n                                <h2 fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n                                    [routerLinkActiveOptions]=\"{exact:true}\" [id]=\"'menu-item-'\">\r\n                                    Trang chủ <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\"\r\n                                        style=\"font-weight: normal !important;\">Tin Tức & Sự\r\n                                        Kiện</span>\r\n                                </h2>\r\n                            </div>\r\n                            <h2>LAPTOP, MÁY TÍNH & THIẾT BỊ VĂN PHÒNG (2788,98 sản phẩm)</h2>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"divider\"></div>\r\n                    <div fxLayout=\"row wrap\" class=\"m-1 p-1\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\r\n                            <mat-checkbox> Free ship</mat-checkbox>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\r\n                            <div fxLayout=\"row\" style=\"flex-direction: row-reverse !important;\">\r\n                                <div\r\n                                    style=\"text-align: right;width: 100%;display: flex;margin-left: auto;align-items: center;justify-content: flex-end;\">\r\n                                    Giá thấp nhất\r\n\r\n                                    <mat-icon style=\"font-size: 24px;line-height: 100%;\">\r\n                                        arrow_drop_down</mat-icon>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"theme-container\">\r\n\r\n                    <div fxLayout=\"row wrap\" class=\"m-1 p-1\">\r\n                        <div class=\"agents-carousel\">\r\n                            <div class=\"swiper-container carousel-outer\" [swiper]=\"config\">\r\n                                <div class=\"swiper-wrapper\">\r\n                                    <div *ngFor=\"let property of properties\" class=\"swiper-slide item\">\r\n                                        <input autocomplete=\"off\" value=\"chuột, bàn phím\"\r\n                                            style=\"border: 1px solid;line-height: 20px;width: 100%;line-height: 20px;margin-left: 5px;padding: 5px;\">\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\">\r\n                                    <mat-icon>keyboard_arrow_left</mat-icon>\r\n                                </button>\r\n                                <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\">\r\n                                    <mat-icon>keyboard_arrow_right</mat-icon>\r\n                                </button> -->\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"theme-container\">\r\n                    <div class=\"px-3 mb-3\">\r\n                        <mat-tab-group mat-align-tabs=\"left\" class=\"pricing-tabs\">\r\n                            <mat-tab label=\"Sản phẩm được tài trợ\">\r\n                                <app-product-list></app-product-list>\r\n                            </mat-tab>\r\n                        </mat-tab-group>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"divider m-2 p-2\"></div>\r\n\r\n                <div class=\"theme-container\">\r\n                    <div class=\"px-3 mb-3\">\r\n                        <app-product-list></app-product-list>\r\n                        <br>\r\n                        <app-product-list></app-product-list>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"theme-container mb-3\">\r\n                    <div fxLayout=\"row wrap\" class=\"agent-wrapper row-pag\">\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.gt-xs=\"50\">\r\n                            <i style=\"padding-left: 10px;\">1 của 14922 trang</i>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.gt-xs=\"50\">\r\n\r\n                            <ul class=\"pag\">\r\n                                <li><a>\r\n                                        <mat-icon>keyboard_arrow_left</mat-icon>\r\n                                    </a></li>\r\n                                <li><a>1</a></li>\r\n                                <li><a>2</a></li>\r\n                                <li><a>3</a></li>\r\n                                <li><a>4</a></li>\r\n                                <li><a>5</a></li>\r\n                                <li><a>6</a></li>\r\n                                <li><a>...</a></li>\r\n                                <li><a>\r\n                                        <mat-icon>keyboard_arrow_right</mat-icon>\r\n                                    </a></li>\r\n                            </ul>\r\n                        </div>\r\n\r\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.gt-xs=\"50\">\r\n                            <!-- <div style=\"text-align: right;padding-right: 10px;\">Đi tới trang <input type=\"number\"\r\n                                    style=\"width:20px\"></div> -->\r\n                            <div fxLayout=\"row\" style=\"flex-direction: row-reverse !important;\">\r\n                                <div\r\n                                    style=\"text-align: right;width: 100%;display: flex;margin-left: auto;align-items: center;justify-content: flex-end;padding-right: 10px;\">\r\n                                    Đi tới trang\r\n                                    <input autocomplete=\"off\"\r\n                                        style=\"border: 1px solid;line-height: 20px;width: 50px;line-height: 20px;margin-left: 5px;\">\r\n                                    <button style=\"height: 22px;line-height: 22px;\">\r\n                                        <mat-icon style=\"height: 100%;width: 100%;font-size: 18px;line-height: 100%;\">\r\n                                            keyboard_arrow_right</mat-icon>\r\n                                    </button>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"theme-container\">\r\n                    <div class=\"px-3 mb-3\">\r\n                        <mat-tab-group mat-align-tabs=\"left\" class=\"pricing-tabs\">\r\n                            <mat-tab label=\"Sản phẩm đã xem\">\r\n                                <app-product-list></app-product-list>\r\n                            </mat-tab>\r\n                        </mat-tab-group>\r\n                    </div>\r\n                </div>\r\n\r\n            </mat-sidenav-content>\r\n        </mat-sidenav-container>\r\n\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./src/app/components/product/product-menu-filter/product-menu-filter.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/product/product-menu-filter/product-menu-filter.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LW1lbnUtZmlsdGVyL3Byb2R1Y3QtbWVudS1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/product/product-menu-filter/product-menu-filter.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/product/product-menu-filter/product-menu-filter.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductMenuFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMenuFilterComponent", function() { return ProductMenuFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ProductMenuFilterComponent = class ProductMenuFilterComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductMenuFilterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product-menu-filter',
        template: __importDefault(__webpack_require__(/*! raw-loader!./product-menu-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-menu-filter/product-menu-filter.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./product-menu-filter.component.scss */ "./src/app/components/product/product-menu-filter/product-menu-filter.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], ProductMenuFilterComponent);



/***/ }),

/***/ "./src/app/components/product/product.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-home {\n  background-color: #f1f1f1;\n}\n\n.agents-wrapper {\n  margin: -16px;\n  padding: 32px 0;\n}\n\n.agents-wrapper .agent-img {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n\n.mat-card {\n  margin: 0px;\n}\n\nng-deep .mat-tab-body-content {\n  overflow: hidden;\n}\n\n.theme-container {\n  background-color: #fff;\n}\n\n.mat-expansion-panel-spacing {\n  margin-bottom: 0px !important;\n}\n\n.mat-expansion-panel {\n  margin-top: 0px !important;\n  border-radius: 0px;\n}\n\n.divider {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.pag {\n  display: flex;\n  margin: 0px;\n}\n\n.pag li {\n  width: 40px;\n  list-style: none;\n  vertical-align: middle;\n}\n\n.pag li a {\n  text-decoration: none;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.row-pag {\n  height: 2.5rem;\n  line-height: 2.5rem;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURBRTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUNFSjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJRTtFQUNFLGdCQUFBO0FDREo7O0FESUE7RUFDRSxzQkFBQTtBQ0RGOztBREtBO0VBQ0UsNkJBQUE7QUNGRjs7QURJQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTtFQUNFLHlDQUFBO0FDQUY7O0FERUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaG9tZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxufVxyXG5cclxuLmFnZW50cy13cmFwcGVyIHtcclxuICBtYXJnaW46IC0xNnB4O1xyXG4gIHBhZGRpbmc6IDMycHggMDtcclxuICAuYWdlbnQtaW1nIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuLy8gLm1hdC1jYXJkIHtcclxuLy8gICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbi8vIH1cclxuLm1hdC1jYXJkIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5uZy1kZWVwIHtcclxuICAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuLnRoZW1lLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5nIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbi5kaXZpZGVyIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4ucGFnIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ucGFnIGxpIHtcclxuICB3aWR0aDogNDBweDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnBhZyBsaSBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnJvdy1wYWcge1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iLCIuYXBwLWhvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uYWdlbnRzLXdyYXBwZXIge1xuICBtYXJnaW46IC0xNnB4O1xuICBwYWRkaW5nOiAzMnB4IDA7XG59XG4uYWdlbnRzLXdyYXBwZXIgLmFnZW50LWltZyB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xufVxuXG4ubWF0LWNhcmQge1xuICBtYXJnaW46IDBweDtcbn1cblxubmctZGVlcCAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGhlbWUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtc3BhY2luZyB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5wYWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnBhZyBsaSB7XG4gIHdpZHRoOiA0MHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucGFnIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb3ctcGFnIHtcbiAgaGVpZ2h0OiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var src_app_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.models */ "./src/app/app.models.ts");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









let ProductComponent = class ProductComponent {
    constructor(appSettings, appService, mediaObserver, platformId) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.platformId = platformId;
        this.sidenavOpen = true;
        this.psConfig = {
            wheelPropagation: true
        };
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 12;
        this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_2__["Pagination"](1, this.count, null, 2, 0, 0);
        this.faqs = [
            {
                title: 'BỘ LỌC SẢN PHẨM',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'THEO KHOẢNG GIÁ',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'MÀU SẮC',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'Ổ CỨNG',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'TÌNH TRẠNG MÁY',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'HỆ ĐIỀU HÀNH',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'VI XỬ LÝ',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'HÃNG SẢN XUẤT',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'XUẤT XỨ',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'CỔNG KẾT NỐI MÁY TÍNH',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'NGUỒN GỐC',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
            {
                title: 'VỊ TRÍ SHOP',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet,'
            },
        ];
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.media$.subscribe((change) => {
            if (change.mqAlias == 'xs') {
                this.sidenavOpen = false;
                this.viewCol = 100;
            }
            else if (change.mqAlias == 'sm') {
                this.sidenavOpen = false;
                this.viewCol = 50;
            }
            else if (change.mqAlias == 'md') {
                this.viewCol = 50;
                this.sidenavOpen = true;
            }
            else {
                this.viewCol = 33.3;
                this.sidenavOpen = true;
            }
        });
    }
    ngOnInit() {
        this.getProperties();
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    getProperties() {
        this.appService.getProperties().subscribe(data => {
            let result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_2__["Pagination"](1, this.count, null, 2, 0, 0);
                this.message = 'No Results Found';
                return false;
            }
            this.properties = result.data;
            this.pagination = result.pagination;
            this.message = null;
        });
    }
    resetPagination() {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_2__["Pagination"](1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.resetPagination();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                this.properties.length = 0;
            }
        });
        event.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(() => {
            if (!this.settings.searchOnBtnClick) {
                this.getProperties();
            }
        });
    }
    removeSearchField(field) {
        this.message = null;
        this.removedSearchField = field;
    }
    changeCount(count) {
        this.count = count;
        this.properties.length = 0;
        this.resetPagination();
        this.getProperties();
    }
    changeSorting(sort) {
        this.sort = sort;
        this.properties.length = 0;
        this.getProperties();
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    onPageChange(e) {
        this.pagination.page = e.pageIndex + 1;
        this.getProperties();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformId)) {
            window.scrollTo(0, 0);
        }
    }
    ngAfterViewInit() {
        this.config = {
            observer: true,
            slidesPerView: 9,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: false,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                600: {
                    slidesPerView: 1,
                },
                960: {
                    slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 3,
                }
            }
        };
    }
};
ProductComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
    __metadata("design:type", Object)
], ProductComponent.prototype, "sidenav", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
    __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
], ProductComponent.prototype, "paginator", void 0);
ProductComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-product',
        template: __importDefault(__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html")).default,
        providers: [src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]],
        styles: [__importDefault(__webpack_require__(/*! ./product.component.scss */ "./src/app/components/product/product.component.scss")).default]
    }),
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
        src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"],
        Object])
], ProductComponent);



/***/ }),

/***/ "./src/app/components/product/product.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/product/product.module.ts ***!
  \******************************************************/
/*! exports provided: routes, ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _product_menu_filter_product_menu_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-menu-filter/product-menu-filter.component */ "./src/app/components/product/product-menu-filter/product-menu-filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const routes = [
    { path: '', component: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], pathMatch: 'full' }
];
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _product_menu_filter_product_menu_filter_component__WEBPACK_IMPORTED_MODULE_5__["ProductMenuFilterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], ProductModule);



/***/ })

}]);
//# sourceMappingURL=components-product-product-module-es2015.js.map