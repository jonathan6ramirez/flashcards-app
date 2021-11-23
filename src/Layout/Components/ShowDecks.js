import React from "react";
import { listDecks } from "../../utils/api";

function ShowDecks () {
    const decksToShow = listDecks();
    console.log(decksToShow);
    return decksToShow;
}