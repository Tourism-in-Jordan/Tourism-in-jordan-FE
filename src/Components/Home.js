import Details from "./Details";
// import Card from "./Weather"
import Card from "./Cards";
import './Home.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState, useRef } from "react";

export default function Home() {

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
        <div className="cards">
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
        <div className="back">
          
            {
                sitesData && sitesData.map(site => {
                    return (
                        <>
                         
                            <div>
                                <Details data={site} />
                            </div>

                        </>

                    )

                })


            }
        </div>
            



        </>

    )
}