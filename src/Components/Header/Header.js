import NavBar from '../NavBar'
import './Header.css'
import Profile from '../Profile'
import LoginButton from '../LoginButton'
import LogoutButton from '../LogoutButton'
export default function Header(){
return (<>
<div className='header' id="header">
<NavBar />

<LoginButton/>
<LogoutButton/>
<Profile/>
</div>
</>)



}