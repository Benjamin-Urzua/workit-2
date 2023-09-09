import { Input } from "@nextui-org/react"

export const Hero = () => {
  return (
    <section id="hero" className="text-center px-[2rem] py-80 sm:py-52 md:px-[10rem] lg:px-[17rem]  font-['Poppins', sans-serif] bg-fixed bg-[url('./assets/hero.jpg')] bg-cover relative before:content-['']  before:bg-Transparent before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0">
      <div className="relative">
        <h1 className="text-[30px] md:text-[48px]  font-[700]">Bienvenido a Work<span className="text-Primary">It</span></h1>
        <h5 className="text-[15px] md:text-[24px] text-gray-700">¡Busca al profesional que salvará tu día!</h5>
        <div className="flex justify-center">
          <Input
            placeholder="Ingresa un punto de referencia"
            className="p-4 block w-full"
          
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

        </div>


      </div>

    </section>
  )
}
