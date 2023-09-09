import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DropdownHeader } from '../Flowbite/DropdownHeader'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Topbar } from './Topbar'
import { SideBar } from './SideBar'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {

  const [visible, setVisible] = useState('hidden')

  const mostrarSideBar = () => {
    if (visible == 'hidden') {
      setVisible("")
    } else {
      setVisible("hidden")
    }

  }

  return (
    <div className='relative z-10 '>
      <Topbar />
      <Navbar isBordered className="font-['Robot', sans-serif] px-10  md:px-32">
        <NavbarBrand>
          <Link to="/" className="font-['Poppins', sans-serif] font-[650] text-[32px]">Work<span className="text-Primary">It.</span></Link>
        </NavbarBrand>

        <NavbarContent className='hidden md:flex' justify="end">
          <NavbarItem className="hidden lg:flex">
            <span className='mr-2'><DropdownHeader linkCliente='/clientes/login' linkEspecialista='/especialistas/login' label='Iniciar sesión' /></span>
          </NavbarItem>
          <NavbarItem>
            <span><DropdownHeader linkCliente='/clientes/register' linkEspecialista='/especialistas/register' label='Registrarse' /></span>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="md:hidden"  justify="end">
          <FontAwesomeIcon className="text-[25px] cursor-pointer md:hidden mr-2 mt-1" onClick={mostrarSideBar} icon={faBars} />
        </NavbarContent>
      </Navbar>
      <SideBar 
        visible={visible}
        mostrarSideBar={mostrarSideBar}
      />
    </div>
  )
}
