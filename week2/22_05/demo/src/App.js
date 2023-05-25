import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "./pages/user/login";
import {Register} from "./pages/user/register";
import {Home} from "./pages/home/home";
import {List} from "./pages/home/products/list";
import {Create} from "./pages/home/products/create";
import {Edit} from "./pages/home/products/edit";


function App() {
    let user = useSelector(({user}) => {
        return user.currentUser;
    })

    return (
        <>
            <Routes>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                {
                    user ?
                        <>
                            <Route path={'home'} element={<Home/>}>
                                <Route path={''} element={<List/>}/>
                                <Route path={'create'} element={<Create/>}/>
                                <Route path={'edit/:id'} element={<Edit/>}/>
                            </Route>
                            <Route path={"*"} element={<Navigate to={'home'}/>}/>
                        </>
                        :
                        <>
                            <Route path={"*"} element={<Navigate to={'login'}/>}/>
                        </>
                }

            </Routes>
        </>
    );
}

export default App;