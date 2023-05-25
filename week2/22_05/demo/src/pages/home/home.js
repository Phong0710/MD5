
import {Outlet} from 'react-router-dom';
import {NavBar} from "../../components/navbar";

export function Home() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}