import Login from 'pages/Login';

import RoutesPath from './routes';

const publicPages = [
  {
    path: RoutesPath.auth.login.path,
    component: Login,
  },
];

export default publicPages;
