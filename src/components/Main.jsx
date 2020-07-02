import React, { Component } from 'react';
import Landing from './Landing';
import {Switch , Route , Link } from 'react-router-dom';
import MainView from './MainView';
import Sign from './Sign';
import Carousel from './Carousel';

export default function Main() {
    return(
        <switch>
            <Route exact path='/' component={Landing} />
            <Route path='/main' component={MainView}  />
            <Route path='/sign' component={Sign}      />
            <Route path='/carousel' component={Carousel} />
        </switch>
    );
}