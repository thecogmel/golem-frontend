import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import publicPages from './publicPages';
import RoutesPath from './routes';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      {publicPages.map((page) => (
        <Route key={page.path} path={page.path} element={<page.component />} />
      ))}
      <Route
        path="*"
        element={<Navigate to={RoutesPath.auth.root.path} replace />}
      />
    </Routes>
  );
};

export default PublicRoutes;
