import React from "react";

function BreadCrumb ({ deck, card}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item">{deck.name}</li>
                <li className="breadcrumb-item active" aria-current="page">Edit Card {card.id}</li>
            </ol>
        </nav>
    )
}

export default BreadCrumb;