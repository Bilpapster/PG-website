import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Athletics from "./pages/AthleticsPage";

function App() {

  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate('./pages/Athletics')
  }


  return (
    <div className="App">
      <div className="text-primary font-firaSans selection:text-white selection:bg-secondary">
        <Header id='header'/>
        <Main />
        <Footer id="footer" />
      </div>

      <Routes>
          <Route path="./pages/Athletics" element={<Athletics />} />
          {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
