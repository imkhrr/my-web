import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as Middleware from "../middleware";
import Commodity from "../views/Commodity";
import User from "../views/User";
import Dashboard from "../views/Dashboard";
import LoginPage from "../views/LoginPage";
import NotFound from "../views/NotFound";
import Transaksi from "../views/Transaksi";
import Customer from "../views/Customers";
import Suppliers from "../views/Suppliers";
import Settings from "../views/Settings";

function Router(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* Authenticated Route */}
          <Route exact path="/">
            <Middleware.Authenticated render={<Dashboard />} />
          </Route>

          <Route path="/dashboard">
            <Middleware.Authenticated render={<Dashboard />} />
          </Route>

          <Route path="/transaksi">
            <Middleware.Authenticated render={<Transaksi />} />
          </Route>

          <Route path="/commodity">
            <Middleware.Authenticated render={<Commodity />} />
          </Route>

          <Route path="/user">
            <Middleware.Authenticated render={<User />} />
          </Route>

          <Route path="/customers">
            <Middleware.Authenticated render={<Customer />} />
          </Route>

          <Route path="/suppliers">
            <Middleware.Authenticated render={<Suppliers />} />
          </Route>

          <Route path="/settings">
            <Middleware.Authenticated render={<Settings />} />
          </Route>

          {/* Guest Route */}
          <Route path="/login">
            <Middleware.Guest render={<LoginPage />} />
          </Route>

          {/* Error Route */}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
