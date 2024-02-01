import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { paths } from '../paths';
import FeaturesPage from '../../views/features/page';


interface RouteData {
  path: string;
  element: React.ReactElement;
}

const routesData: RouteData[] = [
  { path: paths.home.root, element: < FeaturesPage/> },
  // { path: '/about', element: < /> },
  // { path: '/contact', element: < /> },
  // Puedes agregar más rutas dinámicamente según sea necesario
];
 
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesData.map((route, index) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
