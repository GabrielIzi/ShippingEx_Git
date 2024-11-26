import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Routes/Home'
import Login from './Routes/Login'
import Registro from './Routes/Registro'
import Encomendas from './Routes/Encomendas'
import Termos from './Routes/Termos'
import Admin from "./Routes/Admin";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Login />} path="/login" />
                <Route element={<Registro />} path="/registro" />
                <Route element={<Encomendas />} path="/encomendas" />
                <Route element={<Termos />} path="/termos" />
                <Route element={<Admin />} path="/admin" />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;