import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./components/ArticleListView";
import ArticleDetail from "./components/ArticleDetailView";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import BasicBooking from "./components/BasicBooking";
import CalendarDemo from "./components/Booking/BookingComponent";
import { LoginGoogle } from "./components/LoginGoogle";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Profile} />
    <Route exact path="/articlelist" component={ArticleList} />
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/profile/" component={Profile} />
    <Route exact path="/booking/" component={BasicBooking} />
    <Route exact path="/calendar/" component={CalendarDemo} />
    <Route exact path="/google/" component={LoginGoogle} />
  </div>
);

export default BaseRouter;