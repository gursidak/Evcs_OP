import React from 'react';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import MainView from './MainView';
import Sign from './Sign';
import Dashboard from './Dashboard/Dashboard';
import WebAppBar from './WebAppBar';

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/sign' component={Sign} />
            <Route exact path='/appbar' component={WebAppBar} />
            <Route exact path='/main' component={MainView} />
            <Route exact path='/login' component={Dashboard} />
        </Switch>
    );
}