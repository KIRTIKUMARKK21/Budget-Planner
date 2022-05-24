import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";
import Expenses from "../pages/Expenses";
import Page404 from "../pages/Page404";
import CheckStockprice from "../pages/CheckStockPrice";
const Routes = () => {
  return (
    <Router>
        <Header />
      <Switch>
          <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/checkstockprice" component={CheckStockprice} />
        <Route  component={Page404} />
      </Switch>
    </Router>
  );
};


export default Routes;