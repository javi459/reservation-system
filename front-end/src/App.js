import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

/**
 * Defines the root application component.
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Switch>
      <Route basename="/reservation-system">
        <Layout />
      </Route>
    </Switch>
  );
}
// path="/"

export default App;
