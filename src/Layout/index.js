import React from "react";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import CreateButton from "./Components/CreateButton"

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";

function Layout() {
  return (
    <Router>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Route exact={true} path="/">
          <CreateButton />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </div>
    </Router>
  );
}

export default Layout;
