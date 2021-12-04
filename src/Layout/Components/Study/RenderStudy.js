import React, { useState } from "react";
import { readCard } from "../../../utils/api";
import { Modal, Button } from "react-bootstrap";

function RenderStudy ({cards,  currentCard, setCurrentCard, cardBack, setCardBack, loaded}) {
    
    const handleNextCard = () => {
        if(currentCard == cards.length - 1){
            return null;
        }
        setCurrentCard((currentValue) => currentValue + 1);
        setCardBack(!cardBack);
    }

    if (loaded){
        if(currentCard <= cards.length - 1){
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
        }} else if (cards.length !== 0){
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card {currentCard + 1} of {cards.length}</h5>
                            <p className="card-text">{cards[currentCard].back}</p>
                            <button onClick={() => setCardBack(!cardBack)} class="btn btn-secondary">Flip</button>
                            <button onClick={() => handleNextCard()} className="btn btn-primary ms-2" >Next</button>
                        </div>
                </div>
        }} else {
            return null
        }
}

export default RenderStudy;