import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "./LandingPage";
import FormFillPage from "./containers/FormFillPage";
import ProfilePage from "./containers/ProfilePage";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" component={FormFillPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  );
}
