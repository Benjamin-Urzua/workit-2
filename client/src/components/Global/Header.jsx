import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DropdownHeader } from '../Flowbite/DropdownHeader'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Accordion, AccordionItem, Listbox, ListboxItem } from "@nextui-org/react";
import { Topbar } from './Topbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative z-10 '>
      <Topbar />
      <Navbar isBordered className="font-['Robot', sans-serif] px-10  md:px-32" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link to="/" className="font-['Poppins', sans-serif] font-[650] text-[32px]">Work<span className="text-Primary">It.</span></Link>
          </NavbarBrand>
        </NavbarContent>



        <NavbarContent className='hidden md:flex' justify="end">
          <NavbarItem   className="hidden lg:flex">
            <span className='mr-2'><DropdownHeader  linkCliente='/clientes/login' linkEspecialista='/especialistas/login' label='Iniciar sesión' /></span>
          </NavbarItem>
          <NavbarItem  >
            <span><DropdownHeader  linkCliente='/clientes/register' linkEspecialista='/especialistas/register' label='Registrarse' /></span>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu> 
          <NavbarMenuItem >
            <Accordion showDivider={false} variant='light' isCompact>
              <AccordionItem key="1" aria-label="Accordion 1" title="Iniciar sesión">

                <Listbox
                  variant='light'
                  aria-label="Actions"
                  color='secondary'
                >
                  <ListboxItem ><Link to="/clientes/login">Como cliente</Link></ListboxItem>
                  <ListboxItem ><Link to="/especialistas/login">Como especialista</Link></ListboxItem>
                </Listbox>

              </AccordionItem>
              <AccordionItem key="2" aria-label="Accordion 2" title="Registrarse">
                <Listbox
                  variant='light'
                  aria-label="Actions"
                  color='secondary'
                >
                  <ListboxItem ><Link to="/clientes/register">Como cliente</Link></ListboxItem>
                  <ListboxItem ><Link to="/especialistas/register">Como especialista</Link></ListboxItem>
                </Listbox>
              </AccordionItem>
            </Accordion>
          </NavbarMenuItem>
          <NavbarMenuItem className='text-md ml-2'>
            <Link to="/clientes/historialTrabajos">Historial</Link>
          </NavbarMenuItem>
        
          <NavbarMenuItem className='text-md ml-2 '>
            <Link to="/clientes/configuracionClientes">Mi cuenta</Link>
          </NavbarMenuItem>
          <NavbarMenuItem className='text-md ml-2 '>
            <Link>Soporte</Link>
          </NavbarMenuItem>
          <NavbarMenuItem className='text-md ml-2 '>
            <Link>Regístrate como especialista</Link>
          </NavbarMenuItem>
          <NavbarMenuItem className='text-md ml-2 '>
            <Link>Términos y condiciones</Link>
          </NavbarMenuItem>
          <NavbarMenuItem className='text-md ml-2'>
            <Link className='text-Primary'>Invita a tus amigos</Link>
          </NavbarMenuItem>
          <NavbarMenuItem className='text-md ml-2'>
            <Link className='text-danger-500'>Cerrar sesión</Link>
          </NavbarMenuItem>
        </NavbarMenu>

      </Navbar>

    </div>
  )
}
