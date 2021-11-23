import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useLocation
  } from "react-router-dom";

function CreateDeck () {
    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
    )
}

export default CreateDeck