import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./components/ArticleListView";
import ArticleDetail from "./components/ArticleDetailView";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Booking from "./components/Booking";
import { SigninGoogle } from "./components/SigninGoogle";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Profile} />
    <Route exact path="/articlelist" component={ArticleList} />
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/profile/" component={Profile} />
    <Route exact path="/booking/" component={Booking} />
    <Route exact path="/signin/" component={SigninGoogle} />
  </div>
);

export default BaseRouter;
