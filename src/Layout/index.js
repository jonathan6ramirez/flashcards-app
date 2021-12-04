import React from "react";
import Header from "./Components/Header";
import NotFound from "./Components/NotFound";
import CreateDeck from "./Components/CreateDeck";

import Home from "./Components/Home/Home";
import StudyPage from "./Components/Study/StudyPage";
import ViewDeckPage from "./Components/ViewDeck/ViewDeckPage";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import { useState } from "react";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [studyPageDeck, setStudyPageDeck] = useState({});
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
          <Route path="/decks/:deckId/study">
            <StudyPage studyPageDeck={studyPageDeck} setStudyPageDeck={setStudyPageDeck} />
          </Route>
          <Route path="/decks/:deckId" >
            <ViewDeckPage />
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
