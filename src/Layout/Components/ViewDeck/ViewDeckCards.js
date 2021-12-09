import React from "react";

function ViewDeckCards ({loadedDeck, handleShow, handleEditCardClick}) {
    const cards = loadedDeck.cards;
    //console.log(cards);
    const renderCards = (card, index) => {
        return (
            <div key={index} class="card">
                <div class="card-body">
                    <div className="container">
                        <div className="row row-cols-2 justify-content-between">
                            <div className="col-5">
                                <p>{card.front}</p>
                            </div>
                            <div className="col-5">
                                <p>{card.back}</p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-end">
                            <button type="button" className="btn btn-secondary col-1" onClick={() => handleEditCardClick(card.id)} >Edit</button>
                            <button type="button" className="btn btn-danger ms-2 col-1" onClick={() => handleShow(card.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>{cards.map(renderCards)}</div>
    )
}

export default ViewDeckCards