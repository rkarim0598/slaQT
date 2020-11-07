import { Route } from 'react-router';
import React from 'react';
import Login from './routes/Login';
import Home from './routes/Home';

export default function AppRoutes() {
    return (
        <>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home} />
        </>
    )
}