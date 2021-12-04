import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../../utils/api";

import RenderStudy from "./RenderStudy";
import RestartModal from "./RestartPrompt/RestartPrompt";

function StudyPage ({ studyPageDeck, setStudyPageDeck}) {
    const { deckId } = useParams();
    const [cards, setCards] = useState([])
    const [cardBack, setCardBack] = useState(false)
    const [currentCard, setCurrentCard] = useState(0);
    const [loaded, setLoaded] = useState(false);

    //MODAL STATE AND HANDLERS
    const [show, setShow] = useState(false);
    const handleRestart = () => {
        setShow(false)
        setCurrentCard(0)
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function loadCards () {
            const cardsToShow = await readDeck(deckId);
            setStudyPageDeck(cardsToShow);
            setCards(cardsToShow.cards);
            setLoaded(true);
        }
        loadCards();
    }, [])

    

    if (studyPageDeck){
        return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#!" data-abc="true">
                            <i className="bi bi-house-door-fill"></i>
                        </a>
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item text-primary" >{studyPageDeck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>
            <h1 >{studyPageDeck.name}: Study</h1>
            <RenderStudy 
            cards={cards}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            cardBack={cardBack}
            setCardBack={setCardBack}
            loaded={loaded}/>
            <RestartModal show={show} 
            handleRestart={handleRestart} 
            handleShow={handleShow} 
            cards={cards.length} 
            currentCard={currentCard} />
        </>
    )}
    return null;
}

export default StudyPage