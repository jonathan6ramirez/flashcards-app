import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Import util functions
import { readDeck } from "../../../utils/api/index";


function BreadCrumb () {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({})
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const loadDeck = async () => {
            let deckloaded = await readDeck(deckId);
            setDeck(deckloaded);
            setLoaded(true);
        }
        loadDeck();
    }, [deckId])
    if(loaded){
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item text-primary">{deck.name}</li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
        )
    } else {
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item text-primary">Loading...</li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
        );
    }

}

export default BreadCrumb;