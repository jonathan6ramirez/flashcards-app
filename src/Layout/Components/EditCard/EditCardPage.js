import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../../../utils/api";

import BreadCrumb from "./EditCardBreadCrumb";
import EditAndCreateCard from "../UtilComponents/EditAndCreateCard";

function EditCardPage () {
    // History object and the card id parameter
    const { cardId, deckId } = useParams();
    const history = useHistory();
    //Set a state so we can check if the card is loaded
    const [loaded, setLoaded] = useState(false);
    //Initialize the card object and create the handlers for the changes
    const [card, setCard] = useState({})
    const [deck, setDeck] = useState({});

    const handleChange = ({ target }) => {
        const value = target.value;
        setCard({
            ...card,
            [target.name]: value,
        });
    };
    const handleDone = () => {
        history.push(`/decks/${deckId}`);
    }
    const handleSubmit = () => {
        updateCard(card);
        history.push(`/decks/${deckId}`);
    } 
    //Load the previous card values
    useEffect(() => {
        const loadCard = async () => {
            const loadedCard = await readCard(cardId);
            const loadedDeck = await readDeck(deckId);
            setCard(loadedCard);
            setDeck(loadedDeck);
            setLoaded(true);
        }
        loadCard();
    }, [])

    if (loaded) {
        return (
            <>
                <BreadCrumb deck={deck} card={card}/>
                <EditAndCreateCard handleChange={handleChange} handleSubmit={handleSubmit} handleDone={handleDone} card={card}/>
            </>
        )
    } else {
        return null;
    }
}

export default EditCardPage;