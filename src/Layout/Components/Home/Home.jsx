import React from "react";
import ShowDecks from "./ShowDecks";
import CreateButton from "./CreateButton";

function Home ({decks, setDecks}) {
    return (
        <>
            <CreateButton />
            <ShowDecks decks={decks} setDecks={setDecks} />
        </>
    )
}
export default Home