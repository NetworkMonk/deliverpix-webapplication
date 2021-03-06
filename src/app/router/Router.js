import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../components/dashboard/Dashboard";
import CreateCollection from "../../components/create-collection/CreateCollection";
import Collection from "../../components/collection/Collection";
import SignIn from "../../components/signin/SignIn";
import Home from "../../pages/home/Home";
import Survey2020 from "../../pages/survey2020/Survey2020";

export function ApplicationRouter(props) {
  const { children } = props ? props : {};
  return <Router>{children}</Router>;
}

export function ApplicationSwitch() {
  return (
    <Switch>
      {/* <Route exact path="/signin/" component={SignIn}></Route>
      <Route
        exact
        path="/create-collection/"
        component={CreateCollection}
      ></Route> */}
      {/* <Route exact path="/beta/" component={Survey2020}></Route> */}
      <Route exact path="/interest/" component={Survey2020}></Route>
      {/* <Route exact path="/dashboard/" component={Dashboard}></Route>
      <Route path="/:author/:collection" component={Collection}></Route> */}
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}
