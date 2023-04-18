import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";




export default function LogoutButton(){
const {logout,isAuthenticated}= useAuth0()
    return(
    isAuthenticated&&(
         <Button variant="outline-danger" style={{height:"40px"}} onClick={()=>logout()} >Log out</Button>
    )
)

}

{/* <Button style={{backgroundColor:"rgb(177, 178, 179)"}} onClick={()=>logout()} >Log out</Button> */}