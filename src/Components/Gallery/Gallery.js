import Details from "../Details/Details";
import Card from "../Cards/Cards";
import '../Home/Home.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState, useRef } from "react";
export default function Gallery() {

    const [sitesData, setSitesData] = useState([])
    const { loginWithRedirect, isAuthenticated } = useAuth0()


    async function displayDetails() {

        let url = `${process.env.REACT_APP_SERVER_URL}`
        try {
            let response = await fetch(url)

            let recievedData = await response.json();
            setSitesData(recievedData);

        }
        catch (error) {
            console.log(error)
        }

    }
    // console.log(weather)
    // console.log("sitesData", sitesData)

    useEffect(() => {
        displayDetails()
    }, [])


    return (
        <>
          {/* <div id="page-border"></div> */}
            <h1 id="GalleryHeader">Gallery</h1>
            <div className="HomeCardContainder">
                {
                    sitesData && sitesData.map(site => {
                        return (
                            <>
                                <div>
                                    <Card data={site} />
                                </div>


                            </>

                        )
                    })
                }
            </div>
            <div id="page-border"></div>



        </>

    )
}