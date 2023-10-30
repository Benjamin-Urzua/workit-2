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
import { ConfiguracionCliente } from "./components/Clientes/ConfiguracionCliente"
import { NotFoundPage } from "./components/Global/NotFoundPage"
import { SesionExpirada } from "./components/Global/SesionExpirada"
import { Admin } from "./components/Admin/Admin"
import { PerfilInicial } from "./components/Especialistas/PerfilInicial"
import { PerfilEspecialista } from "./components/Especialistas/PerfilEspecialista"
<<<<<<< HEAD
import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { SolicitudesTrabajo } from "./components/Especialistas/SolicitudesTrabajo"
=======
import { EditarPerfil } from "./components/Especialistas/EditarPerfil"

>>>>>>> 591f49404c22e0ee017d97b2927a95f4d66fb28a
const App = () => {
  //const [socket, setSocket] = useState()

  /*
  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      const _socket = (io("http://localhost:8080", {
        auth: {
          _id: localStorage.getItem("user_id")
        }
      }))
      _socket.on('connect', () => {
        console.log("socket conectado");
        setSocket(_socket)
      })
    }
  }, [])
  */
  return (
    < main >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/clientes/login" element={<LoginCliente />} />
          <Route path="/clientes/register" element={<RegisterCliente />} />
          <Route path="/especialistas/login" element={<LoginEspecialista />} />
          <Route path="/especialistas/register" element={<RegisterEspecialista />} />
          <Route path="/especialistas/register/perfilInicial" element={<PerfilInicial />} />
          <Route path="/especialistas/solicitudesTrabajo" element={<SolicitudesTrabajo />} />
          <Route path="/clientes/historialTrabajos" element={<HistorialTrabajos />} />
          <Route path="/buscar" element={<ResultadosBusqueda />} />
          <Route path="/buscar/perfilEspecialista" element={<PerfilEspecialista socket={io("http://localhost:8080", {
            auth: {
              _id: localStorage.getItem("user_id")
            }
          })} />} />
          <Route path="/error" element={<NotFoundPage />} />
          <Route path="/editarperfil" element={<EditarPerfil/>}/>
          <Route path="/sesionexpirada" element={<SesionExpirada />} />
<<<<<<< HEAD
          <Route path="/clientes/cuenta" element={<ConfiguracionCliente />}></Route>
=======
          <Route path="/especialistas/perfil" element={<PerfilEspecialista/>} />
          <Route path="/clientes/configuracionClientes" element={<ConfiguracionCliente/>}></Route>
          
>>>>>>> 591f49404c22e0ee017d97b2927a95f4d66fb28a
        </Routes>
      </BrowserRouter>
    </main >
  )
}

export default App