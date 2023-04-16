import Details from "./Details"
// import Card from "./Weather"

import { useEffect, useState, useRef } from "react";

export default function Home() {

    const [sitesData, setSitesData] = useState([])



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
            {
                sitesData && sitesData.map(site => {
                    return (
                        <>
                            <div>
                                {/* <Card data={site} /> */}
                            </div>
                            <div>
                                <Details data={site} />
                            </div>


                        </>

                    )

                })


            }
        </>
    )
}