// Layouts
import { MainLayout } from '../layouts/MainLayout';

//Pages
import Home from '../pages/Home';
import Promotion from '../pages/Promotion';
import OrderNow from '../pages/OrderNow';

const publicRoutes = [
  { path: '/', component: Home, layout: MainLayout },
  { path: '/promotion', component: Promotion, layout: MainLayout },
  { path: '/ordernow', component: OrderNow, layout: MainLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
