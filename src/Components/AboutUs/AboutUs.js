import "./AboutUs.css";
import { CDBIcon } from 'cdbreact';

export default function AboutUs() {
  const TeamData = require("./teamData.json")
  return (
    <div className="alldivend">

      <h1 className='AboutUs_h1'> ABOUT US </h1>
      <div>
        <h5 className='AboutUs_h5'>We are, Tourisum team, This project thats help people to see a tourisum places in jordan </h5 >
      </div>

      <h1 className='AboutUs_h1'> Team members</h1>
      <div className="all">
        {TeamData.map(item =>
          <div class="TeamCard">
            <div class="upper">
              <a href={item.github} ><img className="imgAboutUs" src={item.img} /></a>
            </div>
            <h3 className="h3AboutUs">{item.name}</h3>
            <h4 className="h4AboutUs">Full Stack Developer</h4>
            <div class="social">
           
           
       
            </div>
          </div>
        )}
      </div>
      <br></br><br></br>
    </div>
  );
}