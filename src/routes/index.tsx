import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import routes from './route';

interface RouterViewProps {}

const RouterView: FunctionComponent<RouterViewProps> = (props) => {
    var count=0;
    return (
        <Switch>
            {routes.map((routeProps) => {
                return <Route key={count++} path={routeProps.path} {...routeProps} />;
            })}
            <Route>Not Found</Route>
        </Switch>
    );
};

export default RouterView;