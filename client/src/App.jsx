/* eslint-disable react/jsx-no-undef */
//import { useEffect, useState } from "react"
import { HistorialTrabajos } from "./components/Clientes/HistorialTrabajos"
import { LoginCliente } from "./components/Clientes/LoginCliente"
import { RegisterCliente } from "./components/Clientes/RegisterCliente"
import { LoginEspecialista } from "./components/Especialistas/LoginEspecialista"
import { RegisterEspecialista } from "./components/Especialistas/RegisterEspecialista"
import { Home } from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ResultadosBusqueda } from "./components/Home/ResultadosBusqueda"
import { ConfiguracionCliente} from "./components/Clientes/ConfiguracionCliente"
import { NotFoundPage} from "./components/Global/NotFoundPage"
import { SesionExpirada } from "./components/Global/SesionExpirada"

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes/login" element={<LoginCliente />} />
          <Route path="/clientes/register" element={<RegisterCliente />} />
          <Route path="/especialistas/login" element={<LoginEspecialista />} />
          <Route path="/especialistas/register" element={<RegisterEspecialista />} />
          <Route path="/clientes/historialTrabajos" element={<HistorialTrabajos />} />
          <Route path="/buscar" element={<ResultadosBusqueda />} />
          <Route path="/error" element={<NotFoundPage />} />
          <Route path="/sesionexpirada" element={<SesionExpirada />} />
          <Route path="/clientes/ConfiguracionClientes" element={<ConfiguracionCliente/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App