import config from '../config/';

// Layouts
import { MainLayout } from '../layouts/MainLayout';
import { CheckoutLayout } from '../layouts/CheckoutLayout';

//Pages
import Home from '../pages/Home/Home';
// import Promotion from '../pages/Promotion/Promotion';
import OrderNow from '../pages/OrderNow/OrderNow';
// import Birthday from '../pages/Birthday';
import RegisterForm from '../pages/RegisterForm/RegisterForm';

import Admin from '../pages/Admin/Admin';
import Users from '../pages/Admin/Users/Users';
import Products from '../pages/Admin/Products/Products';

import Information from '../pages/Information/Information';
import ShippingAddress from '../pages/Information/ShippingAddress';
import OrderHistory from '../pages/Information/OrderHistory/OrderHistory';
import WishList from '../pages/Information/WishList/WishList';

import Chicken from '../pages/OrderNow/Chicken/Chicken';
import Hamburger from '../pages/OrderNow/Hamburger/Hamburger';
import Ricepasta from '../pages/OrderNow/Ricepasta/Ricepasta';
import Dessert from '../pages/OrderNow/Dessert/Dessert';
import Drink from '../pages/OrderNow/Drink/Drink';

import Checkout from '../pages/Checkout/Checkout';

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainLayout },
  // { path: config.routes.promotion, component: Promotion, layout: MainLayout },
  { path: config.routes.ordernow, component: OrderNow, layout: MainLayout },
    // { path: config.routes.birthday, component: Birthday, layout: MainLayout },
  { path: config.routes.register, component: RegisterForm, layout: null },

  { path: config.routes.admin, component: Admin, layout: null },
  { path: config.routes.users, component: Users, layout: null },
  { path: config.routes.products, component: Products, layout: null },

  { path: config.routes.information, component: Information, layout: MainLayout },
  { path: config.routes.shippingaddress, component: ShippingAddress, layout: MainLayout },
  { path: config.routes.orderhistory, component: OrderHistory, layout: MainLayout },
  { path: config.routes.wishlist, component: WishList, layout: MainLayout },

  { path: config.routes.chicken, component: Chicken, layout: MainLayout },
  { path: config.routes.hamburger, component: Hamburger, layout: MainLayout },
  { path: config.routes.ricepasta, component: Ricepasta, layout: MainLayout },
  { path: config.routes.dessert, component: Dessert, layout: MainLayout },
  { path: config.routes.drink, component: Drink, layout: MainLayout },

  { path: config.routes.checkout, component: Checkout, layout: CheckoutLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
