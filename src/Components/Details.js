import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Weather from "./Weather";
import ImageModal from "./ImageModal";
import MapModal from "./MapModal";
import "./Details.css";
import { useAuth0 } from "@auth0/auth0-react";


export default function Details(props) {
    // console.log(props.data.city,"props.data")
    const {logout,isAuthenticated}= useAuth0()


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

        // console.log(1111111111,data)
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
        // let url = `https://tourism-in-jordan2.onrender.com/weather/amman`;
        axios.get(url).then(result => {
            setWeather(result.data.main)
            // console.log(result.data)
        })

    }

    useEffect(() => {
        getWeather()
    }, [])

    // console.log(55555555,weather)
    return (
        <>
            {
                <>
                    <div>
                        <div id={props.data.id} className="description">
                            <h3  className="siteName">{props.data.name}</h3>
                            <Weather data={weather} />
                            <img src={props.data.image.imageUrl_1} alt="image" />
                            <h5 className="cityName">{props.data.city}</h5>
                            <p className="overview">{props.data.overview}</p>
                            <button onClick={handleShow}>Show Modal</button>
                            <button onClick={handleMapShow}>Show Map</button>
                            {isAuthenticated &&(
                            <button onClick={addToVisitList}>Add to visit List</button>
                            )}
                        </div>

                    </div>

                    <div>
                        <ImageModal show={show} handleClose={handleClose} imageDetails={props.data} />
                        <MapModal showMap={showMap} handleMapClose={handleMapClose} mapDetails={props.data.name} />
                        <></>
                    </div>
                </>

            }

        </>
    )
}