import React from 'react';

import './App.css';
import {Login} from "./pages/user/login";
import {Route, Routes} from "react-router-dom";
import {Register} from "./pages/user/register";
import {Home} from "./pages/home/home";

function App() {
  return (
    <>
        <Routes>
            <Route path={'login'} element={<Login/>}></Route>
            <Route path={'register'} element={<Register/>}></Route>
            <Route path={'home'} element={<Home/>}></Route>
        </Routes>
    </>
  );
}

export default App;
