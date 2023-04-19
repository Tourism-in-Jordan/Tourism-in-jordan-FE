import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Weather from "../Weather";
import ImageModal from "../ImageModal/ImageModal";
import MapModal from "../MapModal/MapModal";
import "./Details.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./map.png"

export default function Details(props) {
    const { logout, isAuthenticated } = useAuth0()


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showMap, setShowMap] = useState(false);
    const handleMapClose = () => setShowMap(false);
    const handleMapShow = () => setShowMap(true);

    const [weather, setWeather] = useState('')


    async function addToVisitList() {

        let url = `${process.env.REACT_APP_SERVER_URL}/addVisitList`

        let data = {
            name: props.data.name,
            city: props.data.city,
            image: props.data.image,
            overview: props.data.overview,
            feedback: "",
        }

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })


    }

    function getWeather() {

        let url = `${process.env.REACT_APP_SERVER_URL}/weather/${props.data.city}`;
        axios.get(url).then(result => {
            setWeather(result.data.main)

        })

    }

    useEffect(() => {
        getWeather()
    }, [])
    return (
        <>
            {
                <>
                    <div className="imgBack">
                        <div id={props.data.id} className="description">

                            <div id="description-Left" >
                                <div><h1 className="site">{props.data.name}</h1>
                                <br></br>
                                    <h5 className="cityName">{`${props.data.city}`}</h5>
                                    <Weather className="temp"  data={weather} />
                                    <p className="overview">{props.data.overview}</p></div>
                                <div id="description-Left-icons" >
                                    <Link id="link" onClick={handleMapShow}>
                                        <div id="ico2">
                                            <img src={require('./map.png')} alt="image" />
                                        </div>
                                    </Link>
                                    {isAuthenticated && (<Link id="link" onClick={addToVisitList}>
                                        <div id="ico">
                                            <img src={require('./add.png')} alt="image" />
                                            <p id="VisitListP" >Add to Visit List</p>
                                        </div>
                                    </Link>)}
                                </div>

                            </div>
                            <div id="description-Right" >

                                <>
                                    {/* <button onClick={addToVisitList}>Add to visit List</button> */}
                                    <div id="pictures">
                                        {/* <img src={props.data.image.imageUrl_2} alt="image" />
                                            <img src={props.data.image.imageUrl_3} alt="image" />
                                            <img src={props.data.image.imageUrl_4} alt="image" /> */}
                                        <Carousel id='descSlider' >
                                            <Carousel.Item interval={4000} fade={false} >
                                                <img
                                                    className="imageModal"
                                                    src={props.data.image.imageUrl_1}
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item interval={4000} fade={false} >
                                                <img
                                                    className="imageModal"
                                                    src={props.data.image.imageUrl_2}
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item interval={4000} fade={false}>
                                                <img
                                                    className="imageModal"
                                                    src={props.data.image.imageUrl_3}
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item interval={4000} fade={false}>
                                                <img
                                                    className="imageModal"
                                                    src={props.data.image.imageUrl_4}
                                                />
                                            </Carousel.Item>
                                        </Carousel>
                                    </div>
                                </>

                            </div>
                        </div>
                        <div id="Main-img">
                            <img src={props.data.image.imageUrl_1} alt="image" />
                        </div>
                        <div className="desc-links">
                        </div>
                        <div id="page-border"></div>
                    </div>
                    <div>
                        <ImageModal show={show} handleClose={handleClose} imageDetails={props.data} />
                        <MapModal showMap={showMap} handleMapClose={handleMapClose} mapDetails={props.data.name} />
                    </div>
                </>
            }
        </>
    )
}