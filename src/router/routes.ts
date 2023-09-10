const RoutesPath = {
  auth: {
    root: { path: '/login/' },
    login: { path: '/login/' },
    forgotPassword: { path: '/esqueci-minha-senha/' },
    changePassword: { path: '/trocar-senha/' },
    confirmEmail: { path: '/confirmar-email/' },
  },
  private: {
    root: {
      path: '/dashboard/',
    },
    home: {
      path: '/dashboard/',
    },
    categories: {
      path: '/categorias/',
    },
    createCategory: {
      path: '/categorias/criar/',
    },
    detailCategory: {
      path: '/categorias/:id/',
    },
    materials: {
      path: '/materiais/',
    },
    createMaterial: {
      path: '/materiais/criar/',
    },
    detailMaterial: {
      path: '/materiais/:id/',
    },
    users: {
      path: '/usuarios/',
    },
  },
};

export default RoutesPath;
