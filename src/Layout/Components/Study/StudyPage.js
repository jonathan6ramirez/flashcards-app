import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../../utils/api";

import RenderStudy from "./RenderStudy";

function StudyPage ({ studyPageDeck, setStudyPageDeck}) {
    const { deckId } = useParams();
    const [cards, setCards] = useState([])
    const [cardBack, setCardBack] = useState(false)
    const [currentCard, setCurrentCard] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function loadCards () {
            const cardsToShow = await readDeck(deckId);
            setStudyPageDeck(cardsToShow);
            //console.log("this the response from the readdeck function", cardsToShow.cards)
            setCards(cardsToShow.cards);
            //console.log(cards, "**inside the useeffect**")
            setLoaded(true);
        }
        loadCards();
    }, [])

   //console.log(studyPageDeck, "this is the study page deck")

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
            <h1 className="d-flex justify-content-center">Study: {studyPageDeck.name}</h1>
            <RenderStudy 
            cards={cards}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            cardBack={cardBack}
            setCardBack={setCardBack}
            loaded={loaded}/>
        </>
    )}
    return null;
}

export default StudyPage