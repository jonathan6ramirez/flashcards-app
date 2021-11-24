import React from "react";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import ShowDecks from "./Components/ShowDecks";
import CreateButton from "./Components/CreateButton"
import CreateDeck from "./Components/CreateDeck";


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
            <CreateButton />
            <ShowDecks setDecks={setDecks} decks={decks} />
          </Route>
          <Route path="/decks/new">
            <CreateDeck setDecks={setDecks} decks={decks} />
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
