import { useEffect, useState, useRef } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export default function VisitList(props) {
    const commentRef = useRef();
    const [visitList, setVisitList] = useState([]);

    async function getVisitList() {
        let url =process.env.REACT_APP_SERVER_URL;
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
    async function handleUpdate(id) {
        let url = `${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
        let userComment = commentRef.current.value;
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({comments: userComment}),
        })
        getVisitList();
    }
    useEffect(() => {
        getVisitList();
    }, [])
    return (
        <>
            <h2>Welcome to Visit List Page</h2>
            <div id='cards'>

                {
                    visitList && visitList.map(site => {
                        return (
                            <div id='card'>
                                <Card id='incard'>
                                    <Card.Img id="img" variant="top" src={site.image} />
                                    <Card.Body>
                                        <Card.Title>{site.name}</Card.Title>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            {site.feedback ? site.feedback : "No comment "}
                                            <br></br>
                                            <Form.Control id="textarea" ref={commentRef} as="textarea" rows={1} placeholder="Update your comment" />
                                        </Form.Group>
                                        <Button variant="danger" onClick={() => handleDelete(site.id)}>
                                            Delete </Button>
                                        <Button variant="info" onClick={() => handleUpdate(site.id)}>
                                            UPDATE </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}