import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readCard } from "../../../utils/api";
import { Modal, Button } from "react-bootstrap";

function RenderStudy ({cards,  currentCard, setCurrentCard, cardBack, setCardBack, loaded}) {
    const { deckId } = useParams();
    const history = useHistory();
    const handleNextCard = () => {
        if(currentCard == cards.length - 1){
            return null;
        }
        setCurrentCard((currentValue) => currentValue + 1);
        setCardBack(!cardBack);
    }
    const handleCreateCard = () => {
        history.push(`/decks/${deckId}/cards/new`);
    }
    //console.log(cards.length, "this is the cards length inside the renderstudy component");
    //console.log(currentCard, "this is the currentCard inside the renderstudy comp");
    //console.log(cardBack, "this is the cardback state inside the renderstudy comp");
    //console.log(loaded, "this is the loaded state inside the renderstudy comp");
    if (loaded){
        if(currentCard <= cards.length - 1 && cards.length >= 3 ){
            //console.log("this is inside the first check of the currentcard and the cards length")
            if (cardBack){
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card {currentCard + 1} of {cards.length}</h5>
                            <p className="card-text">{cards[currentCard].back}</p>
                            <button onClick={() => setCardBack(!cardBack)} class="btn btn-secondary">Flip</button>
                            <button onClick={() => handleNextCard()} className="btn btn-primary ms-2" >Next</button>
                        </div>
                    </div>
            )} else {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card {currentCard + 1} of {cards.length}</h5>
                            <p className="card-text">{cards[currentCard].front}</p>
                            <button onClick={() => setCardBack(!cardBack)} class="btn btn-secondary">Flip</button>
                        </div>
                    </div>
                )
        }} else if (cards.length < 3) {
            return (
                <>
                <h2>Not enough cards.</h2>
                <p>You need at least 3 cards to study. There are {cards.length} in this deck</p>
                <button className="btn btn-primary" onClick={() => handleCreateCard()} >Add Cards</button>
                </>
            )
        }} else {
            return null
        }
}

export default RenderStudy; 