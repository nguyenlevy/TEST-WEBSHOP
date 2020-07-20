(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news-detail/news-detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news-detail/news-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-vertical-menu mb-3\">\r\n    <div class=\"menu-item\">\r\n        <h2 fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n            [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onClick()\" [id]=\"'menu-item-'\">\r\n            Trang chủ <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\"\r\n                style=\"font-weight: normal !important;\">Tin Tức & Sự\r\n                Kiện</span>\r\n            <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\"\r\n                style=\"font-weight: normal !important;\">Cách nhận biết trà  xanh bạn cần biết</span>\r\n        </h2>\r\n    </div>\r\n</div>\r\n<mat-card-header fxLayoutAlign=\"left center\">\r\n    <mat-card-title class=\"uppercase\">Cách nhận biết trà xanh bạn cần biết</mat-card-title>\r\n</mat-card-header>\r\n<div class=\"divider mt-2 mb-2\"></div>\r\n<div class=\"theme-container\">\r\n    <img [src]=\"'assets/images/others/plan-1.jpg'\" [alt]=\"'Hihi'\" class=\"mw-100\">\r\n    <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any\r\n        or all Agreements: \"Client\", “You” and “Your” refers to you, the person accessing this website and accepting the\r\n        Company’s terms and conditions. \"The Company\", “Ourselves”, “We” and \"Us\", refers to our Company. “Party”,\r\n        “Parties”, or “Us”, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer\r\n        to the offer,\r\n        acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in\r\n        the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express\r\n        purpose of meeting the Client’s needs in respect of provision of the Company’s stated services/products, in\r\n        accordance with and subject to, prevailing English Law. Any use of the above terminology or other words in the\r\n        singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring\r\n        to same.</p>\r\n\r\n\r\n    <p class=\"text-right\">© HouseKey 2019 All Rights Reserved </p>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news-list/news-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news-list/news-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-vertical-menu mb-3\">\r\n    <div class=\"menu-item\">\r\n        <h2 fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n            [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onClick()\" [id]=\"'menu-item-'\">\r\n            Trang chủ <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\"\r\n                style=\"font-weight: normal !important;\">Tin Tức & Sự\r\n                Kiện</span>\r\n        </h2>\r\n    </div>\r\n</div>\r\n<mat-card-header fxLayoutAlign=\"left center\">\r\n    <mat-card-title class=\"uppercase\">Leave a Reply</mat-card-title>\r\n</mat-card-header>\r\n<div class=\"divider mt-2\"></div>\r\n<mat-list class=\"reviews\">\r\n    <div *ngFor=\"let review of reviews\" class=\"h-100  mt-3\">\r\n        <a [routerLink]=\"['/news/detail']\" fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\" style=\"text-decoration:none\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <mat-list-item>\r\n                <img matListAvatar [src]=\"review.avatar\" alt=\"image\" class=\"review-author\">\r\n                <p matLine fxLayoutAlign=\"start center\">\r\n                    <span class=\"fw-500\">{{review.author}}</span>\r\n                    <mat-icon class=\"text-muted px-1\" [matTooltip]=\"review.tooltip\" matTooltipPosition=\"after\">\r\n                        {{review.icon}}</mat-icon>\r\n                </p>\r\n                <p matLine class=\"text-muted\"><small>{{review.date}}</small></p>\r\n                <p matLine class=\"text\">{{review.text}}</p>\r\n            </mat-list-item>\r\n        </a>\r\n    </div>\r\n</mat-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"theme-container\">\r\n    <div fxLayout=\"row wrap\" class=\"agent-wrapper\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.gt-xs=\"50\" class=\"p-3\">\r\n            <h2>CHUYÊN MỤC CHÍNH</h2>\r\n            <div class=\"divider mt-2\"></div>\r\n\r\n            <div class=\"home-vertical-menu\">\r\n                <div class=\"menu-item\">\r\n                    <a [routerLink]=\"['/news']\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n                        [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onClick()\" [id]=\"'menu-item-'\">\r\n                        <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\">Tin Tức & Sự Kiện</span>\r\n                    </a>\r\n                    <a [routerLink]=\"['/news']\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n                        [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onClick()\" [id]=\"'menu-item-'\">\r\n                        <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\">Sức Khỏe Vàng</span>\r\n                    </a>\r\n\r\n                    <a  [routerLink]=\"['/news']\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n                        [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onClick()\" [id]=\"'menu-item-'\">\r\n                        <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\">Cẩm Nang Làm Đẹp</span>\r\n                    </a>\r\n                    <a [routerLink]=\"['/news']\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n                        [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onClick()\" [id]=\"'menu-item-'\">\r\n                        <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\">Kiến Thức Sản Phẩm</span>\r\n                    </a>\r\n                    <a [routerLink]=\"['/news']\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\" routerLinkActive=\"active-link\"\r\n                        [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onClick()\" [id]=\"'menu-item-'\">\r\n                        <mat-icon>keyboard_arrow_right</mat-icon> <span class=\"menu-title\">Hỏi Đáp</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n            <h2 class=\"mt-3\">BÀI VIẾT XEM NHIỀU</h2>\r\n            <div class=\"divider mt-2\"></div>\r\n            <mat-list class=\"reviews\">\r\n                <mat-list-item *ngFor=\"let review of reviews\" class=\"h-100 mt-3\">\r\n                    <img matListAvatar [src]=\"review.avatar\" alt=\"image\" class=\"mw-100 d-block\">\r\n                    <p matLine fxLayoutAlign=\"start center\">\r\n                        <span class=\"fw-500\">{{review.author}}</span>\r\n                        <mat-icon class=\"text-muted px-1\" [matTooltip]=\"review.tooltip\" matTooltipPosition=\"after\">\r\n                            {{review.icon}}</mat-icon>\r\n                    </p>\r\n                    <p matLine class=\"text-muted\"><small>{{review.date}}</small></p>\r\n                    <p matLine class=\"text\">{{review.text}}</p>\r\n                    <div class=\"divider mt-2\"></div>\r\n                </mat-list-item>\r\n            </mat-list>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"66.7\" fxFlex.gt-xs=\"50\" class=\"p-3\">\r\n            <!-- <app-news-list></app-news-list> -->\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n    <!-- </mat-card> -->\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/components/news/news-detail/news-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/news/news-detail/news-detail.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".review-author {\n  border: 1px solid;\n}\n\n.divider {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mat-list-item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mat-list-avatar {\n  border-radius: 0% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MtZGV0YWlsL0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmV3c1xcbmV3cy1kZXRhaWxcXG5ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3cy1kZXRhaWwvbmV3cy1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0kseUNBQUE7QUNFSjs7QURBQTtFQUNJLDRDQUFBO0FDR0o7O0FEREE7RUFDSSw0QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlldy1hdXRob3J7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG4uZGl2aWRlcntcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbi5tYXQtbGlzdC1pdGVte1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuLm1hdC1saXN0LWF2YXRhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XHJcbn0iLCIucmV2aWV3LWF1dGhvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuXG4uZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWxpc3QtaXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWxpc3QtYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/news/news-detail/news-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/news/news-detail/news-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
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


let NewsDetailComponent = class NewsDetailComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.menuParentId = 0;
        this.reviews = [
            {
                author: 'Bruno Vespa',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Dissatisfied',
                icon: 'sentiment_dissatisfied',
                date: '13 January, 2018 at 7:09',
                text: 'Integer id eros et mi fringilla imperdiet.'
            },
            {
                author: 'Julia Aniston',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Very Satisfied',
                icon: 'sentiment_very_satisfied',
                date: '04 February, 2018 at 10:22',
                text: 'Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus.'
            },
            {
                author: 'Andy Warhol',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Neutral',
                icon: 'sentiment_neutral',
                date: '14 February, 2018 at 11:10',
                text: 'Pellentesque hendrerit vel turpis aliquam placerat.'
            }
        ];
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId = null) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuService.getVerticalMenuItems(), menuId);
    }
};
NewsDetailComponent.ctorParameters = () => [
    { type: src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
    __metadata("design:type", Object)
], NewsDetailComponent.prototype, "menuParentId", void 0);
NewsDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-news-detail',
        template: __importDefault(__webpack_require__(/*! raw-loader!./news-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news-detail/news-detail.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./news-detail.component.scss */ "./src/app/components/news/news-detail/news-detail.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
], NewsDetailComponent);



/***/ }),

/***/ "./src/app/components/news/news-list/news-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/news/news-list/news-list.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".review-author {\n  border: 1px solid;\n}\n\n.divider {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mat-list-item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mat-list-avatar {\n  border-radius: 0% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MtbGlzdC9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5ld3NcXG5ld3MtbGlzdFxcbmV3cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5Q0FBQTtBQ0VKOztBREFBO0VBQ0ksNENBQUE7QUNHSjs7QUREQTtFQUNJLDRCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXctYXV0aG9ye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLmRpdmlkZXJ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4ubWF0LWxpc3QtaXRlbXtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbi5tYXQtbGlzdC1hdmF0YXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xyXG59IiwiLnJldmlldy1hdXRob3Ige1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1saXN0LWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1saXN0LWF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/news/news-list/news-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/news/news-list/news-list.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
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


let NewsListComponent = class NewsListComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.menuParentId = 0;
        this.reviews = [
            {
                author: 'Bruno Vespa',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Dissatisfied',
                icon: 'sentiment_dissatisfied',
                date: '13 January, 2018 at 7:09',
                text: 'Integer id eros et mi fringilla imperdiet.'
            },
            {
                author: 'Julia Aniston',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Very Satisfied',
                icon: 'sentiment_very_satisfied',
                date: '04 February, 2018 at 10:22',
                text: 'Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus.'
            },
            {
                author: 'Andy Warhol',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Neutral',
                icon: 'sentiment_neutral',
                date: '14 February, 2018 at 11:10',
                text: 'Pellentesque hendrerit vel turpis aliquam placerat.'
            }
        ];
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId = null) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuService.getVerticalMenuItems(), menuId);
    }
};
NewsListComponent.ctorParameters = () => [
    { type: src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
    __metadata("design:type", Object)
], NewsListComponent.prototype, "menuParentId", void 0);
NewsListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-news-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./news-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news-list/news-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./news-list.component.scss */ "./src/app/components/news/news-list/news-list.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
], NewsListComponent);



/***/ }),

/***/ "./src/app/components/news/news.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".review-author {\n  border: 1px solid;\n}\n\n.divider {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mat-list-item {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.mat-list-avatar {\n  border-radius: 0% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmV3c1xcbmV3cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0kseUNBQUE7QUNFSjs7QURBQTtFQUNJLDRDQUFBO0FDR0o7O0FEREE7RUFDSSw0QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3LWF1dGhvcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcbi5kaXZpZGVye1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuLm1hdC1saXN0LWl0ZW17XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4ubWF0LWxpc3QtYXZhdGFye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcclxufSIsIi5yZXZpZXctYXV0aG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtbGlzdC1hdmF0YXIge1xuICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theme/components/menu/menu.service */ "./src/app/theme/components/menu/menu.service.ts");
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


let NewsComponent = class NewsComponent {
    constructor(menuService) {
        this.menuService = menuService;
        this.menuParentId = 0;
        this.reviews = [
            {
                author: 'Bruno Vespa',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Dissatisfied',
                icon: 'sentiment_dissatisfied',
                date: '13 January, 2018 at 7:09',
                text: 'Integer id eros et mi fringilla imperdiet.'
            },
            {
                author: 'Julia Aniston',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Very Satisfied',
                icon: 'sentiment_very_satisfied',
                date: '04 February, 2018 at 10:22',
                text: 'Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus.'
            },
            {
                author: 'Andy Warhol',
                avatar: 'assets/images/agents/a-1.jpg',
                tooltip: 'Neutral',
                icon: 'sentiment_neutral',
                date: '14 February, 2018 at 11:10',
                text: 'Pellentesque hendrerit vel turpis aliquam placerat.'
            }
        ];
    }
    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.menuItems = this.menuItems.filter(item => item.parentId == this.menuParentId);
    }
    onClick(menuId = null) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuService.getVerticalMenuItems(), menuId);
    }
};
NewsComponent.ctorParameters = () => [
    { type: src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
    __metadata("design:type", Object)
], NewsComponent.prototype, "menuParentId", void 0);
NewsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-news',
        template: __importDefault(__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/news/news.component.html")).default,
        providers: [src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]],
        styles: [__importDefault(__webpack_require__(/*! ./news.component.scss */ "./src/app/components/news/news.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
], NewsComponent);



/***/ }),

/***/ "./src/app/components/news/news.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/news/news.module.ts ***!
  \************************************************/
/*! exports provided: routes, NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-detail/news-detail.component */ "./src/app/components/news/news-detail/news-detail.component.ts");
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-list/news-list.component */ "./src/app/components/news/news-list/news-list.component.ts");
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
    {
        path: '', component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"], children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_6__["NewsListComponent"] },
            { path: 'detail', component: _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_5__["NewsDetailComponent"] },
        ]
    }
];
let NewsModule = class NewsModule {
};
NewsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ],
        declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"], _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_5__["NewsDetailComponent"], _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_6__["NewsListComponent"]],
    })
], NewsModule);



/***/ })

}]);
//# sourceMappingURL=components-news-news-module-es2015.js.map