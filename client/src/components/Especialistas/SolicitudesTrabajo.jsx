import { Navbar, NavbarBrand, Card, Button, CardFooter, CardHeader, CardBody, Input, Textarea } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMessage } from "@fortawesome/free-solid-svg-icons"

export const SolicitudesTrabajo = () => {
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
                        <h1 className="text-xl font-semibold">Administrar solicitudes de trabajo</h1>
                    </div>
                    <Card className="bg-white rounded-xl shadow-md overflow-hidden font-sans mt-2">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Solicitud de Benjamin</h4>
                                    <h5 className="text-small tracking-tight text-default-400">Servicio: Instalaciones</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <hr />
                        <CardBody className="text-small font-medium text-foreground">
                            <section className="flex flex-row gap-2 items-center"><span>Fecha inicial:</span> <Input className="w-3/12" type="date"></Input>  <span>Fecha final:</span><Input className="w-3/12" type="date"></Input></section>
                            <section>
                                <Textarea
                                    className=""
                                    label="Descripción"
                                    labelPlacement="outside"
                                    placeholder="Describe brevemente los detalles de tu solicitud"
                                />
                            </section>
                        </CardBody>
                        <hr />
                        <CardFooter className="flex gap-3">
                            <a href="#" className="text-sm text-Primary  block mt-2"><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>  Responder</a>
                            <div className="ml-auto flex gap-3">
                                <Button color="secondary" variant="bordered" type='button'>Modificar</Button>
                                <Button color="secondary" variant="solid" type='button'>Aceptar</Button>
                            </div>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div>
    )
}
