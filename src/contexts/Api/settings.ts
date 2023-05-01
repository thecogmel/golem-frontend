export const endpoints = {
  brasilAPi: {
    cep: '/cep/v2/:cep',
  },
  core: {
    cities: { list: '/core/cities/' },
  },
  auth: {
    login: '/login/',
    profile: '/auth/profile/',
    register: '/auth/register/',
    resetPassword: '/auth/reset-password/',
    changePassword: '/auth/update-password/',
  },
};
