
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home";
import {Admin} from "./pages/admin";
import {Create} from "./pages/create";
import {List} from "./pages/list";
import {Edit} from "./pages/edit";

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
