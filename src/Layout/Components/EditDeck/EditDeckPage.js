import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../../../utils/api";

import EditAndCreateForm from "../UtilComponents/EditAndCreateInput";

function EditDeckPage () {
    const history = useHistory();
    const { deckId } = useParams();
    //States for the initial render
    const [deck, setDeck] = useState({});
    const [loaded, setLoaded] = useState(false)
    //Input change and sumbit event
    const handleChange = ({ target }) => {
        const value = target.value;
        setDeck({
            ...deck,
            [target.name]: value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateDeck(deck);
        history.push(`/`);
    }
    useEffect(() => {
        const loadDeck = async () => {
            const loadedDeck = await readDeck(deckId);
            setDeck(loadedDeck);
            setLoaded(true);
        }
        loadDeck();
    }, [])
    if(loaded) {
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
                        <li className="breadcrumb-item text-primary" >
                            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                    </ol>
                </nav>
                <p>{deck.name}</p>
                <EditAndCreateForm handleSubmit={handleSubmit} handleChange={handleChange} deck={deck}/>
            </>
        )
    } else {
        return null;
    }

}

export default EditDeckPage;