import { MdDashboard, MdSettings } from 'react-icons/md';
import RoutesPath from 'router/routes';

const sideBarOptions = () => {
  const sideBar = [
    {
      name: 'Dashboard',
      icon: MdDashboard,
      route: RoutesPath.private.home.path,
    },
    {
      name: 'Configurações',
      icon: MdSettings,
      route: RoutesPath.auth.root.path,
    },
  ];

  return sideBar;
};

export default sideBarOptions;
