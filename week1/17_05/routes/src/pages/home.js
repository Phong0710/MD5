import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Link, Outlet} from "react-router-dom";
import {Navbar} from "../components/navbar";

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