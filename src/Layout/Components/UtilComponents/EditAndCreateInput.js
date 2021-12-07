import React from "react";

function EditAndCreateForm ({ handleSubmit, handleChange, deck }) {
    return (
        <form>
          <div class="mb-3">
            <label for="deckName" class="form-label">Name</label>
            {deck ? <input type="text" 
            class="form-control" 
            id="deckName" 
            placeholder={deck.name} 
            aria-describedby="deckHelp"
            name="name" 
            onChange={handleChange}
            required/> : 
            <input type="text" 
            class="form-control" 
            id="deckName" 
            placeholder="Deck Name" 
            aria-describedby="deckHelp"
            name="name" 
            onChange={handleChange}
            required/>}
          </div>
          <div class="mb-3">
            <div class="form-outline mb-4">
            <label class="form-label" for="deckDescription">Description</label>
              {deck ? <textarea class="form-control" 
              id="deckDescription" 
              placeholder={deck.description} 
              rows="5"
              name="description"
              onChange={handleChange} 
              required></textarea> : 
              <textarea class="form-control" 
              id="deckDescription" 
              placeholder="Brief description of the deck" 
              rows="5"
              name="description"
              onChange={handleChange} 
              required></textarea>
              }
            </div>
          </div>
          <a class="btn btn-secondary" href="/" role="button">Cancel</a>
          <button class="btn btn-primary mx-2" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default EditAndCreateForm;