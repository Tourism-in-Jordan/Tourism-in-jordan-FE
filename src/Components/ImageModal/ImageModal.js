import Carousel from 'react-bootstrap/Carousel';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ImageModal.css"
function ImageModal(props) {
  return (

    <Modal className="modal-xl" id='imgmodal' show={props.show} onHide={props.handleClose} >

      <Modal.Body id='imageBody' >
        <Carousel id='slider' >
          <Carousel.Item className='ImageModalCarousel' interval={5000}>
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_1}
              alt={props.imageDetails.name}
            />
          </Carousel.Item>
          <Carousel.Item  className='ImageModalCarousel' interval={5000} >
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_2}
              alt={props.imageDetails.name}
            />
          </Carousel.Item>
          <Carousel.Item className='ImageModalCarousel' interval={5000}>
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_3}
              alt={props.imageDetails.name}
            />
          </Carousel.Item>
          <Carousel.Item className='ImageModalCarousel' interval={5000}>
            <img
              className="imageModal"
              src={props.imageDetails.image.imageUrl_4}
              alt={props.imageDetails.name}
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
   
    </Modal>

  )
}
export default ImageModal;