import React from 'react';

import {Login} from "./pages/user/login";
import {Route, Routes} from "react-router-dom";
import {Register} from "./pages/user/register";
import {Home} from "./pages/home/home";
import {List} from "./pages/home/products/list";

function App() {
  return (
    <>
        <Routes>
            <Route path={'login'} element={<Login/>}></Route>
            <Route path={'register'} element={<Register/>}></Route>
            <Route path={'home'} element={<Home/>}>
                <Route path={''} element={<List/>}></Route>
                <Route path={'create'} element={<List/>}></Route>
            </Route>
        </Routes>
    </>
  );
}

export default App;
