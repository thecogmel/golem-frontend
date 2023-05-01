import React from 'react';

import { useAuth } from 'contexts/Auth';
import { BrowserRouter } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter: React.FC = () => {
  const { authorized } = useAuth();

  return (
    <BrowserRouter>
      {authorized ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

export default AppRouter;
