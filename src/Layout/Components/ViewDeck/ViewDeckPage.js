import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readDeck, deleteDeck } from "../../../utils/api";

import ViewDeckModal from "./ViewDeckModal";
import ViewDeckCards from "./ViewDeckCards";
import DeckDelete from "./ViewDeckDeleteModal";

function ViewDeckPage () {
    const history = useHistory();
    const { deckId } = useParams();
    const [loadedDeck, setLoadedDeck] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [cardId, setCardId] = useState(0)
    
    //Handle Functions and states
    const [show, setShow] = useState(false);
    const [showDeckDelete, setsShowDeckDelete] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (value) => {
        setCardId(value);
        setShow(true)
    };
    const handleDeleteClose = () => setsShowDeckDelete(false);
    const handleDeleteShow = (value) => {
        setCardId(value);
        setsShowDeckDelete(true);
    };


    //Handle the Deck Button Clicks
    const handleEditClick = () => {
        history.push(`/decks/${deckId}/edit`)
    }
    const handleStudyClick = () => {
        history.push(`/decks/${deckId}/study`)
    }
    const handleAddCardsClick = () => {
        history.push(`/decks/${deckId}/cards/new`);
    }
    const handleDeckDeleteClick = () => {
        deleteDeck( deckId );
        history.push(`/`)
    }
    const handleEditCardClick = (value) => {
        history.push(`/decks/${ deckId }/cards/${ value }/edit`)
    }
    useEffect(() => {
        async function loadDeck() {
            const deck = await readDeck(deckId);
            setLoadedDeck(deck);
            setLoaded(true);
        }
        loadDeck()
    }, [deckId])
    if(loaded){
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{loadedDeck.name}</li>
                    </ol>
                </nav>
                <div>
                    <h3>{loadedDeck.name}</h3>
                    <p>{loadedDeck.description}</p>
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={handleEditClick} >Edit</button>
                        <button type="button" className="btn btn-primary ms-2" onClick={handleStudyClick} >Study</button>
                        <button type="button" className="btn btn-primary ms-2" onClick={handleAddCardsClick} >Add Cards</button>
                        <button type="button" className="btn btn-danger ms-2" onClick={handleDeleteShow} >Delete</button>
                    </div>
                </div>
                <div>
                    <h2 className="mt-4">Cards</h2>
                    <ViewDeckCards loadedDeck={loadedDeck} 
                    handleShow={handleShow}
                    handleEditCardClick={handleEditCardClick}/>
                    <ViewDeckModal show={show} 
                    handleClose={handleClose}
                    cardId={cardId}/>
                    <DeckDelete showDeckDelete={showDeckDelete}
                    handleDeleteClose={handleDeleteClose} 
                    deckId={deckId} 
                    handleDeckDeleteClick={handleDeckDeleteClick} />
                </div>
            </div>
        )} else {
            return null
        }
}

export default ViewDeckPage;