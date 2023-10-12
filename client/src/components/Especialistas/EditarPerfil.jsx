import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "@nextui-org/react";


export const EditarPerfil = () => {

  const [descripcion, setDescripcion] = useState("Descripción del trabajo 1"); // Inicializar con el valor por defecto

  return (
    <div className='relative z-10'>
      {/* Navbar */}
      <Navbar position="static" className="font-['Robot', sans-serif] flex items-center justify-start w-full">
        <NavbarBrand className="flex-shrink-0">
          <Link to="/" className="font-['Poppins', sans-serif] font-[650] text-[32px]">Work<span className="text-Primary">It.</span></Link>
        </NavbarBrand>
      </Navbar>

      {/* Contenido principal */}
      <div className="bg-gray-100 min-h-screen p-10 flex">

        {/* Menú lateral */}
        <div className="w-1/4">
          <h2 className="text-xl font-semibold mb-4">Mi cuenta</h2>
          <nav>
            <ul className="space-y-2">
              <li className="hover:bg-gray-100 p-2 rounded">
                <Link to="#" className="hover:text-Primary">Historial</Link>
              </li>
              <li className="hover:bg-gray-100 p-2 rounded">
                <Link to="#" className="hover:text-Primary">Respuestas</Link>
              </li>
              <li className="hover:bg-gray-100 p-2 rounded">
                <Link to="#" className="hover:text-Primary">Configuración de la cuenta</Link>
              </li>
              <li className="hover:bg-gray-100 p-2 rounded">
                <Link to="#" className="underline text-Primary">Editar Perfil</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contenido de las secciones */}
        <div className="w-3/4 space-y-4">

          {/* Sección Sobre Mí */}
          <div className="bg-white rounded-lg shadow-lg p-6">
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



            {/* (contenido de Sobre Mí, Profesión y Formación) */}
          </div>

          {/* Sección Mis Trabajos */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* (contenido de Mis Trabajos) */}
            <div className="p-8">
              <h3 className="text-lg font-semibold text-black">Mis Trabajos</h3>
              <hr className="my-2" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-gray-200 p-4 rounded-md relative">  {/* Agregado "relative" */}


                  <img src="/trabajo1.png" alt="Descripción del trabajo 1" className="w-full h-64 object-cover rounded-md" />
                  <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="w-full mt-2 text-black text-center bg-transparent border-none resize-none focus:ring-0"
                    rows="2"  // Puedes ajustar el número de filas según lo que necesites
                  />

                  {/* Input oculto para cargar imagen */}
                  <input type="file" id="upload1" className="hidden" ></input>
                  <label htmlFor="upload1" className="absolute bottom-2 right-2 bg-white py-1 px-2 rounded cursor-pointer hover:bg-gray-300">Editar</label>

                  {/* Input oculto para subir nueva imagen */}
                  <input type="file" id="upload1" className="hidden" />
                  <label htmlFor="upload1" className="absolute bottom-2 right-2 bg-white py-1 px-2 rounded cursor-pointer hover:bg-gray-300">Subir</label>
                </div>

                {/* Puedes repetir la estructura similar para las demás imágenes... */}
              </div>
            </div>

          </div>

          {/* Sección Servicios y Precios */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* (contenido de Servicios y Precios) */}

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
      </div>
    </div >
  )
}
