import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readCard } from "../../../utils/api";
import { Modal, Button } from "react-bootstrap";

function RenderStudy ({cards,  currentCard, setCurrentCard, cardBack, setCardBack, loaded, handleShow}) {

    const { deckId } = useParams();
    const history = useHistory();

    const handleNextCard = () => {
        setCurrentCard((currentValue) => currentValue + 1);
        setCardBack(!cardBack);
    }
    const handleCreateCard = () => {
        history.push(`/decks/${deckId}/cards/new`);
    }

    if (loaded){
        //Check to see if the deck contains less than 3 cards
        if (cards.length < 3) {
            return (
                <>
                <h2>Not enough cards.</h2>
                <p>You need at least 3 cards to study. There are {cards.length} in this deck</p>
                <button className="btn btn-primary" onClick={() => handleCreateCard()} >Add Cards</button>
                </>
            )
        } else if (currentCard != cards.length - 1 && cardBack){
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card {currentCard + 1} of {cards.length}</h5>
                        <p className="card-text">{cards[currentCard].back}</p>
                        <button onClick={() => setCardBack(!cardBack)} class="btn btn-secondary">Flip</button>
                        <button onClick={() => handleNextCard()} className="btn btn-primary ms-2" >Next</button>
                    </div>
                </div>
        )} else if ( currentCard != cards.length - 1 ) {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card {currentCard + 1} of {cards.length}</h5>
                        <p className="card-text">{cards[currentCard].front}</p>
                        <button onClick={() => setCardBack(!cardBack)} class="btn btn-secondary">Flip</button>
                    </div>
                </div>
            )} else {
            if(cardBack){
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card {currentCard + 1} of {cards.length}</h5>
                            <p className="card-text">{cards[currentCard].back}</p>
                            <button onClick={() => setCardBack(!cardBack)} class="btn btn-secondary">Flip</button>
                            <button onClick={() => handleShow()} className="btn btn-primary ms-2" >Finish</button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card {currentCard + 1} of {cards.length}</h5>
                            <p className="card-text">{cards[currentCard].front}</p>
                            <button onClick={() => setCardBack(!cardBack)} class="btn btn-secondary">Flip</button>
                        </div>
                    </div>
                )
            }
            }
    } else {
            return null
        }
}

export default RenderStudy; 