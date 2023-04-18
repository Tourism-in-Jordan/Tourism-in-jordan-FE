import NavBar from '../NavBar'
import './Header.css'
// import Profile from '../Profile'
// import LoginButton from '../LoginButton'
// import LogoutButton from '../LogoutButton'
export default function Header(){
return (<>
<div className='header' id="header">
<NavBar />

{/* <LoginButton/>
<LogoutButton/>
<Profile/> */}
{/* <h1 id='h1Header'>Tourism IN Jordan</h1> */}
<img id='imgHeader' src='https://cdn.britannica.com/24/153524-050-BA9D084B/Al-Dayr-Petra-Jordan.jpg'/>

</div>

</>)



}