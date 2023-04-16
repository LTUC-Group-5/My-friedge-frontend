
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home/Home"
import Favorates from "./components/Favorates/Favorates"
import Search from "./components/Search/Search";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  //IMPORTANT create .env file and make it on the same level as package.json
  let serverURL = process.env.REACT_APP_SERVER_URL;

  return (
    <Router>
      <div className="App">
        {/* <NavBar/> */}
        <Routes>

          <Route exact path='/' element={<></>}>
          </Route>

          <Route exact path='/Favorates' element={<></>}>
          </Route>

          <Route exact path='/Search' element={<></>}>
          </Route>

        </Routes>
        {/* <Footer/> */}

        {/* add your tests in the TEST div an HTML elment */}
        
        <div id='TEST'>
        </div>
        <h1>hello</h1>
      </div>
    </Router>
  );
}

export default App;