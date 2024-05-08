import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Athletics from "./pages/AthleticsPage";

function App() {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate("./pages/Athletics");
  };

  return (
    <div className="App">
      <div className="text-primary font-firaSans selection:text-white selection:bg-secondary">
        {/* <Header id='header'/> */}
        <Navbar id="header" />
        <Main />
        <Footer id="footer" />
      </div>

      {/* code from online tutorial https://www.youtube.com/watch?v=I2UBjN5ER4s&t=195s */}
      {/* <Router>
        <Navbar>the navbar is a custom component</Navbar>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router> */}

      <Routes>
        <Route path="./pages/Athletics" element={<Athletics />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
