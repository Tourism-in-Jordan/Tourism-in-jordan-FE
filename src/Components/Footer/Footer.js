import './Footer.css'

import React, { Component } from 'react';


export default function Footer() {

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Our first idea is a web site or a mobile app, called (Tourism In Jordan)introduction. Our app will help people to find the best Place to visit in jordan ,
                            so as a user I can open the web site and it will show the best visted palces in jordan with all discription and
                            details about each plaece( contain all overview , picutres, location, weather status...), if you liked some places you can (add or delete )it from your favorite list and you can write your feed back about the place .</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="https://www.visitpetra.jo/">Petra</a></li>
                            <li><a href="https://www.lonelyplanet.com/jordan/jerash-and-the-north/umm-qais">Om-Qais</a></li>
                            <li><a href="https://international.visitjordan.com/Wheretogo/The-Dead-Sea">Dead sea</a></li>
                            <li><a href="https://www.lonelyplanet.com/jordan/jerash-and-the-north/jerash/attractions/
                      roman-ruins-of-jerash/a/poi-sig/1456891/361072">Jarash Ruinsa</a></li>
                            <li><a href="https://universes.art/en/art-destinations/jordan/ajloun/ajloun-castle">Ajloun Castle</a></li>
                            <li><a href="https://www.fareswadirum.com/jeep-tours?gclid=CjwKCAjwue6hBhBVEiwA9YTx8JukFEZZEHfuLvqr0T
                      LLp_Y-aQcuTWJ5NXxGalPEFAxMeYKZXIMC9BoC6joQAvD_BwE">Wadi Rum</a></li>
                            <li><a href="https://aqaba.jo/Pages/Details/Attraction/14/Aqaba_Beaches_">Aqaba Beach</a></li>
                            <li><a href="https://www.touristjordan.com/top-3-roman-ruins-jordan/">Roman Ruins</a></li>
                            <li><a href="https://international.visitjordan.com/Wheretogo/Wadi-Mujib">Roman Ruins</a></li>
                            <li><a href="https://international.visitjordan.com/Wheretogo/Wadi-Mujib">Wadi Mujib</a></li>
                            <li><a href="https://universes.art/en/art-destinations/jordan/desert-castles/qusayr-amra">Qasr Amra</a></li>
                            <li><a href="https://universes.art/en/art-destinations/jordan/desert-castles/qasr-al-mshatta">Qasr Al-Mshatta</a></li>
                            <li><a href="https://universes.art/en/art-destinations/jordan/iraq-al-amir/qasr-al-abd">Qasr al-Abd</a></li>
                            <li><a href="https://museums.visitjordan.com/en/Museum/22">The Royal Automobile Museum</a></li>
                            <li><a href="https://en.wikipedia.org/wiki/Dibbeen_Forest_Reserve">Dibbeen Forest Reserve</a></li>

                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/">Home</a></li>
                            <li><a href="http://scanfcode.com/contact/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">VisitList</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">connect us</a></li>

                        </ul>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by Toures in Jordan

                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

