import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "./menu";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Menu />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
