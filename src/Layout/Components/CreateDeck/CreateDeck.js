import React, { useState } from "react";
import EditAndCreateForm from "../EditAndCreateInput";

import { Link, useLocation} from "react-router-dom";
import { createDeck } from "../../../utils/api"; 

function CreateDeck () {
    //const location = useLocation();
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

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log("this is the name value at the time of submission", `"${name}"`);
        //console.log("this the description value at the time of submission", `"${description}"`)
        setDeck({
            ...deck,
            [name]: name,
            [description]: description
        });
        //console.log("this is the deck value before the api call is made to create the deck", deck)
        createDeck(deck);

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