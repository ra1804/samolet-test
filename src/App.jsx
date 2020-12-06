import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import { routes } from "./routes";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route) => (
            <Route exact={route.exact} path={route.path} key={route.path}>
              <route.layout>
                <route.component />
              </route.layout>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
