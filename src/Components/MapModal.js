import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MapModal(props) {
    return (
        <>

            <Modal show={props.showMap} onHide={props.handleMapClose}>
                
                <Modal.Body>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?q=${props.mapDetails},+Jordan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleMapClose}>
                        Close
                    </Button>
                   
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MapModal;
