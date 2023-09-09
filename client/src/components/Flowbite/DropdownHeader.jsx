/* eslint-disable react/prop-types */
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useState } from "react";

export const DropdownHeader = ({ label, linkCliente, linkEspecialista }) => {
  
  const [isOpen, setOpen] = useState(false)

  const openOnMouseOver = () => {
    if (isOpen) {
      setOpen(false)
    }else{
      setOpen(true)
    }
    
  }


  return (
    
    <div className='hover:text-Primary'>
      <Dropdown isOpen={isOpen}>
        <DropdownTrigger onMouseOver={openOnMouseOver}>
          <span>{label}</span>
        </DropdownTrigger>
        <DropdownMenu variant="light" color="secondary">
          <DropdownItem><Link to={linkCliente}>Como cliente</Link></DropdownItem>
          <DropdownItem><Link to={linkEspecialista}>Como especialista</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
