
import './App.css';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {Home} from "./pages/home";

function App() {
  return (
      <>
          <center>
              <Header color={'red'}></Header>
              <Home/>
              <Footer/>
          </center>

      </>
     );
}

export default App;
