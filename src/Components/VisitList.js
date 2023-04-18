import { useEffect, useState, useRef } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth0 } from '@auth0/auth0-react';
import './Header/Header.css'
import './VisitList.css'



export default function VisitList(props) {
    const commentRef = useRef();
    const [visitList, setVisitList] = useState([]);
    const {loginWithRedirect,isAuthenticated}= useAuth0()
    async function getVisitList() {
        let url = `${process.env.REACT_APP_SERVER_URL}/vistList`;
        let response = await fetch(url, {
            method: 'GET',
        })
        let recivedData = await response.json();
        setVisitList(recivedData);
    }
    async function handleDelete(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;

        let response = await fetch(url, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (response.status === 204) {
            getVisitList();
        }
    }
    async function handleUpdate(event,id) {
        event.preventDefault();

        let url = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
        // let userComment = commentRef.current.value;
        let data = {
            feedback: event.target.feedback.value
        }
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        getVisitList();
    }
    useEffect(() => {
        getVisitList();
    }, [])
    return (
        isAuthenticated&&( 
        <>

            <div id='cards' className='cards'>

                {
                    visitList && visitList.map(site => {
                        console.log(site.id)
                        return (
                            <div  id='card'>
                                <Card id='incard' >
                                    <Card.Img id="img" variant="top" src={site.image} />
                                    <Card.Body>
                                        <Card.Title>{site.name}</Card.Title>
                                        
                                        <Form onSubmit={(event) => handleUpdate(event, site.id)}>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control name="feedback" placeholder='Add feedback here' as="textarea" rows={1} ref={commentRef} />
                                                {site.feedback ? site.feedback : "No Feedback yet! "}
                                            </Form.Group>
                                            <Button variant="primary" type="submit" > Edit Feedback </Button>
                                        <Button variant="danger" onClick={() => handleDelete(site.id)}>
                                            Delete
                                        </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </>
    ))
}