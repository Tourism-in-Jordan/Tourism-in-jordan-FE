import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ImageModal.css"
function ImageModal(props) {
  return (

    <Modal className="modal-xl" id='imgmodal' show={props.show} onHide={props.handleClose} >
      {/* <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header> */}
      <Modal.Body id='imageBody' >
        <Carousel id='slider' >
          <Carousel.Item interval={1000}>
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_1}
              alt={props.imageDetails.name}
            />
            <Carousel.Caption>
              <h3>{props.imageDetails.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_2}
              alt={props.imageDetails.name}
            />
            <Carousel.Caption>
              <h3>{props.imageDetails.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_3}
              alt={props.imageDetails.name}
            />
            <Carousel.Caption>
              <h3>{props.imageDetails.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_4}
              alt={props.imageDetails.name}
            />
            <Carousel.Caption>
              <h3>{props.imageDetails.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>

  )
}
export default ImageModal;