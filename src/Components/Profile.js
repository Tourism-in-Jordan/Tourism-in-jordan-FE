import { useAuth0 } from "@auth0/auth0-react";






export default function Profile(){


    
const {user,isAuthenticated}= useAuth0()
    return(
    isAuthenticated&&(
        <div>
           <h3>{user?.name}</h3>
           {user?.picture && <img src={user.picture} />} 
        </div>

    )
)

}