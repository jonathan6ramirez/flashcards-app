import React, { useEffect, useState } from "react";
import { listDecks, deleteDeck } from "../../../utils/api";
import {Card, Modal, Button} from "react-bootstrap";
function isPromise(promise) {  
    return !!promise && typeof promise.then === 'function'
}



function ShowDecks ({decks, setDecks}) {

    useEffect(() => {
        async function loadDecks () {
            const decksToShow = await listDecks();
            setDecks(...decks, decksToShow);
        }
            loadDecks();
    }, [])
    //Calls the deleteDeck from the utils api and deletes the deck selected
    const handleDelete = (deckId) => {
        deleteDeck(deckId);
    }

    //Initiate the state for the modal drop down
    const [show, setShow] = useState(false)

    //Make the handle functions for whenever the user clicks the modal and wants to cancel
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderDecks = (deck, index) => {
        return (
            <div key={index} className="row justify-content-center">
                <div className="m-2 col-10">
                    <Card>
                        <Card.Body>
                            <Card.Title>{deck.name}</Card.Title>
                            <Card.Text>{deck.description}</Card.Text>
                            <div className="row">
                                <div className="col-10">
                                    <a href={`/decks/${deck.id}`} className="btn btn-secondary">View</a>
                                    <a href={`/decks/${deck.id}/study`} className="btn ms-2 btn-primary">Study</a>
                                </div>
                                <div className="col-2">
                                    <button type="button" className="btn btn-danger" onClick={handleShow} >Delete</button>
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Delete this deck?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            You will not be able to recover it.
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={handleDelete(deck.id)}>Understood</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    };
    
    if(Array.isArray(decks)){
        if (decks) {
            return (
                <>
                    {decks.map(renderDecks)}
                </>
            )
        } 
    }
    return null;
}
export default ShowDecks