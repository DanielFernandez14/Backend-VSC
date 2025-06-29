import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/Home";
import { Login } from "../views/Login";
import { Register } from "../views/Register";
import { Dashboard } from "../views/Dashboard";



const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Dashboard" element={<Dashboard/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export {RouterApp}