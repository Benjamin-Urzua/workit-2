import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { setGlobalState} from "../../../global_states"
import { useState } from "react"

export const NavBar = () => {

    const handleVista = (e, v) => {
        e.preventDefault()
        setGlobalState("vistaAdmin", v)
    }



    return (
        <Navbar position="static">
            <NavbarBrand>
                <span className="font-['Poppins', sans-serif] font-[650] text-[32px]">Work<span className="text-Primary">It.<small className="text-Primary text-sm ">Admin</small></span></span>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link onClick={(e) => handleVista(e,"cliente")}>
                        Clientes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link onClick={(e) => handleVista(e,"profesionales")} to="#" aria-current="page">
                        Profesionales
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link onClick={(e) => handleVista(e,"reportes")} to="#">
                        Reportes
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link  to="">Cerrar sesion</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
