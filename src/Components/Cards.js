
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import './Cards.css'
export default function Cards(props) {
    return (
        <>
            {
                
                
                    <div  className='card'>
                       

                        
                          <div className="siteName">  <h3 >{props.data.name}</h3> </div>  
                            <img id='imgCard' src={props.data.image.imageUrl_1} alt="image" />

                        
                        

                   


                    </div>




            

            }


            {/* <Card id='card'  style={{ width: '20rem' }} >

                <Card.Body>
                    <Card.Title>{props.data.name}</Card.Title>
                    <Card.Img id='img' variant="top" src={props.data.image.imageUrl_1} />

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}

        </>

    )



}



