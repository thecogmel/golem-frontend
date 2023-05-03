import React from 'react';

import PrivateBase from 'components/Base/PrivateBase';
import { Navigate, Route, Routes } from 'react-router-dom';

import privatePages from './privatePages';
import RoutesPath from './routes';

const PrivateRoutes: React.FC = () => {
  return (
    <PrivateBase>
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
    </PrivateBase>
  );
};

export default PrivateRoutes;
