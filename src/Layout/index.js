import React from "react";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import CreateDeck from "./Components/CreateDeck";

import Home from "./Components/Home/Home";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import { useState } from "react";
import { deleteCard } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState([]);
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          {/* TODO: Implement the screen starting here */}
          <Route exact={true} path="/">
            <Home decks={decks} setDecks={setDecks} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck  />
          </Route>
          <Route path="/decks/:deckId/edit">
            <></>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Layout;
