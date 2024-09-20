import React from 'react';
import { useRoutes } from 'react-router-dom';
import Layouts from './Common/Layouts/Layouts';  // Your custom Layout
import Home from './Pages/Home/home';

const routesList = () => [
    {
        path: "/",  // Base route for home
        element: <Layouts />,  // Layout wraps all routes
        children: [
            {
                path: "/",  // Home route
                element: <Home />,  // Home page component
            },
        ],
    },
];

function AppRoutes() {
    const routes = useRoutes(routesList());
    return routes;
}

export default AppRoutes;
