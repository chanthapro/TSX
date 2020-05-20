import { RouteProps } from 'react-router';
import HomePage from '../page/home';
import AboutPage from '../page/about';
import { ROUTE_URI } from './path';
const routes: Array<RouteProps> = [
    {
        path: ROUTE_URI.DEFAULT,
        exact: true,
        component: HomePage,
    },
    {
        path: ROUTE_URI.HOME,
        component: HomePage,
    },
    {
        path: ROUTE_URI.ABOUT,
        component: AboutPage,
    },
];

export default routes;
