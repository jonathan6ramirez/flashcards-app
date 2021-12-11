import React from "react";

function BreadCrumb ({ deck, card}) {
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item">{deck.name}</li>
                <li class="breadcrumb-item active" aria-current="page">Edit Card {card.id}</li>
            </ol>
        </nav>
    )
}

export default BreadCrumb;