import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import routes from './route';

interface RouterViewProps {}

const RouterView: FunctionComponent<RouterViewProps> = (props) => {
    return (
        <Switch>
            {routes.map((routeProps) => {
                return <Route path={routeProps.path} {...routeProps} />;
            })}
            <Route>Not Found</Route>
        </Switch>
    );
};

export default RouterView;