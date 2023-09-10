import CreateCategories from 'pages/Category/CreateCategories';
import DetailCategory from 'pages/Category/DetailCategory';
import ListCategories from 'pages/Category/ListCategories';
import Dashboard from 'pages/Dashboard';
import CreateItem from 'pages/Item/CreateItem';
import DetailItem from 'pages/Item/DetailItem';
import ListItems from 'pages/Item/ListItems';
import ListUsers from 'pages/Users/ListUsers';

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
  {
    route: RoutesPath.private.materials,
    component: ListItems,
  },
  {
    route: RoutesPath.private.createMaterial,
    component: CreateItem,
  },
  {
    route: RoutesPath.private.detailMaterial,
    component: DetailItem,
  },
  {
    route: RoutesPath.private.users,
    component: ListUsers,
  },
];

export default privatePages;
