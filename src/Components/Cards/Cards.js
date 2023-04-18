
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './Cards.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageModal from '../ImageModal/ImageModal';
export default function Cards(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {

                <div className='DisplayCard'>
                    <Link id="link" onClick={handleShow}>
                        <h3 className="siteName" >{props.data.name}</h3>
                        <img id='imgCard' src={props.data.image.imageUrl_1} alt="image" />
                    </Link>
                </div>
            }
            <ImageModal show={show} handleClose={handleClose} imageDetails={props.data} />
            
        </>
    )
}



