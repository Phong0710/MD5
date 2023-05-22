import './App.css';

import {Route, Routes} from "react-router-dom";
import {List} from "./pages/list";
import {Create} from "./pages/create";
import {Edit} from "./pages/edit";
import {Admin} from "./pages/admin";
import {Home} from "./pages/home";

function App() {

    return (
        <>
            <Routes>
                <Route path={'/home'} element={<Home/>}>
                    <Route path={'/home'} element={<List/>}></Route>
                    <Route path={'/home/create'} element={<Create/>}></Route>
                    <Route path={'/home/edit/:id'} element={<Edit/>}></Route>

                </Route>
                <Route path={'/admin'} element={<Admin/>}></Route>

            </Routes>
        </>
    );
}

export default App;
