import { Input, Button, } from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react';
import { Avatar } from "@nextui-org/react";
import { Link } from 'react-router-dom'


export const Hero = () => {


  return (
    <>
      <section id="hero" className="text-center px-[2rem] py-80 sm:py-52 md:px-[10rem] lg:px-[17rem]  font-['Poppins', sans-serif] bg-fixed bg-[url('./assets/hero.jpg')] bg-cover relative before:content-['']  before:bg-Transparent before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
        <div className="relative">
          <h1 className="text-[30px] md:text-[48px]  font-[700]">Bienvenido a Work<span className="text-Primary">It</span></h1>
          <h5 className="text-[15px] md:text-[24px] text-gray-700">¡Busca al profesional que salvará tu día!</h5>
          <div className="flex justify-center items-center flex-wrap mt-4">
            <Input
              placeholder="Ciudad o Comuna"
              className="p-4 w-full sm:w-3/4 md:w-4/5 lg:w-4/6 2xl:w-1/3"

              endContent={
                <div className="flex items-center">

                  <select
                    className="outline-none border-0 bg-transparent text-default-400 text-small"
                    id="currency"
                    name="currency"
                  >
                    <option>Rubro</option>
                    <option>Informática</option>
                    <option>Construcción</option>
                    <option>Electricidad</option>
                  </select>

                </div>
              }
              type="text"
            />
            <Button color="secondary" className="sm:mt-0 ">
              <span><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> Buscar</span>
            </Button>

          </div>
        </div>


      </section>
      {/* Sección WorkersHighlight */}
      <WorkersHighlight />

    </>
  )
}

const WorkersHighlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const workers = [
    {
      name: "Juan Pérez",
      specialty: "Informática",
      comment: "Excelente profesional, siempre puntual.",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026024d"

    },
    {
      name: "María García",
      specialty: "Construcción",
      comment: "Muy detallista y meticulosa en su trabajo.",
      avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d"

    },
    {
      name: "Lucia Barra",
      specialty: "Construcción",
      comment: "Muy detallista y meticulosa en su trabajo.",
      avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"

    },
    {
      name: "Lucas López",
      specialty: "Construcción",
      comment: "Muy detallista y meticulosa en su trabajo.",
      avatarUrl: "https://i.pravatar.cc/150?u=a04258a2462d826712d"

    },
    {
      name: "Gabriel Parra",
      specialty: "Fotógrafo",
      comment: "Muy detallista y meticulosa en su trabajo.",
      avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026708c"

    },
    // ... tus trabajadores ...
  ];

  const nextWorkers = () => {
    setCurrentIndex(prevIndex => (prevIndex + 3) % workers.length);
  }

  const prevWorkers = () => {
    setCurrentIndex(prevIndex => (prevIndex - 3 + workers.length) % workers.length);
  }

  return (
    <section className="mt-10 p-5">
      <h2 className="text-2xl font-bold mb-5 text-center ">Trabajadores del Mes</h2>
      <div className="flex justify-between items-center">
        <Button isIconOnly radius="full" onClick={prevWorkers} color="secondary">
          <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
        </Button>
        <div className="flex space-x-4">
          {[0, 1, 2].map(offset => {
            const workerIndex = (currentIndex + offset) % workers.length;
            return (
              <div key={workerIndex} className="flex items-center p-5 rounded-lg shadow-md">
                <div className="mr-5 flex-shrink-0">
                  <Avatar className="w-20 h-20 text-large" src={workers[workerIndex].avatarUrl} alt={workers[workerIndex].name} size="large" />
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{workers[workerIndex].name} </h3>
                    <p className="text-md mb-2"><strong>Especialidad:</strong> {workers[workerIndex].specialty}</p>
                    <p className="text-md"><strong>Comentario:</strong> {workers[workerIndex].comment}</p>
                  </div>
                  <div className="text-right">
                    <Link to="#" className="hover:underline text-Primary">Mostrar Perfil</Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        <Button isIconOnly radius="full" onClick={nextWorkers} color="secondary" >
          <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        </Button>
      </div>
    </section>
  );
}

export default Hero;


