import {Navbar} from "../../components/navbar";
import {Outlet} from "react-router-dom";

export function Home(){
    return(
        <>
            <Navbar/>
                <Outlet></Outlet>

        </>
    )
}