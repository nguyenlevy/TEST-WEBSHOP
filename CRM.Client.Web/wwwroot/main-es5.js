function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-menu-header></app-menu-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-shop/cart-shop.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-shop/cart-shop.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCartShopCartShopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n<div class=\"theme-container\">\r\n    <div class=\"theme-container\">\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"100\">\r\n            <h2 class=\"mt-2 mb-2\">GIỎ HÀNG</h2>\r\n            <div class=\"wp-table-b\">\r\n                <table cellspacing=\"0\" cellpadding=\"0\" width=\"100%\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th colspan=\"2\">Sản phẩm bạn chọn</th>\r\n                            <th>Giá thành</th>\r\n                            <th>Số lượng</th>\r\n                            <th>Thành Tiền</th>\r\n                            <th><button><i class=\"far fa-trash-alt\"></i></button><span>Xóa</span></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>\r\n                                <div class=\"img\"><img src=\"\" alt=\"\"></div>\r\n                            </td>\r\n                            <td>\r\n                                <p class=\"h2-title\">Bột giặt mẹ Ken</p>\r\n                                <div class=\"post\"><a style=\"text-decoration: none;\" href=\"#\">Mẹ Ken</a>, <a style=\"text-decoration: none;\" href=\"#\">Việt Nam</a></div>\r\n                            </td>\r\n                            <td><b class=\"int\">890.000 đ</b></td>\r\n                            <td><input class=\"input-number\" type=\"number\" value=\"1\"></td>\r\n                            <td><b>1.323.000 đ</b></td>\r\n                            <td><i class=\"far fa-times-circle\"></i></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>\r\n                                <div class=\"img\"><img src=\"\" alt=\"\"></div>\r\n                            </td>\r\n                            <td>\r\n                                <p class=\"h2-title\">Bột giặt mẹ Ken</p>\r\n                                <div class=\"post\"><a  style=\"text-decoration: none;\" href=\"#\">Mẹ Ken</a>, <a style=\"text-decoration: none;\" href=\"#\">Việt Nam</a></div>\r\n                            </td>\r\n                            <td><b>890.000 đ</b>\r\n                                <div class=\"sale\"><span class=\"price-old\">900.000 đ</span>|<span\r\n                                        class=\"int-sale\">4%</span></div>\r\n                            </td>\r\n                            <td><input class=\"input-number\" type=\"number\" value=\"1\"></td>\r\n                            <td><b>1.323.000 đ</b></td>\r\n                            <td><i class=\"far fa-times-circle\"></i></td>\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                        <tr>\r\n                            <td colspan=\"2\" rowspan=\"2\"></td>\r\n                            <td colspan=\"2\" style=\"text-align: right;\"><span>Tạm tính (chưa tính phí vận chuyển)</span>\r\n                            </td>\r\n                            <td colspan=\"2\"><span class=\"price-f1\">2.333.000 đ</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td colspan=\"2\" style=\"text-align: right;\"><b>Thành tiền</b></td>\r\n                            <td colspan=\"2\"><b class=\"price-ft\">2.500.000 đ</b></td>\r\n                        </tr>\r\n                    </tfoot>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"88.8\" class=\"p-3\">\r\n            <button mat-stroked-button>\r\n                <a [href]=\"\" target=\"blank\" class=\"social-icon\" style=\"display: flex;align-items: center;\">\r\n                    <mat-icon>keyboard_arrow_left</mat-icon> Đặt hàng\r\n                </a>\r\n            </button>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"22.2\" class=\"p-3\">\r\n            <button mat-stroked-button>\r\n                <a [href]=\"\" target=\"blank\" class=\"social-icon\" style=\"display: flex;align-items: center;\">\r\n                    Tiếp tục mua hàng\r\n                    <mat-icon>keyboard_arrow_right</mat-icon>\r\n                </a>\r\n            </button>\r\n        </div>\r\n      \r\n    </div>\r\n    <hr style=\"margin: 1rem 0;\"> \r\n    <div class=\"wp-container_b\">\r\n        <div class=\"px-3 mb-3\">\r\n            <h2>SẢN PHẨM ĐÃ XEM</h2>\r\n            <app-product-list></app-product-list>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n        <div class=\"row\">\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\r\n                <mat-tab-group mat-align-tabs=\"left\" class=\"pricing-tabs\">\r\n                    <mat-tab label=\"BÁCH HÓA THIÊN NHIÊN\">\r\n                        <div>\r\n                            <p>Chuyên cung cấp sản phẩm chăm sóc sức khỏe & sắc đẹp nguồn gốc 100% từ thiên nhiên</p>\r\n                        </div>\r\n                        <div>\r\n                            <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  style=\" border-radius: 5px; background-color: #ccc; color: gainsboro; height: 16px; width: 16px;font-size: 16px;\" >call</mat-icon><span class=\"mx-2\">Kinh doanh và tư vấn</span></p>\r\n                            <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon style=\" border-radius: 5px; background-color: #ccc; color: gainsboro ;height: 16px; width: 16px;font-size: 16px;\">call</mat-icon><span class=\"mx-2\">Đại lý - Đối tác</span></p>\r\n                            <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon style=\" border-radius: 5px; background-color: #ccc; color: gainsboro;height: 16px; width: 16px;font-size: 16px;\">call</mat-icon><span class=\"mx-2\">Khiếu nại - Phàn nàn</span></p>\r\n                            <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon style=\"height: 16px; width: 16px;font-size: 16px;\" >email</mat-icon><span class=\"mx-2\">Email:</span></p>\r\n                        </div>\r\n                        <div>\r\n                            <div class=\"contact-map\">\r\n                                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"false\" ></agm-marker>\r\n                                </agm-map>\r\n                            </div>\r\n                        </div>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"40\" class=\"p-3\">\r\n                <mat-tab-group mat-align-tabs=\"left\" class=\"pricing-tabs\" >\r\n                    <mat-tab label=\"GỬI LIÊN HỆ\">\r\n                        <div>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Họ và tên</mat-label>\r\n                                <input matInput placeholder=\"Họ và tên bạn..\" autocomplete=\"off\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                <mat-label>Số điện thoại</mat-label>\r\n                                <input matInput placeholder=\"Số điện thoại của bạn..\" autocomplete=\"off\">\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div>\r\n                            <mat-form-field appearance=\"outline\" class=\"w-100\" style=\"line-height: 2.125;\">\r\n                                <mat-label>Nội dung liên hệ</mat-label>\r\n                                <textarea matInput placeholder=\"Nội dung liên hệ\" rows=\"6\"></textarea>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div>\r\n                            <button mat-raised-button style=\"background-color: limegreen;\" class=\"uppercase\" class=\"w-100\" type=\"submit\">                           \r\n                               <mat-icon>near_me</mat-icon>\r\n                               Gửi đi\r\n                            </button>\r\n                        </div>\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n    <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n        <mat-card class=\"p-0 mat-elevation-z6 box\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                <mat-icon class=\"mat-icon-xlg\">error</mat-icon>\r\n                <h1 class=\"error\">404</h1>\r\n            </div>\r\n            <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z8 box-content-inner\">\r\n                    <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                    <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                        <mat-label>Search keyword</mat-label>\r\n                        <input matInput placeholder=\"Enter search keyword...\">\r\n                    </mat-form-field>\r\n                </mat-card>\r\n                <div class=\"box-footer\">\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>home</mat-icon>\r\n                    </button>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z8\" type=\"button\" (click)=\"goHome()\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>          \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-shop/order-shop.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-shop/order-shop.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsOrderShopOrderShopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n<div class=\"theme-container\">\r\n    <div class=\"px-3 mb-3\">\r\n        <mat-tab-group mat-align-tabs=\"left\" class=\"pricing-tabs\">\r\n            <mat-tab label=\"Thông tin đặt hàng\">\r\n                <div class=\"row\">\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-3\">\r\n                        <mat-radio-group aria-label=\"Select an option\">\r\n                            <mat-radio-button value=\"1\">Sử dụng tài khoản có sẵn</mat-radio-button>\r\n                            <mat-radio-button value=\"2\">Đặt hàng không cần đăng ký</mat-radio-button>\r\n                        </mat-radio-group>\r\n\r\n                        <div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Họ và tên</mat-label>\r\n                                    <input matNativeControl required matInput matInput placeholder=\"Họ và tên bạn..\"\r\n                                        autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Số điện thoại</mat-label>\r\n                                    <input matNativeControl required matInput placeholder=\"Số điện thoại nhận hàng..\"\r\n                                        autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"p-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>E-mail</mat-label>\r\n                                    <input matInput placeholder=\"Email của bạn\" autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Tỉnh thành</mat-label>\r\n                                    <mat-select matNativeControl required matInput placeholder=\"Chọn tỉnh thành phố..\">\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Quận/Huyện</mat-label>\r\n                                    <mat-select matNativeControl required matInput placeholder=\"Chọn quận huyện..\">\r\n                                    </mat-select>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"p-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                                    <mat-label>Địa chỉ</mat-label>\r\n                                    <input matNativeControl required matInput placeholder=\"Số nhà, đường phố, phường\"\r\n                                        autocomplete=\"off\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                        <div>\r\n                            <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"p-1\">\r\n                                <mat-form-field appearance=\"outline\" class=\"w-100\" style=\"line-height: 2.125;\" >\r\n                                    <mat-label>Ghi chú</mat-label>\r\n                                    <textarea matInput\r\n                                        placeholder=\"Ghi chú về đơn hàng,ví dụ:thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn\"\r\n                                        rows=\"6\"></textarea>\r\n                                </mat-form-field>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"p-3\" >\r\n                        <div style=\"border: 1px solid #ccc;padding: 15px;\">\r\n                            <table mat-table [dataSource]=\"transactions\" class=\"wp-table-b\">\r\n                                <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-2\">\r\n                                    <ng-container matColumnDef=\"nameproduct\">\r\n                                        <th mat-header-cell *matHeaderCellDef class=\"td_b\" ><div class=\"px-3 mb-3\"><b>Sản phẩm</b></div>  </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" style=\"color: #7db828;\" > {{element.nameproduct}} </td>\r\n                                        <td mat-footer-cell *matFooterCellDef class=\"td_b\" style=\"text-align:right;\">\r\n                                            <div>Tổng cộng </div>\r\n                                            <div>Phí ship </div>\r\n                                            <div><b>Tổng thanh toán</b></div>\r\n                                         </td>\r\n                                    </ng-container>\r\n    \r\n                                </div>\r\n                                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"p-2\">\r\n                                    <ng-container matColumnDef=\"price\">\r\n                                        <th mat-header-cell *matHeaderCellDef style=\"text-align: right;\"> <div class=\"px-3 mb-3\"><b>Thành tiền</b></div> </th>\r\n                                        <td mat-cell *matCellDef=\"let element\" style=\"text-align:right;\"> {{element.price}} </td>\r\n                                        <td mat-footer-cell *matFooterCellDef class=\"td_b\" style=\"text-align:right;\">\r\n                                            <div>{{getTotalCost() | currency}}</div>\r\n                                            <div>&nbsp;</div>\r\n                                            <div>&nbsp;</div>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </div>\r\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                                <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\r\n                            </table>\r\n                            <div>\r\n                                <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-2\">\r\n                                    <h2>Phương thức thanh toán</h2>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <div fxFlex=\"100\" fxFlex.gt-sm=\"66.6\" class=\"p-2\">\r\n                                    <mat-checkbox>Thanh toán khi giao hàng (COD)</mat-checkbox>\r\n                                </div>\r\n                            </div>\r\n                            <div>\r\n                                <div fxFlex=\"100\" fxFlex.gt-sm=\"100\" class=\"p-2\">\r\n                                    <p><b>Lưu ý:</b> Vui lòng kiểm tra chính xác thông tin địa chỉ, số điện thoại của bạn để\r\n                                        đơn vị giao hàng gửi sản phẩm cho bạn thuận lợi nhất</p>\r\n                                </div>\r\n    \r\n                            </div>\r\n                            <div>\r\n                                <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" >\r\n                                    <button mat-stroked-button>\r\n                                        <a [href]=\"\" target=\"blank\" class=\"social-icon\"  style=\"display: flex;align-items: center;\">\r\n                                            <mat-icon>keyboard_arrow_left</mat-icon> Về giỏ hàng\r\n                                        </a>\r\n                                    </button>\r\n                                </div>\r\n                                <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" >\r\n                                    <button mat-stroked-button><a [href]=\"\" target=\"blank\"\r\n                                            class=\"social-icon\"  style=\"display: flex;align-items: center;\">\r\n                                            Hoàn tất đặt hàng\r\n                                            <mat-icon>keyboard_arrow_right</mat-icon>\r\n                                        </a>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n    \r\n                    </div>\r\n                        </div>           \r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    </div>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/clients/clients.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/clients/clients.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedClientsClientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section mt-3\">\r\n  <div class=\"px-3\">\r\n      <div class=\"theme-container\">\r\n          <h1 class=\"section-title mb-3\">Our Clients</h1>\r\n          <p class=\"text-center\">Sed magna ipsum, ultricies sed sagittis nec, scelerisque eu libero. Donec at metus ac eros accumsan semper.</p>\r\n\r\n          <div class=\"clients-carousel\"> \r\n              <div class=\"swiper-container h-100\" [swiper]=\"config\"> \r\n                  <div class=\"swiper-wrapper h-100\">      \r\n                      <div *ngFor=\"let client of clients\" class=\"swiper-slide\">\r\n                          <div class=\"client-item\"> \r\n                              <img [attr.data-src]=\"client.image\" class=\"swiper-lazy\"> \r\n                              <div class=\"swiper-lazy-preloader\"></div>\r\n                          </div>\r\n                      </div>\r\n                  </div> \r\n              </div>\r\n          </div>\r\n              \r\n      </div>\r\n  </div>   \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/comments/comments.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/comments/comments.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCommentsCommentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"p-5 mt-5\">\r\n    <mat-card-header fxLayoutAlign=\"center center\"> \r\n        <mat-card-title class=\"uppercase\">Leave a Reply</mat-card-title> \r\n    </mat-card-header>                \r\n    <div class=\"divider\"></div>\r\n    <mat-list class=\"reviews mt-3\">\r\n        <mat-list-item *ngFor=\"let review of reviews\" class=\"h-100\">\r\n            <img matListAvatar [src]=\"review.avatar\" alt=\"image\" class=\"review-author\">\r\n            <p matLine fxLayoutAlign=\"start center\">\r\n                <span class=\"fw-500\">{{review.author}}</span> \r\n                <mat-icon class=\"text-muted px-1\" [matTooltip]=\"review.tooltip\" matTooltipPosition=\"after\">{{review.icon}}</mat-icon>\r\n            </p>\r\n            <p matLine class=\"text-muted\"><small>{{review.date}}</small></p>\r\n            <p matLine class=\"text\">{{review.text}}</p>\r\n        </mat-list-item>\r\n    </mat-list>                    \r\n    <h3 class=\"mt-3\">LEAVE YOUR REVIEW</h3>\r\n    <div class=\"divider\"></div>\r\n    <p class=\"mt-3 text-muted\">Your email address will not be published. Required fields are marked *</p>\r\n    <h3 fxLayoutAlign=\"start center\" class=\"my-3 text-muted\">\r\n        <span>Your Rating:</span>\r\n        <button *ngFor=\"let rating of ratings\" mat-icon-button [matTooltip]=\"rating.title\" matTooltipPosition=\"above\" (click)=\"rate(rating)\">\r\n          <mat-icon class=\"mat-icon-lg\" [class.primary-color]=\"rating.selected\">{{rating.icon}}</mat-icon>\r\n        </button>\r\n    </h3>\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onCommentFormSubmit(commentForm.value)\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\" class=\"comment-form\">\r\n        <div fxFlex=\"100\" class=\"p-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Your review</mat-label>\r\n                <textarea matInput placeholder=\"Your review\" formControlName=\"review\" required rows=\"5\"></textarea>\r\n                <mat-error *ngIf=\"commentForm.controls.review.errors?.required\">Review is required</mat-error>\r\n            </mat-form-field>\r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"49\" class=\"p-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Your name</mat-label>\r\n                <input matInput placeholder=\"Your name\" formControlName=\"name\" required>\r\n                <mat-error *ngIf=\"commentForm.controls.name.errors?.required\">Name is required</mat-error>\r\n                <mat-error *ngIf=\"commentForm.controls.name.hasError('minlength')\">Name isn't long enough, minimum of 4 characters</mat-error>\r\n            </mat-form-field> \r\n        </div>\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"49\" class=\"p-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n                <mat-label>Your email</mat-label>\r\n                <input matInput placeholder=\"Your email\" formControlName=\"email\" required>\r\n                <mat-error *ngIf=\"commentForm.controls.email.errors?.required\">Email is required</mat-error>\r\n                <mat-error *ngIf=\"commentForm.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n            </mat-form-field> \r\n        </div>\r\n        <div fxFlex=\"100\" class=\"text-center w-100\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Submit review</button>\r\n        </div>\r\n    </form>\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/compare-overview/compare-overview.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/compare-overview/compare-overview.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCompareOverviewCompareOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar fxLayoutAlign=\"space-between center\">      \r\n  <a routerLink=\"/compare\" (click)=\"hideSheet(true)\" mat-raised-button color=\"primary\">Compare - {{ properties.length }}</a>        \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n      <button mat-icon-button (click)=\"appService.Data.compareList.length = 0; hideSheet(false)\" matTooltip=\"Clear Compare List\">\r\n        <mat-icon color=\"warn\" class=\"mat-icon-lg\">cancel</mat-icon> \r\n      </button>\r\n      <button mat-icon-button (click)=\"hideSheet(false)\" matTooltip=\"Hide\">\r\n        <mat-icon color=\"primary\" class=\"mat-icon-lg\">arrow_drop_down_circle</mat-icon> \r\n      </button>\r\n  </div>\r\n</mat-toolbar>\r\n<mat-nav-list>\r\n  <a mat-list-item *ngFor=\"let property of properties\" [routerLink]=\"['/properties', property.id]\" (click)=\"hideSheet(true)\">\r\n    <h3 mat-line class=\"fw-500\">{{property.title}}</h3>\r\n    <i mat-line><mat-icon class=\"mat-icon-sm text-muted\">location_on</mat-icon><small>{{property.formattedAddress}}</small></i>\r\n    <span *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price fw-500 mx-2\">\r\n        <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n        <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\r\n    </span>\r\n    <span *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price fw-500 mx-2\">\r\n        <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n        <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\r\n    </span>  \r\n    <button mat-icon-button color=\"warn\" class=\"remove\" (click)=\"remove(property, $event)\" matTooltip=\"Remove\" matTooltipPosition=\"after\">\r\n        <mat-icon class=\"mat-icon-sm\">close</mat-icon>\r\n    </button>\r\n  </a>\r\n</mat-nav-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\r\n    <div class=\"theme-container\">\r\n        <div class=\"row\">\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"p-2\">\r\n            <h2>BÁCH HÓA THIÊN NHIÊN</h2>\r\n            <div>\r\n                <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  >room</mat-icon><span class=\"mx-2\">560/4 Truong Chinh, Tan Binh</span></p>\r\n                <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"> <mat-icon  ></mat-icon> <span style=\"color:crimson\" class=\"mx-2\"> - Mở cửa 8h-18h (Chủ Nhật đóng cửa)</span></p>\r\n                <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon >call</mat-icon><span class=\"mx-2\">0971 814 893 (ZALO)</span></p>\r\n                <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  >drafts</mat-icon><span class=\"mx-2\">info@bachhoathiennhien.com</span></p>\r\n            </div>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"p-2\">\r\n                <h2>GIỚI THIỆU</h2>\r\n                <div>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  >chevron_right</mat-icon><span class=\"mx-2\">Về chúng tôi</span></p>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"> <mat-icon  >chevron_right</mat-icon> <span class=\"mx-2\">Góc báo chí</span></p>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon >chevron_right</mat-icon><span class=\"mx-2\">Tiêu chuẩn chất lượng</span></p>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  >chevron_right</mat-icon><span class=\"mx-2\">Hợp tác</span></p>\r\n                </div>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"p-2\">\r\n                <h2>ĐIỀU KHOẢN VÀ CHÍNH SÁCH</h2>\r\n                <div>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  >chevron_right</mat-icon><span class=\"mx-2\">Điều khoản dịch vụ</span></p>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"> <mat-icon  >chevron_right</mat-icon> <span class=\"mx-2\">Trung tâm hỗ trợ</span></p>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon >chevron_right</mat-icon><span class=\"mx-2\">Chính sách đổi trả</span></p>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  >chevron_right</mat-icon><span class=\"mx-2\">Giao nhận hàng</span></p>\r\n                </div>\r\n            </div>\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" class=\"p-2\">\r\n                <h2>THÔNG TIN HỖ TRỢ</h2>\r\n                <div>\r\n                    <p fxLayoutAlign=\"start center\" style=\"margin-bottom: 5px;\"><mat-icon  >chevron_right</mat-icon><span class=\"mx-2\">Điều khoản dịch vụ</span></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu-header/menu-header.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu-header/menu-header.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsMenuHeaderMenuHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar id=\"top-toolbar\" class=\"top-toolbar-search\">\r\n  <div class=\"theme-container \" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <div class=\"search-container\">\r\n      <input matInput autocomplete=\"off\" class=\"ipt-search\">\r\n      <span class=\"icon-del\">x</span>\r\n      <button mat-flat-button type=\"submit\" class=\"search-button\" color=\"primary\">\r\n        <mat-icon>search</mat-icon> Tìm\r\n        kiếm\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n</mat-toolbar>\r\n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2 mt-1 top-toolbar-menu\">\r\n  <div class=\"theme-container\">\r\n    <div fxLayout=\"row wrap\">\r\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"20\" fxFlex.gt-xs=\"50\" style=\"text-transform: uppercase;\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"height: 38px;font-size: 14px;\">\r\n          <mat-icon>menu</mat-icon> &nbsp;\r\n          Tất cả danh mục\r\n        </div>\r\n      </div>\r\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\">\r\n        <div fxShow=\"false\" fxShow.gt-sm class=\"horizontal-menu\" style=\"background-color: #fff;color: #495057;\">\r\n          <app-horizontal-menu [menuParentId]=\"0\" style=\"font-size: 1.4rem;\"></app-horizontal-menu>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-item/product-item.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-item/product-item.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsProductItemProductItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-card>\r\n  <a [routerLink]=\"['/agents', dataItem.id]\" class=\"agent-img\">\r\n    <img mat-card-image [src]=\"dataItem.image\" [alt]=\"dataItem.fullName\">\r\n  </a>\r\n  <mat-card-content>\r\n    <h4 class=\"fw-600\">120 000</h4>\r\n    <h5><s>100 000</s></h5>\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-actions fxLayoutAlign=\"space-between center\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"text-muted\">\r\n      <app-rating [ratingsCount]=\"dataItem.ratingsCount\" [ratingsValue]=\"dataItem.ratingsValue\"></app-rating>(4)\r\n    </div>\r\n    <div>\r\n     \r\n      56\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card> -->\r\n\r\n<mat-card class=\"property-item p-0\" [ngClass]=\"[viewType + '-item', 'column-'+column]\"\r\n  [class.full-width-page]=\"fullWidthPage\" fxLayout=\"row wrap\">\r\n\r\n  <div fxFlex=\"100\" fxShrink=\"3\" [fxFlex.gt-sm]=\"(viewType=='list') ? 40 : 100\"\r\n    [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\" class=\"thumbnail-section\">\r\n\r\n    <div fxLayout=\"row wrap\" class=\"property-status\">\r\n      <span *ngFor=\"let status of property.propertyStatus\"\r\n        [style.background-color]=\"getStatusBgColor(status)\">{{status}}</span>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"mat-card-image w-100 m-0\">\r\n      <img [src]=\"'assets/images/agents/a-1.jpg'\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div fxFlex=\"100\" [fxFlex.gt-sm]=\"(viewType=='list') ? 60 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\"\r\n    class=\"p-2\">\r\n\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" class=\"h-100\">\r\n      <mat-card-content class=\"mb-0\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div>\r\n            <h4 class=\"primary-color price\">\r\n              <span\r\n                *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n              <span\r\n                *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}}\r\n                /month</span>\r\n            </h4>\r\n            <h5><s>100 000</s></h5>\r\n          </div>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div fxFlex=\"100\" [fxFlex.gt-sm]=\"(viewType=='list') ? 60 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\"\r\n    class=\"p-1\">\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-card-actions class=\"m-0 p-0\" fxLayoutAlign=\"space-between center\">\r\n      <app-rating [ratingsCount]=\"property.ratingsCount\" [ratingsValue]=\"property.ratingsValue\"></app-rating>\r\n      <div>\r\n      </div>\r\n    </mat-card-actions>\r\n  </div>\r\n\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-list/product-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-list/product-list.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"agents-carousel m-2\">\r\n  <div class=\"swiper-container h-100 carousel-outer\" [swiper]=\"config\">\r\n    <div class=\"swiper-wrapper h-100\">\r\n      <div *ngFor=\"let property of properties\" class=\"swiper-slide item\">\r\n        <app-product-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\"></app-product-item>\r\n      </div>\r\n    </div>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\">\r\n      <mat-icon>keyboard_arrow_left</mat-icon>\r\n    </button>\r\n    <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\">\r\n      <mat-icon>keyboard_arrow_right</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/get-in-touch/get-in-touch.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/get-in-touch/get-in-touch.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedGetInTouchGetInTouchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"px-3\">\r\n    <div class=\"theme-container\"> \r\n\r\n        <div class=\"get-in-touch bg-primary\" ngClass.lt-md=\"mt-3\">\r\n            \r\n            <img src=\"assets/images/others/operator.png\" alt=\"operator\" fxShow=\"false\" fxShow.gt-xs>\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"content\" ngClass.xs=\"p-0\"> \r\n                <div fxLayout=\"column\" class=\"p-3\">\r\n                    <h2>LOOKING TO SELL YOUR HOME?</h2>\r\n                    <p class=\"mb-0\">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-3\">\r\n                    <mat-icon class=\"mat-icon-xlg mx-2\">call</mat-icon>\r\n                    <div fxLayout=\"column\">               \r\n                        <p class=\"mb-0\">CALL US NOW</p>\r\n                        <h2 class=\"ws-nowrap\">(+100) 123 456 7890</h2>\r\n                    </div>\r\n                </div>\r\n                <div class=\"p-3\">\r\n                    <a mat-flat-button routerLink=\"/contact\" class=\"mx-3 uppercase\">get in touch</a>\r\n                </div>\r\n            </div> \r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-carousel/header-carousel.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-carousel/header-carousel.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderCarouselHeaderCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-carousel\" [class.offset-bottom]=\"contentOffsetToTop\">\r\n    <div *ngIf=\"slides.length > 1\"  class=\"swiper-container h-100\" [swiper]=\"config\" (indexChange)=\"onIndexChange($event)\">\r\n        <div class=\"swiper-wrapper h-100\">      \r\n            <div *ngFor=\"let slide of slides;\" class=\"swiper-slide\">\r\n                <div [attr.data-background]=\"slide.image\" class=\"slide-item swiper-lazy\">\r\n                    <div class=\"swiper-lazy-preloader\"></div>\r\n                </div>\r\n            </div>\r\n        </div>     \r\n        <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button>\r\n      \r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"slide-info\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\">\r\n            <mat-card class=\"p-4\">\r\n                <h1 class=\"slide-title\">{{currentSlide.title}}</h1>\r\n                <p class=\"location\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <mat-icon color=\"primary\" ngClass.gt-sm=\"mat-icon-lg\">location_on</mat-icon>\r\n                    <span class=\"px-1\">{{currentSlide.location}}</span>\r\n                </p> \r\n                <button mat-raised-button color=\"primary\" class=\"price\">                        \r\n                    <span *ngIf=\"settings.currency == 'USD'\" class=\"price\">\r\n                        <span *ngIf=\"currentSlide.priceDollar.sale\">{{currentSlide.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                        <span *ngIf=\"currentSlide.priceDollar.rent\">{{currentSlide.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\r\n                    </span>\r\n                    <span *ngIf=\"settings.currency == 'EUR'\" class=\"price\">\r\n                        <span *ngIf=\"currentSlide.priceEuro.sale\">{{currentSlide.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                        <span *ngIf=\"currentSlide.priceEuro.rent\">{{currentSlide.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\r\n                    </span>\r\n                </button>                  \r\n            </mat-card>  \r\n        </div> \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-image/header-image.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-image/header-image.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderImageHeaderImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-image-wrapper\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\">\r\n    <div class=\"bg\" [style.background-image]=\"bgImage\" [class.bg-anime]=\"bgImageAnimate\"></div>\r\n    <div class=\"mask\"></div>\r\n   \r\n    <div class=\"header-image-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" [class.offset-bottom]=\"contentOffsetToTop\" [class.home-page]=\"isHomePage\"  [style.min-height.px]=\"contentMinHeight\">\r\n        <h1 *ngIf=\"title\" class=\"title\">{{title}}</h1>\r\n        <p *ngIf=\"desc\" class=\"desc\">{{desc}}</p>\r\n        <div *ngIf=\"isHomePage\" ngClass.gt-xs=\"mt-4\" ngClass.xs=\"mt-3\">\r\n          <a mat-raised-button routerLink=\"/about\">about us</a>\r\n          <a mat-raised-button routerLink=\"/contact\">contact</a>      \r\n        </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/load-more/load-more.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/load-more/load-more.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLoadMoreLoadMoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"load-more\">\r\n  <div *ngIf=\"!settings.loadMore.complete\">\r\n      <button *ngIf=\"!settings.loadMore.start\" mat-raised-button color=\"primary\" (click)=\"startLoad()\" class=\"uppercase\">Load More</button>\r\n      <mat-spinner *ngIf=\"settings.loadMore.start\"></mat-spinner> \r\n  </div>\r\n  <mat-chip-list *ngIf=\"settings.loadMore.complete\">\r\n      <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n          {{settings.loadMore.result}} results\r\n      </mat-chip> \r\n  </mat-chip-list>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/logo/logo.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/logo/logo.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLogoLogoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"logo\">\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" style=\"fill-rule:evenodd;\" width=\"212\" height=\"37\" viewBox=\"0 0 4271.87 748.74\">\r\n    <path d=\"M771 322.2l686.37 0c6.63,0 12.05,5.43 12.05,12.06l0 0c0,6.63 -5.42,12.06 -12.05,12.06l-686.37 -0.01c-6.63,0.01 -12.06,-5.42 -12.06,-12.05l0 0c0,-6.63 5.43,-12.06 12.06,-12.06zm943.37 263.22c0,-6.24 -5.13,-11.37 -11.37,-11.37 -6.24,0 -11.37,5.13 -11.37,11.37l0 99.19c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-21.4 16.94,-38.34 38.34,-38.34 5.35,0 10.26,0.89 14.71,2.67 2.01,0.89 3.57,1.34 4.9,1.34 6.24,0 11.37,-5.13 11.37,-11.59 0,-12.26 -18.27,-15.16 -30.98,-15.16 -14.48,0 -27.41,4.68 -38.34,13.6l0 -2.23zm106.54 38.34c4.68,-16.05 20.06,-26.97 36.55,-26.97 16.72,0 32.1,10.92 36.78,26.97l-73.33 0zm68.43 37.89c-2.9,0.22 -5.35,1.12 -7.58,2.9 -6.91,5.57 -14.49,8.69 -24.3,8.69 -16.72,0 -31.87,-10.92 -36.55,-26.97l86.26 0c6.24,0 11.37,-4.68 11.37,-11.14 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 15.38,0 28.75,-4.9 39.9,-14.71 2.23,-2.45 3.34,-5.13 3.34,-8.25 0,-6.47 -4.9,-11.37 -11.37,-11.37zm107.44 -64.86c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm38.34 87.82c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 14.49,0 27.42,-4.68 38.34,-13.6l0 2.23zm39.01 0c0,6.24 4.91,11.37 11.14,11.37l16.72 0c6.24,0 11.37,-5.13 11.37,-11.37 0,-6.24 -5.13,-11.37 -11.37,-11.37l-5.13 0 0 -139.98c0,-6.24 -4.9,-11.37 -11.37,-11.37 -6.46,0 -11.37,5.13 -11.37,11.37l0 151.34zm142.88 -60.85c4.68,-16.05 20.06,-26.97 36.55,-26.97 16.72,0 32.1,10.92 36.78,26.97l-73.33 0zm68.43 37.89c-2.9,0.22 -5.35,1.12 -7.58,2.9 -6.91,5.57 -14.49,8.69 -24.3,8.69 -16.72,0 -31.87,-10.92 -36.55,-26.97l86.26 0c6.24,0 11.37,-4.68 11.37,-11.14 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 15.38,0 28.75,-4.9 39.9,-14.71 2.23,-2.45 3.34,-5.13 3.34,-8.25 0,-6.47 -4.9,-11.37 -11.37,-11.37zm119.7 -6.91c2,0.66 2.9,2.23 2.9,4.23 0,1.78 -0.45,3.34 -1.56,4.46 -6.47,6.46 -14.71,9.8 -25.19,9.8 -10.7,0 -19.61,-3.79 -26.97,-11.14 -2.9,-2.67 -6.02,-6.24 -10.7,-6.24 -6.47,0 -11.37,4.9 -11.37,11.37 0,2.67 0.89,5.13 2.45,7.14 12.7,14.49 28.31,21.62 46.58,21.62 23.85,0 49.49,-14.04 49.49,-36.11 0,-7.58 -2.67,-14.04 -8.25,-19.61l0.22 0c-2.45,-2.67 -7.36,-5.35 -14.49,-8.25l-50.82 -16.72c-2,-0.67 -2.9,-2.01 -2.9,-4.01 0,-2 0.67,-3.79 1.78,-4.9 6.24,-6.47 14.49,-9.59 24.96,-9.59 10.7,0 19.62,3.79 26.97,11.14 3.34,2.9 6.24,6.24 10.7,6.24 6.47,0 11.37,-4.9 11.37,-11.37 0,-2.67 -0.67,-4.9 -2.23,-6.91 -13.15,-14.48 -28.75,-21.84 -46.81,-21.84 -23.85,0 -49.48,14.04 -49.48,36.11 0,7.58 2.67,14.27 8.25,19.84l-0.22 0c2.9,2.67 7.58,5.35 14.49,8.03l50.82 16.72zm53.05 -80.69c-6.24,0 -11.14,5.13 -11.14,11.37 0,6.24 4.9,11.37 11.14,11.37l5.13 0 0 54.83c0,29.64 14.94,44.35 44.58,44.35 6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.91,-11.37 -11.14,-11.37 -14.49,0 -21.85,-7.13 -21.85,-21.62l0 -54.83 13.6 0c6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.9,-11.37 -11.14,-11.37l-13.6 0 0 -40.79c0,-6.24 -5.13,-11.37 -11.37,-11.37 -6.24,0 -11.37,5.13 -11.37,11.37l0 40.79 -5.13 0zm124.15 22.74c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm38.34 87.82c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 14.49,0 27.42,-4.68 38.34,-13.6l0 2.23zm50.82 -110.56c-6.24,0 -11.14,5.13 -11.14,11.37 0,6.24 4.9,11.37 11.14,11.37l5.13 0 0 54.83c0,29.64 14.94,44.35 44.58,44.35 6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.91,-11.37 -11.14,-11.37 -14.49,0 -21.85,-7.13 -21.85,-21.62l0 -54.83 13.6 0c6.24,0 11.14,-5.13 11.14,-11.37 0,-6.24 -4.9,-11.37 -11.14,-11.37l-13.6 0 0 -40.79c0,-6.24 -5.13,-11.37 -11.37,-11.37 -6.24,0 -11.37,5.13 -11.37,11.37l0 40.79 -5.13 0zm87.6 49.71c4.68,-16.05 20.06,-26.97 36.55,-26.97 16.72,0 32.1,10.92 36.78,26.97l-73.33 0zm68.43 37.89c-2.9,0.22 -5.35,1.12 -7.58,2.9 -6.91,5.57 -14.49,8.69 -24.3,8.69 -16.72,0 -31.87,-10.92 -36.55,-26.97l86.26 0c6.24,0 11.37,-4.68 11.37,-11.14 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 15.38,0 28.75,-4.9 39.9,-14.71 2.23,-2.45 3.34,-5.13 3.34,-8.25 0,-6.47 -4.9,-11.37 -11.37,-11.37zm204.62 -0.22c-2.67,0.22 -5.13,0.89 -7.13,2.45 -7.36,6.24 -15.16,9.36 -24.75,9.36 -21.4,0 -38.34,-17.16 -38.34,-38.11 0,-21.4 16.94,-38.34 38.34,-38.34 9.59,0 17.39,3.34 24.75,9.59 2.23,1.56 4.68,2.45 7.58,2.45 6.47,0 11.14,-4.9 11.14,-11.37 0,-3.34 -1.34,-6.24 -3.79,-8.47 -11.14,-10.03 -24.29,-14.94 -39.68,-14.94 -16.94,0 -31.43,6.02 -43.24,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.24,17.83 15.16,0 28.31,-4.9 39.68,-14.71 2.45,-2.45 3.57,-5.35 3.57,-8.47 0,-6.46 -4.9,-11.37 -11.37,-11.37zm151.13 -26.3c-0.22,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 16.72,0 31.21,-6.02 43.24,-17.83 11.81,-11.81 17.83,-26.07 17.83,-43.01zm-61.08 -38.34c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm250.54 25.86c0,-26.53 -22.07,-48.59 -48.59,-48.59 -14.49,0 -26.97,5.8 -37,17.39 -9.58,-11.59 -22.74,-17.39 -37.22,-17.39 -10.03,0 -18.72,2.67 -26.52,7.8 -1.56,-4.68 -5.57,-7.8 -10.7,-7.8 -6.24,0 -11.37,5.13 -11.37,11.37l0 99.19c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -61.96c0,-14.27 11.59,-25.86 25.85,-25.86 14.27,0 25.63,11.81 25.63,25.86l0 61.96c0,6.24 5.13,11.37 11.59,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -61.96c0,-14.04 11.37,-25.86 25.63,-25.86 14.71,0 25.86,11.81 25.86,25.86l0 61.96c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -61.96zm42.13 12.48c0,-20.95 16.94,-38.34 38.11,-38.34 21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11zm38.11 60.85c16.94,0 30.98,-6.02 43.24,-17.83 11.81,-11.81 17.83,-26.07 17.83,-43.01 0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24l0 101.86c0,6.47 4.9,11.15 11.37,11.15 6.24,0 11.37,-4.68 11.37,-11.15l0 -54.38c10.92,8.92 23.62,13.37 38.11,13.37zm139.31 -99.19c21.4,0 38.34,17.39 38.34,38.34 0,20.73 -16.94,38.11 -38.34,38.11 -21.17,0 -38.11,-17.39 -38.11,-38.11 0,-20.95 16.94,-38.34 38.11,-38.34zm38.34 87.82c0,6.24 5.13,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -49.48c0,-16.94 -6.02,-31.43 -17.83,-43.24 -12.04,-11.81 -26.53,-17.83 -43.24,-17.83 -16.72,0 -31.21,6.02 -43.01,17.83 -11.81,11.81 -17.83,26.3 -17.83,43.24 0,16.72 6.02,31.21 17.83,43.01 11.81,11.81 26.3,17.83 43.01,17.83 14.49,0 27.42,-4.68 38.34,-13.6l0 2.23zm62.86 -99.41c0,-6.02 -5.13,-11.14 -11.37,-11.14 -6.47,0 -11.37,5.13 -11.37,11.37l0 99.19c0,6.24 4.9,11.37 11.37,11.37 6.24,0 11.37,-5.13 11.37,-11.37l0 -53.72c0,-18.72 15.38,-34.1 33.88,-34.1 18.72,0 34.1,15.61 34.1,34.1l0 53.72c0,6.24 5.13,11.37 11.59,11.37 6.24,0 11.14,-5.13 11.14,-11.37l0 -53.72c0,-31.43 -26.08,-56.84 -56.84,-56.84 -12.93,0 -24.3,3.79 -33.88,11.14zm128.17 146.67c-0.67,1.56 -1.12,3.12 -1.12,4.91 0,6.46 4.9,11.37 11.37,11.37 4.68,0 8.92,-3.12 10.92,-7.58l62.41 -150.01c0.89,-1.78 1.34,-3.56 1.34,-5.13 0,-6.24 -5.13,-11.37 -11.59,-11.37 -6.02,0 -8.92,2.9 -10.48,7.36l-30.76 73.11 -30.54 -72.89c-2,-5.13 -6.24,-7.58 -10.7,-7.58 -6.24,0 -11.37,5.13 -11.37,11.37 0,1.79 0.45,3.57 1.12,5.13l39.23 94.06 -19.84 47.25zm-1879.08 -645.92c2.96,-5.54 7.94,-9.42 14.96,-11.63 7.02,-2.22 15.88,-3.33 26.59,-3.33 10.71,0 19.21,0.93 25.48,2.77 6.28,1.85 11.08,4.06 14.4,6.65 3.33,2.59 5.91,6.27 7.76,11.08 1.85,6.27 2.77,15.88 2.77,28.81l0 307.43c0,8.49 -0.28,14.86 -0.83,19.11 -0.56,4.24 -2.31,9.14 -5.26,14.69 -5.17,9.96 -19.57,14.95 -43.21,14.95 -25.85,0 -40.99,-6.83 -45.42,-20.49 -2.22,-6.28 -3.32,-15.88 -3.32,-28.8l0 -112.45 -146.8 0 0 113c0,8.49 -0.28,14.86 -0.83,19.11 -0.55,4.24 -2.3,9.14 -5.26,14.69 -5.17,9.96 -19.57,14.95 -43.21,14.95 -25.85,0 -40.99,-6.83 -45.42,-20.49 -2.22,-6.28 -3.32,-15.88 -3.32,-28.8l0 -307.44c0,-8.49 0.28,-14.86 0.83,-19.11 0.56,-4.25 2.31,-9.14 5.26,-14.68 5.17,-9.97 19.58,-14.96 43.21,-14.96 25.85,0 41.17,6.84 45.98,20.5 1.85,6.27 2.77,15.88 2.77,28.81l0 113 146.8 0 0 -113.56c0,-8.49 0.27,-14.86 0.83,-19.11 0.56,-4.25 2.31,-9.14 5.26,-14.68zm127.96 245.39c0,-44.32 15.51,-80.87 46.53,-109.68 31.02,-28.8 66.46,-43.21 106.35,-43.21 39.89,0 75.16,14.31 105.8,42.94 30.66,28.61 45.98,65.07 45.98,109.39 0,30.65 -7.94,57.88 -23.82,81.7 -15.88,23.82 -35.17,41.36 -57.89,52.63 -22.7,11.26 -46.25,16.89 -70.62,16.89 -24.38,0 -48.02,-6 -70.91,-18.01 -22.89,-12 -42.19,-29.72 -57.88,-53.17 -15.69,-23.45 -23.54,-49.94 -23.54,-79.49zm115.78 39.6c11.81,9.05 23.82,13.57 36,13.57 12.19,0 24.38,-4.62 36.56,-13.85 12.18,-9.23 18.28,-22.89 18.28,-40.99 0,-18.09 -5.72,-31.58 -17.17,-40.44 -11.44,-8.86 -23.81,-13.3 -37.11,-13.3 -13.3,0 -25.67,4.62 -37.12,13.85 -11.45,9.23 -17.17,22.8 -17.17,40.71 0,17.92 5.91,31.39 17.72,40.44zm354.52 104.97c-37.3,0 -68.22,-14.13 -92.78,-42.38 -24.55,-28.25 -36.83,-62.69 -36.83,-103.31l0 -96.94c0,-8.86 0.28,-15.33 0.83,-19.39 0.56,-4.06 2.11,-8.86 4.72,-14.4 5.17,-9.97 19.56,-14.95 43.2,-14.95 25.85,0 40.99,7.02 45.42,21.05 2.22,5.91 3.32,15.33 3.32,28.25l0 96.94c0,15.14 4.34,26.96 13.02,35.45 8.68,8.49 20.31,12.74 34.9,12.74 14.59,0 26.41,-4.43 35.45,-13.3 9.05,-8.86 13.57,-20.49 13.57,-34.89l0 -98.05c0,-8.49 0.28,-14.86 0.83,-19.1 0.55,-4.24 2.3,-9.14 5.26,-14.68 4.8,-9.6 19.02,-14.4 42.65,-14.4 23.27,0 37.49,4.98 42.66,14.95 2.59,5.54 4.16,10.44 4.71,14.68 0.56,4.24 0.83,10.62 0.83,19.11l0 196.1c0,8.12 -0.28,14.3 -0.83,18.55 -0.55,4.25 -2.3,8.95 -5.26,14.12 -5.55,9.6 -19.76,14.4 -42.65,14.4 -22.53,0 -36.37,-4.43 -41.55,-13.29 -3.69,-6.28 -5.53,-13.85 -5.53,-22.71 -1.48,2.59 -4.8,6.28 -9.98,11.08 -5.16,4.8 -10.14,8.86 -14.95,12.18 -12.56,8.13 -26.22,12.19 -40.99,12.19zm208.28 -24.93c-7.02,-4.43 -10.52,-11.44 -10.52,-21.05 0,-9.6 7.02,-24.19 21.05,-43.76 4.06,-6.28 10.62,-9.42 19.66,-9.42 9.05,0 21.32,4.53 36.84,13.57 15.51,9.05 29.54,13.57 42.1,13.57 22.52,0 33.79,-4.43 33.79,-13.3 0,-7.02 -12.37,-12.18 -37.11,-15.51 -23.27,-3.32 -46.35,-12 -69.24,-26.04 -10.73,-6.65 -19.58,-17.08 -26.59,-31.3 -7.02,-14.22 -10.52,-31.11 -10.52,-50.68 0,-58.34 40.07,-87.52 120.2,-87.52 26.22,0 53.18,6.28 80.88,18.84 12.92,5.91 19.39,13.3 19.39,22.16 0,8.86 -4.06,19.76 -12.18,32.68 -8.13,12.93 -16.43,19.39 -24.93,19.39 -4.43,0 -12.65,-2.77 -24.65,-8.31 -12.01,-5.54 -25.02,-8.31 -39.05,-8.31 -21.78,0 -32.68,4.06 -32.68,12.19 0,11.08 12.56,18.27 37.67,21.6 24.36,2.58 48,9.6 70.9,21.05 10.71,5.17 19.66,14.12 26.86,26.87 7.2,12.74 10.8,28.71 10.8,47.91 0,19.21 -3.6,35.55 -10.8,49.02 -7.2,13.48 -17.27,23.54 -30.19,30.19 -23.63,11.44 -53.26,17.17 -88.91,17.17 -35.63,0 -69.88,-10.34 -102.76,-31.02zm550.06 -154.82c0,22.71 -5.63,39.52 -16.89,50.41 -11.27,10.89 -23.73,16.34 -37.39,16.34l-131.28 0c0,10.34 6.1,19.02 18.28,26.04 12.19,7.02 24.38,10.53 36.56,10.53 21.42,0 38.22,-2.22 50.41,-6.65l6.1 -2.22c8.86,-4.06 16.25,-6.09 22.16,-6.09 11.81,0 21.97,8.31 30.46,24.93 4.8,9.97 7.2,18.47 7.2,25.48 0,32.86 -39.33,49.29 -117.99,49.29 -27.32,0 -51.61,-4.7 -72.84,-14.11 -21.23,-9.42 -37.76,-21.89 -49.58,-37.39 -23.26,-29.91 -34.9,-63.33 -34.9,-100.26 0,-46.53 15.05,-83.74 45.15,-111.61 30.09,-27.88 67.67,-41.82 112.73,-41.82 51.33,0 89,18.09 113,54.28 12.56,19.2 18.83,40.16 18.83,62.87zm-116.88 16.34c14.03,0 21.05,-5.9 21.05,-17.72 0,-8.49 -3.23,-15.33 -9.7,-20.5 -6.46,-5.17 -15.69,-7.75 -27.69,-7.75 -12.01,0 -23.91,4.89 -35.73,14.67 -11.81,9.79 -17.72,20.22 -17.72,31.3l69.8 0zm326.82 -39.33c56.5,54.28 96.57,95.09 120.2,122.42 12.19,13.66 18.27,25.2 18.27,34.62 0,9.42 -7.38,20.49 -22.14,33.23 -14.78,12.74 -26.88,19.11 -36.29,19.11 -9.41,0 -20.77,-7.76 -34.07,-23.26l-121.87 -139.04 0 108.01c0,8.87 -0.28,15.33 -0.83,19.39 -0.55,4.06 -2.3,8.86 -5.26,14.4 -5.17,9.97 -19.57,14.96 -43.21,14.96 -25.85,0 -40.99,-7.02 -45.42,-21.05 -2.22,-5.91 -3.32,-15.32 -3.32,-28.25l0 -307.99c0,-8.49 0.28,-14.86 0.83,-19.11 0.56,-4.25 2.31,-9.14 5.26,-14.68 5.17,-9.97 19.58,-14.96 43.21,-14.96 25.85,0 41.17,6.84 45.98,20.5 1.85,6.27 2.77,15.88 2.77,28.81l0 105.8c50.22,-56.5 90.84,-102.85 121.87,-139.04 12.93,-15.14 24.19,-22.71 33.8,-22.71 9.59,0 21.78,6.37 36.56,19.11 14.76,12.75 22.14,23.82 22.14,33.24 0,9.42 -5.53,20.58 -16.61,33.51 -21.42,24.75 -54.66,58.72 -99.71,101.92l-22.16 21.05zm439.28 22.99c0,22.71 -5.64,39.52 -16.9,50.41 -11.26,10.89 -23.73,16.34 -37.39,16.34l-131.28 0c0,10.34 6.1,19.02 18.28,26.04 12.19,7.02 24.38,10.53 36.56,10.53 21.42,0 38.22,-2.22 50.41,-6.65l6.1 -2.22c8.86,-4.06 16.25,-6.09 22.16,-6.09 11.81,0 21.97,8.31 30.46,24.93 4.8,9.97 7.2,18.47 7.2,25.48 0,32.86 -39.33,49.29 -117.99,49.29 -27.33,0 -51.61,-4.7 -72.84,-14.11 -21.23,-9.42 -37.76,-21.89 -49.58,-37.39 -23.26,-29.91 -34.9,-63.33 -34.9,-100.26 0,-46.53 15.05,-83.74 45.15,-111.61 30.09,-27.88 67.67,-41.82 112.73,-41.82 51.33,0 89,18.09 113.01,54.28 12.55,19.2 18.83,40.16 18.83,62.87zm-116.89 16.34c14.04,0 21.05,-5.9 21.05,-17.72 0,-8.49 -3.23,-15.33 -9.69,-20.5 -6.47,-5.17 -15.7,-7.75 -27.7,-7.75 -12.01,0 -23.91,4.89 -35.73,14.67 -11.81,9.79 -17.72,20.22 -17.72,31.3l69.79 0zm407.7 -124.08c21.79,9.6 32.68,21.24 32.68,34.9 0,6.65 -1.48,12.93 -4.43,18.84 -2.95,5.91 -4.43,9.05 -4.43,9.42l-145.13 324.61c-2.95,7.02 -5.45,12.37 -7.47,16.06 -2.03,3.69 -5.27,7.2 -9.7,10.52 -4.43,3.32 -9.97,4.98 -16.62,4.98 -6.65,0 -16.43,-2.77 -29.36,-8.31 -21.79,-9.6 -32.68,-21.05 -32.68,-34.34 0,-8.86 17.72,-51.14 53.18,-126.85l-110.24 -185.57c-7.39,-12.18 -11.08,-21.23 -11.08,-27.14 0,-11.81 9.97,-23.63 29.91,-35.45 12.56,-7.38 22.34,-11.07 29.36,-11.07 7.02,0 12.74,1.48 17.17,4.42 4.43,2.97 7.66,6.01 9.7,9.15 2.03,3.14 12.18,20.31 30.46,51.52 18.28,31.21 35.74,60.29 52.35,87.24 1.85,-5.91 11.81,-28.71 29.91,-68.41 18.09,-39.7 27.79,-60.84 29.08,-63.42 1.3,-2.58 3.42,-5.72 6.37,-9.42 4.8,-6.27 11.54,-9.41 20.22,-9.41 8.68,0 18.92,2.58 30.74,7.75zm-3864.81 -188.42c18.31,0 36.3,1.34 53.9,3.88 137.39,19.23 263.51,113 306.81,268.23 6.2,22.24 10.3,16.14 67.08,16.14l674.24 -0.04c44.88,-0.01 36.67,-0.15 64.31,20.75 14.45,10.92 89.93,65.51 93.38,76.11 -5.51,9.1 -41.5,34.9 -52.11,42.89 -17.88,13.45 -35.29,27.66 -53.2,40.89 -22.51,14.76 -20.99,11.63 -64.38,11.84 -18.57,0.09 -44.81,2.95 -55.64,-8.38 -27.59,-39.7 -54.87,-61.08 -86.12,-61 -43.13,0.11 -49.91,71.43 -108.64,71.61 -49.81,0.84 -61.2,-67.34 -111.3,-63.35 -35.72,-1.45 -50.2,61.27 -90.98,61.74 -44.32,0.52 -58.7,-68.23 -109.03,-65.19 -35.65,2.16 -67.47,58.32 -89.65,63.76 -18.54,4.55 -56.27,-2.84 -77.51,2.04 -1.66,1.85 -3.44,4.99 -5.25,8.82 -16.16,49.41 -42.3,94.31 -76.07,132.29 -6.42,7.54 -12.76,14.26 -18.8,19.66 -67.43,65.63 -159.5,106.05 -261.04,106.05 -206.76,-0.01 -374.37,-167.61 -374.37,-374.36 0,-206.77 167.61,-374.38 374.37,-374.38zm64.12 549.2c16.22,2.14 104.16,2.39 113.66,-0.68 4.6,-12.68 1.94,-100.04 1.94,-120.33 0,-70.74 4.93,-50.9 -37.85,-84.48 -22.82,-17.9 -47.41,-36.86 -69.12,-52.44 -8.78,-6.3 -63.32,-50.98 -72.23,-50.35 -7.81,0.57 -133.16,98.15 -141.7,104.36 -43.26,31.48 -35.83,18.61 -35.82,84.87 -0.01,21.92 -2.92,104.75 2.21,118.42 9.31,3.03 99.78,2.76 114.16,0.57 0,-42.12 0,-84.21 0,-126.31l124.75 0 0 126.37zm-299.47 -159.55c7.82,0.44 24,-15.36 30.27,-20.07 57.08,-42.81 119.42,-94.03 176.43,-137.18 7.99,-6.05 21.54,-20.91 30.95,-20.21 7.63,0.56 105.37,79.22 118.73,89.57 21.01,16.28 37.24,29.34 58.47,45.42 8.45,6.43 51.89,42.79 58.73,42.3 2.28,-11.46 0.96,-43.85 0.9,-57.48 -0.08,-19.47 -11.41,-22.37 -23.84,-32.4 -61.11,-49.26 -131.07,-99.95 -195.35,-151.57 -18.86,-15.15 -16.68,-15.91 -35.82,-0.91l-162.11 126.17c-11.73,9.37 -19.94,14.86 -33.22,25.4 -11.59,9.2 -24.94,14.42 -24.94,31.48l0.8 59.48zm207.14 -308.73c96.19,-11.37 185.35,30.68 239.76,87.14 46.43,48.18 73.01,102.83 81.93,172.94 21.32,167.6 -110.68,308.64 -260.08,323.96 -124.94,12.81 -234.91,-51.84 -289.12,-150.85 -98.47,-179.84 10.88,-407.56 227.5,-433.18z\"/>\r\n  </svg>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mission/mission.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mission/mission.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedMissionMissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section default\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">Our Mission</h1>            \r\n\r\n            <mat-card class=\"p-0\" fxLayout=\"row wrap\"> \r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"50\" class=\"p-3\">            \r\n                   <div fxLayout=\"row wrap\">\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">monetization_on</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">save money</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">thumb_up</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">better ideas</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">group</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">collaboration</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"p-2\">\r\n                            <mat-icon color=\"primary\" class=\"mat-icon-xlg\">search</mat-icon>\r\n                            <h2 class=\"capitalize fw-600 my-2\">easy to find</h2>\r\n                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.</p>\r\n                        </div>\r\n                   </div>                     \r\n                </div> \r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxShow=\"false\" fxShow.gt-md>                    \r\n                    <img src=\"assets/images/others/mission.jpg\" alt=\"mission\" class=\"mw-100 d-block\">                \r\n                </div>            \r\n            </mat-card>\r\n                \r\n        </div>\r\n    </div>   \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-agents/our-agents.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-agents/our-agents.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedOurAgentsOurAgentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section agents\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">Meet our agents</h1>\r\n\r\n            <div class=\"agents-carousel\"> \r\n                <div class=\"swiper-container h-100 carousel-outer\" [swiper]=\"config\"> \r\n                    <div class=\"swiper-wrapper h-100\">      \r\n                        <div *ngFor=\"let agent of agents\" class=\"swiper-slide\">\r\n\r\n                            <mat-card>\r\n                                <img mat-card-image [attr.data-src]=\"agent.image\" alt=\"\" class=\"swiper-lazy d-block\">\r\n                                <div class=\"swiper-lazy-preloader\"></div>\r\n                                <mat-card-content>\r\n                                    <h2 class=\"fw-600\">{{agent.fullName}}</h2>\r\n                                    <app-rating [ratingsCount]=\"agent.ratingsCount\" [ratingsValue]=\"agent.ratingsValue\"></app-rating>\r\n                                    <p class=\"mt-3\">{{agent.desc}}</p>                                    \r\n                                    <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\" matTooltip=\"Organization\" matTooltipPosition=\"above\">business</mat-icon><span class=\"mx-2\">{{agent.organization}}</span></p>\r\n                                    <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">email</mat-icon><span class=\"mx-2\">{{agent.email}}</span></p>\r\n                                    <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">call</mat-icon><span class=\"mx-2\">{{agent.phone}}</span></p>\r\n                                </mat-card-content>\r\n                                <mat-divider></mat-divider>\r\n                                <mat-card-actions fxLayoutAlign=\"space-between center\">\r\n                                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"text-muted\">\r\n                                        <a [href]=\"'https://www.facebook.com/'+agent.social.facebook\" target=\"blank\" class=\"social-icon\">\r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n                                          </svg>\r\n                                        </a>\r\n                                        <a [href]=\"'https://twitter.com/'+agent.social.twitter\" target=\"blank\" class=\"social-icon\">\r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                              <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n                                          </svg> \r\n                                        </a>\r\n                                        <a [href]=\"'https://www.linkedin.com/'+agent.social.linkedin\" target=\"blank\" class=\"social-icon\"> \r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                            <path d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\r\n                                          </svg>\r\n                                        </a>\r\n                                        <a [href]=\"'https://instagram.com/'+agent.social.instagram\" target=\"blank\" class=\"social-icon\"> \r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                              <path d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\" />\r\n                                          </svg>\r\n                                        </a> \r\n                                        <a [href]=\"agent.social.website\" target=\"blank\" class=\"social-icon\"> \r\n                                          <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                                              <path d=\"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z\" />\r\n                                          </svg>\r\n                                        </a>  \r\n                                    </div>\r\n                                    <div>\r\n                                        <a [routerLink]=\"['/agents', agent.id]\" mat-button color=\"primary\" class=\"uppercase\">View Profile</a>\r\n                                    </div> \r\n                                </mat-card-actions>                              \r\n                            </mat-card>\r\n                            \r\n                        </div>\r\n                    </div>                      \r\n                    <button mat-mini-fab color=\"primary\" class=\"swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n                    <button mat-mini-fab color=\"primary\" class=\"swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"w-100 text-center mt-5\">\r\n                <a routerLink=\"/agents\" mat-raised-button color=\"primary\" class=\"uppercase\">Our agents</a>\r\n            </div>           \r\n                \r\n        </div>\r\n    </div>   \r\n</div>\r\n\r\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-services/our-services.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-services/our-services.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedOurServicesOurServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section mt-3\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">Our Services</h1> \r\n\r\n            <div fxLayout=\"row wrap\" class=\"services-wrapper\">\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">location_on</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">Find places anywhere in the world</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>           \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">supervisor_account</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">We have agents with experience</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">home</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">Buy or rent beautiful properties</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n\r\n                <div fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" class=\"p-2\">\r\n                 \r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"h-100 w-100 text-center\">            \r\n                        <mat-icon class=\"mat-icon-xlg\" color=\"primary\">format_list_bulleted</mat-icon>\r\n                        <h2 class=\"capitalize fw-600 my-3\">With agent account you can list properties</h2>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum egestas nunc sed ultricies.</p>             \r\n                    </mat-card>\r\n                   \r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n                \r\n        </div>\r\n    </div>   \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-carousel/properties-carousel.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-carousel/properties-carousel.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPropertiesCarouselPropertiesCarouselComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"properties\" class=\"properties-carousel\">   \r\n    <div class=\"swiper-container h-100 carousel-outer\" [swiper]=\"config\"> \r\n        <div class=\"swiper-wrapper h-100\">      \r\n            <div *ngFor=\"let property of properties\" class=\"swiper-slide\">\r\n                <app-property-item [property]=\"property\" [viewType]=\"'grid'\"></app-property-item>                 \r\n            </div>\r\n        </div>                      \r\n        <button mat-mini-fab color=\"primary\" class=\"prop-prev swiper-button-prev swipe-arrow\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n        <button mat-mini-fab color=\"primary\" class=\"prop-next swiper-button-next swipe-arrow\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPropertiesSearchResultsFiltersPropertiesSearchResultsFiltersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-chip-list>\r\n    <mat-chip *ngIf=\"searchFields?.propertyType\">\r\n        {{searchFields?.propertyType.name}}        \r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('propertyType')\">cancel</mat-icon>\r\n    </mat-chip> \r\n    <mat-chip *ngIf=\"searchFields?.propertyStatus && searchFields?.propertyStatus.length > 0\">\r\n        <span *ngFor=\"let type of searchFields?.propertyStatus; let last = last;\" class=\"mr-1\">{{type.name}}<span *ngIf=\"!last\">,</span></span>\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('propertyStatus')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.price.from\">\r\n        Price > {{searchFields?.price.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('price.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.price.to\">\r\n        Price < {{searchFields?.price.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('price.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.city\">\r\n        {{searchFields?.city.name}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('city')\">cancel</mat-icon>\r\n    </mat-chip> \r\n    <mat-chip *ngIf=\"searchFields?.zipCode\">\r\n        {{searchFields?.zipCode}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('zipCode')\">cancel</mat-icon>\r\n    </mat-chip>    \r\n    <mat-chip *ngIf=\"searchFields?.neighborhood && searchFields?.neighborhood.length > 0\">\r\n        <span *ngFor=\"let item of searchFields?.neighborhood; let last = last;\" class=\"mr-1\">{{item.name}}<span *ngIf=\"!last\">,</span></span>\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('neighborhood')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.street && searchFields?.street.length > 0\">\r\n        <span *ngFor=\"let item of searchFields?.street; let last = last;\" class=\"mr-1\">{{item.name}}<span *ngIf=\"!last\">,</span></span>\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('street')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bedrooms.from\">\r\n        Bedrooms > {{searchFields?.bedrooms.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bedrooms.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bedrooms.to\">\r\n        Bedrooms < {{searchFields?.bedrooms.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bedrooms.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bathrooms.from\">\r\n        Bathrooms > {{searchFields?.bathrooms.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bathrooms.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.bathrooms.to\">\r\n        Bathrooms < {{searchFields?.bathrooms.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('bathrooms.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.garages.from\">\r\n        Garages > {{searchFields?.garages.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('garages.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.garages.to\">\r\n        Garages < {{searchFields?.garages.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('garages.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.area.from\">\r\n        Area > {{searchFields?.area.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('area.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.area.to\">\r\n        Area < {{searchFields?.area.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('area.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.yearBuilt.from\">\r\n        Year Built > {{searchFields?.yearBuilt.from}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('yearBuilt.from')\">cancel</mat-icon>\r\n    </mat-chip>\r\n    <mat-chip *ngIf=\"searchFields?.yearBuilt.to\">\r\n        Year Built < {{searchFields?.yearBuilt.to}}\r\n        <mat-icon color=\"warn\" matChipRemove (click)=\"remove('yearBuilt.to')\">cancel</mat-icon>\r\n    </mat-chip>\r\n\r\n    <span *ngIf=\"searchFields?.features\"> \r\n        <span *ngFor=\"let feature of searchFields?.features; index as i\">\r\n            <mat-chip *ngIf=\"feature.selected\">\r\n                {{feature.name}} \r\n                <mat-icon color=\"warn\" matChipRemove (click)=\"remove('features,'+i)\">cancel</mat-icon>\r\n            </mat-chip>\r\n        </span>  \r\n    </span>\r\n\r\n</mat-chip-list>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search/properties-search.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search/properties-search.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPropertiesSearchPropertiesSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"form\" class=\"search-wrapper\" [ngClass]=\"'variant-'+variant\">\r\n\r\n    <div [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\"> \r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n            <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                <mat-label>Property Type</mat-label> \r\n                <mat-select placeholder=\"Select Property Type\" formControlName=\"propertyType\">\r\n                    <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType\">\r\n                        {{propertyType.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n            <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                <mat-label>Property Status</mat-label>\r\n                <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\" multiple>\r\n                    <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus\">\r\n                        {{propertyStatus.name}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>        \r\n\r\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"price\">\r\n\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                <div fxFlex=\"45\">\r\n                    <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                        <mat-label>{{(variant == 1) ? 'Price' : 'Price From'}}</mat-label>\r\n                        <input matInput autocomplete=\"off\" placeholder=\"From\" formControlName=\"from\" type=\"text\" onlyNumber>                  \r\n                    </mat-form-field>\r\n                </div>\r\n                <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                    <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                </div>\r\n                <div fxFlex=\"45\">\r\n                    <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                        <mat-label>{{(variant == 1) ? '' : 'Price To'}}</mat-label>\r\n                        <input matInput autocomplete=\"off\" placeholder=\"To\" formControlName=\"to\" type=\"text\" onlyNumber>                  \r\n                    </mat-form-field>\r\n                </div>\r\n            </div> \r\n\r\n        </div>          \r\n\r\n        \r\n        <div *ngIf=\"showMore\" [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\" class=\"w-100\">\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>City</mat-label>\r\n                    <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\">\r\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n                            {{city.name}}\r\n                        </mat-option>\r\n                    </mat-select> \r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">\r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>Zip Code</mat-label>\r\n                    <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>Neighborhood</mat-label>\r\n                    <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\r\n                        <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: form.get('city').value?.id\" [value]=\"neighborhood\">\r\n                            {{neighborhood.name}}\r\n                        </mat-option>\r\n                    </mat-select> \r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\">                         \r\n                <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                    <mat-label>Street</mat-label>\r\n                    <mat-select placeholder=\"Select Street...\" formControlName=\"street\" multiple>\r\n                        <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods:form.get('neighborhood').value, cityId:form.get('city').value?.id } \" [value]=\"street\">\r\n                            {{street.name}}\r\n                        </mat-option>\r\n                    </mat-select> \r\n                </mat-form-field>\r\n            </div>\r\n    \r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bedrooms\">\r\n    \r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Bedrooms' : 'Bedrooms From'}}</mat-label>\r\n                            <mat-select placeholder=\"From\" formControlName=\"from\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Bedrooms To'}}</mat-label>\r\n                            <mat-select placeholder=\"To\" formControlName=\"to\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div> \r\n    \r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"bathrooms\">\r\n    \r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Bathrooms' : 'Bathrooms From'}}</mat-label>\r\n                            <mat-select placeholder=\"From\" formControlName=\"from\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Bathrooms To'}}</mat-label>\r\n                            <mat-select placeholder=\"To\" formControlName=\"to\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div> \r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"garages\">\r\n    \r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Garages' : 'Garages From'}}</mat-label>\r\n                            <mat-select placeholder=\"From\" formControlName=\"from\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Garages To'}}</mat-label>\r\n                            <mat-select placeholder=\"To\" formControlName=\"to\">\r\n                                <mat-option *ngFor=\"let number of [1,2,3,4,5,6,7,8,9,10]\" [value]=\"number\">\r\n                                    {{number}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div> \r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"area\">\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Area' : 'Area From'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"From\" formControlName=\"from\" type=\"text\" onlyNumber>                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Area To'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"To\" formControlName=\"to\" type=\"text\" onlyNumber>                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div>\r\n\r\n            <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"p-2\" formGroupName=\"yearBuilt\">\r\n\r\n                <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? 'Year Built' : 'Fear Built From'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"From\" formControlName=\"from\" type=\"text\" onlyNumber maxlength=\"4\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex=\"10\" class=\"text-center\" [class.pt-2]=\"variant == 2\">\r\n                        <mat-icon class=\"text-muted\">remove</mat-icon>\r\n                    </div>\r\n                    <div fxFlex=\"45\">\r\n                        <mat-form-field [appearance]=\"getAppearance()\" [floatLabel]=\"getFloatLabel()\">\r\n                            <mat-label>{{(variant == 1) ? '' : 'Year Built To'}}</mat-label>\r\n                            <input matInput autocomplete=\"off\" placeholder=\"To\" formControlName=\"to\" type=\"text\" onlyNumber maxlength=\"4\">                  \r\n                        </mat-form-field>\r\n                    </div>\r\n                </div> \r\n    \r\n            </div>\r\n\r\n            <div fxFlex=\"100\" class=\"mb-2\"> \r\n                <p class=\"uppercase m-2 fw-500\">Features</p> \r\n                <div formArrayName=\"features\" [fxLayout]=\"(vertical) ? 'column' : 'row wrap'\">\r\n                    <div [formGroupName]=\"i\" *ngFor=\"let control of form['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                        <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n  \r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"p-2\">       \r\n      <button mat-raised-button color=\"warn\" class=\"uppercase mx-1\" (click)=\"reset()\">Clear</button>\r\n      <button *ngIf=\"!vertical\" mat-raised-button color=\"primary\" class=\"uppercase mx-1\" (click)=\"showMore = !showMore\">{{(showMore) ? 'Hide' : 'Advanced'}}</button>      \r\n      <button *ngIf=\"searchOnBtnClick\" mat-raised-button color=\"primary\" class=\"search-btn mx-1\" (click)=\"search()\"><mat-icon>search</mat-icon> Search</button>\r\n    </div>\r\n    \r\n\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-toolbar/properties-toolbar.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-toolbar/properties-toolbar.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPropertiesToolbarPropertiesToolbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" class=\"w-100 p-2 filter-row mat-elevation-z1 text-muted\">\r\n    <button *ngIf=\"showSidenavToggle\" mat-icon-button (click)=\"sidenavToggle()\">\r\n        <mat-icon>more_vert</mat-icon>\r\n    </button>\r\n    <div>\r\n        <a mat-button [matMenuTriggerFor]=\"sortMenu\" #sortMenuTrigger=\"matMenuTrigger\">\r\n            {{sort}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n        </a>\r\n        <mat-menu #sortMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n            <span (mouseleave)=\"sortMenuTrigger.closeMenu()\">\r\n                <button mat-menu-item *ngFor=\"let sort of sortings\" (click)=\"changeSorting(sort)\">\r\n                    <span>{{sort}}</span>\r\n                </button>\r\n            </span>\r\n        </mat-menu>\r\n    </div>\r\n    <div fxShow=\"false\" fxShow.gt-xs>\r\n        <!-- <span *ngIf=\"isHomePage\"> -->\r\n            <a mat-button [matMenuTriggerFor]=\"countsMenu\" #countsMenuTrigger=\"matMenuTrigger\">\r\n                Show {{count}}<mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n            </a>\r\n            <mat-menu #countsMenu=\"matMenu\" xPosition=\"before\" overlapTrigger=\"true\">\r\n                <span (mouseleave)=\"countsMenuTrigger.closeMenu()\">\r\n                    <button mat-menu-item *ngFor=\"let count of counts\" (click)=\"changeCount(count)\">\r\n                        <span>{{count}}</span>\r\n                    </button>\r\n                </span>\r\n            </mat-menu>\r\n        <!-- </span>        -->\r\n        <button mat-icon-button (click)=\"changeViewType('list', 100)\">\r\n            <mat-icon>view_list</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"changeViewType('grid', 50)\">\r\n            <svg class=\"mat-icon mat-icon-sm\" viewBox=\"0 0 25 25\">\r\n                <path d=\"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3\" />\r\n            </svg>\r\n        </button>\r\n        <button *ngIf=\"!isHomePage\" mat-icon-button fxShow=\"false\" fxShow.gt-md (click)=\"changeViewType('grid', 33.3)\">\r\n            <mat-icon>view_module</mat-icon>\r\n        </button>\r\n        <button *ngIf=\"isHomePage\" mat-icon-button fxShow=\"false\" fxShow.gt-sm (click)=\"changeViewType('grid', 33.3)\">\r\n            <mat-icon>view_module</mat-icon>\r\n        </button>\r\n        <button *ngIf=\"isHomePage\" fxShow=\"false\" fxShow.gt-md mat-icon-button (click)=\"changeViewType('grid', 25)\">\r\n            <mat-icon>view_comfy</mat-icon>\r\n        </button>\r\n        \r\n\r\n        \r\n    </div>\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/property-item/property-item.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/property-item/property-item.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPropertyItemPropertyItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"property-item p-0\" [ngClass]=\"[viewType + '-item', 'column-'+column]\" [class.full-width-page]=\"fullWidthPage\" fxLayout=\"row wrap\">  \r\n  \r\n    <div fxFlex=\"100\" fxShrink=\"3\" [fxFlex.gt-sm]=\"(viewType=='list') ? 40 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\" class=\"thumbnail-section\">\r\n\r\n        <div fxLayout=\"row wrap\" class=\"property-status\">\r\n            <span *ngFor=\"let status of property.propertyStatus\" [style.background-color]=\"getStatusBgColor(status)\">{{status}}</span>\r\n        </div>\r\n       \r\n        <div *ngIf=\"property.gallery.length == 1\" class=\"mat-card-image w-100 m-0\">\r\n            <img [src]=\"property.gallery[0].medium\">\r\n        </div>\r\n        <div *ngIf=\"property.gallery.length > 1\" class=\"mat-card-image w-100 m-0\">\r\n            <div class=\"swiper-container\" [swiper]=\"config\">\r\n                <div class=\"swiper-wrapper\"> \r\n                    <div *ngFor=\"let image of property.gallery\" class=\"swiper-slide\">\r\n                        <img [attr.data-src]=\"image.medium\" class=\"swiper-lazy\">\r\n                        <div class=\"swiper-lazy-preloader\"></div>\r\n                    </div> \r\n                </div>  \r\n                <div class=\"swiper-pagination white\"></div>  \r\n                <button mat-icon-button class=\"swiper-button-prev swipe-arrow\"><mat-icon class=\"mat-icon-lg\">keyboard_arrow_left</mat-icon></button>\r\n                <button mat-icon-button class=\"swiper-button-next swipe-arrow\"><mat-icon class=\"mat-icon-lg\">keyboard_arrow_right</mat-icon></button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"control-icons\">\r\n            <button mat-button [disabled]=\"onFavorites()\" (click)=\"addToFavorites()\" matTooltip=\"Add To Favorite\">\r\n                <mat-icon class=\"mat-icon-sm\">favorite_border</mat-icon>\r\n            </button>\r\n            <button mat-button [disabled]=\"onCompare()\" (click)=\"addToCompare()\" matTooltip=\"Add To Compare\">\r\n                <mat-icon class=\"mat-icon-sm\">compare_arrows</mat-icon>\r\n            </button>  \r\n        </div> \r\n\r\n    </div>\r\n    <div fxFlex=\"100\" [fxFlex.gt-sm]=\"(viewType=='list') ? 60 : 100\" [fxFlex.sm]=\"(viewType=='list') ? 50 : 100\" class=\"p-3\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" class=\"h-100\">\r\n            <mat-card-content class=\"mb-0\">\r\n              \r\n                <h1 class=\"title\"><a [routerLink]=\"['/properties', property.id]\">{{property.title}}</a></h1>\r\n\r\n                <p fxLayout=\"row\" class=\"address\">\r\n                    <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                    <span>{{property.formattedAddress}}</span>\r\n                </p>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div>\r\n                        <h3 *ngIf=\"settings.currency == 'USD'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\r\n                        </h3>\r\n                        <h3 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\r\n                            <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                            <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\r\n                        </h3>\r\n                    </div>\r\n                    <app-rating [ratingsCount]=\"property.ratingsCount\" [ratingsValue]=\"property.ratingsValue\"></app-rating>\r\n                </div>\r\n\r\n                <div *ngIf=\"viewType=='list' && fullWidthPage\" fxShow=\"false\" fxShow.gt-sm class=\"mt-3\"> \r\n                    <p>{{property.desc}}</p>\r\n                </div>\r\n\r\n                <div class=\"features mt-3\">                    \r\n                    <p><span>Property size</span><span>{{property.area.value}} {{property.area.unit}}</span></p>\r\n                    <p><span>Bedrooms</span><span>{{property.bedrooms}}</span></p>\r\n                    <p><span>Bathrooms</span><span>{{property.bathrooms}}</span></p>\r\n                    <p><span>Garages</span><span>{{property.garages}}</span></p>\r\n                </div> \r\n\r\n            </mat-card-content>\r\n            <div class=\"sticky-footer-helper\" fxFlex=\"grow\"></div>\r\n            <mat-card-actions class=\"m-0 p-0\" fxLayoutAlign=\"space-between center\"> \r\n                <p fxLayout=\"row\" class=\"date mb-0\">\r\n                    <mat-icon class=\"text-muted\">date_range</mat-icon>\r\n                    <span class=\"mx-2\">{{property.published | date:\"dd MMMM, yyyy\" }}</span>\r\n                </p>\r\n                <div>\r\n                    <a [routerLink]=\"['/properties', property.id]\" mat-stroked-button color=\"primary\" class=\"uppercase\">Details</a>\r\n                </div> \r\n            </mat-card-actions> \r\n        </div>        \r\n        \r\n    </div> \r\n\r\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedRatingRatingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"ratings\" [matTooltip]=\"ratingsCount + ' ratings'\">        \r\n  <mat-icon *ngFor=\"let star of stars;\" class=\"mat-icon-sm\">{{star}}</mat-icon>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/testimonials/testimonials.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/testimonials/testimonials.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedTestimonialsTestimonialsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section testimonials\">\r\n    <div class=\"px-3\">\r\n        <div class=\"theme-container\">\r\n            <h1 class=\"section-title\">What people are saying</h1>\r\n\r\n            <div class=\"testimonials-carousel\"> \r\n                <div class=\"swiper-container h-100\" [swiper]=\"config\"> \r\n                    <div class=\"swiper-wrapper h-100\">      \r\n                        <div *ngFor=\"let testimonial of testimonials\" class=\"swiper-slide\">\r\n                            <div class=\"content text-center\">\r\n                                <img [attr.data-src]=\"testimonial.image\" class=\"swiper-lazy\">\r\n                                <div class=\"quote open text-left primary-color\">“</div>\r\n                                <p class=\"text\">{{testimonial.text}}</p>\r\n                                <div class=\"quote close text-right primary-color\">”</div> \r\n                                <h3 class=\"author\">{{testimonial.author}}</h3>\r\n                                <p>{{testimonial.position}}</p> \r\n                                <div class=\"swiper-lazy-preloader\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div> \r\n                    <div class=\"swiper-pagination\"></div> \r\n                </div>\r\n            </div>\r\n                \r\n        </div>\r\n    </div>   \r\n</div>\r\n\r\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/contacts/contacts.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/contacts/contacts.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsContactsContactsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span fxLayoutAlign=\"center center\" class=\"item\">\r\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">call</mat-icon>\r\n  <span class=\"px-1\">(+100) 123 456 7890</span>\r\n</span>\r\n<span *ngIf=\"dividers\" class=\"v-divider\"></span>\r\n<span fxLayoutAlign=\"center center\" class=\"item\">\r\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">location_on</mat-icon>\r\n  <span class=\"px-1\">2903 Avenue Z, Brooklyn, NY, USA</span>\r\n</span>\r\n<span *ngIf=\"dividers\" class=\"v-divider\"></span>\r\n<span fxLayoutAlign=\"center center\" class=\"item\">\r\n  <mat-icon [color]=\"iconColor\" [ngClass]=\"'mat-icon-' + iconSize\">mail</mat-icon>\r\n  <span class=\"px-1\">info@housekey.com</span>\r\n</span>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/currency/currency.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/currency/currency.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsCurrencyCurrencyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a mat-button [matMenuTriggerFor]=\"currencyMenu\" #currencyMenuTrigger=\"matMenuTrigger\">\r\n    <span>{{currency}}</span><mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n</a>\r\n<mat-menu #currencyMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-menu-panel\">\r\n    <span (mouseleave)=\"currencyMenuTrigger.closeMenu()\">\r\n        <button mat-menu-item *ngFor=\"let cur of currencies\" (click)=\"changeCurrency(cur)\">\r\n            <span>{{cur}}</span>\r\n        </button>\r\n    </span>\r\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/lang/lang.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/lang/lang.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsLangLangComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a mat-button [matMenuTriggerFor]=\"langMenu\" #langMenuTrigger=\"matMenuTrigger\">\r\n    <img [src]=\"flag.image\" width=\"18\">\r\n    <span fxShow=\"false\" fxShow.gt-md class=\"uppercase flag-name\">{{flag.name}}</span>\r\n    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n</a>\r\n<mat-menu #langMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-menu-panel\">\r\n    <span (mouseleave)=\"langMenuTrigger.closeMenu()\">\r\n        <button mat-menu-item *ngFor=\"let flag of flags\" (click)=\"changeLang(flag)\">\r\n            <img [src]=\"flag.image\" width=\"18\" class=\"mat-elevation-z1\"><span class=\"flag-name\">{{flag.name}}</span>\r\n        </button>\r\n    </span>\r\n</mat-menu>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsMenuHorizontalMenuHorizontalMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngFor=\"let menuItem of menuItems\">\r\n\r\n  <a *ngIf=\"menuItem.routerLink && !menuItem.hasSubMenu\" mat-button [routerLink]=\"[menuItem.routerLink]\" \r\n    routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n    <span>{{menuItem.title}}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.href && !menuItem.hasSubMenu\" mat-button \r\n    [attr.href]=\"menuItem.href || ''\" [attr.target]=\"menuItem.target || ''\">\r\n    <span>{{menuItem.title}}</span>\r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.hasSubMenu && menuItem.parentId == 0\" mat-button [matMenuTriggerFor]=\"menu\"> \r\n    <span>{{menuItem.title}}</span><mat-icon class=\"caret\">arrow_drop_down</mat-icon> \r\n  </a>\r\n\r\n  <a *ngIf=\"menuItem.hasSubMenu && menuItem.parentId != 0\" mat-menu-item [matMenuTriggerFor]=\"menu\"> \r\n    <span>{{menuItem.title}}</span> \r\n  </a> \r\n\r\n  <mat-menu #menu=\"matMenu\" class=\"horizontal-sub-menu\">\r\n      <app-horizontal-menu [menuParentId]=\"menuItem.id\"></app-horizontal-menu>\r\n  </mat-menu>\r\n    \r\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsMenuVerticalMenuVerticalMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngFor=\"let menu of menuItems\" class=\"menu-item\">\r\n  <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button\r\n      fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n      [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"        \r\n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n      <span class=\"menu-title\">{{menu.title}}</span>\r\n  </a>\r\n  <a *ngIf=\"menu.href && !menu.hasSubMenu\" mat-button \r\n      fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n      [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"       \r\n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n      <span class=\"menu-title\">{{menu.title}}</span>\r\n  </a>\r\n  <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n      fxLayout=\"row\" fxLayoutAlign=\"start center\"       \r\n      (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n      <span class=\"menu-title\">{{menu.title}}</span>\r\n      <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n  </a>\r\n  <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n      <app-vertical-menu [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/social-icons/social-icons.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/social-icons/social-icons.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsSocialIconsSocialIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a href=\"https://www.facebook.com/\" target=\"blank\" class=\"social-icon\">\r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n    <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n  </svg>\r\n</a>\r\n<a href=\"https://twitter.com/\" target=\"blank\" class=\"social-icon\">\r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n      <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n  </svg> \r\n</a>\r\n<a href=\"https://www.linkedin.com/\" target=\"blank\" class=\"social-icon\"> \r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n    <path d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\r\n  </svg>\r\n</a>\r\n<a href=\"https://plus.google.com/\" target=\"blank\" class=\"social-icon\"> \r\n  <svg class=\"mat-icon\" viewBox=\"0 0 24 24\" [ngClass]=\"['mat-icon-' + iconSize, 'mat-'+ iconColor]\">\r\n    <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M19.5,12H18V10.5H17V12H15.5V13H17V14.5H18V13H19.5V12M9.65,11.36V12.9H12.22C12.09,13.54 11.45,14.83 9.65,14.83C8.11,14.83 6.89,13.54 6.89,12C6.89,10.46 8.11,9.17 9.65,9.17C10.55,9.17 11.13,9.56 11.45,9.88L12.67,8.72C11.9,7.95 10.87,7.5 9.65,7.5C7.14,7.5 5.15,9.5 5.15,12C5.15,14.5 7.14,16.5 9.65,16.5C12.22,16.5 13.96,14.7 13.96,12.13C13.96,11.81 13.96,11.61 13.89,11.36H9.65Z\" />\r\n  </svg>\r\n</a>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar1/toolbar1.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar1/toolbar1.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsToolbar1Toolbar1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar id=\"top-toolbar\" class=\"top-toolbar\">\r\n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <span fxHide=\"false\" fxHide.gt-sm>\r\n        <button mat-button (click)=\"sidenavToggle()\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button> \r\n      </span>\r\n      <app-contacts fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-sm></app-contacts>         \r\n    </div>\r\n    <app-social-icons fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-md></app-social-icons>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"\">\r\n      <app-currency></app-currency>\r\n      <app-lang></app-lang>\r\n      <app-user-menu></app-user-menu>\r\n    </div>    \r\n  </div>           \r\n</mat-toolbar>  \r\n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2\"> \r\n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <a class=\"logo\" routerLink=\"/\" ><app-logo></app-logo></a> \r\n    <div fxShow=\"false\" fxShow.gt-sm class=\"horizontal-menu\">            \r\n        <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n    </div> \r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <a routerLink=\"/account/favorites\" mat-icon-button matTooltip=\"Favorites\" fxShow=\"false\" fxShow.gt-md>\r\n          <mat-icon [matBadge]=\"appService.Data.favorites.length\" \r\n                    [matBadgeHidden]=\"appService.Data.favorites.length == 0\" \r\n                    matBadgeSize=\"small\" \r\n                    matBadgeColor=\"warn\">favorite_border</mat-icon>\r\n      </a>\r\n      <a routerLink=\"/compare\" mat-icon-button matTooltip=\"Compare list\" fxShow=\"false\" fxShow.gt-md class=\"mr-3 ml-2\">\r\n          <mat-icon [matBadge]=\"appService.Data.compareList.length\" \r\n                    [matBadgeHidden]=\"appService.Data.compareList.length == 0\" \r\n                    matBadgeSize=\"small\" \r\n                    matBadgeColor=\"warn\">compare_arrows</mat-icon>\r\n      </a>      \r\n      <a routerLink=\"/submit-property\" mat-mini-fab color=\"primary\" fxHide=\"false\" fxHide.gt-xs><mat-icon>add</mat-icon></a>\r\n      <a routerLink=\"/submit-property\" mat-raised-button color=\"primary\" fxShow=\"false\" fxShow.gt-xs class=\"uppercase\">submit property</a>\r\n    </div>   \r\n  </div>     \r\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar2/toolbar2.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar2/toolbar2.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsToolbar2Toolbar2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar id=\"top-toolbar\" class=\"top-toolbar\">\r\n  <mat-toolbar-row  ngClass.xs=\"p-0\">\r\n    <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutAlign.gt-sm=\"end center\" fxLayoutAlign.sm=\"space-between center\">\r\n      <app-social-icons [iconSize]=\"'lg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxHide=\"false\" fxHide.gt-sm fxHide.xs></app-social-icons>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.xs class=\"bg-primary right-section px-2\">\r\n        <app-social-icons fxLayout=\"row\" fxLayoutAlign=\"start center\"></app-social-icons>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"bg-primary right-section\" ngClass.xs=\"w-100\">\r\n          <app-currency></app-currency>\r\n          <app-lang></app-lang>\r\n          <app-user-menu></app-user-menu>\r\n      </div>    \r\n    </div>\r\n  </mat-toolbar-row>\r\n  <mat-toolbar-row ngClass.xs=\"py-3\">\r\n    <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutAlign.gt-sm=\"space-between center\">\r\n      <a class=\"logo\" routerLink=\"/\" ><app-logo></app-logo></a> \r\n      <app-contacts [dividers]=\"false\" [iconColor]=\"'primary'\" [iconSize]=\"'lg'\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-sm></app-contacts>   \r\n      <app-social-icons [iconSize]=\"'lg'\" [iconColor]=\"'primary'\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxShow=\"false\" fxShow.gt-sm></app-social-icons>\r\n    </div> \r\n  </mat-toolbar-row>              \r\n</mat-toolbar>\r\n<mat-toolbar id=\"main-toolbar\" class=\"mat-elevation-z2\"> \r\n  <div class=\"theme-container\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">    \r\n    <mat-icon class=\"mat-icon-xlg\" fxHide=\"false\" fxHide.gt-sm (click)=\"sidenavToggle()\">menu</mat-icon>\r\n    <div fxShow=\"false\" fxShow.gt-sm class=\"horizontal-menu\">            \r\n        <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n    </div>     \r\n    <div>\r\n      <a routerLink=\"/account/favorites\" mat-icon-button matTooltip=\"Favorites\" fxShow=\"false\" fxShow.gt-md>\r\n        <mat-icon [matBadge]=\"appService.Data.favorites.length\" \r\n                  [matBadgeHidden]=\"appService.Data.favorites.length == 0\" \r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\">favorite_border</mat-icon>\r\n      </a>\r\n      <a routerLink=\"/compare\" mat-icon-button matTooltip=\"Compare list\" fxShow=\"false\" fxShow.gt-md class=\"mr-3 ml-2\">\r\n        <mat-icon [matBadge]=\"appService.Data.compareList.length\" \r\n                  [matBadgeHidden]=\"appService.Data.compareList.length == 0\" \r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\">compare_arrows</mat-icon>\r\n      </a>\r\n      <a routerLink=\"/submit-property\" mat-mini-fab color=\"accent\" fxHide=\"false\" fxHide.gt-xs><mat-icon>add</mat-icon></a>\r\n      <a routerLink=\"/submit-property\" mat-raised-button color=\"accent\" fxShow=\"false\" fxShow.gt-xs class=\"uppercase\">submit property</a>\r\n    </div>  \r\n  </div>     \r\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThemeComponentsUserMenuUserMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a mat-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon class=\"mat-icon-sm\">person</mat-icon>\r\n    <span fxShow=\"false\" fxShow.gt-sm class=\"mx-1 uppercase\">account</span> \r\n    <mat-icon class=\"mat-icon-sm caret\">arrow_drop_down</mat-icon>\r\n</a>\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\" class=\"app-menu-panel user-menu\">\r\n    <span (mouseleave)=\"userMenuTrigger.closeMenu()\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"user-info\">                   \r\n            <img src=\"assets/images/others/user.jpg\" alt=\"user-image\" width=\"50\">\r\n            <p class=\"m-0\">Emilio Verdines <br> <small><i>emilio_v</i></small></p>\r\n        </div>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/submit-property\"> \r\n            <mat-icon class=\"mat-icon-sm\">add_circle</mat-icon>\r\n            <span>Submit Property</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/account/my-properties\"> \r\n            <mat-icon class=\"mat-icon-sm\">home</mat-icon>\r\n            <span>My Properties</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/account/favorites\"> \r\n            <mat-icon class=\"mat-icon-sm\">favorite_border</mat-icon>\r\n            <span [matBadge]=\"appService.Data.favorites.length\" \r\n                  [matBadgeHidden]=\"appService.Data.favorites.length == 0\"\r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\" \r\n                  matBadgeOverlap=\"false\">Favorites</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/compare\"> \r\n            <mat-icon class=\"mat-icon-sm\">compare_arrows</mat-icon> \r\n            <span [matBadge]=\"appService.Data.compareList.length\" \r\n                  [matBadgeHidden]=\"appService.Data.compareList.length == 0\"\r\n                  matBadgeSize=\"small\" \r\n                  matBadgeColor=\"warn\" \r\n                  matBadgeOverlap=\"false\">Compare</span> \r\n        </a>\r\n        <!-- <a mat-menu-item routerLink=\"/\"> \r\n            <mat-icon class=\"mat-icon-sm\">search</mat-icon>\r\n            <span>Saved Searches</span> \r\n        </a> -->\r\n        <a mat-menu-item routerLink=\"/account/profile\"> \r\n            <mat-icon class=\"mat-icon-sm\">edit</mat-icon>\r\n            <span>Edit Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/lock-screen\"> \r\n            <mat-icon class=\"mat-icon-sm\">lock</mat-icon>\r\n            <span>Lock screen</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/faq\"> \r\n            <mat-icon class=\"mat-icon-sm\">help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item routerLink=\"/login\"> \r\n            <mat-icon class=\"mat-icon-sm\">power_settings_new</mat-icon>\r\n            <span>Sign Out</span> \r\n        </a>\r\n    </span>\r\n</mat-menu>  ";
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(appSettings, router, platformId) {
        _classCallCheck(this, AppComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.platformId = platformId;
        this.settings = this.appSettings.settings;
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              setTimeout(function () {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(_this.platformId)) {
                  window.scrollTo(0, 0);
                }
              });
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    }), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.models.ts":
  /*!*******************************!*\
    !*** ./src/app/app.models.ts ***!
    \*******************************/

  /*! exports provided: Property, Area, AdditionalFeature, Location, Price, Gallery, Plan, Video, Pagination */

  /***/
  function srcAppAppModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Property", function () {
      return Property;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Area", function () {
      return Area;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalFeature", function () {
      return AdditionalFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Location", function () {
      return Location;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Price", function () {
      return Price;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gallery", function () {
      return Gallery;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Plan", function () {
      return Plan;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Video", function () {
      return Video;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return Pagination;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Property = function Property(id, title, desc, propertyType, propertyStatus, city, zipCode, neighborhood, street, location, formattedAddress, features, featured, priceDollar, priceEuro, bedrooms, bathrooms, garages, area, yearBuilt, ratingsCount, ratingsValue, additionalFeatures, gallery, plans, videos, published, lastUpdate, views) {
      _classCallCheck(this, Property);

      this.id = id;
      this.title = title;
      this.desc = desc;
      this.propertyType = propertyType;
      this.propertyStatus = propertyStatus;
      this.city = city;
      this.zipCode = zipCode;
      this.neighborhood = neighborhood;
      this.street = street;
      this.location = location;
      this.formattedAddress = formattedAddress;
      this.features = features;
      this.featured = featured;
      this.priceDollar = priceDollar;
      this.priceEuro = priceEuro;
      this.bedrooms = bedrooms;
      this.bathrooms = bathrooms;
      this.garages = garages;
      this.area = area;
      this.yearBuilt = yearBuilt;
      this.ratingsCount = ratingsCount;
      this.ratingsValue = ratingsValue;
      this.additionalFeatures = additionalFeatures;
      this.gallery = gallery;
      this.plans = plans;
      this.videos = videos;
      this.published = published;
      this.lastUpdate = lastUpdate;
      this.views = views;
    }; // export class Property {
    //     public id: number;
    //     public title: string; 
    //     public desc: string;
    //     public propertyType: string;
    //     public propertyStatus: string[];
    //     public city: string;
    //     public zipCode: string;
    //     public neighborhood: string[];
    //     public street: string[];
    //     public location: Location;
    //     public formattedAddress: string;
    //     public features: string[];
    //     public featured: boolean;
    //     public priceDollar: Price;
    //     public priceEuro: Price;
    //     public bedrooms: number;
    //     public bathrooms: number;
    //     public garages: number;
    //     public area: Area;
    //     public yearBuilt: number;
    //     public ratingsCount: number;
    //     public ratingsValue: number;
    //     public additionalFeatures: AdditionalFeature[];
    //     public gallery: Gallery[];
    //     public plans: Plan[];
    //     public videos: Video[];
    //     public published: string;
    //     public lastUpdate: string;
    //     public views: number
    // }


    var Area = function Area(id, value, unit) {
      _classCallCheck(this, Area);

      this.id = id;
      this.value = value;
      this.unit = unit;
    };

    var AdditionalFeature = function AdditionalFeature(id, name, value) {
      _classCallCheck(this, AdditionalFeature);

      this.id = id;
      this.name = name;
      this.value = value;
    };

    var Location = function Location(id, lat, lng) {
      _classCallCheck(this, Location);

      this.id = id;
      this.lat = lat;
      this.lng = lng;
    };

    var Price = function Price() {
      _classCallCheck(this, Price);
    };

    var Gallery = function Gallery(id, small, medium, big) {
      _classCallCheck(this, Gallery);

      this.id = id;
      this.small = small;
      this.medium = medium;
      this.big = big;
    };

    var Plan = function Plan(id, name, desc, area, rooms, baths, image) {
      _classCallCheck(this, Plan);

      this.id = id;
      this.name = name;
      this.desc = desc;
      this.area = area;
      this.rooms = rooms;
      this.baths = baths;
      this.image = image;
    };

    var Video = function Video(id, name, link) {
      _classCallCheck(this, Video);

      this.id = id;
      this.name = name;
      this.link = link;
    };

    var Pagination = function Pagination(page, perPage, prePage, nextPage, total, totalPages) {
      _classCallCheck(this, Pagination);

      this.page = page;
      this.perPage = perPage;
      this.prePage = prePage;
      this.nextPage = nextPage;
      this.total = total;
      this.totalPages = totalPages;
    };
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _shared_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared/components/menu-header/menu-header.component */
    "./src/app/shared/components/menu-header/menu-header.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-progressbar */
    "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");
    /* harmony import */


    var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-progressbar/http */
    "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar-http.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var ngx_embed_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-embed-video */
    "./node_modules/ngx-embed-video/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var ngx_embed_video__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ngx_input_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-input-file */
    "./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./theme/utils/custom-overlay-container */
    "./src/app/theme/utils/custom-overlay-container.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./theme/utils/app-interceptor */
    "./src/app/theme/utils/app-interceptor.ts");
    /* harmony import */


    var _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./theme/components/toolbar1/toolbar1.component */
    "./src/app/theme/components/toolbar1/toolbar1.component.ts");
    /* harmony import */


    var _theme_components_toolbar2_toolbar2_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./theme/components/toolbar2/toolbar2.component */
    "./src/app/theme/components/toolbar2/toolbar2.component.ts");
    /* harmony import */


    var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./theme/components/user-menu/user-menu.component */
    "./src/app/theme/components/user-menu/user-menu.component.ts");
    /* harmony import */


    var _theme_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./theme/components/currency/currency.component */
    "./src/app/theme/components/currency/currency.component.ts");
    /* harmony import */


    var _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./theme/components/lang/lang.component */
    "./src/app/theme/components/lang/lang.component.ts");
    /* harmony import */


    var _theme_components_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./theme/components/social-icons/social-icons.component */
    "./src/app/theme/components/social-icons/social-icons.component.ts");
    /* harmony import */


    var _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./theme/components/contacts/contacts.component */
    "./src/app/theme/components/contacts/contacts.component.ts");
    /* harmony import */


    var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */
    "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
    /* harmony import */


    var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./theme/components/menu/vertical-menu/vertical-menu.component */
    "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
    /* harmony import */


    var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./shared/components/footer/footer.component */
    "./src/app/shared/components/footer/footer.component.ts");
    /* harmony import */


    var _components_order_shop_order_shop_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/order-shop/order-shop.component */
    "./src/app/components/order-shop/order-shop.component.ts");
    /* harmony import */


    var _components_cart_shop_cart_shop_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/cart-shop/cart-shop.component */
    "./src/app/components/cart-shop/cart-shop.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var config = {
      fileAccept: '*'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_31__["NotFoundComponent"], _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"], _theme_components_currency_currency_component__WEBPACK_IMPORTED_MODULE_21__["CurrencyComponent"], _theme_components_lang_lang_component__WEBPACK_IMPORTED_MODULE_22__["LangComponent"], _theme_components_social_icons_social_icons_component__WEBPACK_IMPORTED_MODULE_23__["SocialIconsComponent"], _theme_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_24__["ContactsComponent"], _theme_components_toolbar1_toolbar1_component__WEBPACK_IMPORTED_MODULE_18__["Toolbar1Component"], _theme_components_toolbar2_toolbar2_component__WEBPACK_IMPORTED_MODULE_19__["Toolbar2Component"], _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_25__["HorizontalMenuComponent"], _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_26__["VerticalMenuComponent"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_27__["FooterComponent"], _shared_components_menu_header_menu_header_component__WEBPACK_IMPORTED_MODULE_0__["MenuHeaderComponent"], _components_order_shop_order_shop_component__WEBPACK_IMPORTED_MODULE_28__["OrderShopComponent"], _components_cart_shop_cart_shop_component__WEBPACK_IMPORTED_MODULE_29__["CartShopComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_30__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
        appId: 'my-app'
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyA1rF9bttCxRmsNdZYjW7FzIoyrul5jb-s',
        libraries: ["places"]
      }), ngx_embed_video__WEBPACK_IMPORTED_MODULE_9__["EmbedVideo"].forRoot(), ngx_progressbar__WEBPACK_IMPORTED_MODULE_6__["NgProgressModule"], ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_7__["NgProgressHttpModule"], ngx_input_file__WEBPACK_IMPORTED_MODULE_10__["InputFileModule"].forRoot(config), _app_routing__WEBPACK_IMPORTED_MODULE_13__["AppRouting"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]],
      providers: [_app_settings__WEBPACK_IMPORTED_MODULE_16__["AppSettings"], {
        provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayContainer"],
        useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_12__["CustomOverlayContainer"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _theme_utils_app_interceptor__WEBPACK_IMPORTED_MODULE_17__["AppInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: routes, AppRouting */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRouting", function () {
      return AppRouting;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_order_shop_order_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/order-shop/order-shop.component */
    "./src/app/components/order-shop/order-shop.component.ts");
    /* harmony import */


    var _components_cart_shop_cart_shop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/cart-shop/cart-shop.component */
    "./src/app/components/cart-shop/cart-shop.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/components/contact/contact.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-home-home-module */
        "components-home-home-module").then(__webpack_require__.bind(null,
        /*! ./components/home/home.module */
        "./src/app/components/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      }
    }, {
      path: 'news',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-news-news-module */
        "components-news-news-module").then(__webpack_require__.bind(null,
        /*! ./components/news/news.module */
        "./src/app/components/news/news.module.ts")).then(function (m) {
          return m.NewsModule;
        });
      }
    }, {
      path: 'product',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | components-product-product-module */
        "components-product-product-module").then(__webpack_require__.bind(null,
        /*! ./components/product/product.module */
        "./src/app/components/product/product.module.ts")).then(function (m) {
          return m.ProductModule;
        });
      }
    }, // { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
    {
      path: 'order',
      component: _components_order_shop_order_shop_component__WEBPACK_IMPORTED_MODULE_1__["OrderShopComponent"]
    }, {
      path: 'cart',
      component: _components_cart_shop_cart_shop_component__WEBPACK_IMPORTED_MODULE_2__["CartShopComponent"]
    }, {
      path: 'contact',
      component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }, {
      path: '**',
      component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }];

    var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
      initialNavigation: 'enabled' // for one load page, without reload
      // useHash: true

    });
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: Data, AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Data", function () {
      return Data;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Data = function Data(properties, compareList, favorites, locations) {
      _classCallCheck(this, Data);

      this.properties = properties;
      this.compareList = compareList;
      this.favorites = favorites;
      this.locations = locations;
    };

    var AppService = /*#__PURE__*/function () {
      function AppService(http, bottomSheet, snackBar, appSettings, platformId) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.bottomSheet = bottomSheet;
        this.snackBar = snackBar;
        this.appSettings = appSettings;
        this.platformId = platformId;
        this.Data = new Data([], // properties
        [], // compareList
        [], // favorites
        [] // locations
        );
        this.url = "assets/data/";
        this.apiKey = 'AIzaSyA1rF9bttCxRmsNdZYjW7FzIoyrul5jb-s';
      }

      _createClass(AppService, [{
        key: "getProperties",
        value: function getProperties() {
          return this.http.get(this.url + 'properties.json');
        }
      }, {
        key: "getPropertyById",
        value: function getPropertyById(id) {
          return this.http.get(this.url + 'property-' + id + '.json');
        }
      }, {
        key: "getFeaturedProperties",
        value: function getFeaturedProperties() {
          return this.http.get(this.url + 'featured-properties.json');
        }
      }, {
        key: "getRelatedProperties",
        value: function getRelatedProperties() {
          return this.http.get(this.url + 'related-properties.json');
        }
      }, {
        key: "getPropertiesByAgentId",
        value: function getPropertiesByAgentId(agentId) {
          return this.http.get(this.url + 'properties-agentid-' + agentId + '.json');
        }
      }, {
        key: "getLocations",
        value: function getLocations() {
          return this.http.get(this.url + 'locations.json');
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40.714224;
          var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -73.961452;
          return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey);
        }
      }, {
        key: "getLatLng",
        value: function getLatLng(address) {
          return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=' + this.apiKey + '&address=' + address);
        }
      }, {
        key: "getFullAddress",
        value: function getFullAddress() {
          var lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40.714224;
          var lng = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -73.961452;
          return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + this.apiKey).subscribe(function (data) {
            return data['results'][0]['formatted_address'];
          });
        }
      }, {
        key: "addToCompare",
        value: function addToCompare(property, component, direction) {
          var _this2 = this;

          if (!this.Data.compareList.filter(function (item) {
            return item.id == property.id;
          })[0]) {
            this.Data.compareList.push(property);
            this.bottomSheet.open(component, {
              direction: direction
            }).afterDismissed().subscribe(function (isRedirect) {
              if (isRedirect) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["isPlatformBrowser"])(_this2.platformId)) {
                  window.scrollTo(0, 0);
                }
              }
            });
          }
        }
      }, {
        key: "addToFavorites",
        value: function addToFavorites(property, direction) {
          if (!this.Data.favorites.filter(function (item) {
            return item.id == property.id;
          })[0]) {
            this.Data.favorites.push(property);
            this.snackBar.open('The property "' + property.title + '" has been added to favorites.', '×', {
              verticalPosition: 'top',
              duration: 3000,
              direction: direction
            });
          }
        }
      }, {
        key: "getPropertyTypes",
        value: function getPropertyTypes() {
          return [{
            id: 1,
            name: 'Office'
          }, {
            id: 2,
            name: 'House'
          }, {
            id: 3,
            name: 'Apartment'
          }];
        }
      }, {
        key: "getPropertyStatuses",
        value: function getPropertyStatuses() {
          return [{
            id: 1,
            name: 'For Sale'
          }, {
            id: 2,
            name: 'For Rent'
          }, {
            id: 3,
            name: 'Open House'
          }, {
            id: 4,
            name: 'No Fees'
          }, {
            id: 5,
            name: 'Hot Offer'
          }, {
            id: 6,
            name: 'Sold'
          }];
        }
      }, {
        key: "getCities",
        value: function getCities() {
          return [{
            id: 1,
            name: 'New York'
          }, {
            id: 2,
            name: 'Chicago'
          }, {
            id: 3,
            name: 'Los Angeles'
          }, {
            id: 4,
            name: 'Seattle'
          }];
        }
      }, {
        key: "getNeighborhoods",
        value: function getNeighborhoods() {
          return [{
            id: 1,
            name: 'Astoria',
            cityId: 1
          }, {
            id: 2,
            name: 'Midtown',
            cityId: 1
          }, {
            id: 3,
            name: 'Chinatown',
            cityId: 1
          }, {
            id: 4,
            name: 'Austin',
            cityId: 2
          }, {
            id: 5,
            name: 'Englewood',
            cityId: 2
          }, {
            id: 6,
            name: 'Riverdale',
            cityId: 2
          }, {
            id: 7,
            name: 'Hollywood',
            cityId: 3
          }, {
            id: 8,
            name: 'Sherman Oaks',
            cityId: 3
          }, {
            id: 9,
            name: 'Highland Park',
            cityId: 3
          }, {
            id: 10,
            name: 'Belltown',
            cityId: 4
          }, {
            id: 11,
            name: 'Queen Anne',
            cityId: 4
          }, {
            id: 12,
            name: 'Green Lake',
            cityId: 4
          }];
        }
      }, {
        key: "getStreets",
        value: function getStreets() {
          return [{
            id: 1,
            name: 'Astoria Street #1',
            cityId: 1,
            neighborhoodId: 1
          }, {
            id: 2,
            name: 'Astoria Street #2',
            cityId: 1,
            neighborhoodId: 1
          }, {
            id: 3,
            name: 'Midtown Street #1',
            cityId: 1,
            neighborhoodId: 2
          }, {
            id: 4,
            name: 'Midtown Street #2',
            cityId: 1,
            neighborhoodId: 2
          }, {
            id: 5,
            name: 'Chinatown Street #1',
            cityId: 1,
            neighborhoodId: 3
          }, {
            id: 6,
            name: 'Chinatown Street #2',
            cityId: 1,
            neighborhoodId: 3
          }, {
            id: 7,
            name: 'Austin Street #1',
            cityId: 2,
            neighborhoodId: 4
          }, {
            id: 8,
            name: 'Austin Street #2',
            cityId: 2,
            neighborhoodId: 4
          }, {
            id: 9,
            name: 'Englewood Street #1',
            cityId: 2,
            neighborhoodId: 5
          }, {
            id: 10,
            name: 'Englewood Street #2',
            cityId: 2,
            neighborhoodId: 5
          }, {
            id: 11,
            name: 'Riverdale Street #1',
            cityId: 2,
            neighborhoodId: 6
          }, {
            id: 12,
            name: 'Riverdale Street #2',
            cityId: 2,
            neighborhoodId: 6
          }, {
            id: 13,
            name: 'Hollywood Street #1',
            cityId: 3,
            neighborhoodId: 7
          }, {
            id: 14,
            name: 'Hollywood Street #2',
            cityId: 3,
            neighborhoodId: 7
          }, {
            id: 15,
            name: 'Sherman Oaks Street #1',
            cityId: 3,
            neighborhoodId: 8
          }, {
            id: 16,
            name: 'Sherman Oaks Street #2',
            cityId: 3,
            neighborhoodId: 8
          }, {
            id: 17,
            name: 'Highland Park Street #1',
            cityId: 3,
            neighborhoodId: 9
          }, {
            id: 18,
            name: 'Highland Park Street #2',
            cityId: 3,
            neighborhoodId: 9
          }, {
            id: 19,
            name: 'Belltown Street #1',
            cityId: 4,
            neighborhoodId: 10
          }, {
            id: 20,
            name: 'Belltown Street #2',
            cityId: 4,
            neighborhoodId: 10
          }, {
            id: 21,
            name: 'Queen Anne Street #1',
            cityId: 4,
            neighborhoodId: 11
          }, {
            id: 22,
            name: 'Queen Anne Street #2',
            cityId: 4,
            neighborhoodId: 11
          }, {
            id: 23,
            name: 'Green Lake Street #1',
            cityId: 4,
            neighborhoodId: 12
          }, {
            id: 24,
            name: 'Green Lake Street #2',
            cityId: 4,
            neighborhoodId: 12
          }];
        }
      }, {
        key: "getFeatures",
        value: function getFeatures() {
          return [{
            id: 1,
            name: 'Air Conditioning',
            selected: false
          }, {
            id: 2,
            name: 'Barbeque',
            selected: false
          }, {
            id: 3,
            name: 'Dryer',
            selected: false
          }, {
            id: 4,
            name: 'Microwave',
            selected: false
          }, {
            id: 5,
            name: 'Refrigerator',
            selected: false
          }, {
            id: 6,
            name: 'TV Cable',
            selected: false
          }, {
            id: 7,
            name: 'Sauna',
            selected: false
          }, {
            id: 8,
            name: 'WiFi',
            selected: false
          }, {
            id: 9,
            name: 'Fireplace',
            selected: false
          }, {
            id: 10,
            name: 'Swimming Pool',
            selected: false
          }, {
            id: 11,
            name: 'Gym',
            selected: false
          }];
        }
      }, {
        key: "getHomeCarouselSlides",
        value: function getHomeCarouselSlides() {
          return this.http.get('assets/data/slides.json');
        }
      }, {
        key: "filterData",
        value: function filterData(data, params, sort, page, perPage) {
          if (params) {
            if (params.propertyType) {
              data = data.filter(function (property) {
                return property.propertyType == params.propertyType.name;
              });
            }

            if (params.propertyStatus && params.propertyStatus.length) {
              var statuses = [];
              params.propertyStatus.forEach(function (status) {
                statuses.push(status.name);
              });
              var properties = [];
              data.filter(function (property) {
                return property.propertyStatus.forEach(function (status) {
                  if (statuses.indexOf(status) > -1) {
                    if (!properties.includes(property)) {
                      properties.push(property);
                    }
                  }
                });
              });
              data = properties;
            }

            if (params.price) {
              if (this.appSettings.settings.currency == 'USD') {
                if (params.price.from) {
                  data = data.filter(function (property) {
                    if (property.priceDollar.sale && property.priceDollar.sale >= params.price.from) {
                      return true;
                    }

                    if (property.priceDollar.rent && property.priceDollar.rent >= params.price.from) {
                      return true;
                    }

                    return false;
                  });
                }

                if (params.price.to) {
                  data = data.filter(function (property) {
                    if (property.priceDollar.sale && property.priceDollar.sale <= params.price.to) {
                      return true;
                    }

                    if (property.priceDollar.rent && property.priceDollar.rent <= params.price.to) {
                      return true;
                    }

                    return false;
                  });
                }
              }

              if (this.appSettings.settings.currency == 'EUR') {
                if (params.price.from) {
                  data = data.filter(function (property) {
                    if (property.priceEuro.sale && property.priceEuro.sale >= params.price.from) {
                      return true;
                    }

                    if (property.priceEuro.rent && property.priceEuro.rent >= params.price.from) {
                      return true;
                    }

                    return false;
                  });
                }

                if (params.price.to) {
                  data = data.filter(function (property) {
                    if (property.priceEuro.sale && property.priceEuro.sale <= params.price.to) {
                      return true;
                    }

                    if (property.priceEuro.rent && property.priceEuro.rent <= params.price.to) {
                      return true;
                    }

                    return false;
                  });
                }
              }
            }

            if (params.city) {
              data = data.filter(function (property) {
                return property.city == params.city.name;
              });
            }

            if (params.zipCode) {
              data = data.filter(function (property) {
                return property.zipCode == params.zipCode;
              });
            }

            if (params.neighborhood && params.neighborhood.length) {
              var neighborhoods = [];
              params.neighborhood.forEach(function (item) {
                neighborhoods.push(item.name);
              });
              var _properties = [];
              data.filter(function (property) {
                return property.neighborhood.forEach(function (item) {
                  if (neighborhoods.indexOf(item) > -1) {
                    if (!_properties.includes(property)) {
                      _properties.push(property);
                    }
                  }
                });
              });
              data = _properties;
            }

            if (params.street && params.street.length) {
              var streets = [];
              params.street.forEach(function (item) {
                streets.push(item.name);
              });
              var _properties2 = [];
              data.filter(function (property) {
                return property.street.forEach(function (item) {
                  if (streets.indexOf(item) > -1) {
                    if (!_properties2.includes(property)) {
                      _properties2.push(property);
                    }
                  }
                });
              });
              data = _properties2;
            }

            if (params.bedrooms) {
              if (params.bedrooms.from) {
                data = data.filter(function (property) {
                  return property.bedrooms >= params.bedrooms.from;
                });
              }

              if (params.bedrooms.to) {
                data = data.filter(function (property) {
                  return property.bedrooms <= params.bedrooms.to;
                });
              }
            }

            if (params.bathrooms) {
              if (params.bathrooms.from) {
                data = data.filter(function (property) {
                  return property.bathrooms >= params.bathrooms.from;
                });
              }

              if (params.bathrooms.to) {
                data = data.filter(function (property) {
                  return property.bathrooms <= params.bathrooms.to;
                });
              }
            }

            if (params.garages) {
              if (params.garages.from) {
                data = data.filter(function (property) {
                  return property.garages >= params.garages.from;
                });
              }

              if (params.garages.to) {
                data = data.filter(function (property) {
                  return property.garages <= params.garages.to;
                });
              }
            }

            if (params.area) {
              if (params.area.from) {
                data = data.filter(function (property) {
                  return property.area.value >= params.area.from;
                });
              }

              if (params.area.to) {
                data = data.filter(function (property) {
                  return property.area.value <= params.area.to;
                });
              }
            }

            if (params.yearBuilt) {
              if (params.yearBuilt.from) {
                data = data.filter(function (property) {
                  return property.yearBuilt >= params.yearBuilt.from;
                });
              }

              if (params.yearBuilt.to) {
                data = data.filter(function (property) {
                  return property.yearBuilt <= params.yearBuilt.to;
                });
              }
            }

            if (params.features) {
              var arr = [];
              params.features.forEach(function (feature) {
                if (feature.selected) arr.push(feature.name);
              });

              if (arr.length > 0) {
                var _properties3 = [];
                data.filter(function (property) {
                  return property.features.forEach(function (feature) {
                    if (arr.indexOf(feature) > -1) {
                      if (!_properties3.includes(property)) {
                        _properties3.push(property);
                      }
                    }
                  });
                });
                data = _properties3;
              }
            }
          } // console.log(data)
          //for show more properties mock data 


          for (var index = 0; index < 2; index++) {
            data = data.concat(data);
          }

          this.sortData(sort, data);
          return this.paginator(data, page, perPage);
        }
      }, {
        key: "sortData",
        value: function sortData(sort, data) {
          if (sort) {
            switch (sort) {
              case 'Newest':
                data = data.sort(function (a, b) {
                  return new Date(b.published) - new Date(a.published);
                });
                break;

              case 'Oldest':
                data = data.sort(function (a, b) {
                  return new Date(a.published) - new Date(b.published);
                });
                break;

              case 'Popular':
                data = data.sort(function (a, b) {
                  if (a.ratingsValue / a.ratingsCount < b.ratingsValue / b.ratingsCount) {
                    return 1;
                  }

                  if (a.ratingsValue / a.ratingsCount > b.ratingsValue / b.ratingsCount) {
                    return -1;
                  }

                  return 0;
                });
                break;

              case 'Price (Low to High)':
                if (this.appSettings.settings.currency == 'USD') {
                  data = data.sort(function (a, b) {
                    if ((a.priceDollar.sale || a.priceDollar.rent) > (b.priceDollar.sale || b.priceDollar.rent)) {
                      return 1;
                    }

                    if ((a.priceDollar.sale || a.priceDollar.rent) < (b.priceDollar.sale || b.priceDollar.rent)) {
                      return -1;
                    }

                    return 0;
                  });
                }

                if (this.appSettings.settings.currency == 'EUR') {
                  data = data.sort(function (a, b) {
                    if ((a.priceEuro.sale || a.priceEuro.rent) > (b.priceEuro.sale || b.v.rent)) {
                      return 1;
                    }

                    if ((a.priceEuro.sale || a.priceEuro.rent) < (b.priceEuro.sale || b.priceEuro.rent)) {
                      return -1;
                    }

                    return 0;
                  });
                }

                break;

              case 'Price (High to Low)':
                if (this.appSettings.settings.currency == 'USD') {
                  data = data.sort(function (a, b) {
                    if ((a.priceDollar.sale || a.priceDollar.rent) < (b.priceDollar.sale || b.priceDollar.rent)) {
                      return 1;
                    }

                    if ((a.priceDollar.sale || a.priceDollar.rent) > (b.priceDollar.sale || b.priceDollar.rent)) {
                      return -1;
                    }

                    return 0;
                  });
                }

                if (this.appSettings.settings.currency == 'EUR') {
                  data = data.sort(function (a, b) {
                    if ((a.priceEuro.sale || a.priceEuro.rent) < (b.priceEuro.sale || b.v.rent)) {
                      return 1;
                    }

                    if ((a.priceEuro.sale || a.priceEuro.rent) > (b.priceEuro.sale || b.priceEuro.rent)) {
                      return -1;
                    }

                    return 0;
                  });
                }

                break;

              default:
                break;
            }
          }

          return data;
        }
      }, {
        key: "paginator",
        value: function paginator(items, page, perPage) {
          var page = page || 1,
              perPage = perPage || 4,
              offset = (page - 1) * perPage,
              paginatedItems = items.slice(offset).slice(0, perPage),
              totalPages = Math.ceil(items.length / perPage);
          return {
            data: paginatedItems,
            pagination: {
              page: page,
              perPage: perPage,
              prePage: page - 1 ? page - 1 : null,
              nextPage: totalPages > page ? page + 1 : null,
              total: items.length,
              totalPages: totalPages
            }
          };
        }
      }, {
        key: "getTestimonials",
        value: function getTestimonials() {
          return [{
            text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
            author: 'Mr. Adam Sandler',
            position: 'General Director',
            image: 'assets/images/profile/adam.jpg'
          }, {
            text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
            author: 'Ashley Ahlberg',
            position: 'Housewife',
            image: 'assets/images/profile/ashley.jpg'
          }, {
            text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
            author: 'Bruno Vespa',
            position: 'Blogger',
            image: 'assets/images/profile/bruno.jpg'
          }, {
            text: 'Donec molestie turpis ut mollis efficitur. Nam fringilla libero vel dictum vulputate. In malesuada, ligula non ornare consequat, augue nibh luctus nisl, et lobortis justo ipsum nec velit. Praesent lacinia quam ut nulla gravida, at viverra libero euismod. Sed tincidunt tempus augue vitae malesuada. Vestibulum eu lectus nisi. Aliquam erat volutpat.',
            author: 'Mrs. Julia Aniston',
            position: 'Marketing Manager',
            image: 'assets/images/profile/julia.jpg'
          }];
        }
      }, {
        key: "getAgents",
        value: function getAgents() {
          return [{
            id: 1,
            fullName: 'Lusia Manuel',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
            organization: 'HouseKey',
            email: 'lusia.m@housekey.com',
            phone: '(224) 267-1346',
            social: {
              facebook: 'lusia',
              twitter: 'lusia',
              linkedin: 'lusia',
              instagram: 'lusia',
              website: 'https://lusia.manuel.com'
            },
            ratingsCount: 6,
            ratingsValue: 480,
            image: 'assets/images/agents/a-1.jpg'
          }, {
            id: 2,
            fullName: 'Andy Warhol',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
            organization: 'HouseKey',
            email: 'andy.w@housekey.com',
            phone: '(212) 457-2308',
            social: {
              facebook: '',
              twitter: '',
              linkedin: '',
              instagram: '',
              website: 'https://andy.warhol.com'
            },
            ratingsCount: 4,
            ratingsValue: 400,
            image: 'assets/images/agents/a-2.jpg'
          }, {
            id: 3,
            fullName: 'Tereza Stiles',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
            organization: 'HouseKey',
            email: 'tereza.s@housekey.com',
            phone: '(214) 617-2614',
            social: {
              facebook: '',
              twitter: '',
              linkedin: '',
              instagram: '',
              website: 'https://tereza.stiles.com'
            },
            ratingsCount: 4,
            ratingsValue: 380,
            image: 'assets/images/agents/a-3.jpg'
          }, {
            id: 4,
            fullName: 'Michael Blair',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
            organization: 'HouseKey',
            email: 'michael.b@housekey.com',
            phone: '(267) 388-1637',
            social: {
              facebook: '',
              twitter: '',
              linkedin: '',
              instagram: '',
              website: 'https://michael.blair.com'
            },
            ratingsCount: 6,
            ratingsValue: 480,
            image: 'assets/images/agents/a-4.jpg'
          }, {
            id: 5,
            fullName: 'Michelle Ormond',
            desc: 'Phasellus sed metus leo. Donec laoreet, lacus ut suscipit convallis, erat enim eleifend nulla, at sagittis enim urna et lacus.',
            organization: 'HouseKey',
            email: 'michelle.o@housekey.com',
            phone: '(267) 388-1637',
            social: {
              facebook: '',
              twitter: '',
              linkedin: '',
              instagram: '',
              website: 'https://michelle.ormond.com'
            },
            ratingsCount: 6,
            ratingsValue: 480,
            image: 'assets/images/agents/a-5.jpg'
          }];
        }
      }, {
        key: "getClients",
        value: function getClients() {
          return [{
            name: 'aloha',
            image: 'assets/images/clients/aloha.png'
          }, {
            name: 'dream',
            image: 'assets/images/clients/dream.png'
          }, {
            name: 'congrats',
            image: 'assets/images/clients/congrats.png'
          }, {
            name: 'best',
            image: 'assets/images/clients/best.png'
          }, {
            name: 'original',
            image: 'assets/images/clients/original.png'
          }, {
            name: 'retro',
            image: 'assets/images/clients/retro.png'
          }, {
            name: 'king',
            image: 'assets/images/clients/king.png'
          }, {
            name: 'love',
            image: 'assets/images/clients/love.png'
          }, {
            name: 'the',
            image: 'assets/images/clients/the.png'
          }, {
            name: 'easter',
            image: 'assets/images/clients/easter.png'
          }, {
            name: 'with',
            image: 'assets/images/clients/with.png'
          }, {
            name: 'special',
            image: 'assets/images/clients/special.png'
          }, {
            name: 'bravo',
            image: 'assets/images/clients/bravo.png'
          }];
        }
      }]);

      return AppService;
    }();

    AppService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };

    AppService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], Object])], AppService);
    /***/
  },

  /***/
  "./src/app/app.settings.ts":
  /*!*********************************!*\
    !*** ./src/app/app.settings.ts ***!
    \*********************************/

  /*! exports provided: Settings, AppSettings */

  /***/
  function srcAppAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Settings", function () {
      return Settings;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Settings = function Settings(name, theme, toolbar, stickyMenuToolbar, header, rtl, searchPanelVariant, searchOnBtnClick, currency, //additional options
    mainToolbarFixed, contentOffsetToTop, headerBgImage, loadMore) {
      _classCallCheck(this, Settings);

      this.name = name;
      this.theme = theme;
      this.toolbar = toolbar;
      this.stickyMenuToolbar = stickyMenuToolbar;
      this.header = header;
      this.rtl = rtl;
      this.searchPanelVariant = searchPanelVariant;
      this.searchOnBtnClick = searchOnBtnClick;
      this.currency = currency;
      this.mainToolbarFixed = mainToolbarFixed;
      this.contentOffsetToTop = contentOffsetToTop;
      this.headerBgImage = headerBgImage;
      this.loadMore = loadMore;
    };

    var AppSettings = function AppSettings() {
      _classCallCheck(this, AppSettings);

      this.settings = new Settings('HouseKey', // theme name
      'blue', // blue, green, red, pink, purple, grey, orange-dark
      1, // 1 or 2  
      true, // true = sticky, false = not sticky
      'image', // default, image, carousel
      false, // true = rtl, false = ltr
      1, //  1, 2  or 3
      false, //  true = search on button click
      'USD', // USD, EUR
      //NOTE:  don't change additional options values, they used for theme performance
      false, false, false, {
        start: false,
        step: 1,
        load: false,
        page: 1,
        complete: false,
        result: 0
      });
    };

    AppSettings = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AppSettings);
    /***/
  },

  /***/
  "./src/app/components/cart-shop/cart-shop.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/cart-shop/cart-shop.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCartShopCartShopComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.theme-container.container_b .wp-container_b {\n  padding: 10px 1rem;\n  background-color: #f1f1f1;\n}\n\n.wp-table {\n  font-family: Montserrat;\n  margin-top: 50px;\n}\n\n.wp-table h2 {\n  margin-bottom: 20px;\n}\n\n.wp-table table {\n  border: 1px solid #ccc;\n}\n\n.wp-table table tr td, .wp-table table tr th {\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n}\n\n.wp-table table thead {\n  background-color: #f1f1f1;\n  display: none;\n}\n\n.wp-table table tbody {\n  background-color: #fff;\n}\n\n.wp-table table tfoot {\n  background-color: #f1f1f1;\n}\n\n.wp-container_b .px-3.mb-3 {\n  padding: 10px 0px;\n  margin-bottom: 0px !important;\n  background: #fff;\n  border: 10px solid #ccc;\n  padding: 15px;\n}\n\n.wp-container_b .px-3.mb-3 h2 {\n  padding: 5px 0px 19px 0px;\n  position: relative;\n}\n\n.wp-container_b .px-3.mb-3 h2::after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background: #ccc;\n  position: absolute;\n  bottom: 10px;\n  left: 0px;\n}\n\n.wp-table-b table thead, .wp-table-b table tfoot {\n  background: #f7f7f7;\n}\n\n.wp-table-b table tbody {\n  background: #ffffff;\n}\n\n.wp-table-b table thead tr th button {\n  border: none;\n  padding: 0px;\n  margin: 0px;\n}\n\n.wp-table-b table thead tr th button i {\n  margin-right: 5px;\n}\n\n.wp-table-b table tr th, .wp-table-b table tr td {\n  padding: 8px;\n  border: 1px solid #ccc;\n  text-align: center;\n  font-size: 13px;\n}\n\n.wp-table-b table td .img img {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n  margin: 0 auto;\n}\n\n.wp-table-b table thead th:first-child {\n  text-align: left;\n}\n\n.wp-table-b table tbody td:first-child, .wp-table-b table tbody td:nth-child(2) {\n  text-align: left;\n}\n\n.wp-table-b table tbody input.input-number {\n  width: 60px;\n  height: 40px;\n  border: 1px solid #ccc;\n  padding: 0px 6px;\n}\n\n.wp-table-b table tbody td .h2-title {\n  font-size: 1rem;\n  margin-bottom: 5px;\n  color: #7db828;\n}\n\n.wp-table-b table tbody td .post {\n  color: #377698;\n  font-style: italic;\n  font-size: 0.8rem;\n}\n\n.wp-table-b table tbody td .sale span {\n  padding: 0px 3px;\n}\n\n.price-old {\n  color: #999;\n  text-decoration: line-through;\n}\n\ni.fa-times-circle {\n  font-size: 16px;\n  color: #7db82a;\n}\n\ni.fa-times-circle:hover {\n  color: #e4101e;\n}\n\n.price-ft {\n  color: #af0d24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LXNob3AvRDpcXFdFRC1TSE9QXFxUQ09NV0VCXFxDUk0uQ2xpZW50LldlYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjYXJ0LXNob3BcXGNhcnQtc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LXNob3AvY2FydC1zaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREdFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ0FKOztBRElBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdFO0VBQ0UsbUJBQUE7QUNESjs7QURHRTtFQUtFLHNCQUFBO0FDTEo7O0FEQ0k7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDQ047O0FERUk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNBTjs7QURFSTtFQUNFLHNCQUFBO0FDQU47O0FERUk7RUFDRSx5QkFBQTtBQ0FOOztBRE1FO0VBQ0UsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDSEo7O0FESUk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDRk47O0FER007RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNEUjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBREtBO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDSEY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBRElBO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDREY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtBQ1NGOztBRFBBO0VBQ0UsY0FBQTtBQ1VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0LXNob3AvY2FydC1zaG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGhlbWUtY29udGFpbmVyLmNvbnRhaW5lcl9iIHtcclxuICAud3AtY29udGFpbmVyX2Ige1xyXG4gICAgcGFkZGluZzogMTBweCAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgXHJcbiAgfVxyXG59XHJcbi53cC10YWJsZSB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbiAgbWFyZ2luLXRvcDogNTBweDsgIFxyXG4gIFxyXG4gIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHRyIHRkLCB0ciB0aCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIHRmb290IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLndwLWNvbnRhaW5lcl9iIHtcclxuICBcclxuICAucHgtMy5tYi0zIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgaDIge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMHB4IDE5cHggMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLndwLXRhYmxlLWIgdGFibGUgdGhlYWQsIC53cC10YWJsZS1iIHRhYmxlIHRmb290IHtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG59XHJcbi53cC10YWJsZS1iIHRhYmxlIHRib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gXHJcbn1cclxuLndwLXRhYmxlLWIgdGFibGUgdGhlYWQgdHIgdGggYnV0dG9uIHtcclxuIFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLndwLXRhYmxlLWIgdGFibGUgdGhlYWQgdHIgdGggYnV0dG9uIGkge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi53cC10YWJsZS1iIHRhYmxlIHRyIHRoLCAud3AtdGFibGUtYiB0YWJsZSB0ciB0ZCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG4ud3AtdGFibGUtYiB0YWJsZSB0ZCAuaW1nIGltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi53cC10YWJsZS1iIHRhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi53cC10YWJsZS1iIHRhYmxlIHRib2R5IHRkOmZpcnN0LWNoaWxkLCAud3AtdGFibGUtYiB0YWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMikge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLndwLXRhYmxlLWIgdGFibGUgdGJvZHkgaW5wdXQuaW5wdXQtbnVtYmVyIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiAwcHggNnB4O1xyXG59XHJcbi53cC10YWJsZS1iIHRhYmxlIHRib2R5IHRkIC5oMi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBjb2xvcjogIzdkYjgyODtcclxufVxyXG4ud3AtdGFibGUtYiB0YWJsZSB0Ym9keSB0ZCAucG9zdCB7XHJcbiAgY29sb3I6ICMzNzc2OTg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi53cC10YWJsZS1iIHRhYmxlIHRib2R5IHRkIC5zYWxlIHNwYW4ge1xyXG4gIHBhZGRpbmc6IDBweCAzcHg7XHJcbn1cclxuLnByaWNlLW9sZCB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuaS5mYS10aW1lcy1jaXJjbGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzdkYjgyYTtcclxufVxyXG5pLmZhLXRpbWVzLWNpcmNsZTpob3ZlciB7XHJcbiAgY29sb3I6ICNlNDEwMWU7XHJcbn1cclxuLnByaWNlLWZ0IHtcclxuICBjb2xvcjogI2FmMGQyNFxyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aGVtZS1jb250YWluZXIuY29udGFpbmVyX2IgLndwLWNvbnRhaW5lcl9iIHtcbiAgcGFkZGluZzogMTBweCAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4ud3AtdGFibGUge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi53cC10YWJsZSBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ud3AtdGFibGUgdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuLndwLXRhYmxlIHRhYmxlIHRyIHRkLCAud3AtdGFibGUgdGFibGUgdHIgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi53cC10YWJsZSB0YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud3AtdGFibGUgdGFibGUgdGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLndwLXRhYmxlIHRhYmxlIHRmb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLndwLWNvbnRhaW5lcl9iIC5weC0zLm1iLTMge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMTBweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLndwLWNvbnRhaW5lcl9iIC5weC0zLm1iLTMgaDIge1xuICBwYWRkaW5nOiA1cHggMHB4IDE5cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud3AtY29udGFpbmVyX2IgLnB4LTMubWItMyBoMjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbi53cC10YWJsZS1iIHRhYmxlIHRoZWFkLCAud3AtdGFibGUtYiB0YWJsZSB0Zm9vdCB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG59XG5cbi53cC10YWJsZS1iIHRhYmxlIHRib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLndwLXRhYmxlLWIgdGFibGUgdGhlYWQgdHIgdGggYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ud3AtdGFibGUtYiB0YWJsZSB0aGVhZCB0ciB0aCBidXR0b24gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ud3AtdGFibGUtYiB0YWJsZSB0ciB0aCwgLndwLXRhYmxlLWIgdGFibGUgdHIgdGQge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ud3AtdGFibGUtYiB0YWJsZSB0ZCAuaW1nIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi53cC10YWJsZS1iIHRhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLndwLXRhYmxlLWIgdGFibGUgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQsIC53cC10YWJsZS1iIHRhYmxlIHRib2R5IHRkOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi53cC10YWJsZS1iIHRhYmxlIHRib2R5IGlucHV0LmlucHV0LW51bWJlciB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDBweCA2cHg7XG59XG5cbi53cC10YWJsZS1iIHRhYmxlIHRib2R5IHRkIC5oMi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzdkYjgyODtcbn1cblxuLndwLXRhYmxlLWIgdGFibGUgdGJvZHkgdGQgLnBvc3Qge1xuICBjb2xvcjogIzM3NzY5ODtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLndwLXRhYmxlLWIgdGFibGUgdGJvZHkgdGQgLnNhbGUgc3BhbiB7XG4gIHBhZGRpbmc6IDBweCAzcHg7XG59XG5cbi5wcmljZS1vbGQge1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbmkuZmEtdGltZXMtY2lyY2xlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzdkYjgyYTtcbn1cblxuaS5mYS10aW1lcy1jaXJjbGU6aG92ZXIge1xuICBjb2xvcjogI2U0MTAxZTtcbn1cblxuLnByaWNlLWZ0IHtcbiAgY29sb3I6ICNhZjBkMjQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/cart-shop/cart-shop.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/cart-shop/cart-shop.component.ts ***!
    \*************************************************************/

  /*! exports provided: CartShopComponent */

  /***/
  function srcAppComponentsCartShopCartShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartShopComponent", function () {
      return CartShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CartShopComponent = /*#__PURE__*/function () {
      function CartShopComponent() {
        _classCallCheck(this, CartShopComponent);

        this.displayedColumns = ['nameproduct', 'price', 'amount', 'total', 'delete'];
        this.transactions = [{
          nameproduct: 'Bôt sả nguyên chất',
          price: 2.780,
          amount: 1,
          total: 2.780,
          "delete": ''
        }];
      }

      _createClass(CartShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CartShopComponent;
    }();

    CartShopComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-cart-shop',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./cart-shop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart-shop/cart-shop.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./cart-shop.component.scss */
      "./src/app/components/cart-shop/cart-shop.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], CartShopComponent);
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/contact/contact.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact-map .sebm-google-map-container {\n  height: 210px;\n  width: 600px;\n}\n\n.w-100 {\n  margin-bottom: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0Usa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtbWFwIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMjEwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbn1cclxuLnctMTAwe1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufSIsIi5jb250YWN0LW1hcCAuc2VibS1nb29nbGUtbWFwLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjEwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLnctMTAwIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/contact/contact.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/contact/contact.component.ts ***!
    \*********************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);

        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-contact',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/components/contact/contact.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/not-found/not-found.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".box {\n  border-radius: 0;\n}\n.box .box-header {\n  height: 180px;\n}\n.box .box-header .error {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n.box .box-content {\n  position: relative;\n  height: 180px;\n}\n.box .box-content .box-content-inner {\n  position: absolute;\n  top: -34px;\n  left: 34px;\n  right: 34px;\n  height: 180px;\n}\n.box .box-content .box-content-header {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.box .box-content .box-content-header.server-error {\n  margin-bottom: 36px;\n}\n.box .box-content .box-text {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.box .box-content .box-text::last-child {\n  margin-bottom: 15px;\n}\n.box .box-content .box-footer {\n  position: relative;\n  bottom: 16px;\n}\n.box .box-content .box-footer button {\n  min-width: 70px;\n  margin: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvRDpcXFdFRC1TSE9QXFxUQ09NV0VCXFxDUk0uQ2xpZW50LldlYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxub3QtZm91bmRcXG5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBREFJO0VBQ0ksYUFBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNHWjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0daO0FERFE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0daO0FERlk7RUFDSSxtQkFBQTtBQ0loQjtBRERRO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0daO0FERlk7RUFDSSxtQkFBQTtBQ0loQjtBRERRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDR1o7QURGWTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FDSWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAuYm94LWhlYWRlcntcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIC5lcnJvcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib3gtY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDsgICAgIFxyXG4gICAgICAgIC5ib3gtY29udGVudC1pbm5lcntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IC0zNHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAzNHB4O1xyXG4gICAgICAgICAgICByaWdodDogMzRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC1jb250ZW50LWhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAmLnNlcnZlci1lcnJvcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJveC10ZXh0e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICY6Omxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gtZm9vdGVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ib3gge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmJveCAuYm94LWhlYWRlciB7XG4gIGhlaWdodDogMTgwcHg7XG59XG4uYm94IC5ib3gtaGVhZGVyIC5lcnJvciB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuLmJveCAuYm94LWNvbnRlbnQgLmJveC1jb250ZW50LWlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zNHB4O1xuICBsZWZ0OiAzNHB4O1xuICByaWdodDogMzRweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IC5ib3gtY29udGVudC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LWNvbnRlbnQtaGVhZGVyLnNlcnZlci1lcnJvciB7XG4gIG1hcmdpbi1ib3R0b206IDM2cHg7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYm94IC5ib3gtY29udGVudCAuYm94LXRleHQ6Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJveCAuYm94LWNvbnRlbnQgLmJveC1mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTZweDtcbn1cbi5ib3ggLmJveC1jb250ZW50IC5ib3gtZm9vdGVyIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNzBweDtcbiAgbWFyZ2luOiAwIDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/not-found/not-found.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent(router) {
        _classCallCheck(this, NotFoundComponent);

        this.router = router;
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goHome",
        value: function goHome() {
          this.router.navigate(['/']);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.getElementById('preloader').classList.add('hide');
        }
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    NotFoundComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-not-found',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-found/not-found.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/components/not-found/not-found.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/order-shop/order-shop.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/order-shop/order-shop.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsOrderShopOrderShopComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n\ntable {\n  width: 100%;\n}\n\n.divider {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n\n.wp-table-b tr th {\n  background: #f1f1f1;\n}\n\n.wp-table-b tr th td {\n  padding: 10px 0px !important;\n  color: #7db828;\n}\n\n.wp-table-b tr .td_b {\n  padding: 0px !important;\n}\n\n.wp-table-b tr .td_b > div {\n  padding: 5px 0px;\n  background: #f1f1f1;\n  border-bottom: 1px solid #ccc;\n}\n\n.wp-table-b tr .td_b > div:last-child {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1zaG9wL0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcb3JkZXItc2hvcFxcb3JkZXItc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1zaG9wL29yZGVyLXNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENFO0VBQ0UsV0FBQTtBQ0VKOztBREVFO0VBQ0UseUNBQUE7QUNDSjs7QURJTTtFQUNFLG1CQUFBO0FDRFI7O0FER1E7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUNEUjs7QURVTTtFQUNFLHVCQUFBO0FDUFI7O0FEUVE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNOVjs7QURPVTtFQUNFLG1CQUFBO0FDTFoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLXNob3Avb3JkZXItc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZGl2aWRlcntcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyKTtcclxuICB9XHJcbiBcclxuICAud3AtdGFibGUtYiB7XHJcbiAgICB0ciB7XHJcbiAgICAgIHRoe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3ZGI4Mjg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiAgLndwLXRhYmxlLWIge1xyXG4gICBcclxuICAgIHRyIHtcclxuICAgICAgLnRkX2Ige1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICY+ZGl2IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiIsIi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdmlkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLndwLXRhYmxlLWIgdHIgdGgge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuLndwLXRhYmxlLWIgdHIgdGggdGQge1xuICBwYWRkaW5nOiAxMHB4IDBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzdkYjgyODtcbn1cblxuLndwLXRhYmxlLWIgdHIgLnRkX2Ige1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi53cC10YWJsZS1iIHRyIC50ZF9iID4gZGl2IHtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4ud3AtdGFibGUtYiB0ciAudGRfYiA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/order-shop/order-shop.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/order-shop/order-shop.component.ts ***!
    \***************************************************************/

  /*! exports provided: OrderShopComponent */

  /***/
  function srcAppComponentsOrderShopOrderShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderShopComponent", function () {
      return OrderShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OrderShopComponent = /*#__PURE__*/function () {
      function OrderShopComponent() {
        _classCallCheck(this, OrderShopComponent);

        this.displayedColumns = ['nameproduct', 'price'];
        this.transactions = [{
          nameproduct: 'Bôt sả nguyên chất',
          price: 2.780
        }, {
          nameproduct: 'Ngũ cốc',
          price: 2.780
        }];
      }

      _createClass(OrderShopComponent, [{
        key: "getTotalCost",
        value: function getTotalCost() {
          return this.transactions.map(function (t) {
            return t.price;
          }).reduce(function (acc, value) {
            return acc + value;
          }, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderShopComponent;
    }();

    OrderShopComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-order-shop',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./order-shop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-shop/order-shop.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./order-shop.component.scss */
      "./src/app/components/order-shop/order-shop.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], OrderShopComponent);
    /***/
  },

  /***/
  "./src/app/shared/clients/clients.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/clients/clients.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedClientsClientsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".clients-carousel {\n  position: relative;\n  padding: 8px 0;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n.clients-carousel .swiper-container {\n  padding: 8px 2px;\n  margin: 0 14px;\n}\n.clients-carousel .swiper-container .client-item {\n  height: 88px;\n  display: flex;\n  align-items: center;\n}\n.clients-carousel .swiper-container .client-item img {\n  max-width: 100%;\n  max-height: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NsaWVudHMvRDpcXFdFRC1TSE9QXFxUQ09NV0VCXFxDUk0uQ2xpZW50LldlYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxzaGFyZWRcXGNsaWVudHNcXGNsaWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR1o7QURGWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudHMtY2Fyb3VzZWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLnN3aXBlci1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDJweDtcclxuICAgICAgICBtYXJnaW46IDAgMTRweDtcclxuICAgICAgICAuY2xpZW50LWl0ZW17XHJcbiAgICAgICAgICAgIGhlaWdodDogODhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIuY2xpZW50cy1jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uY2xpZW50cy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDhweCAycHg7XG4gIG1hcmdpbjogMCAxNHB4O1xufVxuLmNsaWVudHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmNsaWVudC1pdGVtIHtcbiAgaGVpZ2h0OiA4OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNsaWVudHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmNsaWVudC1pdGVtIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/clients/clients.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/clients/clients.component.ts ***!
    \*****************************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppSharedClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ClientsComponent = /*#__PURE__*/function () {
      function ClientsComponent(appService) {
        _classCallCheck(this, ClientsComponent);

        this.appService = appService;
        this.config = {};
      }

      _createClass(ClientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.clients = this.appService.getClients();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
              delay: 6000,
              disableOnInteraction: false
            },
            speed: 500,
            effect: "slide",
            breakpoints: {
              320: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 2
              },
              600: {
                slidesPerView: 3
              },
              960: {
                slidesPerView: 4
              },
              1280: {
                slidesPerView: 5
              },
              1500: {
                slidesPerView: 6
              }
            }
          };
        }
      }]);

      return ClientsComponent;
    }();

    ClientsComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    ClientsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-clients',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./clients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/clients/clients.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./clients.component.scss */
      "./src/app/shared/clients/clients.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], ClientsComponent);
    /***/
  },

  /***/
  "./src/app/shared/comments/comments.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/comments/comments.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCommentsCommentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/comments/comments.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/comments/comments.component.ts ***!
    \*******************************************************/

  /*! exports provided: CommentsComponent */

  /***/
  function srcAppSharedCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
      return CommentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/theme/utils/app-validators */
    "./src/app/theme/utils/app-validators.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CommentsComponent = /*#__PURE__*/function () {
      function CommentsComponent(fb) {
        _classCallCheck(this, CommentsComponent);

        this.fb = fb;
        this.reviews = [{
          author: 'Bruno Vespa',
          avatar: 'assets/images/avatars/avatar-1.png',
          tooltip: 'Dissatisfied',
          icon: 'sentiment_dissatisfied',
          date: '13 January, 2018 at 7:09',
          text: 'Integer id eros et mi fringilla imperdiet. In dictum turpis eget magna viverra condimentum. Ut malesuada interdum ultrices. Proin tristique sem pellentesque, posuere dui in, maximus magna. Aenean vehicula, tortor gravida elementum tincidunt, justo lorem vestibulum ex, eget egestas arcu tellus in magna.'
        }, {
          author: 'Julia Aniston',
          avatar: 'assets/images/avatars/avatar-2.png',
          tooltip: 'Very Satisfied',
          icon: 'sentiment_very_satisfied',
          date: '04 February, 2018 at 10:22',
          text: 'Nulla accumsan, lacus sed suscipit rutrum, turpis augue accumsan metus, in accumsan urna mi vehicula lorem. Pellentesque semper nibh vitae augue placerat finibus. Nulla sed porttitor nunc, quis tristique sem. Quisque in varius nisl. Integer turpis lorem, ultricies sed sem nec, commodo molestie arcu. Nulla finibus ex tortor, et suscipit magna semper consectetur. Cras sit amet metus dui. Maecenas eget dui at ex varius malesuada vel non felis.'
        }, {
          author: 'Andy Warhol',
          avatar: 'assets/images/avatars/avatar-3.png',
          tooltip: 'Neutral',
          icon: 'sentiment_neutral',
          date: '14 February, 2018 at 11:10',
          text: 'Pellentesque hendrerit vel turpis aliquam placerat. Suspendisse ullamcorper congue feugiat. Etiam gravida metus ac massa posuere venenatis. Pellentesque vehicula lobortis dolor, ac pretium dolor maximus quis. Fusce vitae iaculis mauris, quis posuere ex. Mauris vitae convallis nibh. Etiam eget enim at orci interdum maximus nec in ante.'
        }];
        this.ratings = [{
          title: 'Very Dissatisfied',
          icon: 'sentiment_very_dissatisfied',
          percentage: 20,
          selected: false
        }, {
          title: 'Dissatisfied',
          icon: 'sentiment_dissatisfied',
          percentage: 40,
          selected: false
        }, {
          title: 'Neutral',
          icon: 'sentiment_neutral',
          percentage: 60,
          selected: false
        }, {
          title: 'Satisfied',
          icon: 'sentiment_satisfied',
          percentage: 80,
          selected: false
        }, {
          title: 'Very Satisfied',
          icon: 'sentiment_very_satisfied',
          percentage: 100,
          selected: false
        }];
      }

      _createClass(CommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.commentForm = this.fb.group({
            review: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            rate: null,
            propertyId: this.propertyId
          });
        }
      }, {
        key: "onCommentFormSubmit",
        value: function onCommentFormSubmit(values) {
          if (this.commentForm.valid) {
            console.log(values);

            if (values.rate) {//property.ratingsCount++,
              //property.ratingsValue = property.ratingsValue + values.rate,
            }
          }
        }
      }, {
        key: "rate",
        value: function rate(rating) {
          this.ratings.filter(function (r) {
            return r.selected = false;
          });
          this.ratings.filter(function (r) {
            return r.percentage == rating.percentage;
          })[0].selected = true;
          this.commentForm.controls.rate.setValue(rating.percentage);
        }
      }]);

      return CommentsComponent;
    }();

    CommentsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('propertyId'), __metadata("design:type", Object)], CommentsComponent.prototype, "propertyId", void 0);

    CommentsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-comments',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./comments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/comments/comments.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./comments.component.scss */
      "./src/app/shared/comments/comments.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], CommentsComponent);
    /***/
  },

  /***/
  "./src/app/shared/compare-overview/compare-overview.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/compare-overview/compare-overview.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCompareOverviewCompareOverviewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wYXJlLW92ZXJ2aWV3L2NvbXBhcmUtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/compare-overview/compare-overview.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/compare-overview/compare-overview.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CompareOverviewComponent */

  /***/
  function srcAppSharedCompareOverviewCompareOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompareOverviewComponent", function () {
      return CompareOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CompareOverviewComponent = /*#__PURE__*/function () {
      function CompareOverviewComponent(appService, appSettings, bottomSheetRef) {
        _classCallCheck(this, CompareOverviewComponent);

        this.appService = appService;
        this.appSettings = appSettings;
        this.bottomSheetRef = bottomSheetRef;
        this.settings = this.appSettings.settings;
      }

      _createClass(CompareOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.properties = this.appService.Data.compareList;
        }
      }, {
        key: "hideSheet",
        value: function hideSheet(isRedirect) {
          this.bottomSheetRef.dismiss(isRedirect);
        }
      }, {
        key: "remove",
        value: function remove(property, event) {
          var index = this.appService.Data.compareList.indexOf(property);

          if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
          }

          if (this.appService.Data.compareList.length == 0) {
            this.hideSheet(false);
          }

          event.preventDefault();
        }
      }]);

      return CompareOverviewComponent;
    }();

    CompareOverviewComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]
      }];
    };

    CompareOverviewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-compare-overview',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./compare-overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/compare-overview/compare-overview.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./compare-overview.component.scss */
      "./src/app/shared/compare-overview/compare-overview.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])], CompareOverviewComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".theme-container p {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWUtY29udGFpbmVyIHB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn0iLCIudGhlbWUtY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../theme/utils/app-validators */
    "./src/app/theme/utils/app-validators.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(formBuilder) {
        _classCallCheck(this, FooterComponent);

        this.formBuilder = formBuilder;
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
        this.mapStyles = [{
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#000000"
          }, {
            "lightness": 40
          }]
        }, {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#000000"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }, {
          "featureType": "administrative",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8b9198"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#323336"
          }]
        }, {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#414954"
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 21
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#2e2f31"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#7a7c80"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#242427"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#202022"
          }, {
            "lightness": 29
          }, {
            "weight": 0.2
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#393a3f"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#202022"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#393a3f"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#202022"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#202124"
          }]
        }];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.feedbackForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.subscribeForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])]
          });
        }
      }, {
        key: "onFeedbackFormSubmit",
        value: function onFeedbackFormSubmit(values) {
          if (this.feedbackForm.valid) {
            console.log(values);
          }
        }
      }, {
        key: "onSubscribeFormSubmit",
        value: function onSubscribeFormSubmit(values) {
          if (this.subscribeForm.valid) {
            console.log(values);
          }
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    FooterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-footer',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/footer/footer.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/components/footer/footer.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/menu-header/menu-header.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/components/menu-header/menu-header.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsMenuHeaderMenuHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-toolbar-search, .top-toolbar-menu {\r\n  background-color: #e5101d;\r\n  color: #fff;\r\n}\r\n.top-toolbar-search {\r\n  height: 40px;\r\n}\r\n.top-toolbar-menu {\r\n  height: 50px !important;\r\n}\r\n.search-button {\r\n  border-radius: 0px 3px 3px 0;\r\n  background-color: #f5a623;\r\n  width: 106px  !important;\r\n  height: 30px;\r\n  padding: 0px 5px;\r\n}\r\n.search-container {\r\n  max-width: 50%;\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  align-items: center;\r\n  background-color: #fff;\r\n  border-radius: 3px;\r\n  border: 1px solid;\r\n}\r\n.ipt-search {\r\n  width: calc(100% - 136px);\r\n  outline: none !important;\r\n  border: none !important;\r\n  height: 1.2rem;\r\n  padding: 5px;\r\n  color: #495057;\r\n}\r\n.icon-del {\r\n  width: 20px;\r\n  font-size: 16px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  vertical-align: middle;\r\n  text-align: center;\r\n  background-color: #c7c7cd;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbWVudS1oZWFkZXIvbWVudS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lbnUtaGVhZGVyL21lbnUtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLXRvb2xiYXItc2VhcmNoLCAudG9wLXRvb2xiYXItbWVudSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MTAxZDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4udG9wLXRvb2xiYXItc2VhcmNoIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnRvcC10b29sYmFyLW1lbnUge1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDNweCAzcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhNjIzO1xyXG4gIHdpZHRoOiAxMDZweCAgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uaXB0LXNlYXJjaCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEzNnB4KTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4uaWNvbi1kZWwge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3YzdjZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/menu-header/menu-header.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/menu-header/menu-header.component.ts ***!
    \************************************************************************/

  /*! exports provided: MenuHeaderComponent */

  /***/
  function srcAppSharedComponentsMenuHeaderMenuHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuHeaderComponent", function () {
      return MenuHeaderComponent;
    });
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MenuHeaderComponent = /*#__PURE__*/function () {
      function MenuHeaderComponent(appService) {
        _classCallCheck(this, MenuHeaderComponent);

        this.appService = appService;
        this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MenuHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sidenavToggle",
        value: function sidenavToggle() {
          this.onMenuIconClick.emit();
        }
      }]);

      return MenuHeaderComponent;
    }();

    MenuHeaderComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], MenuHeaderComponent.prototype, "onMenuIconClick", void 0);

    MenuHeaderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-header',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./menu-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/menu-header/menu-header.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./menu-header.component.css */
      "./src/app/shared/components/menu-header/menu-header.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"]])], MenuHeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/product-item/product-item.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/product-item/product-item.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsProductItemProductItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-item {\n  height: 100%;\n  overflow: hidden;\n}\n.property-item .thumbnail-section {\n  position: relative;\n}\n.property-item .mat-card-image {\n  position: relative;\n  min-height: 180px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button {\n  color: #fff;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-next {\n  right: 4px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-prev {\n  left: 4px;\n}\n.property-item .mat-card-image .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.property-item .mat-card-image img {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n.property-item .property-status {\n  position: absolute;\n  z-index: 2;\n}\n.property-item .property-status span {\n  padding: 3px 6px;\n  margin: 4px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-radius: 4px;\n}\n.property-item .title {\n  font-size: 18px;\n}\n.property-item .title a {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.property-item .address,\n.property-item .date {\n  font-style: italic;\n  margin-top: 8px;\n}\n.property-item .address .mat-icon,\n.property-item .date .mat-icon {\n  margin-left: -4px;\n}\n.property-item .price span {\n  display: block;\n}\n.property-item .features p span:first-child {\n  float: left;\n  padding: 0 0.4em 0 0;\n}\n.property-item .features p span + span {\n  float: right;\n  padding: 0 0 0 0.4em;\n  font-weight: 500;\n}\n.property-item .features p:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n  height: 1em;\n}\n.property-item .control-icons {\n  position: absolute;\n  z-index: 2;\n  right: 2px;\n  margin-top: -30px;\n}\n.property-item .control-icons button.mat-button {\n  min-width: 26px;\n  width: 26px;\n  line-height: 26px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.property-item .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.property-item .control-icons button.mat-button:hover:enabled {\n  background: #fffcfc;\n}\n.property-item.grid-item {\n  flex-flow: column !important;\n}\n.property-item.grid-item.column-2 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.column-2 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .address,\n.property-item.grid-item.column-3 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.column-3 .address .mat-icon,\n.property-item.grid-item.column-3 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.grid-item.full-width-page.column-2 .title {\n  font-size: 28px;\n}\n.property-item.grid-item.full-width-page.column-2 .price {\n  font-size: 20px;\n}\n.property-item.grid-item.full-width-page.column-3 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.full-width-page.column-3 .address,\n.property-item.grid-item.full-width-page.column-3 .date {\n  font-size: 14px;\n}\n.property-item.grid-item.full-width-page.column-3 .address .mat-icon,\n.property-item.grid-item.full-width-page.column-3 .date .mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.property-item.grid-item.full-width-page.column-3 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .address,\n.property-item.grid-item.full-width-page.column-4 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.full-width-page.column-4 .address .mat-icon,\n.property-item.grid-item.full-width-page.column-4 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.list-item .title {\n  font-size: 28px;\n  margin-top: -8px;\n}\n.property-item.list-item .price {\n  font-size: 20px;\n}\n.property-item.list-item .features {\n  display: flex;\n  flex-flow: wrap;\n}\n.property-item.list-item .features p {\n  margin-right: 24px;\n  display: flex;\n  white-space: nowrap;\n}\n.property-item.list-item .features p span:first-child:after {\n  content: \":\";\n  margin: 0 1px;\n}\n.property-item.list-item .features p:after {\n  content: none;\n}\n@media screen and (max-width: 959px) {\n  .property-item.grid-item .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.full-width-page.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .address,\n.property-item.list-item .date {\n    font-size: 12px;\n  }\n  .property-item.list-item .address .mat-icon,\n.property-item.list-item .date .mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .property-item.list-item .price {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9kdWN0LWl0ZW1cXHByb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1pdGVtL3Byb2R1Y3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0hGO0FESUU7RUFDRSxrQkFBQTtBQ0ZKO0FESUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDRko7QURJTTtFQUNFLFdBQUE7QUNGUjtBREdRO0VBQ0UsVUFBQTtBQ0RWO0FER1E7RUFDRSxTQUFBO0FDRFY7QURLSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNITjtBREtJO0VBRUUsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pOO0FET0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNMSjtBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNKTjtBRE9FO0VBQ0UsZUFBQTtBQ0xKO0FETUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDSk47QURPRTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7QUNMSjtBRE1JOztFQUNFLGlCQUFBO0FDSE47QURPSTtFQUNFLGNBQUE7QUNMTjtBRFVNO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FDUlI7QURVTTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDUlI7QURXSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDVE47QURZRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ1ZKO0FEV0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNUTjtBRFVNO0VBQ0UsMEJBQUE7QUNSUjtBRFVNO0VBQ0UsbUJBQUE7QUNSUjtBRFlFO0VBQ0UsNEJBQUE7QUNWSjtBRFlNO0VBQ0UsZUFBQTtBQ1ZSO0FEWU07RUFDRSxlQUFBO0FDVlI7QURjTTtFQUNFLGVBQUE7QUNaUjtBRGNNOztFQUVFLGVBQUE7QUNaUjtBRGFROztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1ZWO0FEZ0JRO0VBQ0UsZUFBQTtBQ2RWO0FEZ0JRO0VBQ0UsZUFBQTtBQ2RWO0FEa0JRO0VBQ0UsZUFBQTtBQ2hCVjtBRGtCUTs7RUFFRSxlQUFBO0FDaEJWO0FEaUJVOztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2RaO0FEaUJRO0VBQ0UsZUFBQTtBQ2ZWO0FEbUJRO0VBQ0UsZUFBQTtBQ2pCVjtBRG1CUTs7RUFFRSxlQUFBO0FDakJWO0FEa0JVOztFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2ZaO0FEc0JJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDcEJOO0FEc0JJO0VBQ0UsZUFBQTtBQ3BCTjtBRHNCSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDcEJOO0FEcUJNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNuQlI7QURvQlE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ2xCVjtBRG9CUTtFQUNFLGFBQUE7QUNsQlY7QUR5QkE7RUFHTTtJQUNFLGVBQUE7RUN4Qk47RUQyQk07SUFDRSxlQUFBO0VDekJSO0VEOEJRO0lBQ0UsZUFBQTtFQzVCVjtFRGtDSTtJQUNFLGVBQUE7RUNoQ047RURrQ0k7O0lBRUUsZUFBQTtFQ2hDTjtFRGlDTTs7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUM5QlI7RURpQ0k7SUFDRSxlQUFBO0VDL0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1hdC1jYXJkLWNvbnRlbnR7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbi8vIH1cclxuXHJcbi5wcm9wZXJ0eS1pdGVtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAudGh1bWJuYWlsLXNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubWF0LWNhcmQtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMTgwcHg7XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lciB7XHJcbiAgICAgIC5zd2lwZS1hcnJvdy5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICYuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcclxuICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXItc2xpZGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA2Ni4yNSU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJvcGVydHktc3RhdHVzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBzcGFuIHtcclxuICAgICAgcGFkZGluZzogM3B4IDZweDtcclxuICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGEge1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZGRyZXNzLFxyXG4gIC5kYXRlIHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJpY2Uge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuZmVhdHVyZXMgcCB7XHJcbiAgICBzcGFuIHtcclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjRlbSAwIDA7XHJcbiAgICAgIH1cclxuICAgICAgKyBzcGFuIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMC40ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBoZWlnaHQ6IDFlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRyb2wtaWNvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgIGJ1dHRvbi5tYXQtYnV0dG9uIHtcclxuICAgICAgbWluLXdpZHRoOiAyNnB4O1xyXG4gICAgICB3aWR0aDogMjZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMC42KTtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXI6ZW5hYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MiwgMjUyLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLmdyaWQtaXRlbSB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgJi5jb2x1bW4tMiB7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmNvbHVtbi0zIHtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmFkZHJlc3MsXHJcbiAgICAgIC5kYXRlIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5mdWxsLXdpZHRoLXBhZ2Uge1xyXG4gICAgICAmLmNvbHVtbi0yIHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2Uge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLmNvbHVtbi0zIHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWRkcmVzcyxcclxuICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYuY29sdW1uLTQge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRyZXNzLFxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi5saXN0LWl0ZW0ge1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgfVxyXG4gICAgLnByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmZlYXR1cmVzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCI6XCI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5wcm9wZXJ0eS1pdGVtIHtcclxuICAgICYuZ3JpZC1pdGVtIHtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuICAgICAgJi5jb2x1bW4tMiB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5mdWxsLXdpZHRoLXBhZ2Uge1xyXG4gICAgICAgICYuY29sdW1uLTIge1xyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5saXN0LWl0ZW0ge1xyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgICAuYWRkcmVzcyxcclxuICAgICAgLmRhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wcm9wZXJ0eS1pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb3BlcnR5LWl0ZW0gLnRodW1ibmFpbC1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb3BlcnR5LWl0ZW0gLm1hdC1jYXJkLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5tYXQtY2FyZC1pbWFnZSAuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGUtYXJyb3cubWF0LWljb24tYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucHJvcGVydHktaXRlbSAubWF0LWNhcmQtaW1hZ2UgLnN3aXBlci1jb250YWluZXIgLnN3aXBlLWFycm93Lm1hdC1pY29uLWJ1dHRvbi5zd2lwZXItYnV0dG9uLW5leHQge1xuICByaWdodDogNHB4O1xufVxuLnByb3BlcnR5LWl0ZW0gLm1hdC1jYXJkLWltYWdlIC5zd2lwZXItY29udGFpbmVyIC5zd2lwZS1hcnJvdy5tYXQtaWNvbi1idXR0b24uc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgbGVmdDogNHB4O1xufVxuLnByb3BlcnR5LWl0ZW0gLm1hdC1jYXJkLWltYWdlIC5zd2lwZXItc2xpZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA2Ni4yNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5tYXQtY2FyZC1pbWFnZSBpbWcge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvcGVydHktaXRlbSAucHJvcGVydHktc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xufVxuLnByb3BlcnR5LWl0ZW0gLnByb3BlcnR5LXN0YXR1cyBzcGFuIHtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgbWFyZ2luOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC50aXRsZSBhIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb3BlcnR5LWl0ZW0gLmFkZHJlc3MsXG4ucHJvcGVydHktaXRlbSAuZGF0ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0gLmFkZHJlc3MgLm1hdC1pY29uLFxuLnByb3BlcnR5LWl0ZW0gLmRhdGUgLm1hdC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC00cHg7XG59XG4ucHJvcGVydHktaXRlbSAucHJpY2Ugc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb3BlcnR5LWl0ZW0gLmZlYXR1cmVzIHAgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwIDAuNGVtIDAgMDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5mZWF0dXJlcyBwIHNwYW4gKyBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwIDAgMCAwLjRlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5mZWF0dXJlcyBwOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMWVtO1xufVxuLnByb3BlcnR5LWl0ZW0gLmNvbnRyb2wtaWNvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHJpZ2h0OiAycHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuLnByb3BlcnR5LWl0ZW0gLmNvbnRyb2wtaWNvbnMgYnV0dG9uLm1hdC1idXR0b24ge1xuICBtaW4td2lkdGg6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MiwgMjUyLCAwLjYpO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5jb250cm9sLWljb25zIGJ1dHRvbi5tYXQtYnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ucHJvcGVydHktaXRlbSAuY29udHJvbC1pY29ucyBidXR0b24ubWF0LWJ1dHRvbjpob3ZlcjplbmFibGVkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmNmYztcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbSB7XG4gIGZsZXgtZmxvdzogY29sdW1uICFpbXBvcnRhbnQ7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0yIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5jb2x1bW4tMyAudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTMgLmFkZHJlc3MsXG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTMgLmRhdGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTMgLmFkZHJlc3MgLm1hdC1pY29uLFxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0zIC5kYXRlIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTIgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tMiAucHJpY2Uge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi0zIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTMgLmFkZHJlc3MsXG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi0zIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tMyAuYWRkcmVzcyAubWF0LWljb24sXG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi0zIC5kYXRlIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTMgLnByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tNCAudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi00IC5hZGRyZXNzLFxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tNCAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTQgLmFkZHJlc3MgLm1hdC1pY29uLFxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tNCAuZGF0ZSAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4ucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0ubGlzdC1pdGVtIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmxpc3QtaXRlbSAuZmVhdHVyZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHdyYXA7XG59XG4ucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmZlYXR1cmVzIHAge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmZlYXR1cmVzIHAgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiOlwiO1xuICBtYXJnaW46IDAgMXB4O1xufVxuLnByb3BlcnR5LWl0ZW0ubGlzdC1pdGVtIC5mZWF0dXJlcyBwOmFmdGVyIHtcbiAgY29udGVudDogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcbiAgLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5jb2x1bW4tMiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi0yIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gIC5wcm9wZXJ0eS1pdGVtLmxpc3QtaXRlbSAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmFkZHJlc3MsXG4ucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmFkZHJlc3MgLm1hdC1pY29uLFxuLnByb3BlcnR5LWl0ZW0ubGlzdC1pdGVtIC5kYXRlIC5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuICAucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLnByaWNlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/product-item/product-item.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/product-item/product-item.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ProductItemComponent */

  /***/
  function srcAppSharedComponentsProductItemProductItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
      return ProductItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../compare-overview/compare-overview.component */
    "./src/app/shared/compare-overview/compare-overview.component.ts");
    /* harmony import */


    var src_app_app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.models */
    "./src/app/app.models.ts");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/dist/ngx-swiper-wrapper.es5.js");
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProductItemComponent = /*#__PURE__*/function () {
      function ProductItemComponent(appSettings, appService) {
        _classCallCheck(this, ProductItemComponent);

        this.appSettings = appSettings;
        this.appService = appService;
        this.viewType = "grid";
        this.viewColChanged = false;
        this.fullWidthPage = true;
        this.column = 4;
        this.config = {};
        this.pagination = {
          el: '.swiper-pagination',
          clickable: true
        };
        this.settings = this.appSettings.settings;
      }

      _createClass(ProductItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initCarousel(); // this.appService.getAddress(this.property.location.lat, this.property.location.lng).subscribe(data=>{
          //   console.log(data['results'][0]['formatted_address']);
          //   this.address = data['results'][0]['formatted_address'];
          // })
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.viewColChanged) {
            this.getColumnCount(changes.viewColChanged.currentValue);

            if (!changes.viewColChanged.isFirstChange()) {
              if (this.property.gallery.length > 1) {
                this.directiveRef.update();
              }
            }
          }

          for (var propName in changes) {// let changedProp = changes[propName];
            // if (!changedProp.isFirstChange()) {
            //   if(this.property.gallery.length > 1){
            //     this.initCarousel();
            //     this.config.autoHeight = true;       
            //     this.directiveRef.update();  
            //   }       
            // }      
          }
        }
      }, {
        key: "getColumnCount",
        value: function getColumnCount(value) {
          if (value == 25) {
            this.column = 4;
          } else if (value == 33.3) {
            this.column = 3;
          } else if (value == 50) {
            this.column = 2;
          } else {
            this.column = 1;
          }
        }
      }, {
        key: "getStatusBgColor",
        value: function getStatusBgColor(status) {
          switch (status) {
            case 'For Sale':
              return '#558B2F';

            case 'For Rent':
              return '#1E88E5';

            case 'Open House':
              return '#009688';

            case 'No Fees':
              return '#FFA000';

            case 'Hot Offer':
              return '#F44336';

            case 'Sold':
              return '#000';

            default:
              return '#01579B';
          }
        }
      }, {
        key: "initCarousel",
        value: function initCarousel() {
          this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: false,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            nested: true,
            // autoplay: {
            //   delay: 5000,
            //   disableOnInteraction: false
            // },
            speed: 500,
            effect: "slide"
          };
        }
      }, {
        key: "addToCompare",
        value: function addToCompare() {
          this.appService.addToCompare(this.property, _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_1__["CompareOverviewComponent"], this.settings.rtl ? 'rtl' : 'ltr');
        }
      }, {
        key: "onCompare",
        value: function onCompare() {
          var _this3 = this;

          return this.appService.Data.compareList.filter(function (item) {
            return item.id == _this3.property.id;
          })[0];
        }
      }, {
        key: "addToFavorites",
        value: function addToFavorites() {
          this.appService.addToFavorites(this.property, this.settings.rtl ? 'rtl' : 'ltr');
        }
      }, {
        key: "onFavorites",
        value: function onFavorites() {
          var _this4 = this;

          return this.appService.Data.favorites.filter(function (item) {
            return item.id == _this4.property.id;
          })[0];
        }
      }]);

      return ProductItemComponent;
    }();

    ProductItemComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", src_app_app_models__WEBPACK_IMPORTED_MODULE_2__["Property"])], ProductItemComponent.prototype, "property", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], ProductItemComponent.prototype, "viewType", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], ProductItemComponent.prototype, "viewColChanged", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], ProductItemComponent.prototype, "fullWidthPage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"]), __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"])], ProductItemComponent.prototype, "directiveRef", void 0);

    ProductItemComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product-item',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-item/product-item.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./product-item.component.scss */
      "./src/app/shared/components/product-item/product-item.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], src_app_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])], ProductItemComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/product-list/product-list.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/product-list/product-list.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsProductListProductListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carousel-outer {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9kdWN0LWxpc3RcXHByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fyb3VzZWwtb3V0ZXJ7XHJcbiAgICBtYXJnaW46IDBweDtcclxufSIsIi5jYXJvdXNlbC1vdXRlciB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/product-list/product-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/product-list/product-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppSharedComponentsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.models */
    "./src/app/app.models.ts");
    /* harmony import */


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(appSettings, appService, mediaObserver) {
        var _this5 = this;

        _classCallCheck(this, ProductListComponent);

        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.activeMediaQuery = '';
        this.slides = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.count = 8;
        this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_1__["Pagination"](1, 8, null, 2, 0, 0);
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.media$.subscribe(function (change) {
          // console.log(change)
          if (change.mqAlias == 'xs') {
            _this5.viewCol = 100;
          } else if (change.mqAlias == 'sm') {
            _this5.viewCol = 50;
          } else if (change.mqAlias == 'md') {
            _this5.viewCol = 33.3;
          } else {
            _this5.viewCol = 25;
          }
        });
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getSlides();
          this.getProperties(); // if (this.mediaObserver.isActive('xs')) {
          //    console.log('mobile version -XS')
          // }

          this.getFeaturedProperties();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 7,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              600: {
                slidesPerView: 1
              },
              960: {
                slidesPerView: 2
              },
              1280: {
                slidesPerView: 3
              }
            }
          };
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.settings.loadMore.load) {
            this.settings.loadMore.load = false;
            this.getProperties();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.resetLoadMore();
          this.watcher.unsubscribe();
        }
      }, {
        key: "getSlides",
        value: function getSlides() {
          var _this6 = this;

          this.appService.getHomeCarouselSlides().subscribe(function (res) {
            _this6.slides = res;
          });
        }
      }, {
        key: "getProperties",
        value: function getProperties() {
          var _this7 = this;

          //console.log('get properties by : ', this.searchFields);  
          this.appService.getProperties().subscribe(function (data) {
            if (_this7.properties && _this7.properties.length > 0) {
              _this7.settings.loadMore.page++;
              _this7.pagination.page = _this7.settings.loadMore.page;
            }

            var result = _this7.filterData(data);

            if (result.data.length == 0) {
              _this7.properties.length = 0;
              _this7.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_1__["Pagination"](1, _this7.count, null, 2, 0, 0);
              _this7.message = 'No Results Found';
              return false;
            }

            if (_this7.properties && _this7.properties.length > 0) {
              _this7.properties = _this7.properties.concat(result.data);
            } else {
              _this7.properties = result.data;
            }

            _this7.pagination = result.pagination;
            _this7.message = null;

            if (_this7.properties.length == _this7.pagination.total) {
              _this7.settings.loadMore.complete = true;
              _this7.settings.loadMore.result = _this7.properties.length;
            } else {
              _this7.settings.loadMore.complete = false;
            }
          });
        }
      }, {
        key: "resetLoadMore",
        value: function resetLoadMore() {
          this.settings.loadMore.complete = false;
          this.settings.loadMore.start = false;
          this.settings.loadMore.page = 1;
          this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_1__["Pagination"](1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
        }
      }, {
        key: "filterData",
        value: function filterData(data) {
          return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
        }
      }, {
        key: "searchClicked",
        value: function searchClicked() {
          this.properties.length = 0;
          this.getProperties();
        }
      }, {
        key: "searchChanged",
        value: function searchChanged(event) {
          var _this8 = this;

          event.valueChanges.subscribe(function () {
            _this8.resetLoadMore();

            _this8.searchFields = event.value;
            setTimeout(function () {
              _this8.removedSearchField = null;
            });

            if (!_this8.settings.searchOnBtnClick) {
              _this8.properties.length = 0;
            }
          });
          event.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(function () {
            if (!_this8.settings.searchOnBtnClick) {
              _this8.getProperties();
            }
          });
        }
      }, {
        key: "removeSearchField",
        value: function removeSearchField(field) {
          this.message = null;
          this.removedSearchField = field;
        }
      }, {
        key: "changeCount",
        value: function changeCount(count) {
          this.count = count;
          this.resetLoadMore();
          this.properties.length = 0;
          this.getProperties();
        }
      }, {
        key: "changeSorting",
        value: function changeSorting(sort) {
          this.sort = sort;
          this.resetLoadMore();
          this.properties.length = 0;
          this.getProperties();
        }
      }, {
        key: "changeViewType",
        value: function changeViewType(obj) {
          this.viewType = obj.viewType;
          this.viewCol = obj.viewCol;
        }
      }, {
        key: "getFeaturedProperties",
        value: function getFeaturedProperties() {
          var _this9 = this;

          this.appService.getFeaturedProperties().subscribe(function (properties) {
            _this9.featuredProperties = properties;
          });
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]
      }];
    };

    ProductListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-product-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/product-list/product-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./product-list.component.scss */
      "./src/app/shared/components/product-list/product-list.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]])], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/shared/get-in-touch/get-in-touch.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/get-in-touch/get-in-touch.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedGetInTouchGetInTouchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".get-in-touch {\n  position: relative;\n  margin-top: 80px;\n}\n.get-in-touch img {\n  max-width: 200px;\n  position: absolute;\n  bottom: 0;\n}\n.get-in-touch .content {\n  padding-left: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dldC1pbi10b3VjaC9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHNoYXJlZFxcZ2V0LWluLXRvdWNoXFxnZXQtaW4tdG91Y2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9nZXQtaW4tdG91Y2gvZ2V0LWluLXRvdWNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0VSO0FEQUk7RUFDSSxtQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2dldC1pbi10b3VjaC9nZXQtaW4tdG91Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2V0LWluLXRvdWNoe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XHJcbiAgICB9XHJcbn0iLCIuZ2V0LWluLXRvdWNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLmdldC1pbi10b3VjaCBpbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbi5nZXQtaW4tdG91Y2ggLmNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/get-in-touch/get-in-touch.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/get-in-touch/get-in-touch.component.ts ***!
    \***************************************************************/

  /*! exports provided: GetInTouchComponent */

  /***/
  function srcAppSharedGetInTouchGetInTouchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetInTouchComponent", function () {
      return GetInTouchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var GetInTouchComponent = /*#__PURE__*/function () {
      function GetInTouchComponent() {
        _classCallCheck(this, GetInTouchComponent);
      }

      _createClass(GetInTouchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GetInTouchComponent;
    }();

    GetInTouchComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-get-in-touch',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./get-in-touch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/get-in-touch/get-in-touch.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./get-in-touch.component.scss */
      "./src/app/shared/get-in-touch/get-in-touch.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], GetInTouchComponent);
    /***/
  },

  /***/
  "./src/app/shared/header-carousel/header-carousel.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/shared/header-carousel/header-carousel.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderCarouselHeaderCarouselComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-carousel {\n  height: 460px;\n}\n.header-carousel .slide-item {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n}\n.header-carousel .swiper-lazy-preloader {\n  top: 15%;\n}\n.header-carousel .slide-info {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 2;\n}\n.header-carousel .slide-info .mat-card {\n  text-align: center;\n  min-width: 450px;\n  transition: 0.4s;\n  margin: 0 16px;\n}\n.header-carousel .slide-info .mat-card .slide-title {\n  font-size: 32px;\n  line-height: 32px;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n}\n.header-carousel .slide-info .mat-card .location {\n  font-size: 18px;\n  font-style: italic;\n  margin-bottom: 24px;\n  font-weight: 500;\n}\n.header-carousel .slide-info .mat-card .price {\n  font-size: 24px;\n  min-width: 200px;\n  padding: 8px 16px;\n}\n.header-carousel.offset-bottom {\n  height: 540px;\n}\n.header-carousel.offset-bottom .slide-info {\n  padding-bottom: 80px;\n}\n@media screen and (max-width: 599px) {\n  .header-carousel {\n    height: 340px;\n  }\n  .header-carousel.offset-bottom {\n    height: 420px;\n  }\n  .header-carousel .slide-info .mat-card {\n    min-width: 240px;\n  }\n  .header-carousel .slide-info .mat-card .slide-title {\n    font-size: 24px;\n    line-height: 24px;\n    margin-bottom: 16px;\n  }\n  .header-carousel .slide-info .mat-card .location {\n    font-size: 14px;\n    margin-bottom: 19px;\n    align-items: start !important;\n  }\n  .header-carousel .slide-info .mat-card .price {\n    font-size: 14px;\n    min-width: 120px;\n    padding: unset;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-carousel {\n    height: 380px;\n  }\n  .header-carousel.offset-bottom {\n    height: 460px;\n  }\n  .header-carousel .slide-info .mat-card {\n    min-width: 400px;\n  }\n  .header-carousel .slide-info .mat-card .slide-title {\n    font-size: 28px;\n    line-height: 28px;\n    margin-bottom: 16px;\n  }\n  .header-carousel .slide-info .mat-card .location {\n    font-size: 16px;\n    margin-bottom: 24px;\n  }\n  .header-carousel .slide-info .mat-card .price {\n    font-size: 20px;\n    min-width: 160px;\n    padding: 4px 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci1jYXJvdXNlbC9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyLWNhcm91c2VsXFxoZWFkZXItY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXItY2Fyb3VzZWwvRDpcXFdFRC1TSE9QXFxUQ09NV0VCXFxDUk0uQ2xpZW50LldlYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXItY2Fyb3VzZWwvaGVhZGVyLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUNHcUI7QUNKekI7QUZFSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FFQVI7QUZFSTtFQUNJLFFBQUE7QUVBUjtBRkVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FFQVI7QUZDUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUVDWjtBRkFZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRUVoQjtBRkFZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBRUVoQjtBRkFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUVFaEI7QUZFSTtFQUNJLGFBQUE7QUVBUjtBRkNRO0VBQ0ksb0JDdEN3QjtBQ3VDcEM7QUZLQTtFQUNJO0lBRUksYUFBQTtFRUhOO0VGSU07SUFDSSxhQUFBO0VFRlY7RUZLVTtJQUNJLGdCQUFBO0VFSGQ7RUZJYztJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VFRmxCO0VGSWM7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFRUZsQjtFRkljO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFRUZsQjtBQUNGO0FGU0E7RUFDSTtJQUVJLGFBQUE7RUVSTjtFRlNNO0lBQ0ksYUFBQTtFRVBWO0VGVVU7SUFDSSxnQkFBQTtFRVJkO0VGU2M7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFRVBsQjtFRlNjO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VFUGxCO0VGU2M7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFRVBsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci1jYXJvdXNlbC9oZWFkZXItY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdGhlbWUvc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmhlYWRlci1jYXJvdXNlbHsgXHJcbiAgICBoZWlnaHQ6ICRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0O1xyXG4gICAgLnNsaWRlLWl0ZW17XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgICAgIFxyXG4gICAgfVxyXG4gICAgLnN3aXBlci1sYXp5LXByZWxvYWRlcntcclxuICAgICAgICB0b3A6IDE1JTtcclxuICAgIH1cclxuICAgIC5zbGlkZS1pbmZve1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwOyAgICBcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIC5tYXQtY2FyZHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQ1MHB4OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNnB4OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2xpZGUtdGl0bGV7ICAgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2NhdGlvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYub2Zmc2V0LWJvdHRvbXtcclxuICAgICAgICBoZWlnaHQ6ICRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDsgICAgICAgIFxyXG4gICAgICAgIC5zbGlkZS1pbmZve1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHhzXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuaGVhZGVyLWNhcm91c2VseyBcclxuICAgICAgICAvLyBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgLSAxMjBweDtcclxuICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gMTIwcHg7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAuc2xpZGUtaW5mb3sgXHJcbiAgICAgICAgICAgIC5tYXQtY2FyZHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICAgICAgICAuc2xpZGUtdGl0bGV7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHNtXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHsgIFxyXG4gICAgLmhlYWRlci1jYXJvdXNlbHsgXHJcbiAgICAgICAgLy8gaGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBoZWlnaHQ6ICRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0IC0gODBweDtcclxuICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgIGhlaWdodDogJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gODBweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAuc2xpZGUtaW5mb3sgXHJcbiAgICAgICAgICAgIC5tYXQtY2FyZHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAuc2xpZGUtdGl0bGV7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubG9jYXRpb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkZm9udC1mYW1pbHk6ICdSb2JvdG8sSGVsdmV0aWNhIE5ldWUsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2wnO1xyXG4kdGhlbWUtbWF4LXdpZHRoOiAxMzAwcHg7XHJcbiR0b3AtdG9vbGJhci1oZWlnaHQ6IDM2cHg7XHJcbiRtYWluLXRvb2xiYXItaGVpZ2h0OiA3MnB4O1xyXG4kdXNlci1tZW51LXdpZHRoOiAyMjBweDtcclxuJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0OiAzMjBweDtcclxuJGhlYWRlci1jYXJvdXNlbC1oZWlnaHQ6IDQ2MHB4O1xyXG4kbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wOiA4MHB4O1xyXG5cclxuJG1haW4tc2lkZW5hdi13aWR0aDogMjUwcHg7XHJcbiRzZWFyY2gtc2lkZW5hdi13aWR0aDogMjg4cHg7IiwiLmhlYWRlci1jYXJvdXNlbCB7XG4gIGhlaWdodDogNDYwcHg7XG59XG4uaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pdGVtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uaGVhZGVyLWNhcm91c2VsIC5zd2lwZXItbGF6eS1wcmVsb2FkZXIge1xuICB0b3A6IDE1JTtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDQ1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBtYXJnaW46IDAgMTZweDtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1jYXJkIC5zbGlkZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtY2FyZCAubG9jYXRpb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1jYXJkIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG4uaGVhZGVyLWNhcm91c2VsLm9mZnNldC1ib3R0b20ge1xuICBoZWlnaHQ6IDU0MHB4O1xufVxuLmhlYWRlci1jYXJvdXNlbC5vZmZzZXQtYm90dG9tIC5zbGlkZS1pbmZvIHtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5oZWFkZXItY2Fyb3VzZWwge1xuICAgIGhlaWdodDogMzQwcHg7XG4gIH1cbiAgLmhlYWRlci1jYXJvdXNlbC5vZmZzZXQtYm90dG9tIHtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1jYXJkIC5zbGlkZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgLmhlYWRlci1jYXJvdXNlbCAuc2xpZGUtaW5mbyAubWF0LWNhcmQgLmxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuICAuaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtY2FyZCAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIHBhZGRpbmc6IHVuc2V0O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5oZWFkZXItY2Fyb3VzZWwge1xuICAgIGhlaWdodDogMzgwcHg7XG4gIH1cbiAgLmhlYWRlci1jYXJvdXNlbC5vZmZzZXQtYm90dG9tIHtcbiAgICBoZWlnaHQ6IDQ2MHB4O1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICB9XG4gIC5oZWFkZXItY2Fyb3VzZWwgLnNsaWRlLWluZm8gLm1hdC1jYXJkIC5zbGlkZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgLmhlYWRlci1jYXJvdXNlbCAuc2xpZGUtaW5mbyAubWF0LWNhcmQgLmxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgfVxuICAuaGVhZGVyLWNhcm91c2VsIC5zbGlkZS1pbmZvIC5tYXQtY2FyZCAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIHBhZGRpbmc6IDRweCAxMnB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/header-carousel/header-carousel.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/header-carousel/header-carousel.component.ts ***!
    \*********************************************************************/

  /*! exports provided: HeaderCarouselComponent */

  /***/
  function srcAppSharedHeaderCarouselHeaderCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderCarouselComponent", function () {
      return HeaderCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HeaderCarouselComponent = /*#__PURE__*/function () {
      function HeaderCarouselComponent(appSettings) {
        _classCallCheck(this, HeaderCarouselComponent);

        this.appSettings = appSettings;
        this.slides = [];
        this.config = {};
        this.settings = this.appSettings.settings;
      }

      _createClass(HeaderCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.contentOffsetToTop) this.settings.contentOffsetToTop = this.contentOffsetToTop;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initCarousel();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.slides.length > 0) {
            this.currentSlide = this.slides[0];
          }
        }
      }, {
        key: "initCarousel",
        value: function initCarousel() {
          this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            speed: 500,
            effect: "slide"
          };
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.settings.contentOffsetToTop = false;
        }
      }, {
        key: "onIndexChange",
        value: function onIndexChange(index) {
          this.currentSlide = this.slides[index];
        }
      }]);

      return HeaderCarouselComponent;
    }();

    HeaderCarouselComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('slides'), __metadata("design:type", Array)], HeaderCarouselComponent.prototype, "slides", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('contentOffsetToTop'), __metadata("design:type", Object)], HeaderCarouselComponent.prototype, "contentOffsetToTop", void 0);

    HeaderCarouselComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-header-carousel',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./header-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-carousel/header-carousel.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./header-carousel.component.scss */
      "./src/app/shared/header-carousel/header-carousel.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], HeaderCarouselComponent);
    /***/
  },

  /***/
  "./src/app/shared/header-image/header-image.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/header-image/header-image.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderImageHeaderImageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-image-wrapper {\n  position: relative;\n  overflow: hidden;\n  margin-top: -72px;\n  padding-top: 36px;\n}\n.header-image-wrapper .header-image-content {\n  position: relative;\n  min-height: 320px;\n  color: #fff;\n  z-index: 1;\n}\n.header-image-wrapper .header-image-content.offset-bottom {\n  padding-bottom: 80px;\n  min-height: 400px;\n}\n.header-image-wrapper .header-image-content.home-page {\n  min-height: 480px;\n}\n.header-image-wrapper .header-image-content .title {\n  font-size: 48px;\n  text-transform: uppercase;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-image-wrapper .header-image-content .desc {\n  margin: 0;\n  font-size: 24px;\n  font-style: italic;\n  padding: 0 16px;\n  text-align: center;\n}\n.header-image-wrapper .header-image-content .mat-raised-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n  text-transform: uppercase;\n  margin: 0 4px;\n}\n.header-image-wrapper .mask {\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.header-image-wrapper .bg {\n  width: 110%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.header-image-wrapper .bg-anime {\n  -webkit-animation-name: MOVE-BG;\n  -webkit-animation-duration: 15s;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n  -moz-animation-name: MOVE-BG;\n  -moz-animation-duration: 15s;\n  -moz-animation-timing-function: ease-in-out;\n  -moz-animation-iteration-count: infinite;\n  -moz-animation-direction: alternate;\n  -ms-animation-name: MOVE-BG;\n  -ms-animation-duration: 15s;\n  -ms-animation-timing-function: ease-in-out;\n  -ms-animation-iteration-count: infinite;\n  -ms-animation-direction: alternate;\n  animation-name: MOVE-BG;\n  animation-duration: 15s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  animation-direction: alternate;\n}\n@-webkit-keyframes MOVE-BG {\n  from {\n    -webkit-transform: translateX(0);\n  }\n  to {\n    -webkit-transform: translateX(-7%);\n  }\n}\n@keyframes MOVE-BG {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-7%);\n  }\n}\n.header-image-wrapper[dir=rtl] .bg-anime {\n  -webkit-animation-name: MOVE-BG-RTL;\n  animation-name: MOVE-BG-RTL;\n}\n@-webkit-keyframes MOVE-BG-RTL {\n  from {\n    -webkit-transform: translateX(0);\n  }\n  to {\n    -webkit-transform: translateX(7%);\n  }\n}\n@keyframes MOVE-BG-RTL {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(7%);\n  }\n}\n@media screen and (max-width: 599px) {\n  .header-image-wrapper .header-image-content {\n    min-height: 240px;\n  }\n  .header-image-wrapper .header-image-content.offset-bottom {\n    min-height: 320px;\n  }\n  .header-image-wrapper .header-image-content.home-page {\n    min-height: 400px;\n  }\n  .header-image-wrapper .header-image-content .title {\n    font-size: 24px;\n  }\n  .header-image-wrapper .header-image-content .desc {\n    font-size: 16px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n  .header-image-wrapper .header-image-content {\n    min-height: 280px;\n  }\n  .header-image-wrapper .header-image-content.offset-bottom {\n    min-height: 360px;\n  }\n  .header-image-wrapper .header-image-content.home-page {\n    min-height: 440px;\n  }\n  .header-image-wrapper .header-image-content .title {\n    font-size: 36px;\n  }\n  .header-image-wrapper .header-image-content .desc {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci1pbWFnZS9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHNoYXJlZFxcaGVhZGVyLWltYWdlXFxoZWFkZXItaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXItaW1hZ2UvaGVhZGVyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaGVhZGVyLWltYWdlL0Q6XFxXRUQtU0hPUFxcVENPTVdFQlxcQ1JNLkNsaWVudC5XZWJcXENsaWVudEFwcC9zcmNcXGFwcFxcdGhlbWVcXHN0eWxlc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNESjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxpQkVKa0I7RUZLbEIsV0FBQTtFQUNBLFVBQUE7QUNBUjtBRENRO0VBQ0ksb0JFTndCO0VGT3hCLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGlCQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQ1E7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNDWjtBREVJO0VBQ0ksOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNBUjtBREVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ0FSO0FERUk7RUFDSSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0FDQVI7QURJQTtFQUE2QjtJQUFPLGdDQUFBO0VDQ2xDO0VERHNFO0lBQUssa0NBQUE7RUNJM0U7QUFDRjtBREZBO0VBQXFCO0lBQU8sd0JBQUE7RUNzQjFCO0VEdEJzRDtJQUFLLDBCQUFBO0VDeUIzRDtBQUNGO0FEdkJJO0VBQ0ksbUNBQUE7RUFHQSwyQkFBQTtBQ3lCUjtBRHJCQTtFQUFpQztJQUFPLGdDQUFBO0VDMEJ0QztFRDFCMEU7SUFBSyxpQ0FBQTtFQzZCL0U7QUFDRjtBRDNCQTtFQUF5QjtJQUFPLHdCQUFBO0VDK0M5QjtFRC9DMEQ7SUFBSyx5QkFBQTtFQ2tEL0Q7QUFDRjtBRGhEQTtFQUVRO0lBQ0ksaUJBQUE7RUNpRFY7RURoRFU7SUFDSSxpQkFBQTtFQ2tEZDtFRGhEVTtJQUNJLGlCQUFBO0VDa0RkO0VEaERVO0lBQ0ksZUFBQTtFQ2tEZDtFRGhEVTtJQUNJLGVBQUE7RUNrRGQ7QUFDRjtBRDVDQTtFQUVRO0lBQ0ksaUJBQUE7RUM2Q1Y7RUQ1Q1U7SUFDSSxpQkFBQTtFQzhDZDtFRDVDVTtJQUNJLGlCQUFBO0VDOENkO0VENUNVO0lBQ0ksZUFBQTtFQzhDZDtFRDVDVTtJQUNJLGVBQUE7RUM4Q2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXItaW1hZ2UvaGVhZGVyLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3RoZW1lL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5oZWFkZXItaW1hZ2Utd3JhcHBlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tdG9wOiAtJG1haW4tdG9vbGJhci1oZWlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogJG1haW4tdG9vbGJhci1oZWlnaHQvMjtcclxuICAgIC5oZWFkZXItaW1hZ2UtY29udGVudHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHotaW5kZXg6IDE7ICAgICAgICBcclxuICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmhvbWUtcGFnZXtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCArIDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4OyBcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3tcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7IFxyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1yYWlzZWQtYnV0dG9ue1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbiAgICAubWFza3sgXHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpOyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC5iZ3tcclxuICAgICAgICB3aWR0aDogMTEwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxyXG4gICAgfVxyXG4gICAgLmJnLWFuaW1le1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkc7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE1cztcclxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7ICAgICAgXHJcbiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogTU9WRS1CRztcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgICAgICBcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkc7XHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgICAgICBcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogTU9WRS1CRztcclxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDE1cztcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBNT1ZFLUJHIHsgZnJvbSB7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTclKTsgfSB9ICBcclxuQC1tb3ota2V5ZnJhbWVzIE1PVkUtQkcgeyBmcm9tIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpOyB9IH0gIFxyXG5ALW1zLWtleWZyYW1lcyBNT1ZFLUJHIHsgZnJvbSB7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC03JSk7IH0gfSBcclxuQGtleWZyYW1lcyBNT1ZFLUJHIHsgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpOyB9IH1cclxuXHJcbi5oZWFkZXItaW1hZ2Utd3JhcHBlcltkaXI9XCJydGxcIl17XHJcbiAgICAuYmctYW5pbWV7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7ICAgICAgXHJcbiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7ICAgICAgXHJcbiAgICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHLVJUTDsgICAgICBcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7IFxyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgTU9WRS1CRy1SVEwgeyBmcm9tIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH0gdG8geyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7IH0gfSAgXHJcbkAtbW96LWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7IGZyb20geyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDclKTsgfSB9ICBcclxuQC1tcy1rZXlmcmFtZXMgTU9WRS1CRy1SVEwgeyBmcm9tIHsgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfSB0byB7IC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNyUpOyB9IH0gXHJcbkBrZXlmcmFtZXMgTU9WRS1CRy1SVEwgeyBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9IHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDclKTsgfSB9XHJcblxyXG4vLyB4c1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgLmhlYWRlci1pbWFnZS13cmFwcGVye1xyXG4gICAgICAgIC5oZWFkZXItaW1hZ2UtY29udGVudHtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0IC0gODBweDtcclxuICAgICAgICAgICAgJi5vZmZzZXQtYm90dG9te1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogJGhlYWRlci1pbWFnZS1taW4taGVpZ2h0ICsgJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcCAtIDgwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ob21lLXBhZ2V7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2N7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBzbVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAuaGVhZGVyLWltYWdlLXdyYXBwZXJ7XHJcbiAgICAgICAgLmhlYWRlci1pbWFnZS1jb250ZW50e1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgLSA0MHB4O1xyXG4gICAgICAgICAgICAmLm9mZnNldC1ib3R0b217XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAkaGVhZGVyLWltYWdlLW1pbi1oZWlnaHQgKyAkbWFpbi1jb250ZW50LWhlYWRlci1vZmZzZXQtdG8tdG9wIC0gNDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmhvbWUtcGFnZXtcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWFkZXItaW1hZ2UtbWluLWhlaWdodCArICRtYWluLWNvbnRlbnQtaGVhZGVyLW9mZnNldC10by10b3AgKyA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2N7IFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59IiwiLmhlYWRlci1pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAtNzJweDtcbiAgcGFkZGluZy10b3A6IDM2cHg7XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAzMjBweDtcbiAgY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDE7XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50Lm9mZnNldC1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXIgLmhlYWRlci1pbWFnZS1jb250ZW50LmhvbWUtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudCAuZGVzYyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudCAubWF0LXJhaXNlZC1idXR0b24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCA0cHg7XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXIgLm1hc2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyIC5iZyB7XG4gIHdpZHRoOiAxMTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLmhlYWRlci1pbWFnZS13cmFwcGVyIC5iZy1hbmltZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkc7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICAtbW96LWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgLW1zLWFuaW1hdGlvbi1uYW1lOiBNT1ZFLUJHO1xuICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBhbmltYXRpb24tbmFtZTogTU9WRS1CRztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgTU9WRS1CRyB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgTU9WRS1CRyB7XG4gIGZyb20ge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG5ALW1zLWtleWZyYW1lcyBNT1ZFLUJHIHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIE1PVkUtQkcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNyUpO1xuICB9XG59XG4uaGVhZGVyLWltYWdlLXdyYXBwZXJbZGlyPXJ0bF0gLmJnLWFuaW1lIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkctUlRMO1xuICAtbXMtYW5pbWF0aW9uLW5hbWU6IE1PVkUtQkctUlRMO1xuICBhbmltYXRpb24tbmFtZTogTU9WRS1CRy1SVEw7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBNT1ZFLUJHLVJUTCB7XG4gIGZyb20ge1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIHRvIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkAtbXMta2V5ZnJhbWVzIE1PVkUtQkctUlRMIHtcbiAgZnJvbSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICB0byB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgTU9WRS1CRy1SVEwge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3JSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQub2Zmc2V0LWJvdHRvbSB7XG4gICAgbWluLWhlaWdodDogMzIwcHg7XG4gIH1cbiAgLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudC5ob21lLXBhZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudCAuZGVzYyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQub2Zmc2V0LWJvdHRvbSB7XG4gICAgbWluLWhlaWdodDogMzYwcHg7XG4gIH1cbiAgLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudC5ob21lLXBhZ2Uge1xuICAgIG1pbi1oZWlnaHQ6IDQ0MHB4O1xuICB9XG4gIC5oZWFkZXItaW1hZ2Utd3JhcHBlciAuaGVhZGVyLWltYWdlLWNvbnRlbnQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbiAgLmhlYWRlci1pbWFnZS13cmFwcGVyIC5oZWFkZXItaW1hZ2UtY29udGVudCAuZGVzYyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59IiwiJGZvbnQtZmFtaWx5OiAnUm9ib3RvLEhlbHZldGljYSBOZXVlLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sJztcclxuJHRoZW1lLW1heC13aWR0aDogMTMwMHB4O1xyXG4kdG9wLXRvb2xiYXItaGVpZ2h0OiAzNnB4O1xyXG4kbWFpbi10b29sYmFyLWhlaWdodDogNzJweDtcclxuJHVzZXItbWVudS13aWR0aDogMjIwcHg7XHJcbiRoZWFkZXItaW1hZ2UtbWluLWhlaWdodDogMzIwcHg7XHJcbiRoZWFkZXItY2Fyb3VzZWwtaGVpZ2h0OiA0NjBweDtcclxuJG1haW4tY29udGVudC1oZWFkZXItb2Zmc2V0LXRvLXRvcDogODBweDtcclxuXHJcbiRtYWluLXNpZGVuYXYtd2lkdGg6IDI1MHB4O1xyXG4kc2VhcmNoLXNpZGVuYXYtd2lkdGg6IDI4OHB4OyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/header-image/header-image.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/header-image/header-image.component.ts ***!
    \***************************************************************/

  /*! exports provided: HeaderImageComponent */

  /***/
  function srcAppSharedHeaderImageHeaderImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderImageComponent", function () {
      return HeaderImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HeaderImageComponent = /*#__PURE__*/function () {
      function HeaderImageComponent(appSettings, sanitizer) {
        _classCallCheck(this, HeaderImageComponent);

        this.appSettings = appSettings;
        this.sanitizer = sanitizer;
        this.isHomePage = false;
        this.settings = this.appSettings.settings;
        this.settings.headerBgImage = true;
      }

      _createClass(HeaderImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.contentOffsetToTop) this.settings.contentOffsetToTop = this.contentOffsetToTop;
          if (this.backgroundImage) this.bgImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.backgroundImage + ')');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.settings.headerBgImage = false;
          this.settings.contentOffsetToTop = false;
        }
      }]);

      return HeaderImageComponent;
    }();

    HeaderImageComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundImage'), __metadata("design:type", Object)], HeaderImageComponent.prototype, "backgroundImage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('bgImageAnimate'), __metadata("design:type", Object)], HeaderImageComponent.prototype, "bgImageAnimate", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('contentOffsetToTop'), __metadata("design:type", Object)], HeaderImageComponent.prototype, "contentOffsetToTop", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('contentMinHeight'), __metadata("design:type", Object)], HeaderImageComponent.prototype, "contentMinHeight", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'), __metadata("design:type", Object)], HeaderImageComponent.prototype, "title", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('desc'), __metadata("design:type", Object)], HeaderImageComponent.prototype, "desc", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isHomePage'), __metadata("design:type", Boolean)], HeaderImageComponent.prototype, "isHomePage", void 0);

    HeaderImageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-header-image',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./header-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header-image/header-image.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./header-image.component.scss */
      "./src/app/shared/header-image/header-image.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])], HeaderImageComponent);
    /***/
  },

  /***/
  "./src/app/shared/load-more/load-more.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/shared/load-more/load-more.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLoadMoreLoadMoreComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkLW1vcmUvbG9hZC1tb3JlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/load-more/load-more.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/load-more/load-more.component.ts ***!
    \*********************************************************/

  /*! exports provided: LoadMoreComponent */

  /***/
  function srcAppSharedLoadMoreLoadMoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadMoreComponent", function () {
      return LoadMoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoadMoreComponent = /*#__PURE__*/function () {
      function LoadMoreComponent(appSettings) {
        _classCallCheck(this, LoadMoreComponent);

        this.appSettings = appSettings;
        this.step = 1;
        this.settings = this.appSettings.settings;
      }

      _createClass(LoadMoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.settings.loadMore.step = this.step;
        }
      }, {
        key: "startLoad",
        value: function startLoad() {
          this.settings.loadMore.start = true;
          this.settings.loadMore.load = true;
        }
      }]);

      return LoadMoreComponent;
    }();

    LoadMoreComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], LoadMoreComponent.prototype, "step", void 0);

    LoadMoreComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-load-more',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./load-more.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/load-more/load-more.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./load-more.component.scss */
      "./src/app/shared/load-more/load-more.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], LoadMoreComponent);
    /***/
  },

  /***/
  "./src/app/shared/logo/logo.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/logo/logo.component.ts ***!
    \***********************************************/

  /*! exports provided: LogoComponent */

  /***/
  function srcAppSharedLogoLogoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoComponent", function () {
      return LogoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LogoComponent = function LogoComponent() {
      _classCallCheck(this, LogoComponent);
    };

    LogoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-logo',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./logo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/logo/logo.component.html"))["default"]
    })], LogoComponent);
    /***/
  },

  /***/
  "./src/app/shared/mission/mission.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/mission/mission.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedMissionMissionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9taXNzaW9uL21pc3Npb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/mission/mission.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/mission/mission.component.ts ***!
    \*****************************************************/

  /*! exports provided: MissionComponent */

  /***/
  function srcAppSharedMissionMissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissionComponent", function () {
      return MissionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MissionComponent = /*#__PURE__*/function () {
      function MissionComponent() {
        _classCallCheck(this, MissionComponent);
      }

      _createClass(MissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MissionComponent;
    }();

    MissionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-mission',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./mission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/mission/mission.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./mission.component.scss */
      "./src/app/shared/mission/mission.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], MissionComponent);
    /***/
  },

  /***/
  "./src/app/shared/our-agents/our-agents.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/shared/our-agents/our-agents.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedOurAgentsOurAgentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9vdXItYWdlbnRzL291ci1hZ2VudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/our-agents/our-agents.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/our-agents/our-agents.component.ts ***!
    \***********************************************************/

  /*! exports provided: OurAgentsComponent */

  /***/
  function srcAppSharedOurAgentsOurAgentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurAgentsComponent", function () {
      return OurAgentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OurAgentsComponent = /*#__PURE__*/function () {
      function OurAgentsComponent(appService) {
        _classCallCheck(this, OurAgentsComponent);

        this.appService = appService;
        this.config = {};
      }

      _createClass(OurAgentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.agents = this.appService.getAgents();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
              600: {
                slidesPerView: 1
              },
              960: {
                slidesPerView: 2
              },
              1280: {
                slidesPerView: 3
              }
            }
          };
        }
      }]);

      return OurAgentsComponent;
    }();

    OurAgentsComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    OurAgentsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-our-agents',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./our-agents.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-agents/our-agents.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./our-agents.component.scss */
      "./src/app/shared/our-agents/our-agents.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], OurAgentsComponent);
    /***/
  },

  /***/
  "./src/app/shared/our-services/our-services.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/our-services/our-services.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedOurServicesOurServicesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".services-wrapper {\n  margin: -8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL291ci1zZXJ2aWNlcy9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHNoYXJlZFxcb3VyLXNlcnZpY2VzXFxvdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9vdXItc2VydmljZXMvb3VyLXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXMtd3JhcHBlcntcclxuICAgIG1hcmdpbjogLThweDtcclxufSIsIi5zZXJ2aWNlcy13cmFwcGVyIHtcbiAgbWFyZ2luOiAtOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/our-services/our-services.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/our-services/our-services.component.ts ***!
    \***************************************************************/

  /*! exports provided: OurServicesComponent */

  /***/
  function srcAppSharedOurServicesOurServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurServicesComponent", function () {
      return OurServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OurServicesComponent = /*#__PURE__*/function () {
      function OurServicesComponent() {
        _classCallCheck(this, OurServicesComponent);
      }

      _createClass(OurServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurServicesComponent;
    }();

    OurServicesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-our-services',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./our-services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/our-services/our-services.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./our-services.component.scss */
      "./src/app/shared/our-services/our-services.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], OurServicesComponent);
    /***/
  },

  /***/
  "./src/app/shared/properties-carousel/properties-carousel.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/properties-carousel/properties-carousel.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPropertiesCarouselPropertiesCarouselComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9wZXJ0aWVzLWNhcm91c2VsL3Byb3BlcnRpZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/properties-carousel/properties-carousel.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/properties-carousel/properties-carousel.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PropertiesCarouselComponent */

  /***/
  function srcAppSharedPropertiesCarouselPropertiesCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertiesCarouselComponent", function () {
      return PropertiesCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PropertiesCarouselComponent = /*#__PURE__*/function () {
      function PropertiesCarouselComponent() {
        _classCallCheck(this, PropertiesCarouselComponent);

        this.properties = [];
        this.config = {};
      }

      _createClass(PropertiesCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: true,
            navigation: {
              nextEl: '.prop-next',
              prevEl: '.prop-prev'
            },
            pagination: true,
            grabCursor: true,
            loop: false,
            preloadImages: true,
            lazy: false,
            breakpoints: {
              600: {
                slidesPerView: 1
              },
              960: {
                slidesPerView: 2
              },
              1280: {
                slidesPerView: 3
              }
            }
          };
        }
      }]);

      return PropertiesCarouselComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('properties'), __metadata("design:type", Array)], PropertiesCarouselComponent.prototype, "properties", void 0);

    PropertiesCarouselComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-properties-carousel',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./properties-carousel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-carousel/properties-carousel.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./properties-carousel.component.scss */
      "./src/app/shared/properties-carousel/properties-carousel.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], PropertiesCarouselComponent);
    /***/
  },

  /***/
  "./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPropertiesSearchResultsFiltersPropertiesSearchResultsFiltersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9wZXJ0aWVzLXNlYXJjaC1yZXN1bHRzLWZpbHRlcnMvcHJvcGVydGllcy1zZWFyY2gtcmVzdWx0cy1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: PropertiesSearchResultsFiltersComponent */

  /***/
  function srcAppSharedPropertiesSearchResultsFiltersPropertiesSearchResultsFiltersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertiesSearchResultsFiltersComponent", function () {
      return PropertiesSearchResultsFiltersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PropertiesSearchResultsFiltersComponent = /*#__PURE__*/function () {
      function PropertiesSearchResultsFiltersComponent() {
        _classCallCheck(this, PropertiesSearchResultsFiltersComponent);

        this.onRemoveSearchField = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PropertiesSearchResultsFiltersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "remove",
        value: function remove(field) {
          this.onRemoveSearchField.emit(field);
        }
      }]);

      return PropertiesSearchResultsFiltersComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], PropertiesSearchResultsFiltersComponent.prototype, "searchFields", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PropertiesSearchResultsFiltersComponent.prototype, "onRemoveSearchField", void 0);

    PropertiesSearchResultsFiltersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-properties-search-results-filters',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./properties-search-results-filters.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./properties-search-results-filters.component.scss */
      "./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], PropertiesSearchResultsFiltersComponent);
    /***/
  },

  /***/
  "./src/app/shared/properties-search/properties-search.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/properties-search/properties-search.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPropertiesSearchPropertiesSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9wZXJ0aWVzLXNlYXJjaC9wcm9wZXJ0aWVzLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/properties-search/properties-search.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/properties-search/properties-search.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PropertiesSearchComponent */

  /***/
  function srcAppSharedPropertiesSearchPropertiesSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertiesSearchComponent", function () {
      return PropertiesSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PropertiesSearchComponent = /*#__PURE__*/function () {
      function PropertiesSearchComponent(appService, fb) {
        _classCallCheck(this, PropertiesSearchComponent);

        this.appService = appService;
        this.fb = fb;
        this.variant = 1;
        this.vertical = false;
        this.searchOnBtnClick = false;
        this.onSearchChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSearchClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showMore = false;
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.features = [];
      }

      _createClass(PropertiesSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.vertical) {
            this.showMore = true;
          }

          ;
          this.propertyTypes = this.appService.getPropertyTypes();
          this.propertyStatuses = this.appService.getPropertyStatuses();
          this.cities = this.appService.getCities();
          this.neighborhoods = this.appService.getNeighborhoods();
          this.streets = this.appService.getStreets();
          this.features = this.appService.getFeatures();
          this.form = this.fb.group({
            propertyType: null,
            propertyStatus: null,
            price: this.fb.group({
              from: null,
              to: null
            }),
            city: null,
            zipCode: null,
            neighborhood: null,
            street: null,
            bedrooms: this.fb.group({
              from: null,
              to: null
            }),
            bathrooms: this.fb.group({
              from: null,
              to: null
            }),
            garages: this.fb.group({
              from: null,
              to: null
            }),
            area: this.fb.group({
              from: null,
              to: null
            }),
            yearBuilt: this.fb.group({
              from: null,
              to: null
            }),
            features: this.buildFeatures()
          });
          this.onSearchChange.emit(this.form);
        }
      }, {
        key: "buildFeatures",
        value: function buildFeatures() {
          var _this10 = this;

          var arr = this.features.map(function (feature) {
            return _this10.fb.group({
              id: feature.id,
              name: feature.name,
              selected: feature.selected
            });
          });
          return this.fb.array(arr);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.removedSearchField) {
            if (this.removedSearchField.indexOf(".") > -1) {
              var arr = this.removedSearchField.split(".");
              this.form.controls[arr[0]]['controls'][arr[1]].reset();
            } else if (this.removedSearchField.indexOf(",") > -1) {
              var _arr = this.removedSearchField.split(",");

              this.form.controls[_arr[0]]['controls'][_arr[1]]['controls']['selected'].setValue(false);
            } else {
              this.form.controls[this.removedSearchField].reset();
            }
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.form.reset({
            propertyType: null,
            propertyStatus: null,
            price: {
              from: null,
              to: null
            },
            city: null,
            zipCode: null,
            neighborhood: null,
            street: null,
            bedrooms: {
              from: null,
              to: null
            },
            bathrooms: {
              from: null,
              to: null
            },
            garages: {
              from: null,
              to: null
            },
            area: {
              from: null,
              to: null
            },
            yearBuilt: {
              from: null,
              to: null
            },
            features: this.features
          });
        }
      }, {
        key: "search",
        value: function search() {
          this.onSearchClick.emit();
        }
      }, {
        key: "onSelectCity",
        value: function onSelectCity() {
          this.form.controls['neighborhood'].setValue(null, {
            emitEvent: false
          });
          this.form.controls['street'].setValue(null, {
            emitEvent: false
          });
        }
      }, {
        key: "onSelectNeighborhood",
        value: function onSelectNeighborhood() {
          this.form.controls['street'].setValue(null, {
            emitEvent: false
          });
        }
      }, {
        key: "getAppearance",
        value: function getAppearance() {
          return this.variant != 3 ? 'outline' : '';
        }
      }, {
        key: "getFloatLabel",
        value: function getFloatLabel() {
          return this.variant == 1 ? 'always' : '';
        }
      }]);

      return PropertiesSearchComponent;
    }();

    PropertiesSearchComponent.ctorParameters = function () {
      return [{
        type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], PropertiesSearchComponent.prototype, "variant", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], PropertiesSearchComponent.prototype, "vertical", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], PropertiesSearchComponent.prototype, "searchOnBtnClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], PropertiesSearchComponent.prototype, "removedSearchField", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PropertiesSearchComponent.prototype, "onSearchChange", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PropertiesSearchComponent.prototype, "onSearchClick", void 0);

    PropertiesSearchComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-properties-search',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./properties-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-search/properties-search.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./properties-search.component.scss */
      "./src/app/shared/properties-search/properties-search.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])], PropertiesSearchComponent);
    /***/
  },

  /***/
  "./src/app/shared/properties-toolbar/properties-toolbar.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/properties-toolbar/properties-toolbar.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPropertiesToolbarPropertiesToolbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9wZXJ0aWVzLXRvb2xiYXIvcHJvcGVydGllcy10b29sYmFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/properties-toolbar/properties-toolbar.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/properties-toolbar/properties-toolbar.component.ts ***!
    \***************************************************************************/

  /*! exports provided: PropertiesToolbarComponent */

  /***/
  function srcAppSharedPropertiesToolbarPropertiesToolbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertiesToolbarComponent", function () {
      return PropertiesToolbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PropertiesToolbarComponent = /*#__PURE__*/function () {
      function PropertiesToolbarComponent() {
        _classCallCheck(this, PropertiesToolbarComponent);

        this.isHomePage = false;
        this.showSidenavToggle = false;
        this.onSidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChangeCount = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChangeSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChangeViewType = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewType = 'grid';
        this.viewCol = 25;
        this.counts = [8, 12, 16, 24, 36];
        this.sortings = ['Sort by Default', 'Newest', 'Oldest', 'Popular', 'Price (Low to High)', 'Price (High to Low)'];
      }

      _createClass(PropertiesToolbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.count = this.isHomePage ? this.counts[0] : this.counts[1];
          this.sort = this.sortings[0];
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {// console.log(' show toggle - ' ,this.showSidenavToggle)
        }
      }, {
        key: "changeCount",
        value: function changeCount(count) {
          this.count = count;
          this.onChangeCount.emit(count); // this.getAllProducts(); 
        }
      }, {
        key: "changeSorting",
        value: function changeSorting(sort) {
          this.sort = sort;
          this.onChangeSorting.emit(sort);
        }
      }, {
        key: "changeViewType",
        value: function changeViewType(viewType, viewCol) {
          this.viewType = viewType;
          this.viewCol = viewCol;
          this.onChangeViewType.emit({
            viewType: viewType,
            viewCol: viewCol
          });
        }
      }, {
        key: "sidenavToggle",
        value: function sidenavToggle() {
          this.onSidenavToggle.emit();
        }
      }]);

      return PropertiesToolbarComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], PropertiesToolbarComponent.prototype, "isHomePage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], PropertiesToolbarComponent.prototype, "showSidenavToggle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PropertiesToolbarComponent.prototype, "onSidenavToggle", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PropertiesToolbarComponent.prototype, "onChangeCount", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PropertiesToolbarComponent.prototype, "onChangeSorting", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], PropertiesToolbarComponent.prototype, "onChangeViewType", void 0);

    PropertiesToolbarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-properties-toolbar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./properties-toolbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/properties-toolbar/properties-toolbar.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./properties-toolbar.component.scss */
      "./src/app/shared/properties-toolbar/properties-toolbar.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], PropertiesToolbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/property-item/property-item.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/property-item/property-item.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPropertyItemPropertyItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".property-item {\n  height: 100%;\n  overflow: hidden;\n}\n.property-item .thumbnail-section {\n  position: relative;\n}\n.property-item .mat-card-image {\n  position: relative;\n  min-height: 180px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button {\n  color: #fff;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-next {\n  right: 4px;\n}\n.property-item .mat-card-image .swiper-container .swipe-arrow.mat-icon-button.swiper-button-prev {\n  left: 4px;\n}\n.property-item .mat-card-image .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.property-item .mat-card-image img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n}\n.property-item .property-status {\n  position: absolute;\n  z-index: 2;\n}\n.property-item .property-status span {\n  padding: 3px 6px;\n  margin: 4px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: 500;\n  text-transform: uppercase;\n  border-radius: 4px;\n}\n.property-item .title {\n  font-size: 18px;\n}\n.property-item .title a {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.property-item .address, .property-item .date {\n  font-style: italic;\n  margin-top: 8px;\n}\n.property-item .address .mat-icon, .property-item .date .mat-icon {\n  margin-left: -4px;\n}\n.property-item .price span {\n  display: block;\n}\n.property-item .features p span:first-child {\n  float: left;\n  padding: 0 0.4em 0 0;\n}\n.property-item .features p span + span {\n  float: right;\n  padding: 0 0 0 0.4em;\n  font-weight: 500;\n}\n.property-item .features p:after {\n  content: \"\";\n  display: block;\n  overflow: hidden;\n  height: 1em;\n}\n.property-item .control-icons {\n  position: absolute;\n  z-index: 2;\n  right: 2px;\n  margin-top: -30px;\n}\n.property-item .control-icons button.mat-button {\n  min-width: 26px;\n  width: 26px;\n  line-height: 26px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.property-item .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.property-item .control-icons button.mat-button:hover:enabled {\n  background: #fffcfc;\n}\n.property-item.grid-item {\n  flex-flow: column !important;\n}\n.property-item.grid-item.column-2 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.column-2 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.column-3 .address, .property-item.grid-item.column-3 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.column-3 .address .mat-icon, .property-item.grid-item.column-3 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.grid-item.full-width-page.column-2 .title {\n  font-size: 28px;\n}\n.property-item.grid-item.full-width-page.column-2 .price {\n  font-size: 20px;\n}\n.property-item.grid-item.full-width-page.column-3 .title {\n  font-size: 22px;\n}\n.property-item.grid-item.full-width-page.column-3 .address, .property-item.grid-item.full-width-page.column-3 .date {\n  font-size: 14px;\n}\n.property-item.grid-item.full-width-page.column-3 .address .mat-icon, .property-item.grid-item.full-width-page.column-3 .date .mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.property-item.grid-item.full-width-page.column-3 .price {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .title {\n  font-size: 18px;\n}\n.property-item.grid-item.full-width-page.column-4 .address, .property-item.grid-item.full-width-page.column-4 .date {\n  font-size: 12px;\n}\n.property-item.grid-item.full-width-page.column-4 .address .mat-icon, .property-item.grid-item.full-width-page.column-4 .date .mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.property-item.list-item .title {\n  font-size: 28px;\n  margin-top: -8px;\n}\n.property-item.list-item .price {\n  font-size: 20px;\n}\n.property-item.list-item .features {\n  display: flex;\n  flex-flow: wrap;\n}\n.property-item.list-item .features p {\n  margin-right: 24px;\n  display: flex;\n  white-space: nowrap;\n}\n.property-item.list-item .features p span:first-child:after {\n  content: \":\";\n  margin: 0 1px;\n}\n.property-item.list-item .features p:after {\n  content: none;\n}\n@media screen and (max-width: 959px) {\n  .property-item.grid-item .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.grid-item.full-width-page.column-2 .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .title {\n    font-size: 22px;\n  }\n  .property-item.list-item .address, .property-item.list-item .date {\n    font-size: 12px;\n  }\n  .property-item.list-item .address .mat-icon, .property-item.list-item .date .mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .property-item.list-item .price {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb3BlcnR5LWl0ZW0vRDpcXFdFRC1TSE9QXFxUQ09NV0VCXFxDUk0uQ2xpZW50LldlYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFxzaGFyZWRcXHByb3BlcnR5LWl0ZW1cXHByb3BlcnR5LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9wcm9wZXJ0eS1pdGVtL3Byb3BlcnR5LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREFJO0VBQ0ksa0JBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQVk7RUFDSSxXQUFBO0FDRWhCO0FERGdCO0VBQ0ksVUFBQTtBQ0dwQjtBRERnQjtFQUNJLFNBQUE7QUNHcEI7QURDUTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNDWjtBRENRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ1o7QURFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0FSO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0NaO0FERUk7RUFDSSxlQUFBO0FDQVI7QURDUTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUNDWjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQVI7QURDUTtFQUNJLGlCQUFBO0FDQ1o7QURHUTtFQUNJLGNBQUE7QUNEWjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0FDSmhCO0FETVk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0poQjtBRE9RO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNMWjtBRFFJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDTlI7QURPUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0xaO0FETVk7RUFDSSwwQkFBQTtBQ0poQjtBRE1ZO0VBQ0ksbUJBQUE7QUNKaEI7QURRSTtFQUNJLDRCQUFBO0FDTlI7QURRWTtFQUNJLGVBQUE7QUNOaEI7QURRWTtFQUNJLGVBQUE7QUNOaEI7QURVWTtFQUNJLGVBQUE7QUNSaEI7QURVWTtFQUNJLGVBQUE7QUNSaEI7QURTZ0I7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNQcEI7QURhZ0I7RUFDSSxlQUFBO0FDWHBCO0FEYWdCO0VBQ0ksZUFBQTtBQ1hwQjtBRGVnQjtFQUNJLGVBQUE7QUNicEI7QURlZ0I7RUFDSSxlQUFBO0FDYnBCO0FEY29CO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDWnhCO0FEZWdCO0VBQ0ksZUFBQTtBQ2JwQjtBRGlCZ0I7RUFDSSxlQUFBO0FDZnBCO0FEaUJnQjtFQUNJLGVBQUE7QUNmcEI7QURnQm9CO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZHhCO0FEcUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDbkJaO0FEcUJRO0VBQ0ksZUFBQTtBQ25CWjtBRHFCUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDbkJaO0FEb0JZO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNsQmhCO0FEbUJnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDakJwQjtBRG1CZ0I7RUFDSSxhQUFBO0FDakJwQjtBRDJCQTtFQUdZO0lBQ0ksZUFBQTtFQzFCZDtFRDZCYztJQUNJLGVBQUE7RUMzQmxCO0VEZ0NrQjtJQUNJLGVBQUE7RUM5QnRCO0VEb0NVO0lBQ0ksZUFBQTtFQ2xDZDtFRG9DVTtJQUNJLGVBQUE7RUNsQ2Q7RURtQ2M7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNqQ2xCO0VEb0NVO0lBQ0ksZUFBQTtFQ2xDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Byb3BlcnR5LWl0ZW0vcHJvcGVydHktaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0eS1pdGVte1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC50aHVtYm5haWwtc2VjdGlvbntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAubWF0LWNhcmQtaW1hZ2V7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgIC5zd2lwZXItY29udGFpbmVye1xyXG4gICAgICAgICAgICAuc3dpcGUtYXJyb3cubWF0LWljb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAmLnN3aXBlci1idXR0b24tbmV4dHtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5zd2lwZXItYnV0dG9uLXByZXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zd2lwZXItc2xpZGV7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNjYuMjUlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIC5wcm9wZXJ0eS1zdGF0dXN7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGV7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDsgICAgICAgXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkcmVzcywgLmRhdGV7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG4gICAgLnByaWNleyBcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIC5mZWF0dXJlcyBwIHtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAuNGVtIDAgMDtcdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICsgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAuNGVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxZW07IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250cm9sLWljb25zeyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjsgXHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICBidXR0b24ubWF0LWJ1dHRvbntcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMC42KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yczsgXHJcbiAgICAgICAgICAgIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgICAgICAgICAgICY6ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcjplbmFibGVke1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1MiwgMjUyLCAxKTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmdyaWQtaXRlbXtcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICYuY29sdW1uLTJ7XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jb2x1bW4tM3tcclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hZGRyZXNzLCAuZGF0ZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZnVsbC13aWR0aC1wYWdle1xyXG4gICAgICAgICAgICAmLmNvbHVtbi0ye1xyXG4gICAgICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jb2x1bW4tM3tcclxuICAgICAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWRkcmVzcywgLmRhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jb2x1bW4tNHtcclxuICAgICAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWRkcmVzcywgLmRhdGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXQtaWNvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYubGlzdC1pdGVteyBcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByaWNle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmVhdHVyZXN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgICAgICAgICAgcHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCI6XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFweDtcdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiBcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAucHJvcGVydHktaXRlbXtcclxuICAgICAgICAmLmdyaWQtaXRlbXtcclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29sdW1uLTJ7XHJcbiAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZnVsbC13aWR0aC1wYWdle1xyXG4gICAgICAgICAgICAgICAgJi5jb2x1bW4tMntcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5saXN0LWl0ZW17XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWRkcmVzcywgLmRhdGV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAubWF0LWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH1cclxuXHJcbn0iLCIucHJvcGVydHktaXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5wcm9wZXJ0eS1pdGVtIC50aHVtYm5haWwtc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5tYXQtY2FyZC1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTgwcHg7XG59XG4ucHJvcGVydHktaXRlbSAubWF0LWNhcmQtaW1hZ2UgLnN3aXBlci1jb250YWluZXIgLnN3aXBlLWFycm93Lm1hdC1pY29uLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnByb3BlcnR5LWl0ZW0gLm1hdC1jYXJkLWltYWdlIC5zd2lwZXItY29udGFpbmVyIC5zd2lwZS1hcnJvdy5tYXQtaWNvbi1idXR0b24uc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcmlnaHQ6IDRweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5tYXQtY2FyZC1pbWFnZSAuc3dpcGVyLWNvbnRhaW5lciAuc3dpcGUtYXJyb3cubWF0LWljb24tYnV0dG9uLnN3aXBlci1idXR0b24tcHJldiB7XG4gIGxlZnQ6IDRweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5tYXQtY2FyZC1pbWFnZSAuc3dpcGVyLXNsaWRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNjYuMjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4ucHJvcGVydHktaXRlbSAubWF0LWNhcmQtaW1hZ2UgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucHJvcGVydHktaXRlbSAucHJvcGVydHktc3RhdHVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xufVxuLnByb3BlcnR5LWl0ZW0gLnByb3BlcnR5LXN0YXR1cyBzcGFuIHtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgbWFyZ2luOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC50aXRsZSBhIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnByb3BlcnR5LWl0ZW0gLmFkZHJlc3MsIC5wcm9wZXJ0eS1pdGVtIC5kYXRlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ucHJvcGVydHktaXRlbSAuYWRkcmVzcyAubWF0LWljb24sIC5wcm9wZXJ0eS1pdGVtIC5kYXRlIC5tYXQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xufVxuLnByb3BlcnR5LWl0ZW0gLnByaWNlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9wZXJ0eS1pdGVtIC5mZWF0dXJlcyBwIHNwYW46Zmlyc3QtY2hpbGQge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMCAwLjRlbSAwIDA7XG59XG4ucHJvcGVydHktaXRlbSAuZmVhdHVyZXMgcCBzcGFuICsgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMCAwIDAgMC40ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ucHJvcGVydHktaXRlbSAuZmVhdHVyZXMgcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDFlbTtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5jb250cm9sLWljb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICByaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cbi5wcm9wZXJ0eS1pdGVtIC5jb250cm9sLWljb25zIGJ1dHRvbi5tYXQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCA0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMC42KTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ucHJvcGVydHktaXRlbSAuY29udHJvbC1pY29ucyBidXR0b24ubWF0LWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuLnByb3BlcnR5LWl0ZW0gLmNvbnRyb2wtaWNvbnMgYnV0dG9uLm1hdC1idXR0b246aG92ZXI6ZW5hYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZjZmM7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0ge1xuICBmbGV4LWZsb3c6IGNvbHVtbiAhaW1wb3J0YW50O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0yIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5jb2x1bW4tMiAucHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTMgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmNvbHVtbi0zIC5hZGRyZXNzLCAucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTMgLmRhdGUge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTMgLmFkZHJlc3MgLm1hdC1pY29uLCAucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTMgLmRhdGUgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tMiAudGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi0yIC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTMgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tMyAuYWRkcmVzcywgLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tMyAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTMgLmFkZHJlc3MgLm1hdC1pY29uLCAucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi0zIC5kYXRlIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTMgLnByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tNCAudGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi00IC5hZGRyZXNzLCAucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uZnVsbC13aWR0aC1wYWdlLmNvbHVtbi00IC5kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tNCAuYWRkcmVzcyAubWF0LWljb24sIC5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbS5mdWxsLXdpZHRoLXBhZ2UuY29sdW1uLTQgLmRhdGUgLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuLnByb3BlcnR5LWl0ZW0ubGlzdC1pdGVtIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmxpc3QtaXRlbSAucHJpY2Uge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmZlYXR1cmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xufVxuLnByb3BlcnR5LWl0ZW0ubGlzdC1pdGVtIC5mZWF0dXJlcyBwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnByb3BlcnR5LWl0ZW0ubGlzdC1pdGVtIC5mZWF0dXJlcyBwIHNwYW46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIjpcIjtcbiAgbWFyZ2luOiAwIDFweDtcbn1cbi5wcm9wZXJ0eS1pdGVtLmxpc3QtaXRlbSAuZmVhdHVyZXMgcDphZnRlciB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XG4gIC5wcm9wZXJ0eS1pdGVtLmdyaWQtaXRlbSAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAucHJvcGVydHktaXRlbS5ncmlkLWl0ZW0uY29sdW1uLTIgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLnByb3BlcnR5LWl0ZW0uZ3JpZC1pdGVtLmZ1bGwtd2lkdGgtcGFnZS5jb2x1bW4tMiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuICAucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbiAgLnByb3BlcnR5LWl0ZW0ubGlzdC1pdGVtIC5hZGRyZXNzLCAucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmFkZHJlc3MgLm1hdC1pY29uLCAucHJvcGVydHktaXRlbS5saXN0LWl0ZW0gLmRhdGUgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC5wcm9wZXJ0eS1pdGVtLmxpc3QtaXRlbSAucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/property-item/property-item.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/property-item/property-item.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PropertyItemComponent */

  /***/
  function srcAppSharedPropertyItemPropertyItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropertyItemComponent", function () {
      return PropertyItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/dist/ngx-swiper-wrapper.es5.js");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app.models */
    "./src/app/app.models.ts");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app.settings */
    "./src/app/app.settings.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../compare-overview/compare-overview.component */
    "./src/app/shared/compare-overview/compare-overview.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PropertyItemComponent = /*#__PURE__*/function () {
      function PropertyItemComponent(appSettings, appService) {
        _classCallCheck(this, PropertyItemComponent);

        this.appSettings = appSettings;
        this.appService = appService;
        this.viewType = "grid";
        this.viewColChanged = false;
        this.fullWidthPage = true;
        this.column = 4;
        this.config = {};
        this.pagination = {
          el: '.swiper-pagination',
          clickable: true
        };
        this.settings = this.appSettings.settings;
      }

      _createClass(PropertyItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initCarousel(); // this.appService.getAddress(this.property.location.lat, this.property.location.lng).subscribe(data=>{
          //   console.log(data['results'][0]['formatted_address']);
          //   this.address = data['results'][0]['formatted_address'];
          // })
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.viewColChanged) {
            this.getColumnCount(changes.viewColChanged.currentValue);

            if (!changes.viewColChanged.isFirstChange()) {
              if (this.property.gallery.length > 1) {
                this.directiveRef.update();
              }
            }
          }

          for (var propName in changes) {// let changedProp = changes[propName];
            // if (!changedProp.isFirstChange()) {
            //   if(this.property.gallery.length > 1){
            //     this.initCarousel();
            //     this.config.autoHeight = true;       
            //     this.directiveRef.update();  
            //   }       
            // }      
          }
        }
      }, {
        key: "getColumnCount",
        value: function getColumnCount(value) {
          if (value == 25) {
            this.column = 4;
          } else if (value == 33.3) {
            this.column = 3;
          } else if (value == 50) {
            this.column = 2;
          } else {
            this.column = 1;
          }
        }
      }, {
        key: "getStatusBgColor",
        value: function getStatusBgColor(status) {
          switch (status) {
            case 'For Sale':
              return '#558B2F';

            case 'For Rent':
              return '#1E88E5';

            case 'Open House':
              return '#009688';

            case 'No Fees':
              return '#FFA000';

            case 'Hot Offer':
              return '#F44336';

            case 'Sold':
              return '#000';

            default:
              return '#01579B';
          }
        }
      }, {
        key: "initCarousel",
        value: function initCarousel() {
          this.config = {
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: false,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: true,
            preloadImages: false,
            lazy: true,
            nested: true,
            // autoplay: {
            //   delay: 5000,
            //   disableOnInteraction: false
            // },
            speed: 500,
            effect: "slide"
          };
        }
      }, {
        key: "addToCompare",
        value: function addToCompare() {
          this.appService.addToCompare(this.property, _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_5__["CompareOverviewComponent"], this.settings.rtl ? 'rtl' : 'ltr');
        }
      }, {
        key: "onCompare",
        value: function onCompare() {
          var _this11 = this;

          return this.appService.Data.compareList.filter(function (item) {
            return item.id == _this11.property.id;
          })[0];
        }
      }, {
        key: "addToFavorites",
        value: function addToFavorites() {
          this.appService.addToFavorites(this.property, this.settings.rtl ? 'rtl' : 'ltr');
        }
      }, {
        key: "onFavorites",
        value: function onFavorites() {
          var _this12 = this;

          return this.appService.Data.favorites.filter(function (item) {
            return item.id == _this12.property.id;
          })[0];
        }
      }]);

      return PropertyItemComponent;
    }();

    PropertyItemComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"]
      }, {
        type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", _app_models__WEBPACK_IMPORTED_MODULE_2__["Property"])], PropertyItemComponent.prototype, "property", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], PropertyItemComponent.prototype, "viewType", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], PropertyItemComponent.prototype, "viewColChanged", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], PropertyItemComponent.prototype, "fullWidthPage", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"]), __metadata("design:type", ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"])], PropertyItemComponent.prototype, "directiveRef", void 0);

    PropertyItemComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-property-item',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./property-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/property-item/property-item.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./property-item.component.scss */
      "./src/app/shared/property-item/property-item.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])], PropertyItemComponent);
    /***/
  },

  /***/
  "./src/app/shared/rating/rating.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/rating/rating.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedRatingRatingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ratings {\n  color: #fbc02d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3JhdGluZy9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHNoYXJlZFxccmF0aW5nXFxyYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nc3tcclxuICAgIGNvbG9yOiNmYmMwMmQ7XHJcbn0iLCIucmF0aW5ncyB7XG4gIGNvbG9yOiAjZmJjMDJkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/rating/rating.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/rating/rating.component.ts ***!
    \***************************************************/

  /*! exports provided: RatingComponent */

  /***/
  function srcAppSharedRatingRatingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingComponent", function () {
      return RatingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RatingComponent = /*#__PURE__*/function () {
      function RatingComponent() {
        _classCallCheck(this, RatingComponent);
      }

      _createClass(RatingComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ratingsCount && this.ratingsValue && !this.avg) {
            this.calculateAvgValue();
          }
        }
      }, {
        key: "calculateAvgValue",
        value: function calculateAvgValue() {
          this.avg = this.ratingsValue / this.ratingsCount;

          switch (true) {
            case this.avg > 0 && this.avg < 20:
              {
                this.stars = ['star_half', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg == 20:
              {
                this.stars = ['star', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg > 20 && this.avg < 40:
              {
                this.stars = ['star', 'star_half', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg == 40:
              {
                this.stars = ['star', 'star', 'star_border', 'star_border', 'star_border'];
                break;
              }

            case this.avg > 40 && this.avg < 60:
              {
                this.stars = ['star', 'star', 'star_half', 'star_border', 'star_border'];
                break;
              }

            case this.avg == 60:
              {
                this.stars = ['star', 'star', 'star', 'star_border', 'star_border'];
                break;
              }

            case this.avg > 60 && this.avg < 80:
              {
                this.stars = ['star', 'star', 'star', 'star_half', 'star_border'];
                break;
              }

            case this.avg == 80:
              {
                this.stars = ['star', 'star', 'star', 'star', 'star_border'];
                break;
              }

            case this.avg > 80 && this.avg < 100:
              {
                this.stars = ['star', 'star', 'star', 'star', 'star_half'];
                break;
              }

            case this.avg >= 100:
              {
                this.stars = ['star', 'star', 'star', 'star', 'star'];
                break;
              }

            default:
              {
                this.stars = ['star_border', 'star_border', 'star_border', 'star_border', 'star_border'];
                break;
              }
          }
        }
      }]);

      return RatingComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "ratingsCount", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RatingComponent.prototype, "ratingsValue", void 0);

    RatingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-rating',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./rating.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/rating/rating.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./rating.component.scss */
      "./src/app/shared/rating/rating.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], RatingComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/dist/ngx-swiper-wrapper.es5.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ../theme/pipes/pipes.module */
    "./src/app/theme/pipes/pipes.module.ts");
    /* harmony import */


    var _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ../theme/directives/directives.module */
    "./src/app/theme/directives/directives.module.ts");
    /* harmony import */


    var _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./header-image/header-image.component */
    "./src/app/shared/header-image/header-image.component.ts");
    /* harmony import */


    var _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./header-carousel/header-carousel.component */
    "./src/app/shared/header-carousel/header-carousel.component.ts");
    /* harmony import */


    var _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./property-item/property-item.component */
    "./src/app/shared/property-item/property-item.component.ts");
    /* harmony import */


    var _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./load-more/load-more.component */
    "./src/app/shared/load-more/load-more.component.ts");
    /* harmony import */


    var _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./properties-toolbar/properties-toolbar.component */
    "./src/app/shared/properties-toolbar/properties-toolbar.component.ts");
    /* harmony import */


    var _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./properties-search/properties-search.component */
    "./src/app/shared/properties-search/properties-search.component.ts");
    /* harmony import */


    var _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./compare-overview/compare-overview.component */
    "./src/app/shared/compare-overview/compare-overview.component.ts");
    /* harmony import */


    var _rating_rating_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./rating/rating.component */
    "./src/app/shared/rating/rating.component.ts");
    /* harmony import */


    var _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./properties-search-results-filters/properties-search-results-filters.component */
    "./src/app/shared/properties-search-results-filters/properties-search-results-filters.component.ts");
    /* harmony import */


    var _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./properties-carousel/properties-carousel.component */
    "./src/app/shared/properties-carousel/properties-carousel.component.ts");
    /* harmony import */


    var _clients_clients_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./clients/clients.component */
    "./src/app/shared/clients/clients.component.ts");
    /* harmony import */


    var _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./get-in-touch/get-in-touch.component */
    "./src/app/shared/get-in-touch/get-in-touch.component.ts");
    /* harmony import */


    var _comments_comments_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./comments/comments.component */
    "./src/app/shared/comments/comments.component.ts");
    /* harmony import */


    var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./testimonials/testimonials.component */
    "./src/app/shared/testimonials/testimonials.component.ts");
    /* harmony import */


    var _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./our-agents/our-agents.component */
    "./src/app/shared/our-agents/our-agents.component.ts");
    /* harmony import */


    var _mission_mission_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./mission/mission.component */
    "./src/app/shared/mission/mission.component.ts");
    /* harmony import */


    var _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./our-services/our-services.component */
    "./src/app/shared/our-services/our-services.component.ts");
    /* harmony import */


    var _logo_logo_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./logo/logo.component */
    "./src/app/shared/logo/logo.component.ts");
    /* harmony import */


    var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./components/product-item/product-item.component */
    "./src/app/shared/components/product-item/product-item.component.ts");
    /* harmony import */


    var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./components/product-list/product-list.component */
    "./src/app/shared/components/product-list/product-list.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      wheelPropagation: false,
      suppressScrollX: true
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_58__["LogoComponent"], _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_41__["HeaderImageComponent"], _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_42__["HeaderCarouselComponent"], _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_43__["PropertyItemComponent"], _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_44__["LoadMoreComponent"], _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_45__["PropertiesToolbarComponent"], _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_46__["PropertiesSearchComponent"], _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_47__["CompareOverviewComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_48__["RatingComponent"], _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_49__["PropertiesSearchResultsFiltersComponent"], _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_50__["PropertiesCarouselComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_51__["ClientsComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_52__["GetInTouchComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_53__["CommentsComponent"], _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_54__["TestimonialsComponent"], _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_55__["OurAgentsComponent"], _mission_mission_component__WEBPACK_IMPORTED_MODULE_56__["MissionComponent"], _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_57__["OurServicesComponent"], _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_59__["ProductItemComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_60__["ProductListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__["PerfectScrollbarModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_39__["PipesModule"], _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_40__["DirectivesModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_27__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_30__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_36__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltipModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_33__["MatStepperModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__["PerfectScrollbarModule"], _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_39__["PipesModule"], _theme_directives_directives_module__WEBPACK_IMPORTED_MODULE_40__["DirectivesModule"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_58__["LogoComponent"], _header_image_header_image_component__WEBPACK_IMPORTED_MODULE_41__["HeaderImageComponent"], _header_carousel_header_carousel_component__WEBPACK_IMPORTED_MODULE_42__["HeaderCarouselComponent"], _property_item_property_item_component__WEBPACK_IMPORTED_MODULE_43__["PropertyItemComponent"], _load_more_load_more_component__WEBPACK_IMPORTED_MODULE_44__["LoadMoreComponent"], _properties_toolbar_properties_toolbar_component__WEBPACK_IMPORTED_MODULE_45__["PropertiesToolbarComponent"], _properties_search_properties_search_component__WEBPACK_IMPORTED_MODULE_46__["PropertiesSearchComponent"], _compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_47__["CompareOverviewComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_48__["RatingComponent"], _properties_search_results_filters_properties_search_results_filters_component__WEBPACK_IMPORTED_MODULE_49__["PropertiesSearchResultsFiltersComponent"], _properties_carousel_properties_carousel_component__WEBPACK_IMPORTED_MODULE_50__["PropertiesCarouselComponent"], _clients_clients_component__WEBPACK_IMPORTED_MODULE_51__["ClientsComponent"], _get_in_touch_get_in_touch_component__WEBPACK_IMPORTED_MODULE_52__["GetInTouchComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_53__["CommentsComponent"], _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_54__["TestimonialsComponent"], _our_agents_our_agents_component__WEBPACK_IMPORTED_MODULE_55__["OurAgentsComponent"], _mission_mission_component__WEBPACK_IMPORTED_MODULE_56__["MissionComponent"], _our_services_our_services_component__WEBPACK_IMPORTED_MODULE_57__["OurServicesComponent"], _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_59__["ProductItemComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_60__["ProductListComponent"]],
      entryComponents: [_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_47__["CompareOverviewComponent"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_38__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/testimonials/testimonials.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/testimonials/testimonials.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedTestimonialsTestimonialsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".testimonials-carousel .swiper-container {\n  padding-bottom: 50px;\n}\n.testimonials-carousel .swiper-container .content {\n  max-width: 650px;\n  margin: 0 auto;\n}\n.testimonials-carousel .swiper-container .content img {\n  border-radius: 50%;\n  width: 140px;\n  height: 140px;\n}\n.testimonials-carousel .swiper-container .content .quote {\n  font-size: 50px;\n  line-height: 14px;\n}\n.testimonials-carousel .swiper-container .content .quote.open {\n  margin-top: 24px;\n}\n.testimonials-carousel .swiper-container .content .quote.close {\n  margin-bottom: 24px;\n}\n.testimonials-carousel .swiper-container .content .text {\n  font-weight: 500;\n}\n.testimonials-carousel .swiper-container .content .author {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Rlc3RpbW9uaWFscy9EOlxcV0VELVNIT1BcXFRDT01XRUJcXENSTS5DbGllbnQuV2ViXFxDbGllbnRBcHAvc3JjXFxhcHBcXHNoYXJlZFxcdGVzdGltb25pYWxzXFx0ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksb0JBQUE7QUNBUjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ1o7QURBWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNFaEI7QURBWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0VoQjtBRERnQjtFQUNJLGdCQUFBO0FDR3BCO0FERGdCO0VBQ0ksbUJBQUE7QUNHcEI7QURBWTtFQUNJLGdCQUFBO0FDRWhCO0FEQVk7RUFDSSx5QkFBQTtBQ0VoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFscy1jYXJvdXNlbHsgICAgXHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgICAgICAuY29udGVudHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2NTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5xdW90ZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDsgXHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDsgXHJcbiAgICAgICAgICAgICAgICAmLm9wZW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYuY2xvc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0eyBcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdXRob3J7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCB7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cbi50ZXN0aW1vbmlhbHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmNvbnRlbnQgLnF1b3RlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbn1cbi50ZXN0aW1vbmlhbHMtY2Fyb3VzZWwgLnN3aXBlci1jb250YWluZXIgLmNvbnRlbnQgLnF1b3RlLm9wZW4ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCAucXVvdGUuY2xvc2Uge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLnRlc3RpbW9uaWFscy1jYXJvdXNlbCAuc3dpcGVyLWNvbnRhaW5lciAuY29udGVudCAudGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4udGVzdGltb25pYWxzLWNhcm91c2VsIC5zd2lwZXItY29udGFpbmVyIC5jb250ZW50IC5hdXRob3Ige1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/testimonials/testimonials.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/testimonials/testimonials.component.ts ***!
    \***************************************************************/

  /*! exports provided: TestimonialsComponent */

  /***/
  function srcAppSharedTestimonialsTestimonialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function () {
      return TestimonialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TestimonialsComponent = /*#__PURE__*/function () {
      function TestimonialsComponent(appService) {
        _classCallCheck(this, TestimonialsComponent);

        this.appService = appService;
        this.config = {};
        this.pagination = {
          el: '.swiper-pagination',
          clickable: true
        };
      }

      _createClass(TestimonialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.testimonials = this.appService.getTestimonials();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.config = {
            observer: true,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: this.pagination,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true
          };
        }
      }]);

      return TestimonialsComponent;
    }();

    TestimonialsComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    TestimonialsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-testimonials',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./testimonials.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/testimonials/testimonials.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./testimonials.component.scss */
      "./src/app/shared/testimonials/testimonials.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], TestimonialsComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/contacts/contacts.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/components/contacts/contacts.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsContactsContactsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/contacts/contacts.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/contacts/contacts.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppThemeComponentsContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);

        this.dividers = true;
        this.iconSize = 'sm';
        this.iconColor = '';
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Boolean)], ContactsComponent.prototype, "dividers", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], ContactsComponent.prototype, "iconSize", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], ContactsComponent.prototype, "iconColor", void 0);

    ContactsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-contacts',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./contacts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/contacts/contacts.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./contacts.component.scss */
      "./src/app/theme/components/contacts/contacts.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], ContactsComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/currency/currency.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/components/currency/currency.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsCurrencyCurrencyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvY3VycmVuY3kvY3VycmVuY3kuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/currency/currency.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/currency/currency.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CurrencyComponent */

  /***/
  function srcAppThemeComponentsCurrencyCurrencyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function () {
      return CurrencyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../app.settings */
    "./src/app/app.settings.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CurrencyComponent = /*#__PURE__*/function () {
      function CurrencyComponent(appSettings) {
        _classCallCheck(this, CurrencyComponent);

        this.appSettings = appSettings;
        this.currencies = ['USD', 'EUR'];
        this.settings = this.appSettings.settings;
      }

      _createClass(CurrencyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currency = this.settings.currency;
        }
      }, {
        key: "changeCurrency",
        value: function changeCurrency(currency) {
          this.currency = currency;
          this.settings.currency = currency;
        }
      }]);

      return CurrencyComponent;
    }();

    CurrencyComponent.ctorParameters = function () {
      return [{
        type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]
      }];
    };

    CurrencyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-currency',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./currency.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/currency/currency.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./currency.component.scss */
      "./src/app/theme/components/currency/currency.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])], CurrencyComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/lang/lang.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/theme/components/lang/lang.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsLangLangComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbGFuZy9sYW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/components/lang/lang.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/theme/components/lang/lang.component.ts ***!
    \*********************************************************/

  /*! exports provided: LangComponent */

  /***/
  function srcAppThemeComponentsLangLangComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LangComponent", function () {
      return LangComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LangComponent = /*#__PURE__*/function () {
      function LangComponent() {
        _classCallCheck(this, LangComponent);

        this.flags = [{
          name: 'English',
          image: 'assets/images/flags/gb.svg'
        }, {
          name: 'German',
          image: 'assets/images/flags/de.svg'
        }, {
          name: 'French',
          image: 'assets/images/flags/fr.svg'
        }, {
          name: 'Russian',
          image: 'assets/images/flags/ru.svg'
        }, {
          name: 'Turkish',
          image: 'assets/images/flags/tr.svg'
        }];
      }

      _createClass(LangComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.flag = this.flags[0];
        }
      }, {
        key: "changeLang",
        value: function changeLang(flag) {
          this.flag = flag;
        }
      }]);

      return LangComponent;
    }();

    LangComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-lang',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./lang.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/lang/lang.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./lang.component.scss */
      "./src/app/theme/components/lang/lang.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], LangComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsMenuHorizontalMenuHorizontalMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS9ob3Jpem9udGFsLW1lbnUvaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
    \************************************************************************************/

  /*! exports provided: HorizontalMenuComponent */

  /***/
  function srcAppThemeComponentsMenuHorizontalMenuHorizontalMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function () {
      return HorizontalMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../menu.service */
    "./src/app/theme/components/menu/menu.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HorizontalMenuComponent = /*#__PURE__*/function () {
      function HorizontalMenuComponent(menuService) {
        _classCallCheck(this, HorizontalMenuComponent);

        this.menuService = menuService;
      }

      _createClass(HorizontalMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.menuItems = this.menuService.getHorizontalMenuItems();
          this.menuItems = this.menuItems.filter(function (item) {
            return item.parentId == _this13.menuParentId;
          });
        }
      }]);

      return HorizontalMenuComponent;
    }();

    HorizontalMenuComponent.ctorParameters = function () {
      return [{
        type: _menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'), __metadata("design:type", Object)], HorizontalMenuComponent.prototype, "menuParentId", void 0);

    HorizontalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-horizontal-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./horizontal-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"))["default"],
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./horizontal-menu.component.scss */
      "./src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])], HorizontalMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/menu/menu.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/theme/components/menu/menu.model.ts ***!
    \*****************************************************/

  /*! exports provided: Menu */

  /***/
  function srcAppThemeComponentsMenuMenuModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Menu", function () {
      return Menu;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Menu = function Menu(id, title, routerLink, href, target, hasSubMenu, parentId) {
      _classCallCheck(this, Menu);

      this.id = id;
      this.title = title;
      this.routerLink = routerLink;
      this.href = href;
      this.target = target;
      this.hasSubMenu = hasSubMenu;
      this.parentId = parentId;
    };
    /***/

  },

  /***/
  "./src/app/theme/components/menu/menu.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/theme/components/menu/menu.service.ts ***!
    \*******************************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppThemeComponentsMenuMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu */
    "./src/app/theme/components/menu/menu.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MenuService = /*#__PURE__*/function () {
      function MenuService(location, router) {
        _classCallCheck(this, MenuService);

        this.location = location;
        this.router = router;
      }

      _createClass(MenuService, [{
        key: "getVerticalMenuItems",
        value: function getVerticalMenuItems() {
          return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
        }
      }, {
        key: "getHorizontalMenuItems",
        value: function getHorizontalMenuItems() {
          return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
        }
      }, {
        key: "expandActiveSubMenu",
        value: function expandActiveSubMenu(menu) {
          var _this14 = this;

          var url = this.location.path();
          var routerLink = decodeURIComponent(url);
          var activeMenuItem = menu.filter(function (item) {
            return item.routerLink === routerLink;
          });

          if (activeMenuItem[0]) {
            (function () {
              var menuItem = activeMenuItem[0];

              while (menuItem.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) {
                  return item.id == menuItem.parentId;
                })[0];
                menuItem = parentMenuItem;

                _this14.toggleMenuItem(menuItem.id);
              }
            })();
          }
        }
      }, {
        key: "toggleMenuItem",
        value: function toggleMenuItem(menuId) {
          var menuItem = document.getElementById('menu-item-' + menuId);
          var subMenu = document.getElementById('sub-menu-' + menuId);

          if (subMenu) {
            if (subMenu.classList.contains('show')) {
              subMenu.classList.remove('show');
              menuItem.classList.remove('expanded');
            } else {
              subMenu.classList.add('show');
              menuItem.classList.add('expanded');
            }
          }
        }
      }, {
        key: "closeOtherSubMenus",
        value: function closeOtherSubMenus(menu, menuId) {
          var currentMenuItem = menu.filter(function (item) {
            return item.id == menuId;
          })[0];
          menu.forEach(function (item) {
            if (item.id != menuId && item.parentId == currentMenuItem.parentId || currentMenuItem.parentId == 0 && item.id != menuId) {
              var subMenu = document.getElementById('sub-menu-' + item.id);
              var menuItem = document.getElementById('menu-item-' + item.id);

              if (subMenu) {
                if (subMenu.classList.contains('show')) {
                  subMenu.classList.remove('show');
                  menuItem.classList.remove('expanded');
                }
              }
            }
          });
        }
      }, {
        key: "closeAllSubMenus",
        value: function closeAllSubMenus() {
          _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"].forEach(function (item) {
            var subMenu = document.getElementById('sub-menu-' + item.id);
            var menuItem = document.getElementById('menu-item-' + item.id);

            if (subMenu) {
              if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
              }
            }
          });
        }
      }]);

      return MenuService;
    }();

    MenuService.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    MenuService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], MenuService);
    /***/
  },

  /***/
  "./src/app/theme/components/menu/menu.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/components/menu/menu.ts ***!
    \***********************************************/

  /*! exports provided: horizontalMenuItems, verticalMenuItems */

  /***/
  function srcAppThemeComponentsMenuMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function () {
      return horizontalMenuItems;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function () {
      return verticalMenuItems;
    });
    /* harmony import */


    var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menu.model */
    "./src/app/theme/components/menu/menu.model.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var horizontalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Home', '/', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Properties', '/properties', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](41, 'Agents', '/agents', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](42, 'Agent', '/agents/1', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'FAQs', '/faq', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Pricing', '/pricing', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Terms & Conditions', '/terms-conditions', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, '404 Page', '/404', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](60, 'Contact', '/contact', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'About Us', '/about', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Others', null, null, null, true, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'External Link', null, 'http://themeseason.com', '_blank', false, 140), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Menu item', null, 'http://themeseason.com', '_blank', false, 140)];
    var verticalMenuItems = [new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Home', '/', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Properties', '/properties', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](41, 'Agents', '/agents', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](42, 'Agent', '/agents/1', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'FAQs', '/faq', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Pricing', '/pricing', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Terms & Conditions', '/terms-conditions', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, '404 Page', '/404', null, null, false, 40), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](60, 'Contact', '/contact', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'About Us', '/about', null, null, false, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Level 1', null, null, null, true, 0), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'Level 2', null, null, null, true, 140), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Level 3', null, null, null, true, 141), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Level 4', null, null, null, true, 142), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Level 5', null, 'http://themeseason.com', null, false, 143), new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', '_blank', false, 0)];
    /***/
  },

  /***/
  "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsMenuVerticalMenuVerticalMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.menu-item .mat-button {\n  width: 100%;\n  font-weight: 400;\n  text-transform: uppercase;\n  height: 38px;\n}\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n  transform: rotate(180deg);\n}\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px;\n}\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out;\n}\n\n.sub-menu .sub-menu .mat-button {\n  padding-left: 56px;\n}\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 76px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 96px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 116px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 136px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 156px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 176px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 196px;\n}\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n  padding-left: 216px;\n}\n\n.sub-menu .mat-button {\n  padding-left: 36px;\n}\n\n.sub-menu.show {\n  max-height: 500px;\n  transition: max-height 0.25s ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRDpcXFdFRC1TSE9QXFxUQ09NV0VCXFxDUk0uQ2xpZW50LldlYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFx0aGVtZVxcY29tcG9uZW50c1xcbWVudVxcdmVydGljYWwtbWVudVxcdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvdmVydGljYWwtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvY29tcG9uZW50cy9tZW51L3ZlcnRpY2FsLW1lbnUvRDpcXFdFRC1TSE9QXFxUQ09NV0VCXFxDUk0uQ2xpZW50LldlYlxcQ2xpZW50QXBwL3NyY1xcYXBwXFx0aGVtZVxcc3R5bGVzXFxfbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDREo7O0FES0k7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNGUjs7QURJWTtFQUdJLHlCQUFBO0FDRmhCOztBRE1JO0VBQ0ksa0JBQUE7QUNKUjs7QURRQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUdBLHFDQUFBO0FDTko7O0FDdkJRO0VBS1Esa0JBQUE7QURxQmhCOztBQzFCUTtFQUtRLGtCQUFBO0FEd0JoQjs7QUM3QlE7RUFLUSxrQkFBQTtBRDJCaEI7O0FDaENRO0VBS1EsbUJBQUE7QUQ4QmhCOztBQ25DUTtFQUtRLG1CQUFBO0FEaUNoQjs7QUN0Q1E7RUFLUSxtQkFBQTtBRG9DaEI7O0FDekNRO0VBS1EsbUJBQUE7QUR1Q2hCOztBQzVDUTtFQUtRLG1CQUFBO0FEMENoQjs7QUMvQ1E7RUFLUSxtQkFBQTtBRDZDaEI7O0FEcEJJO0VBQ0ksa0JBQUE7QUNzQlI7O0FEcEJJO0VBQ0ksaUJBQUE7RUFHQSxvQ0FBQTtBQ3NCUiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvbWVudS92ZXJ0aWNhbC1tZW51L3ZlcnRpY2FsLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG5cclxuLm1lbnUtaXRlbXtcclxuICAgIC5tYXQtYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgJi5leHBhbmRlZHtcclxuICAgICAgICAgICAgLm1lbnUtZXhwYW5kLWljb257XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc3ViLW1lbnV7XHJcbiAgICBAaW5jbHVkZSBtZW51LWxldmVsLXBhZGRpbmcoJ2x0cicpO1xyXG4gICAgbWF4LWhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1vdXQ7ICBcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgIFxyXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDsgICAgXHJcbiAgICAubWF0LWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgJi5zaG93e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4yNXMgZWFzZS1pbjtcclxuICAgIH0gICAgXHJcbn0iLCIubWVudS1leHBhbmQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbn1cblxuLm1lbnUtaXRlbSAubWF0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBoZWlnaHQ6IDM4cHg7XG59XG4ubWVudS1pdGVtIC5tYXQtYnV0dG9uLmV4cGFuZGVkIC5tZW51LWV4cGFuZC1pY29uIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4ubWVudS1pdGVtIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5zdWItbWVudSB7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogNTZweDtcbn1cbi5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA3NnB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiA5NnB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTE2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTM2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDE1NnB4O1xufVxuLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTc2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAubWF0LWJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTk2cHg7XG59XG4uc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLnN1Yi1tZW51IC5zdWItbWVudSAuc3ViLW1lbnUgLm1hdC1idXR0b24ge1xuICBwYWRkaW5nLWxlZnQ6IDIxNnB4O1xufVxuLnN1Yi1tZW51IC5tYXQtYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzNnB4O1xufVxuLnN1Yi1tZW51LnNob3cge1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XG59IiwiQG1peGluIG1lbnUtbGV2ZWwtcGFkZGluZygkZGlyZWN0aW9uKXtcclxuICAgICRlbGVtOiAnJztcclxuICAgIEBmb3IgJGkgZnJvbSAyIHRocm91Z2ggMTAge1xyXG4gICAgICAgICRlbGVtOiBpZigkaSA9PSAyLCBcIi5zdWItbWVudVwiLCBzZWxlY3Rvci1uZXN0KCRlbGVtLCBcIi5zdWItbWVudVwiKSk7ICAgICAgXHJcbiAgICAgICAgI3skZWxlbSArICcgLm1hdC1idXR0b24nfSB7IFxyXG4gICAgICAgICAgICBAaWYgJGRpcmVjdGlvbiA9PSBcInJ0bFwiIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggKyAoMjBweCAqICRpKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgQGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHggKyAoMjBweCAqICRpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
    \********************************************************************************/

  /*! exports provided: VerticalMenuComponent */

  /***/
  function srcAppThemeComponentsMenuVerticalMenuVerticalMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function () {
      return VerticalMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../menu.service */
    "./src/app/theme/components/menu/menu.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var VerticalMenuComponent = /*#__PURE__*/function () {
      function VerticalMenuComponent(menuService) {
        _classCallCheck(this, VerticalMenuComponent);

        this.menuService = menuService;
      }

      _createClass(VerticalMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.menuItems = this.menuService.getVerticalMenuItems();
          this.menuItems = this.menuItems.filter(function (item) {
            return item.parentId == _this15.menuParentId;
          });
        }
      }, {
        key: "onClick",
        value: function onClick(menuId) {
          this.menuService.toggleMenuItem(menuId);
          this.menuService.closeOtherSubMenus(this.menuService.getVerticalMenuItems(), menuId);
        }
      }]);

      return VerticalMenuComponent;
    }();

    VerticalMenuComponent.ctorParameters = function () {
      return [{
        type: _menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'), __metadata("design:type", Object)], VerticalMenuComponent.prototype, "menuParentId", void 0);

    VerticalMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-vertical-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./vertical-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"))["default"],
      providers: [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]],
      styles: [__importDefault(__webpack_require__(
      /*! ./vertical-menu.component.scss */
      "./src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])], VerticalMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/social-icons/social-icons.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/theme/components/social-icons/social-icons.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsSocialIconsSocialIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvc29jaWFsLWljb25zL3NvY2lhbC1pY29ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/components/social-icons/social-icons.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/theme/components/social-icons/social-icons.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SocialIconsComponent */

  /***/
  function srcAppThemeComponentsSocialIconsSocialIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialIconsComponent", function () {
      return SocialIconsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SocialIconsComponent = /*#__PURE__*/function () {
      function SocialIconsComponent() {
        _classCallCheck(this, SocialIconsComponent);

        this.iconSize = '';
        this.iconColor = '';
      }

      _createClass(SocialIconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialIconsComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], SocialIconsComponent.prototype, "iconSize", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String)], SocialIconsComponent.prototype, "iconColor", void 0);

    SocialIconsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-social-icons',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./social-icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/social-icons/social-icons.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./social-icons.component.scss */
      "./src/app/theme/components/social-icons/social-icons.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], SocialIconsComponent);
    /***/
  },

  /***/
  "./src/app/theme/components/toolbar1/toolbar1.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/toolbar1/toolbar1.component.ts ***!
    \*****************************************************************/

  /*! exports provided: Toolbar1Component */

  /***/
  function srcAppThemeComponentsToolbar1Toolbar1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Toolbar1Component", function () {
      return Toolbar1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Toolbar1Component = /*#__PURE__*/function () {
      function Toolbar1Component(appService) {
        _classCallCheck(this, Toolbar1Component);

        this.appService = appService;
        this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(Toolbar1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sidenavToggle",
        value: function sidenavToggle() {
          this.onMenuIconClick.emit();
        }
      }]);

      return Toolbar1Component;
    }();

    Toolbar1Component.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], Toolbar1Component.prototype, "onMenuIconClick", void 0);

    Toolbar1Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-toolbar1',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./toolbar1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar1/toolbar1.component.html"))["default"]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], Toolbar1Component);
    /***/
  },

  /***/
  "./src/app/theme/components/toolbar2/toolbar2.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/theme/components/toolbar2/toolbar2.component.ts ***!
    \*****************************************************************/

  /*! exports provided: Toolbar2Component */

  /***/
  function srcAppThemeComponentsToolbar2Toolbar2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Toolbar2Component", function () {
      return Toolbar2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Toolbar2Component = /*#__PURE__*/function () {
      function Toolbar2Component(appService) {
        _classCallCheck(this, Toolbar2Component);

        this.appService = appService;
        this.onMenuIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(Toolbar2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sidenavToggle",
        value: function sidenavToggle() {
          this.onMenuIconClick.emit();
        }
      }]);

      return Toolbar2Component;
    }();

    Toolbar2Component.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])], Toolbar2Component.prototype, "onMenuIconClick", void 0);

    Toolbar2Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-toolbar2',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./toolbar2.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/toolbar2/toolbar2.component.html"))["default"]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], Toolbar2Component);
    /***/
  },

  /***/
  "./src/app/theme/components/user-menu/user-menu.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/theme/components/user-menu/user-menu.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThemeComponentsUserMenuUserMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2NvbXBvbmVudHMvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/theme/components/user-menu/user-menu.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/theme/components/user-menu/user-menu.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserMenuComponent */

  /***/
  function srcAppThemeComponentsUserMenuUserMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function () {
      return UserMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserMenuComponent = /*#__PURE__*/function () {
      function UserMenuComponent(appService) {
        _classCallCheck(this, UserMenuComponent);

        this.appService = appService;
      }

      _createClass(UserMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserMenuComponent;
    }();

    UserMenuComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
      }];
    };

    UserMenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-user-menu',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/theme/components/user-menu/user-menu.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./user-menu.component.scss */
      "./src/app/theme/components/user-menu/user-menu.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])], UserMenuComponent);
    /***/
  },

  /***/
  "./src/app/theme/directives/directives.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/theme/directives/directives.module.ts ***!
    \*******************************************************/

  /*! exports provided: DirectivesModule */

  /***/
  function srcAppThemeDirectivesDirectivesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectivesModule", function () {
      return DirectivesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _only_number_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./only-number.directive */
    "./src/app/theme/directives/only-number.directive.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DirectivesModule = function DirectivesModule() {
      _classCallCheck(this, DirectivesModule);
    };

    DirectivesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_only_number_directive__WEBPACK_IMPORTED_MODULE_2__["OnlyNumberDirective"]],
      exports: [_only_number_directive__WEBPACK_IMPORTED_MODULE_2__["OnlyNumberDirective"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
    })], DirectivesModule);
    /***/
  },

  /***/
  "./src/app/theme/directives/only-number.directive.ts":
  /*!***********************************************************!*\
    !*** ./src/app/theme/directives/only-number.directive.ts ***!
    \***********************************************************/

  /*! exports provided: OnlyNumberDirective */

  /***/
  function srcAppThemeDirectivesOnlyNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function () {
      return OnlyNumberDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var OnlyNumberDirective = /*#__PURE__*/function () {
      function OnlyNumberDirective() {
        _classCallCheck(this, OnlyNumberDirective);
      }

      _createClass(OnlyNumberDirective, [{
        key: "onInputChange",
        value: function onInputChange(e) {
          if (e.target.value.length == 0 && e.which == 48) {
            return false;
          }

          var verified = String.fromCharCode(e.which).match(/[^0-9]/g);

          if (verified) {
            e.preventDefault();
            return false;
          } // var regex = new RegExp("[^0-9]");
          // var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
          // if (regex.test(key)) {
          //     event.preventDefault();
          //     return false;
          // }    

        }
      }]);

      return OnlyNumberDirective;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keypress', ['$event']), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], OnlyNumberDirective.prototype, "onInputChange", null);

    OnlyNumberDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: 'input[onlyNumber]'
    }), __metadata("design:paramtypes", [])], OnlyNumberDirective);
    /***/
  },

  /***/
  "./src/app/theme/pipes/filter-by-id.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/theme/pipes/filter-by-id.pipe.ts ***!
    \**************************************************/

  /*! exports provided: FilterByIdPipe */

  /***/
  function srcAppThemePipesFilterByIdPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterByIdPipe", function () {
      return FilterByIdPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FilterByIdPipe = /*#__PURE__*/function () {
      function FilterByIdPipe() {
        _classCallCheck(this, FilterByIdPipe);
      }

      _createClass(FilterByIdPipe, [{
        key: "transform",
        value: function transform(items, id) {
          return items.filter(function (item) {
            return item.id == id;
          })[0];
        }
      }]);

      return FilterByIdPipe;
    }();

    FilterByIdPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'filterById'
    })], FilterByIdPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/filter-neighborhoods.ts":
  /*!*****************************************************!*\
    !*** ./src/app/theme/pipes/filter-neighborhoods.ts ***!
    \*****************************************************/

  /*! exports provided: FilterNeighborhoodsPipe */

  /***/
  function srcAppThemePipesFilterNeighborhoodsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterNeighborhoodsPipe", function () {
      return FilterNeighborhoodsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FilterNeighborhoodsPipe = /*#__PURE__*/function () {
      function FilterNeighborhoodsPipe() {
        _classCallCheck(this, FilterNeighborhoodsPipe);
      }

      _createClass(FilterNeighborhoodsPipe, [{
        key: "transform",
        value: function transform(items, id) {
          if (id) {
            return items.filter(function (item) {
              return item.cityId == id;
            });
          }

          return items;
        }
      }]);

      return FilterNeighborhoodsPipe;
    }();

    FilterNeighborhoodsPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'filterNeighborhoods'
    })], FilterNeighborhoodsPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/filter-streets.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/theme/pipes/filter-streets.pipe.ts ***!
    \****************************************************/

  /*! exports provided: FilterStreetsPipe */

  /***/
  function srcAppThemePipesFilterStreetsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterStreetsPipe", function () {
      return FilterStreetsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FilterStreetsPipe = /*#__PURE__*/function () {
      function FilterStreetsPipe() {
        _classCallCheck(this, FilterStreetsPipe);
      }

      _createClass(FilterStreetsPipe, [{
        key: "transform",
        value: function transform(items, filter) {
          var neighborhoodIds = [];

          if (filter.neighborhoods) {
            filter.neighborhoods.forEach(function (neighborhood) {
              neighborhoodIds.push(neighborhood.id);
            });
          }

          if (neighborhoodIds.length > 0) {
            return items.filter(function (item) {
              return neighborhoodIds.indexOf(item.neighborhoodId) > -1;
            });
          }

          if (filter.cityId) {
            return items.filter(function (item) {
              return item.cityId == filter.cityId;
            });
          }

          return items;
        }
      }]);

      return FilterStreetsPipe;
    }();

    FilterStreetsPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'filterStreets'
    })], FilterStreetsPipe);
    /***/
  },

  /***/
  "./src/app/theme/pipes/pipes.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/theme/pipes/pipes.module.ts ***!
    \*********************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppThemePipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./filter-by-id.pipe */
    "./src/app/theme/pipes/filter-by-id.pipe.ts");
    /* harmony import */


    var _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./filter-neighborhoods */
    "./src/app/theme/pipes/filter-neighborhoods.ts");
    /* harmony import */


    var _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./filter-streets.pipe */
    "./src/app/theme/pipes/filter-streets.pipe.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      declarations: [_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"], _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_3__["FilterNeighborhoodsPipe"], _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterStreetsPipe"]],
      exports: [_filter_by_id_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByIdPipe"], _filter_neighborhoods__WEBPACK_IMPORTED_MODULE_3__["FilterNeighborhoodsPipe"], _filter_streets_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterStreetsPipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/theme/utils/app-interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/theme/utils/app-interceptor.ts ***!
    \************************************************/

  /*! exports provided: AppInterceptor */

  /***/
  function srcAppThemeUtilsAppInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppInterceptor", function () {
      return AppInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppInterceptor = /*#__PURE__*/function () {
      function AppInterceptor() {
        _classCallCheck(this, AppInterceptor);
      }

      _createClass(AppInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // console.log(`Request for ${req.urlWithParams} started...`);
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {// console.log(`Request for ${req.urlWithParams} completed...`);
            }

            return event;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var started = Date.now();
            var elapsed = Date.now() - started;
            console.log("Request for ".concat(req.urlWithParams, " failed after ").concat(elapsed, " ms.")); // debugger;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
          }));
        }
      }]);

      return AppInterceptor;
    }();

    AppInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [])], AppInterceptor);
    /***/
  },

  /***/
  "./src/app/theme/utils/app-validators.ts":
  /*!***********************************************!*\
    !*** ./src/app/theme/utils/app-validators.ts ***!
    \***********************************************/

  /*! exports provided: emailValidator, matchingPasswords */

  /***/
  function srcAppThemeUtilsAppValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "emailValidator", function () {
      return emailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matchingPasswords", function () {
      return matchingPasswords;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function emailValidator(control) {
      var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

      if (control.value && !emailRegexp.test(control.value)) {
        return {
          invalidEmail: true
        };
      }
    }

    function matchingPasswords(passwordKey, passwordConfirmationKey) {
      return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];

        if (password.value !== passwordConfirmation.value) {
          return passwordConfirmation.setErrors({
            mismatchedPasswords: true
          });
        }
      };
    }
    /***/

  },

  /***/
  "./src/app/theme/utils/custom-overlay-container.ts":
  /*!*********************************************************!*\
    !*** ./src/app/theme/utils/custom-overlay-container.ts ***!
    \*********************************************************/

  /*! exports provided: CustomOverlayContainer */

  /***/
  function srcAppThemeUtilsCustomOverlayContainerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function () {
      return CustomOverlayContainer;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomOverlayContainer = /*#__PURE__*/function (_angular_cdk_overlay_) {
      _inherits(CustomOverlayContainer, _angular_cdk_overlay_);

      var _super = _createSuper(CustomOverlayContainer);

      function CustomOverlayContainer() {
        _classCallCheck(this, CustomOverlayContainer);

        return _super.apply(this, arguments);
      }

      _createClass(CustomOverlayContainer, [{
        key: "_createContainer",
        value: function _createContainer() {
          var container = document.createElement('div');
          container.classList.add('cdk-overlay-container');
          document.getElementById('app').appendChild(container);
          this._containerElement = container;
        }
      }]);

      return CustomOverlayContainer;
    }(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]);

    CustomOverlayContainer = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], CustomOverlayContainer);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\WED-SHOP\TCOMWEB\CRM.Client.Web\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map