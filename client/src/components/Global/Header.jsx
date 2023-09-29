import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { DropdownHeader } from '../Flowbite/DropdownHeader'
import { Navbar, Avatar, NavbarBrand, NavbarContent, DropdownMenu, DropdownItem, Dropdown, DropdownTrigger, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Accordion, AccordionItem, Listbox, ListboxItem } from "@nextui-org/react";
import { Topbar } from './Topbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { redirect } from 'react-router-dom';


export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //localStorage.clear()
  //console.log(localStorage.getItem("userName"))
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
          {
            (localStorage.getItem("userName") == null)
              ?
              (<><NavbarItem className="hidden lg:flex">
                <span className='mr-2'><DropdownHeader linkCliente='/clientes/login' linkEspecialista='/especialistas/login' label='Iniciar sesión' /></span>
              </NavbarItem>
                <NavbarItem  >
                  <span><DropdownHeader linkCliente='/clientes/register' linkEspecialista='/especialistas/register' label='Registrarse' /></span>
                </NavbarItem></>)
              :
              (<NavbarItem  >
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="light"
                      endContent={ <FontAwesomeIcon size='xs' icon={faChevronDown}></FontAwesomeIcon> }
                      startContent={ <Avatar size='sm' showFallback color="secondary" src='https://images.unsplash.com/broken' />}
                    >
                      {localStorage.getItem("userName")}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new">Mi cuenta</DropdownItem>
                    <DropdownItem key="copy">Mi perfil</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem key="delete" className="text-danger" onClick={()=>{localStorage.clear(); window.location.reload();}} color="danger" startContent={<FontAwesomeIcon size='md' icon={faRightFromBracket}></FontAwesomeIcon>}>
                      Cerrar sesión
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                
              </NavbarItem>)
          }

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
