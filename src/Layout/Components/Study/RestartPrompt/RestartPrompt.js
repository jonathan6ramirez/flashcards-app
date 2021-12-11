import React from "react";
import { Modal, Button } from "react-bootstrap";

function RestartModal ({show, handleRestart}) {
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