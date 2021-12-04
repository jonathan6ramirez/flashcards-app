import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../../utils/api";

import ViewDeckCards from "./ViewDeckCards";
import ViewDeckModal from "./ViewDeckModal";

function ViewDeckPage () {
    const { deckId } = useParams();
    const [loadedDeck, setLoadedDeck] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [cardId, setCardId] = useState(0)
    
    //Handle Functions
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (value) => {
        setCardId(value);
        setShow(true)
    };

    useEffect(() => {
        async function loadDeck() {
            const deck = await readDeck(deckId);
            setLoadedDeck(deck);
            setLoaded(true);
        }
        loadDeck()
    }, [])
    if(loaded){
        return (
            <div>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{loadedDeck.name}</li>
                    </ol>
                </nav>
                <div>
                    <h3>{loadedDeck.name}</h3>
                    <p>{loadedDeck.description}</p>
                    <div>
                        <button type="button" className="btn btn-secondary">Edit</button>
                        <button type="button" className="btn btn-primary ms-2">Study</button>
                        <button type="button" className="btn btn-primary ms-2">Add Cards</button>
                        <button type="button" className="btn btn-danger ms-2">Delete</button>
                    </div>
                </div>
                <div>
                    <h2 className="mt-4">Cards</h2>
                    <ViewDeckCards loadedDeck={loadedDeck} handleShow={handleShow}/>
                    <ViewDeckModal show={show} handleClose={handleClose} handleShow={handleShow} cardId={cardId}/>
                </div>
            </div>
        )} else {
            return null
        }
}

export default ViewDeckPage;