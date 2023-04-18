import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./MapModal.css"

export default function MapModal(props) {
    return (
        <>
            <Modal className="modal-xl" show={props.showMap} onHide={props.handleMapClose}>

                <Modal.Body className="modalBody">
                    <iframe id="map" src={`https://www.google.com/maps/embed/v1/place?q=${props.mapDetails},+Jordan&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}></iframe>
                </Modal.Body>

            </Modal>
        </>
    );
}

// export default function SomeComponent() {  
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [modalData, setModalData] = useState(null);
//     const customStyles = {
//      content: {
//        top: '35%',
//        left: '50%',
//        right: 'auto',
//        bottom: 'auto',
//        marginRight: '-50%',
//        width: '60%',
//        transform: 'translate(-40%, -10%)',
//      },
//    }
//    return (
//      <>
//        <div className="container">
//          {somedata.map(data => (
//            <div className='item' key={data.id} >
//              <img 
//                src={data.img} 
//                alt='' 
//                onClick={()=> {
//                  setModalData(data);
//                  setModalIsOpen(true);
//                }
//              />
//            </div>
//          ))}
//        </div>
//        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
//          <h1>{modalData.title}</h1>
//          <p>{modalData.content}</p> 
//          <div>
//           <button onClick={() => setModalIsOpen(false)}>X</button>
//          </div>
//        </Modal>
//      </>
//    )
//  }