import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export function Navbar(){
    const user = useSelector(({user})=>{
        console.log(user)
        return user.currentUser;
    })
    return(
        <>
            <Link to={'/home'}>Trang chu</Link> |
            <Link to={'/home/create'}> Them moi</Link>
            User : {user.username}
            <hr/>
        </>

    )
}