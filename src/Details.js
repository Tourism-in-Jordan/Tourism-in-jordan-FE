import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Weather from "./Weather";


export default function Details(props) {
    // console.log(props.data.city,"props.data")

    const [weather, setWeather] = useState('')

    function getWeather() {

        let url = `${process.env.REACT_APP_SERVER_URL}/weather/${props.data.city}`;
        // let url = `https://tourism-in-jordan2.onrender.com/weather/amman`;
        axios.get(url).then(result=>{
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
                
                weather?(
                    <div id={props.data.id} className="description">
                    <h3 className="siteName">{props.data.name}</h3>
                    <Weather data={weather} />
                    <img src={props.data.image.imageUrl_1} alt="image" />
                    <h5 className="cityName">{props.data.city}</h5>
                    <p className="overview">{props.data.overview}</p>
                     </div>
                ):<p>Empty</p>
                
        }


        </>
    )
}