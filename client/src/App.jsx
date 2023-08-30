/* eslint-disable react/jsx-no-undef */
//import { useEffect, useState } from "react"
import { LoginCliente } from "./components/Clientes/LoginCliente"
import { RegisterCliente } from "./components/Clientes/RegisterCliente"
import { LoginEspecialista } from "./components/Especialistas/LoginEspecialista"
import { RegisterEspecialista } from "./components/Especialistas/RegisterEspecialista"
import { Home } from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes/login" element={<LoginCliente />} />
          <Route path="/clientes/register" element={<RegisterCliente />} />
          <Route path="/especialistas/login" element={<LoginEspecialista />} />
          <Route path="/especialistas/register" element={<RegisterEspecialista />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App