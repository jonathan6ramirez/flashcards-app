import React from "react";
import { listDecks } from "../../utils/api";

async function ShowDecks ({setDecks, decks}) {
    const decksToShow = await listDecks()
    setDecks(() => [...decks, decksToShow]);
    const renderDecks = (deck, index) => {
        return (
            <div class="card" key={index}>
            <div class="card-body">
                <h5 class="card-title">{deck.name}</h5>
                <p class="card-text">{deck.description}</p>
                <a href="/" class="btn btn-primary">Study</a>
            </div>
            </div>
        )
    }
    const decksToRender = decks.map(renderDecks);
    if(Array.isArray(decksToShow)){
        if (decksToShow) {
            return (
                <div>
                    {decksToRender}
                </div>
            )
        } else {
            return null;
        }
    }
    return null;
}
export default ShowDecks