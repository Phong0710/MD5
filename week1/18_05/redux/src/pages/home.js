
import {Link, Outlet} from "react-router-dom";
import {Header} from "../components/header";
import {Navbar} from "../components/navbar";
import {Footer} from "../components/footer";

export function Home() {
    return (
        <><center>


            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/home'}>List </Link> |
            <Link to={'/home/create'}> Create </Link>

            <hr/>
            <Outlet></Outlet>
            <Footer></Footer>
        </center>
        </>
    )
}