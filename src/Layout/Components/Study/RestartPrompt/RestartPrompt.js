import React from "react";
import { Modal, Button } from "react-bootstrap";

function RestartModal ({show, handleRestart, handleShow, cards, currentCard}) {
    console.log(cards, "this is the card length");
    console.log(currentCard, "this is the currenCard")
    if (currentCard == cards - 1 && cards.length > 3){
        handleShow();
    }
    return (
        <>
            <Modal
                show={show}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                </Modal.Header>
                <Modal.Body className="align-self-center">
                    Restart cards?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" href="/">
                        Cancel
                    </Button>
                    <Button variant="primary"  onClick={handleRestart} >Restart</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default RestartModal;