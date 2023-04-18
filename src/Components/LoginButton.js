import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

export default function LoginButton() {



    const { loginWithRedirect, isAuthenticated } = useAuth0()
    return (
        !isAuthenticated && (

            <Button variant="outline-success" style={{height:"40px"}} onClick={() => loginWithRedirect()} >Log in</Button>


        )
    )

}
{/* <button style={{backgroundColor:"rgb(177, 178, 179)"}} onClick={()=>loginWithRedirect()} >Log in</button> */ }