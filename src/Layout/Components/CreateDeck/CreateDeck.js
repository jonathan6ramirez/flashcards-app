import React from "react";
import EditAndCreateForm from "../EditAndCreateInput";

import { Link, useLocation} from "react-router-dom"; 

function CreateDeck () {
    //const location = useLocation();
    const handleSumbit = () => {
        console.log("the submit button was clicked")
        console.log("--this is the ouput from uselocation")
    }
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#!" data-abc="true">
                        <i class="bi bi-house-door-fill"></i>
                    </a>
                    <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
        <EditAndCreateForm handleSumbit={handleSumbit} />
        </>
    )
}

export default CreateDeck