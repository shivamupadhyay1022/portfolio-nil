import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Logo from "./components/Logo";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Intro from "./pages/Intro";
import Main from "./pages/Main";
function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  return (
    <div>
      {/* <div className="mt-4  md:mt-6 ml-4 justify-center items-center" >
      <Logo/>
    </div> */}
      <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/intro" element={<Intro />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
