import { useAuth0 } from "@auth0/auth0-react";
import './Profile.css'

export default function Profile(){ 
const {user,isAuthenticated}= useAuth0()
    return(
    isAuthenticated&&(
        <div id="profile">
           {user?.picture && <img id="imgProfile" src={user.picture}/>}
           {/* <br></br> */}
           {/* <h4 id="userName">{user?.name} </h4> */}
        </div>

    )
)
}