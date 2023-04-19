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

                <Carousel id='CarouselInHeader' >
                    <Carousel.Item>
                        <img
                            className='CarouselImg'
                            src='https://imgy.pro/jordannews/993x560/1202226182343303138684.jpg'
                            alt=""
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='CarouselImg'
                            src='https://res.cloudinary.com/odysseytraveller/image/fetch/f_auto,q_auto,dpr_auto,r_4,w_765,h_535.5,c_limit/https://cdn.odysseytraveller.com/app/uploads/2020/01/South-Theatre-in-the-Jerash-ruins-Jordan-GettyImages-1160888630.jpg'
                            alt=""
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://cdn.britannica.com/24/153524-050-BA9D084B/Al-Dayr-Petra-Jordan.jpg '
                            alt=""
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoidaj7m5fAdddTbEDluLmyW5GNMlNI10rETPINxHF6ORXsmnpymcNirLTMAZ73-jAj2o&usqp=CAU'
                            alt=""
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://images.unsplash.com/photo-1577199898413-f50a4309e48f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80'
                            alt=""
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://images.unsplash.com/photo-1630158922952-a92c88afbc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                            alt=""
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://images.unsplash.com/photo-1589159856415-286795c9eb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80d/amman-jordan-1660716296-390X219.jpg'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://i.guim.co.uk/img/media/db7c313dfbed3f7c620a5d9ae7ee6b9d6b26ed85/0_204_4600_2760/master/4600.jpg?width=620&quality=85&auto=format&fit=max&s=5525614f43f74d6215892349b642e978'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://images.unsplash.com/photo-1598417642835-f05aa7bd7702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                            alt=""
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className='CarouselImg'
                            src='https://images.unsplash.com/photo-1627734383978-627095b4ac05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
                            alt=""
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div id="page-border"></div>
        </div>

    </>)



}