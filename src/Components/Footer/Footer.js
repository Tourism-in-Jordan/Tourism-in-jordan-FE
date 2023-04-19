// import './Footer.css'
// import {  CDBIcon } from 'cdbreact';
// import React, { Component } from 'react';
// export default function Footer() {

//     return (
//         <footer className='footerend' id='footer'>
//         <div class="footer-top">
//             <div class="container">
                
//                 <div class="row">
//                     <div class="col-lg-4">
                        
//                         <h4>About us</h4>
//                         <p>Our first idea is a web site or a mobile app, called (Tourism In Jordan)introduction. Our app will help people to find the best Place to visit in jordan ,
//                             so as a user I can open the web site and it will show the best visted palces in jordan with all discription and
//                             details about each plaece( contain all overview , picutres, location, weather status...), if you liked some places you can (add or delete )it from your favorite list and you can write your feed back about the place .</p>
//                     </div>

//                     <div class="col-md-4">
//                         <h4>Information</h4>
//                         <ul class="address1">
//                         <li><i class="fa fa-map-marker"></i>Jordan-Amman</li>
//                             <li><i class="fa fa-envelope"></i><a href="mailto:#">team@gmail.com</a></li></ul>
//                     </div>

//                     <div class="col-md-4">
//                         <h4>Follow us</h4>
//                         <ul class="social-icon">
//                         <li><a className="facebook" href="https://ltuc-asac.slack.com/archives/C04NW8K1ANT"><CDBIcon fab icon="slack" size="1x"/></a></li>
//                                 <li><a className="github" href="https://github.com/orgs/Tourism-in-Jordan/repositories"><CDBIcon fab icon="github" size="1x"/></a></li>
//                                 <li><a className="dribbble" href="https://discord.com/channels/1065925166925889587/1075389438403817592"><CDBIcon fab icon="discord" size="1x"/></a></li>
//                             </ul>
//                     </div>

//                 </div>
//             </div>
//         </div>
//         <div class="footer-bottom">
            
//                 <div class="row">
//                         <p className='para' >Copyright &copy; 2023 All Rights Reserved by Toures in Jordan
//                         </p>
//                 </div>
            
//         </div>
//     </footer>
//     )


// }

import './Footer.css'
import {  CDBIcon } from 'cdbreact';

import React, { Component } from 'react';


export default function Footer() {

    return (
        <footer className='footerend' id='footer'>
        <div class="footer-top">
            <div class="container">
                
                <div className='type' class="row">
                    <div class="col-lg-4">
                        
                        <h4>About us</h4>
                        <p>Our first idea is a web site or a mobile app, called (Tourism In Jordan)introduction. Our app will help people to find the best Place to visit in jordan ,
                            so as a user I can open the web site and it will show the best visted palces in jordan with all discription and
                            details about each plaece( contain all overview , picutres, location, weather status...), if you liked some places you can (add or delete )it from your favorite list and you can write your feed back about the place .</p>
                    </div>

                    <div style={{paddingLeft:'180px',paddingBottom:"120px"}} class="col-md-4">
                        <h4>Information</h4>
                        <ul class="address1">
                        <li><i class="fa fa-map-marker"></i>Jordan-Amman</li>
                            <li><i class="fa fa-envelope"></i><a href="mailto:#">team@gmail.com</a></li></ul>
                    </div>

                    <div style={{paddingLeft:'120px',paddingBottom:"167px"}} class="col-md-4">
                        <h4>Follow us</h4>
                        <ul class="social-icon">
                        <li><a className="facebook" href="https://ltuc-asac.slack.com/archives/C04NW8K1ANT"><CDBIcon fab icon="slack" size="1x"/></a></li>
                                <li><a className="github" href="https://github.com/orgs/Tourism-in-Jordan/repositories"><CDBIcon fab icon="github" size="1x"/></a></li>
                                <li><a className="dribbble" href="https://discord.com/channels/1065925166925889587/1075389438403817592"><CDBIcon fab icon="discord" size="1x"/></a></li>
                                <li><a className="dribbble" href="https://www.facebook.com"><CDBIcon fab icon="facebook" size="1x"/></a></li>                           
                                <li><a className="dribbble" href="https://www.instagram.com"><CDBIcon fab icon="instagram" size="1x"/></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="footer-bottom">
            
                <div class="row">
                        <p className='para' >Copyright &copy; 2023 All Rights Reserved by Toures in Jordan
                        </p>
                </div>
            
        </div>
    </footer>
    )

}