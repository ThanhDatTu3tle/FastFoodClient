"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRoutes = exports.publicRoutes = void 0;

var _config = _interopRequireDefault(require("../config/"));

var _MainLayout = require("../layouts/MainLayout");

var _CheckoutLayout = require("../layouts/CheckoutLayout");

var _Home = _interopRequireDefault(require("../pages/Home/Home"));

var _OrderNow = _interopRequireDefault(require("../pages/OrderNow/OrderNow"));

var _RegisterForm = _interopRequireDefault(require("../pages/RegisterForm/RegisterForm"));

var _Admin = _interopRequireDefault(require("../pages/Admin/Admin"));

var _Users = _interopRequireDefault(require("../pages/Admin/Users/Users"));

var _Products = _interopRequireDefault(require("../pages/Admin/Products/Products"));

var _Information = _interopRequireDefault(require("../pages/Information/Information"));

var _ShippingAddress = _interopRequireDefault(require("../pages/Information/ShippingAddress"));

var _OrderHistory = _interopRequireDefault(require("../pages/Information/OrderHistory/OrderHistory"));

var _WishList = _interopRequireDefault(require("../pages/Information/WishList/WishList"));

var _Chicken = _interopRequireDefault(require("../pages/OrderNow/Chicken/Chicken"));

var _Hamburger = _interopRequireDefault(require("../pages/OrderNow/Hamburger/Hamburger"));

var _Ricepasta = _interopRequireDefault(require("../pages/OrderNow/Ricepasta/Ricepasta"));

var _Dessert = _interopRequireDefault(require("../pages/OrderNow/Dessert/Dessert"));

var _Drink = _interopRequireDefault(require("../pages/OrderNow/Drink/Drink"));

var _Checkout = _interopRequireDefault(require("../pages/Checkout/Checkout"));

var _Pay = _interopRequireDefault(require("../pages/Pay/Pay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Layouts
//Pages
// import Promotion from '../pages/Promotion/Promotion';
// import Birthday from '../pages/Birthday';
var publicRoutes = [{
  path: _config["default"].routes.home,
  component: _Home["default"],
  layout: _MainLayout.MainLayout
}, // { path: config.routes.promotion, component: Promotion, layout: MainLayout },
{
  path: _config["default"].routes.ordernow,
  component: _OrderNow["default"],
  layout: _MainLayout.MainLayout
}, // { path: config.routes.birthday, component: Birthday, layout: MainLayout },
{
  path: _config["default"].routes.register,
  component: _RegisterForm["default"],
  layout: null
}, {
  path: _config["default"].routes.admin,
  component: _Admin["default"],
  layout: null
}, {
  path: _config["default"].routes.users,
  component: _Users["default"],
  layout: null
}, {
  path: _config["default"].routes.products,
  component: _Products["default"],
  layout: null
}, {
  path: _config["default"].routes.information,
  component: _Information["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.shippingaddress,
  component: _ShippingAddress["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.orderhistory,
  component: _OrderHistory["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.wishlist,
  component: _WishList["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.chicken,
  component: _Chicken["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.hamburger,
  component: _Hamburger["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.ricepasta,
  component: _Ricepasta["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.dessert,
  component: _Dessert["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.drink,
  component: _Drink["default"],
  layout: _MainLayout.MainLayout
}, {
  path: _config["default"].routes.checkout,
  component: _Checkout["default"],
  layout: _CheckoutLayout.CheckoutLayout
}, {
  path: _config["default"].routes.pay,
  component: _Pay["default"],
  layout: _CheckoutLayout.CheckoutLayout
}];
exports.publicRoutes = publicRoutes;
var privateRoutes = [];
exports.privateRoutes = privateRoutes;