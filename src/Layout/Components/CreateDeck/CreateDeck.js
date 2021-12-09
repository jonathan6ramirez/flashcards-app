import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import EditAndCreateForm from "../UtilComponents/EditAndCreateInput";
import { createDeck } from "../../../utils/api"; 

function CreateDeck () {
    const history = useHistory();
    //Initialize the states for the inputs and create the handler functions
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [deck, setDeck] = useState({name: "", description: ""});

    const handleChange = ({ target }) => {
        const value = target.value;
        setDeck({
            ...deck,
            [target.name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setDeck({
            ...deck,
            [name]: name,
            [description]: description
        });
        const createdDeck = await createDeck(deck);
        history.push(`/decks/${createdDeck.id}`);
        
        //Clean up
        setName("");
        setDescription("");
        setDeck({});
    }
    
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
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
        <EditAndCreateForm handleSubmit={handleSubmit} 
        handleChange={handleChange} />
        </>
    )
}

export default CreateDeck