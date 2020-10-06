import React from 'react';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import Sign from './Sign';
import Dashboard from './Dashboard/Dashboard';

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/sign' component={Sign} />
            <Route exact path='/login' component={Dashboard} />
        </Switch>
    );
}