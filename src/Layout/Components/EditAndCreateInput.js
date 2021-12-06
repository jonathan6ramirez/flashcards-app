import React from "react";

function EditAndCreateForm ({ handleSubmit, handleNameChange, handleDescriptionChange }) {
    return (
        <form>
          <div class="mb-3">
            <label for="deckName" class="form-label">Name</label>
            <input type="text" 
            class="form-control" 
            id="deckName" 
            placeholder="Deck Name" 
            aria-describedby="deckHelp" 
            onChange={handleNameChange}
            required/>
          </div>
          <div class="mb-3">
            <div class="form-outline mb-4">
            <label class="form-label" for="deckDescription">Description</label>
              <textarea class="form-control" 
              id="deckDescription" 
              placeholder="Brief description of the deck" 
              rows="5"
              onChange={handleDescriptionChange} 
              required></textarea>
            </div>
          </div>
          <a class="btn btn-secondary" href="/" role="button">Cancel</a>
          <button class="btn btn-primary mx-2" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default EditAndCreateForm;