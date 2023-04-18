
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './Cards.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';
export default function Cards(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {

                    <div  className='card'>
                        <Link id="link" onClick={handleShow}>
                          <h3 className="siteName" >{props.data.name}</h3> 
                            <img id='imgCard' src={props.data.image.imageUrl_1} alt="image" />
                        </Link>
                    </div>
            }
                        <ImageModal show={show} handleClose={handleClose} imageDetails={props.data} />
            {/* <Card id='card'  style={{ width: '20rem' }} >

                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Img id='img' variant="top" src={props.data.image.imageUrl_1} />

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}

        </>

    )



}



