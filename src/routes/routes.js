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

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainLayout },
  // { path: config.routes.promotion, component: Promotion, layout: MainLayout },
  { path: config.routes.ordernow, component: OrderNow, layout: MainLayout },
  { path: config.routes.register, component: RegisterForm, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
