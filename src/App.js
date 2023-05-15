import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/About"  element={<About/>}/>
        <Route path="/Project"  element={<Project/>}/>
        <Route path="/Contact"  element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
