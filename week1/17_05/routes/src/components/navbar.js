import {Link} from "react-router-dom";

export function Navbar(){
    return(
        <>
        <Link to={'/home'}>Home</Link> |
        <Link to={'/admin'}>Admin</Link>
            <hr/>
        </>
    )
}