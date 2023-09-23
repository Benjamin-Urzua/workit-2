import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { useGlobalState, setGlobalState } from "../../../global_states"
import { useState } from "react"

export const NavBar = () => {
    const [vista] = useGlobalState("vistaAdmin")
    const handleVista = (e, v) => {
        e.preventDefault()

        setGlobalState("vistaAdmin", v) // vistaAdmin:"cliente"        vistaAdmin:"profesionales"
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar position="static" onMenuOpenChange={setIsMenuOpen}>

            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link to="/"><span className="font-['Poppins', sans-serif] font-[650] text-[32px]">Work<span className="text-Primary">It.<small className="text-Primary text-sm ">Admin</small></span></span></Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    {
                        (vista == "cliente")
                            ?
                            <Link className="text-Primary" onClick={(e) => handleVista(e, "cliente")}>
                                Clientes
                            </Link>
                            :
                            <Link className="text-default-500 hover:text-Primary" onClick={(e) => handleVista(e, "cliente")}>
                                Clientes
                            </Link>
                    }

                </NavbarItem>
                <NavbarItem>
                    {
                        (vista == "profesionales")
                            ?

                            <Link className="text-Primary" onClick={(e) => handleVista(e, "profesionales")} to="#" aria-current="page">
                                Profesionales
                            </Link>
                            :
                            <Link className="text-default-500 hover:text-Primary" onClick={(e) => handleVista(e, "profesionales")} to="#" aria-current="page">
                                Profesionales
                            </Link>
                    }
                </NavbarItem>
                <NavbarItem>

                    {
                        (vista !== "profesionales" && vista !== "cliente")
                            ?

                            <Link className="text-Primary" onClick={(e) => handleVista(e, "reportes")} to="#">
                                Reportes
                            </Link>
                            :
                            <Link className="text-default-500 hover:text-Primary" onClick={(e) => handleVista(e, "reportes")} to="#">
                                Reportes
                            </Link>
                    }
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link to="">Cerrar sesion</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem>
                    {
                        (vista == "cliente")
                            ?
                            <Link className="text-Primary" onClick={(e) => handleVista(e, "cliente")}>
                                Clientes
                            </Link>
                            :
                            <Link className="text-default-500 hover:text-Primary" onClick={(e) => handleVista(e, "cliente")}>
                                Clientes
                            </Link>
                    }

                </NavbarMenuItem>

                <NavbarMenuItem>
                    {
                        (vista == "profesionales")
                            ?

                            <Link className="text-Primary" onClick={(e) => handleVista(e, "profesionales")} to="#" aria-current="page">
                                Profesionales
                            </Link>
                            :
                            <Link className="text-default-500 hover:text-Primary" onClick={(e) => handleVista(e, "profesionales")} to="#" aria-current="page">
                                Profesionales
                            </Link>
                    }
                </NavbarMenuItem>

                <NavbarMenuItem>

                    {
                        (vista !== "profesionales" && vista !== "cliente")
                            ?

                            <Link className="text-Primary" onClick={(e) => handleVista(e, "reportes")} to="#">
                                Reportes
                            </Link>
                            :
                            <Link className="text-default-500 hover:text-Primary" onClick={(e) => handleVista(e, "reportes")} to="#">
                                Reportes
                            </Link>
                    }
                </NavbarMenuItem>

                <NavbarMenuItem>

                    <Link to="">Cerrar sesion</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}
