import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useState } from 'react';


export default function App() {

  const [name, setName] = useState("Guest");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home name={name}/>}></Route>
        <Route path="/login" element={<Login name={name} setName={setName}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
