import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//Import the util functions needed to create and update a card
import { createCard } from "../../../utils/api/index";

function EditAndCreateCard ({ handleChange, handleSubmit, handleDone, deck}) {
    return (
        <form id="EditAndCreateCardForm">
            <div class="mb-3">
                <label for="front" class="form-label">Front</label>
                {deck ? <textarea 
                class="form-control" 
                id="front"
                name="front"
                placeholder={deck.front}
                rows="3"
                onChange={handleChange} 
                required></textarea> :
                <textarea 
                class="form-control" 
                id="front"
                name="front"
                placeholder="Front side of the card" 
                rows="3"
                onChange={handleChange} 
                required></textarea>}
            </div>
            <div class="mb-3">
                <label for="back" class="form-label">Back</label>
                {deck ? <textarea 
                class="form-control" 
                id="back"
                name="back"
                placeholder={deck.back} 
                rows="3"
                onChange={handleChange} 
                required></textarea> : 
                <textarea 
                class="form-control" 
                id="back"
                name="back"
                placeholder="Back side of card" 
                rows="3"
                onChange={handleChange} 
                required></textarea>}
            </div>
            <button 
                type="cancel" 
                class="btn btn-secondary"
                onClick={handleDone}
            >
                Done
            </button>
            <button 
                type="reset" 
                class="btn btn-primary ms-2"
                onClick={handleSubmit}
            >
                Save
            </button>
        </form>
    )
}

export default EditAndCreateCard;