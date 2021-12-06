import React, { useState } from "react";
import EditAndCreateForm from "../EditAndCreateInput";

import { Link, useLocation} from "react-router-dom";
import { createDeck } from "../../../utils/api"; 

function CreateDeck () {
    //const location = useLocation();
    //Initialize the states for the inputs and create the handler functions
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [deck, setDeck] = useState({});
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value)
    //Console log the name and description to see the values
    console.log("this is the name value", name);
    console.log("this is the description value", description);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDeck({name, description});
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
        handleNameChange={handleNameChange} 
        handleDescriptionChange={handleDescriptionChange} />
        </>
    )
}

export default CreateDeck