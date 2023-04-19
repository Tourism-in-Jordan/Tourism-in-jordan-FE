import NavBar from '../NavBar/NavBar';
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
export default function Header() {
    return (<>

        <NavBar />
        <div className='header' id="header">


            <div id='DivOfHeader'>
                <h1 id='h1OfHeader'>Tourism In Jordan</h1><br></br>
                <h3 id='h3OfHeader'>This Webpage will help you discover best places to visit in Jordan </h3>
                {/* <p id="pOfHeader">The Hashemite Kingdom of Jordan is strategically <br/>located in the Middle East. Bound by Syria to<br/> the north, Iraq to the northeast, <br/>Saudi Arabia  to the east and south,<br/> the Red Sea to the south.</p> */}
            </div>

            <div >

                <Carousel id='CarouselInHeader' className='removeStyle' >
                    <Carousel.Item interval={7000} className='slower'>
                        <img
                            className='CarouselImg'
                            src='https://rare-gallery.com/uploads/posts/877312-Wadi-Rum-Village-Jordan-Sky-Desert-Mountains-Sand.jpg'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000} className='slower'>
                        <img
                            className='CarouselImg'
                            src='https://jordantraveler.com/wp-content/uploads/2022/02/7-Days-in-Jordan-Hero.png'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000} className='slower'>
                        <img
                            className='CarouselImg'
                            src='https://www.muchbetteradventures.com/magazine/content/images/2022/09/wadi-rum.jpg'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000} className='slower'>
                        <img
                            className='CarouselImg'
                            src='https://images.squarespace-cdn.com/content/v1/58d207cc579fb3df6993f527/1584644586038-08CNAD31EIZ5OCXBDB66/Landscape+Photograph+of+the+tourist+cabin+at+Dibeen+Forest+Jordan+by+Jordan+Landscape+Photographer+Rashad+Anabtawi?format=1500w'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000} className='slower'>
                        <img
                            className='CarouselImg'
                            src='https://images.unsplash.com/photo-1598417642835-f05aa7bd7702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000} className='slower'>
                        <img
                            className='CarouselImg'
                            src='https://jtt.com.jo/wp-content/uploads/2022/05/shutterstock_1459910990-900x600.jpg'
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="page-border"></div>
        </div>

    </>)



}