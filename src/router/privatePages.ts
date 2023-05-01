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
];

export default privatePages;
