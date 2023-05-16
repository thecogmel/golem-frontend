import {
  MdDashboard,
  MdOutlineAllInbox,
  MdOutlineCategory,
  MdSettings,
} from 'react-icons/md';
import RoutesPath from 'router/routes';

const sideBarOptions = () => {
  const sideBar = [
    {
      name: 'Dashboard',
      icon: MdDashboard,
      route: RoutesPath.private.home.path,
    },
    {
      name: 'Categorias',
      icon: MdOutlineCategory,
      route: RoutesPath.private.categories.path,
    },
    {
      name: 'Materiais',
      icon: MdOutlineAllInbox,
      route: RoutesPath.private.materials.path,
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
