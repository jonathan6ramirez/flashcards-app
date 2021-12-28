import React from "react";

function EditAndCreateForm ({ handleSubmit, handleChange, deck }) {
    return (
        <form>
          <div className="mb-3">
            <label htmlFor="deckName" className="form-label">Name</label>
            {deck ? (
              <input type="text" 
              className="form-control" 
              id="deckName" 
              placeholder={deck.name}
              defaultValue={deck.name} 
              aria-describedby="deckHelp"
              name="name" 
              onChange={handleChange}
              required/>
            ) 
              :( 
                <input type="text" 
                className="form-control" 
                id="deckName" 
                placeholder="Deck Name" 
                aria-describedby="deckHelp"
                name="name" 
                onChange={handleChange}
                required/>
              )}
          </div>
          <div className="mb-3">
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="deckDescription">Description</label>
              {deck ? (
                <textarea className="form-control" 
                id="deckDescription" 
                placeholder={deck.description}
                defaultValue={deck.description} 
                rows="5"
                name="description"
                onChange={handleChange} 
                required></textarea>
              ) 
                :( 
                <textarea className="form-control" 
                id="deckDescription" 
                placeholder="Brief description of the deck" 
                rows="5"
                name="description"
                onChange={handleChange} 
                required></textarea>
                )}
            </div>
          </div>
          {deck ? <a className="btn btn-secondary" href={`/decks/${deck.id}`} role="button">Cancel</a>:
          <a className="btn btn-secondary" href="/" role="button">Cancel</a>}
          <button className="btn btn-primary mx-2" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default EditAndCreateForm;