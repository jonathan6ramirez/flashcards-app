import React from "react";

function EditAndCreateCard ({ handleChange, handleSubmit, handleDone, card}) {
    return (
        <form id="EditAndCreateCardForm">
            <div className="mb-3">
                <label htmlFor="front" className="form-label">Front</label>
                {card ? <textarea 
                className="form-control" 
                id="front"
                name="front"
                placeholder={card.front}
                defaultValue={card.front}
                rows="3"
                onChange={handleChange} 
                required></textarea> :
                <textarea 
                className="form-control" 
                id="front"
                name="front"
                placeholder="Front side of the card" 
                rows="3"
                onChange={handleChange} 
                required></textarea>}
            </div>
            <div className="mb-3">
                <label htmlFor="back" className="form-label">Back</label>
                {card ? <textarea 
                className="form-control" 
                id="back"
                name="back"
                placeholder={card.back}
                defaultValue={card.back}
                rows="3"
                onChange={handleChange} 
                required></textarea> : 
                <textarea 
                className="form-control" 
                id="back"
                name="back"
                placeholder="Back side of card" 
                rows="3"
                onChange={handleChange} 
                required></textarea>}
            </div>
            {card ? 
            <button 
                type="cancel" 
                className="btn btn-secondary"
                onClick={handleDone}
            >
                Cancel
            </button> :
            <button 
                type="cancel" 
                className="btn btn-secondary"
                onClick={handleDone}
            >
                Done
            </button>
            }
            <button 
                type="reset" 
                className="btn btn-primary ms-2"
                onClick={handleSubmit}
            >
                Save
            </button>
        </form>
    )
}

export default EditAndCreateCard;