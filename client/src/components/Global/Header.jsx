import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DropdownHeader } from '../Flowbite/DropdownHeader'
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
    <div className='relative z-10'>
      <Topbar />
      <header className="flex font-['Robot', sans-serif]  place-content-between items-center bg-white px-10  md:px-32  py-2">
        <div className="flex place-content-between items-center">
          <Link to="/" className="font-['Poppins', sans-serif] font-[650] text-[32px]">Work<span className="text-Primary">It.</span></Link>
        </div>

        <div className="hidden text-[15px] place-content-between md:flex  items-center font-[Open Sans, sans-serif] font-semibold">
          <span className='mr-2'><DropdownHeader linkCliente='/clientes/login' linkEspecialista='/especialistas/login' label='Iniciar sesión'/></span>
          <span><DropdownHeader linkCliente='/clientes/register' linkEspecialista='/especialistas/register' label='Registrarse'/></span>
        </div>
        <FontAwesomeIcon className="text-[25px] cursor-pointer md:hidden mr-2 mt-1" onClick={mostrarSideBar} icon={faBars} />
      </header>
      <SideBar 
        visible={visible}
        mostrarSideBar={mostrarSideBar}
      />

    </div>
  )
}
