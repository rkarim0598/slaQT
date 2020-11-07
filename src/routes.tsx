import { Route } from 'react-router';
import React from 'react';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';

export default function AppRoutes() {
    return (
        <>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
        </>
    )
}