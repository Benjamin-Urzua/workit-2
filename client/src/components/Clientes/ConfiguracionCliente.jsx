import { Input, Button } from "@nextui-org/react"
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "@nextui-org/react";


export const ConfiguracionCliente = () => {
    return (

        <div className='relative z-10 '>
            <Navbar position="static" className="font-['Robot', sans-serif]  flex items-center justify-start w-full">
                <NavbarBrand className="flex-shrink-0">
                    <Link to="/" className="font-['Poppins', sans-serif] font-[650] text-[32px]">Work<span className="text-Primary">It.</span></Link>
                </NavbarBrand>
            </Navbar>

            <div className="bg-gray-100 min-h-screen p-10 flex">

                <div className="w-1/4 ">

                    <h2 className="text-xl font-semibold mb-4">Mi cuenta</h2>


                    <nav>
                        <ul className="space-y-2">

                            <li className="hover:bg-gray-100 p-2 rounded">
                                <Link to="#" className="hover:text-Primary">Historial</Link>

                            </li>
                            <li className="hover:bg-gray-100 p-2 rounded">
                                <Link to="#" className="hover:text-Primary">Profesionales guardados</Link>

                            </li>
                            <li className="hover:bg-gray-100 p-2 rounded">
                                <Link to="#" className="hover:text-Primary">Conversación con los profesionales</Link>

                            </li>
                            <li className="hover:bg-gray-100 p-2 rounded">
                                <Link to="#" className="hover:text-Primary">Preguntas públicas</Link>

                            </li>
                            <li className="hover:bg-gray-100 p-2 rounded">
                                <Link to="#" className="underline text-Primary ">Configuración de la cuenta</Link>

                            </li>

                        </ul>
                    </nav>
                </div>


                {/* Container */}
                <div className="bg-white rounded-lg shadow-lg w-3/4 p-6">


                    <div className="border-b pb-6">
                        <h1 className="text-xl font-semibold">Configuración de la cuenta</h1>
                        <p className="text-gray-500 mt-2">* Campo obligatorio</p>
                    </div>

                    {/* Form */}
                    <div className="mt-6 space-y-6">
                        {/* Nombre*/}
                        <div className="flex items-center space-x-4">
                            <label htmlFor="nombre" className="w-1/4 font-semibold">Nombre *:</label>
                            <Input variant="underlined" type="text" id="txt_nombre" name="txt_nombre" placeholder="Aqui aparecera el nombre" className="w-3/4 p-2 "

                            />
                        </div>

                        {/* Apellidos */}
                        <div className="flex items-center space-x-4">
                            <label htmlFor="apellidos" className="w-1/4 font-semibold">Apellidos:</label>
                            <Input variant="underlined" type="text" id="txt_apellidos" name="txt_apellidos" placeholder="Aqui aparecera los apellidos" className="w-3/4 p-2 " />
                        </div>

                        {/* Contraseña */}
                        <div className="flex items-center space-x-4">
                            <label htmlFor="password" className="w-1/4 font-semibold">Contraseña *:</label>
                            <Link to="#" className="hover:underline text-Primary" >Cambiar contraseña</Link>
                        </div>

                        {/* Telefono */}
                        <div className="flex items-center space-x-4">
                            <label htmlFor="telefono" className="w-1/4 font-semibold">Teléfono:</label>
                            <Input variant="underlined" type="tel" id="txt_telefono" name="txt_telefono" placeholder="+56 9 1111 1111" className="w-3/4 p-2 " />
                        </div>

                        {/* Cambiar nombre de usuario */}
                        <div className="flex items-center space-x-4">
                            <label htmlFor="username" className="w-1/4 font-semibold">Cambiar nombre de usuario:</label>
                            <Input variant="underlined" type="text" id="username" name="txt_username" placeholder="MarkCos" className="w-3/4 p-2 " />
                        </div>

                        {/* Correo electrónico */}
                        <div className="flex items-center space-x-4">
                            <label htmlFor="correo" className="w-1/4 font-semibold">Correo electrónico *:</label>
                            <Link to="#" className="hover:underline text-Primary" >Cambiar email</Link>
                        </div>

                        {/* ... puedes continuar con otros campos de la misma manera ... */}


                        {/* Botón para editar perfil */}
                        <div className="flex flex-col gap-2">

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-4">

                                    <Button color="secondary" className="sm:mt-0 ">
                                        <span>Guardar Cambios</span>
                                    </Button>
                                    <Button color="secondary" variant="light">
                                        <span>Cancelar</span>
                                    </Button>
                                </div>
                                <Button color="danger" variant="bordered" >
                                    <span>Eliminar Cuenta</span>
                                </Button>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}
