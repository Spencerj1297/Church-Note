import "./App.css";
import React, {useState} from "react"
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Notes from "./pages/Notes"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import ProtectedHome from "./pages/ProtectedHome";


function App(): JSX.Element {

  const [showlogin, setShowLogin] = useState<boolean>(false);
  const [dropDownVisible, setDropDownVisible] = useState<boolean>(false)

  const handleLoginModal = () => {
    setShowLogin(!showlogin)
  }
  return (
    <>
      <NavBar dropDownVisible={dropDownVisible} setDropDownVisible={setDropDownVisible}  />
      <Routes>
        <Route path="/" element={<Home dropDownVisible={dropDownVisible} setDropDownVisible={setDropDownVisible} />} />
        <Route path="/" />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/protectedhome" element={<ProtectedHome />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
