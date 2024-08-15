import Alerts from "./Components/Alerts";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import About from "./Components/About";
import react, { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  
  let [mode, setMode] = useState("Dark")
  let [alert, setAlert] = useState(null)
  
  
  let changeMode = () => {
    if (mode == "Dark") {
      setMode("Light");
      document.body.style.backgroundColor = "#1f1b41";
      changeAlert("Dark mode enabled", "danger")
    }
    else {
      setMode("Dark");
      document.body.style.backgroundColor = "white";
      changeAlert("Light mode enabled", "success")
    }
  }


  let changeAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  return (
    <BrowserRouter>
      <Navbar mode={mode} changeMode={changeMode} />
      <Routes>
        <Route path="/" element={<TextArea mode={mode} changeMode={changeMode} changeAlert={changeAlert} />} />
        <Route path = '/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
