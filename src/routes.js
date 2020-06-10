import React from 'react';
import { Route } from 'react-router-dom';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Profile from './pages/Profile'
import Booking from './pages/Test'
import CalendarDemo from "./pages/Booking/BookingComponent.js"

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList} />
        <Route exact path='/articles/:articleID/' component={ArticleDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/profile/' component={Profile} />
        <Route exact path='/booking/' component={Booking} />
        <Route exact path='/calendar/' component={CalendarDemo} />
    </div>
);

export default BaseRouter;