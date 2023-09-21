import { NavBar } from "./NavBar"
import { useGlobalState } from "../../../global_states"
import {AdminProfesionales} from "./AdminProfesionales"
import {AdminClientes} from "./AdminClientes"
import {AdminReportes} from "./AdminReportes"
export const Admin = () => {
    const [vista] = useGlobalState("vistaAdmin")
    return (
        <>
            <NavBar></NavBar>
            {(vista == "cliente")
                ? <AdminClientes></AdminClientes>
                : (vista == "profesionales")
                    ? <AdminProfesionales></AdminProfesionales>
                    : <AdminReportes></AdminReportes>
            }
        </>
    )
}
