import React, { useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import { createCard } from "../../../utils/api";

//Import the components to render the page
import BreadCrumb from "./CreateCardBreadcrub";
import EditAndCreateCard from "../UtilComponents/EditAndCreateCard";

function CreateCardPage () {
    //History object and parameters object
    const history = useHistory();
    const { deckId } = useParams();
    //Initialize the states for the inputs and create the handlers
    const [card, setCard] = useState({ front: "", back: ""});
    const handleChange = ({ target }) => {
        const value = target.value;
        setCard({
            ...card,
            [target.name]: value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        await createCard(deckId, card);
        
        //Clean up
        setCard({ front: "", back: ""});
        document.getElementById("EditAndCreateCardForm").reset();
    }
    const handleDone = () => {
        history.push(`/decks/${deckId}`)
    }
    return (
        <>
            <BreadCrumb />
            <EditAndCreateCard 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            handleDone={handleDone} />
        </>
    )
}

export default CreateCardPage;