import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import CreateCollection from "../components/create-collection/CreateCollection";
import Collection from "../components/collection/Collection";

export function ApplicationRouter(props) {
  const { children } = props ? props : {};
  return <Router>{children}</Router>;
}

export function ApplicationSwitch() {
  return (
    <Switch>
      <Route exact path="/create-collection/">
        <CreateCollection></CreateCollection>
      </Route>
      <Route path="/:author/:collection" component={Collection}></Route>
      <Route path="/">
        <Dashboard></Dashboard>
      </Route>
    </Switch>
  );
}
