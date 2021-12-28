import React from "react";
import Header from "./Components/UtilComponents/Header";
import NotFound from "./Components/UtilComponents/NotFound";
import CreateDeck from "./Components/CreateDeck/CreateDeck";

import Home from "./Components/Home/Home";
import StudyPage from "./Components/Study/StudyPage";
import ViewDeckPage from "./Components/ViewDeck/ViewDeckPage";
import EditDeckPage from "./Components/EditDeck/EditDeckPage";
import CreateCardPage from "./Components/CreateCard/CreateCardPage";
import EditCardPage from "./Components/EditCard/EditCardPage";

import {Route, Switch} from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          {/* TODO: Implement the screen starting here */}
          <Route exact={true} path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck  />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyPage />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeckPage />
          </Route>
          <Route path="/decks/:deckId/cards/new" >
            <CreateCardPage />
          </Route>
          <Route path={`/decks/:deckId/cards/:cardId/edit`}>
            <EditCardPage />
          </Route>
          <Route path="/decks/:deckId" >
            <ViewDeckPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
