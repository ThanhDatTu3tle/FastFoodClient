import config from '../config/';

// Layouts
import { MainLayout } from '../layouts/MainLayout';

//Pages
import Home from '../pages/Home';
import Promotion from '../pages/Promotion';
import OrderNow from '../pages/OrderNow';

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: MainLayout },
  { path: config.routes.promotion, component: Promotion, layout: MainLayout },
  { path: config.routes.ordernow, component: OrderNow, layout: MainLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
