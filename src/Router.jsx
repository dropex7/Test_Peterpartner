import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppPage } from "./AppPage/AppPage";
import { AppPageCards } from "./AppPage/AppPageCards/AppPageCards";

export const Router = () => (
  <BrowserRouter>
    <Route exact path="/">
      <AppPage numberOfUser="0" />
    </Route>
    <Switch>
      <Route exact path="/allcards">
        <AppPageCards
          numberOfUser={() => {
            var paramsString = document.location.search;
            var searchParams = new URLSearchParams(paramsString);
            return searchParams.get("index");
          }}
        />
      </Route>
      <Route path="/cards" component={AppPage}>
        <AppPage
          numberOfUser={() => {
            var paramsString = document.location.search;
            var searchParams = new URLSearchParams(paramsString);
            return searchParams.get("index");
          }}
        />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
