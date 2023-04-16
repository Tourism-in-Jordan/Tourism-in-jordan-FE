
import ImageModal from "./ImageModal";
import {useState} from 'react';
import MapModal from "./MapModal";

function Home(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
      {
            props.citys.map(details =>{
                return(
                    <>
                    <ImageModal show={show}  handleClose={handleClose} imageDetails = {props.details}  />
                    <MapModal show={show}  handleClose={handleClose} mapDetails = {props.details.name}  />
                    </>
                )
            })
        }
    
      </>
    );
  }
  
  export default Home;