"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateRoutes = exports.publicRoutes = void 0;

var _config = _interopRequireDefault(require("../config/"));

var _MainLayout = require("../layouts/MainLayout");

var _Home = _interopRequireDefault(require("../pages/Home/Home"));

var _OrderNow = _interopRequireDefault(require("../pages/OrderNow/OrderNow"));

var _RegisterForm = _interopRequireDefault(require("../pages/RegisterForm/RegisterForm"));

var _Information = _interopRequireDefault(require("../pages/Information/Information"));

var _Chicken = _interopRequireDefault(require("../pages/OrderNow/Chicken/Chicken"));

var _Hamburger = _interopRequireDefault(require("../pages/OrderNow/Hamburger/Hamburger"));

var _Ricepasta = _interopRequireDefault(require("../pages/OrderNow/Ricepasta/Ricepasta"));

var _Dessert = _interopRequireDefault(require("../pages/OrderNow/Dessert/Dessert"));

var _Drink = _interopRequireDefault(require("../pages/OrderNow/Drink/Drink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Layouts
//Pages
// import Promotion from '../pages/Promotion/Promotion';
// import Birthday from '../pages/Birthday';
// import Login from '../pages/Login/Login';
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
  path: _config["default"].routes.information,
  component: _Information["default"],
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
}];
exports.publicRoutes = publicRoutes;
var privateRoutes = [];
exports.privateRoutes = privateRoutes;