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
  },
};

export default RoutesPath;
