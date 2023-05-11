import CreateCategories from 'pages/Category/CreateCategories';
import DetailCategory from 'pages/Category/DetailCategory';
import ListCategories from 'pages/Category/ListCategories';
import Dashboard from 'pages/Dashboard';

import RoutesPath from './routes';

interface privatePagesProps {
  route: {
    path: string;
  };
  component: React.FC<any>;
}

const privatePages: Array<privatePagesProps> = [
  {
    route: RoutesPath.private.root,
    component: Dashboard,
  },
  {
    route: RoutesPath.private.categories,
    component: ListCategories,
  },
  {
    route: RoutesPath.private.categories,
    component: ListCategories,
  },
  {
    route: RoutesPath.private.detailCategory,
    component: DetailCategory,
  },
  {
    route: RoutesPath.private.createCategory,
    component: CreateCategories,
  },
];

export default privatePages;
