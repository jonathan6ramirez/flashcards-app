import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//Import the util functions needed to create and update a card
import { createCard } from "../../../utils/api/index";

function EditAndCreateCard ({ changeHandler, handleSubmit, deck}) {
    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Front</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Back</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default EditAndCreateCard;