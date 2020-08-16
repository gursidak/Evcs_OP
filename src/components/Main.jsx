import React from 'react';
import Landing from './Landing';
import { Route, Switch } from 'react-router-dom';
import MainView from './MainView';
import Sign from './Sign';
import Dashboard from './Dashboard/Dashboard'
import WebAppBar from './WebAppBar'

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/main' component={MainView} />
            <Route path='/sign' component={Sign} />
            <Route path='/appbar' component={WebAppBar} />
            <Route path='/login' component={Dashboard} />
        </Switch>
    );
}