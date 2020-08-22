import React from "react";
import { Route, Switch } from "react-router";
import LandingPage from "./LandingPage";
import FormFillingPage from "./FormFillingPage";
import ProfilePage from "./ProfilePage";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/register" component={FormFillingPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  );
}
