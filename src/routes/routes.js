import config from '../config/';

// Layouts
import { MainLayout } from '../layouts/MainLayout';

//Pages
import Home from '../pages/Home/Home';
// import Promotion from '../pages/Promotion/Promotion';
import OrderNow from '../pages/OrderNow/OrderNow';
// import Birthday from '../pages/Birthday';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
// import Login from '../pages/Login/Login';
import Information from '../pages/Information/Information';

import Chicken from '../pages/OrderNow/Chicken/Chicken';
import Hamburger from '../pages/OrderNow/Hamburger/Hamburger';
import Ricepasta from '../pages/OrderNow/Ricepasta/Ricepasta';
import Dessert from '../pages/OrderNow/Dessert/Dessert';
import Drink from '../pages/OrderNow/Drink/Drink';

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainLayout },
  // { path: config.routes.promotion, component: Promotion, layout: MainLayout },
  { path: config.routes.ordernow, component: OrderNow, layout: MainLayout },
    // { path: config.routes.birthday, component: Birthday, layout: MainLayout },
  { path: config.routes.register, component: RegisterForm, layout: null },
  { path: config.routes.information, component: Information, layout: MainLayout },

  { path: config.routes.chicken, component: Chicken, layout: MainLayout },
  { path: config.routes.hamburger, component: Hamburger, layout: MainLayout },
  { path: config.routes.ricepasta, component: Ricepasta, layout: MainLayout },
  { path: config.routes.dessert, component: Dessert, layout: MainLayout },
  { path: config.routes.drink, component: Drink, layout: MainLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
