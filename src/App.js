import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { useState } from 'react';
import ButtonBar from './components/ButtonBar';
import AuthContext from './AuthContext';


export default function App() {

  const [name, setName] = useState("Guest");

  return (
    <AuthContext.Provider value={{name, setName}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ButtonBar/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
