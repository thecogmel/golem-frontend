import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import privatePages from './privatePages';
import RoutesPath from './routes';

const PrivateRoutes: React.FC = () => {
  return (
    <Routes>
      {privatePages.map((page) => (
        <Route
          key={page.route.path}
          path={page.route.path}
          element={<page.component />}
        />
      ))}
      <Route
        path="*"
        element={<Navigate to={RoutesPath.private.root.path} replace />}
      />
    </Routes>
  );
};

export default PrivateRoutes;
