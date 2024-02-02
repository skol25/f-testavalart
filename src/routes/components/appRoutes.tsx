import React from "react";
import { Routes, Route } from "react-router-dom";
import { paths } from "../paths";
import FeaturesPage from "../../views/features/page";

interface RouteData {
  path: string;
  element: React.ReactElement;
}

// Array containing route data, including path and corresponding React element
const routesData: RouteData[] = [
  { path: paths.home.root, element: <FeaturesPage /> },
  // Add more routes dynamically as needed
  // { path: '/about', element: <AboutPage /> },
  // { path: '/contact', element: <ContactPage /> },
];

// AppRoutes functional component serving as the provider for React Router DOM
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesData.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

// Exporting the AppRoutes component as the default export
export default AppRoutes;
