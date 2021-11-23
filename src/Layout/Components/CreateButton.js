import React from "react";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function CreateButton () {
    return (
        <Link to="/decks/new">
        <button type="button" class="btn btn-secondary">+ Create Deck</button>
        </Link>
    )
}
export default CreateButton;