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

    //States for the input change and sumbit event
    //const [name, setName] = useState("");
    //const [description, setDescription] = useState("");
    const [deckToUpdate, setDeckToUpdate] = useState({name: "", description: "", id: deckId});
    const handleChange = ({ target }) => {
        const value = target.value;
        setDeckToUpdate({
            ...deckToUpdate,
            [target.name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(deckToUpdate);
        await updateDeck(deckToUpdate);
        history.push(`/decks/${deckToUpdate.id}/edit`);
        
        //Clean up
        setDeckToUpdate({name: "", description: "", id: deckId})
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
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="#!" data-abc="true">
                                <i class="bi bi-house-door-fill"></i>
                            </a>
                            <Link to="/">Home</Link>
                        </li>
                        <li class="breadcrumb-item text-primary">{deck.name}</li>
                        <li class="breadcrumb-item active" aria-current="page">Edit Deck</li>
                    </ol>
                </nav>
                <EditAndCreateForm handleSubmit={handleSubmit} handleChange={handleChange} deck={deck}/>
            </>
        )
    } else {
        return null;
    }

}

export default EditDeckPage;