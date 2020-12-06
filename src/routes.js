import CommonLayout from './layouts/CommonLayout'
import Regions from './pages/Regions';
import Library from './pages/Library';

export const routes = [
  {
    path: '/',
    component: Regions,
    layout: CommonLayout,
    exact: true,
  },
  {
    path: '/:id',
    component: Library,
    layout: CommonLayout
  },
]