import React, { useState } from 'react';
import { Header } from '../Global/Header'
import { Button, Card, CardBody, CardFooter, CardHeader, Avatar, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons"



export const PerfilEspecialista = () => {

    const [trabajo, setTrabajo] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const reservarCita = () => {
        alert(`Cita reservada para ${trabajo} el ${fecha} a las ${hora}`);
    }


    return (
        <>
            <Header />
            <div className="relative">

            <div className="flex flex-col md:flex-row bg-gray-200">

                {/* Sección del perfil del especialista */}
                <div className="w-full p-4">

                    <Card className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar color="secondary" isBordered radius="sm" className="w-20 h-20 text-large" showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                                    <h5 className="text-small tracking-tight text-default-400">Informático</h5>
                                    <h5 className="text-small tracking-tight text-Primary">★★★★★ <span className="text-default-600 text-xs font-semibold">70 opiniones</span></h5>
                                </div>
                            </div>
                        </CardHeader>


                        <CardFooter className="flex gap-3">
                            <a href="#" className="text-sm text-Primary  block mt-2"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> Guardar</a>
                            <div className="ml-auto flex gap-3">
                                <Button color="secondary" className="">Reservar</Button>
                                <Button color="secondary" variant="bordered" className="">Enviar Mensaje</Button>
                            </div>
                        </CardFooter>
                    </Card>

                    <div className="w-full p-4">
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            {/* Sección Mis Trabajos */}
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-black">Mis Trabajos</h3>
                                <hr className="my-2" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <div className="bg-gray-200 p-4 rounded-md">
                                        <img src="/trabajo1.png" alt="Descripción del trabajo 1" className="w-full h-64 object-cover rounded-md" />
                                        <p className="mt-2 text-black text-center">Descripción del trabajo 1</p>
                                    </div>

                                    <div className="bg-gray-200 p-4 rounded-md">
                                        <img src="/trabajo1.png" alt="Descripción del trabajo 2" className="w-full h-64 object-cover rounded-md" />
                                        <p className="mt-2 text-black text-center">Descripción del trabajo 2</p>
                                    </div>
                                    <div className="bg-gray-200 p-4 rounded-md">
                                        <img src="/trabajo1.png" alt="Descripción del trabajo 2" className="w-full h-64 object-cover rounded-md" />
                                        <p className="mt-2 text-black text-center">Descripción del trabajo 2</p>
                                    </div>
                                    <div className="bg-gray-200 p-4 rounded-md">
                                        <img src="/trabajo1.png" alt="Descripción del trabajo 2" className="w-full h-64 object-cover rounded-md" />
                                        <p className="mt-2 text-black text-center">Descripción del trabajo 2</p>
                                    </div>

                                    {/* ... (Más imágenes y descripciones) */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-4">
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            {/* Sección Servicios y Precios */}
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-black">Servicios y Precios</h3>
                                <hr className="my-2" />

                                <div className="mt-2">
                                    <div className="flex justify-between items-center border-b-2 py-2">
                                        <span className="text-black">Desarrollo de Software</span>
                                        <span className="text-black">$80.000/hora</span>
                                    </div>

                                    <div className="flex justify-between items-center border-b-2 py-2">
                                        <span className="text-black">Administración de Sistemas</span>
                                        <span className="text-black">$70.000/hora</span>
                                    </div>

                                    <div className="flex justify-between items-center border-b-2 py-2">
                                        <span className="text-black">Consultoría de Seguridad Informática</span>
                                        <span className="text-black">$90.000/hora</span>
                                    </div>

                                    <div className="flex justify-between items-center border-b-2 py-2">
                                        <span className="text-black">Análisis de Datos</span>
                                        <span className="text-black">$85.000/hora</span>
                                    </div>

                                    {/* ... (Más servicios y precios) */}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full p-4">
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            {/* Sección Sobre Mí */}
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-black-500 mt-4">Experiencia</h3>
                                <hr className="my-2" />

                                <h3 className="text-.d font-semibold text-black-500">Sobre Mí</h3>
                                <p className="mt-2 text-gray-500 text-justify">Hola, mi nombre es Juan, y soy un apasionado informático con más de 5 años de experiencia en el campo de la tecnología de la información.
                                    Mi interés por la informática comenzó a una edad temprana y ha crecido con el tiempo,
                                    llevándome a obtener una licenciatura en Ciencias de la Computación. </p>
                            </div>

                            {/* Sección Profesión */}
                            <div className="p-8 border-t">
                                <h3 className="text-md font-semibold text-black-500">Especilidad</h3>
                                <ul className="list-disc pl-5 mt-2 text-gray-500 text-justify">
                                    <li>Base de datos</li>
                                    <ul className="list-disc ">
                                        <li>Power BI</li>
                                        <li>DataXD</li>
                                    </ul>
                                </ul>
                            </div>


                            {/* Sección Formación */}
                            <div className="p-8 border-t">
                                <h3 className="text-md font-semibold text-black-500">Formación</h3>
                                <ul className="list-disc pl-5 mt-2 text-gray-500 text-justify">
                                    <li>Universidad de Chile, 2020</li>
                                    <ul className="list-disc ">
                                        <li>Master en Ciencias de Datos</li>
                                        <li>Licenciatura en Datos</li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full p-4">
                        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            {/* Sección Opiniones */}
                            <div className="p-8">
                                <h3 className="text-lg font-semibold text-black">Opiniones (50)</h3>
                                <hr className="my-2" />

                                <div className="flex items-center mt-2">
                                    <span className="text-black text-xl">4.8 </span>
                                    <div className="flex text-yellow-500 ml-2">

                                        ★★★★★
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-start border-b-2 py-2">
                                        <Avatar color="secondary" isBordered radius="full" size="md" showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />

                                        <div className="ml-4">
                                            <span className="text-black font-semibold">Usuario 1</span>
                                            <p className="text-gray-500 text-sm">12 de Septiembre, 2023</p> {/* Aquí va la fecha del comentario */}
                                            <p className="text-black">¡Excelente servicio! Muy profesional y resolutivo.”</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-start border-b-2 py-2">
                                        <Avatar color="secondary" isBordered radius="full" size="md" showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />

                                        <div className="ml-4">
                                            <span className="text-black font-semibold">Usuario 1</span>
                                            <p className="text-gray-500 text-sm">12 de Septiembre, 2023</p> {/* Aquí va la fecha del comentario */}
                                            <p className="text-black">¡Excelente servicio! Muy profesional y resolutivo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-start border-b-2 py-2">
                                        <Avatar color="secondary" isBordered radius="full" size="md" showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />

                                        <div className="ml-4">
                                            <span className="text-black font-semibold">Juan</span>
                                            <p className="text-gray-500 text-sm">12 de Septiembre, 2023</p> {/* Aquí va la fecha del comentario */}
                                            <p className="text-black">¡Excelente servicio! Muy profesional y resolutivo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex items-start border-b-2 py-2">
                                        <Avatar color="secondary" isBordered radius="full" size="md" showFallback src='https://i.pravatar.cc/150?u=a04258114e29026708c' />

                                        <div className="ml-4">
                                            <span className="text-black font-semibold">Usuario 1</span>
                                            <p className="text-gray-500 text-sm">12 de Septiembre, 2023</p> {/* Aquí va la fecha del comentario */}
                                            <p className="text-black">¡Excelente servicio! Muy profesional y resolutivo.</p>
                                        </div>

                                    </div>
                                    <div className="flex justify-center mt-4">
                                        <a href="#" className="text-sm text-Primary hover:underline block mt-2">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Sección de reserva de cita */}
                <div className="sticky top-0 w-full md:w-1/2 p-4 ">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-2xl font-semibold mb-4">Reservar Cita</h2>
                        <label htmlFor="trabajo" className="block text-sm font-medium text-gray-700">Elige tu servicio:</label>
                        <select
                            id="trabajo"
                            value={trabajo}
                            onChange={(e) => setTrabajo(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="trabajo1">Trabajo 1</option>
                            <option value="trabajo2">Trabajo 2</option>
                        </select>

                        <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mt-4">Fecha de la Cita:</label>
                        <input
                            type="date"
                            id="fecha"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <label htmlFor="hora" className="block text-sm font-medium text-gray-700 mt-4">Hora de la Cita:</label>
                        <select
                            id="hora"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="21:30">21:30</option>
                            <option value="22:00">22:00</option>
                        </select>




                        <Button onClick={reservarCita} color="secondary" className="mt-4 w-full px-3 py-2">Reservar</Button>


                    </div>
                </div>

            </div>
            </div>
        </>
    )
}


