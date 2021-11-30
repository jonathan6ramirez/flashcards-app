import React from "react";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

function CreateButton () {
    return (
        <div className="row justify-content-center">
            <div className="m-2 col-10">
                <Link to="/decks/new">
                <button type="button" className="btn btn-secondary">+ Create Deck</button>
                </Link>
            </div>
        </div>
    )
}
export default CreateButton;