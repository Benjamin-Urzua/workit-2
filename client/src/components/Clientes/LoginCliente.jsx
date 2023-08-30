import { Input, Button } from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { useState } from "react"
import { Link } from "react-router-dom"

export const LoginCliente = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <form className="container flex flex-col gap-4 mt-28 ">
            <span className="mb-4">
                <h1 className="text-[2.5rem] font-[500] text-center">Bienvenido a Work<span className="text-Primary">It.</span></h1>
                <h4 className="text-[1.25rem] font-[500] text-center">¡Inicia sesión para encontrar al profesional que salvará tu día!</h4>
            </span>

            <div className="flex px-[28rem] flex-col gap-4">
                <Input type="email" placeholder="Correo electrónico" color="secondary" variant="underlined" />
                <Input

                    variant="underlined"
                    placeholder="Contraseña"
                    color="secondary"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <FontAwesomeIcon className="text-lg text-default-400 pointer-events-none" icon={faEyeSlash} />
                            ) : (
                                <FontAwesomeIcon className="text-lg text-default-400 pointer-events-none" icon={faEye} />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}

                />

                <div className="flex flex-col text-sm place-self-center mt-2">
                    <Button color="secondary" className="w-10/12 place-self-center mb-2" >Iniciar sesión</Button>
                    <a href="#" className="text-Primary place-self-center">¿Olvidaste tu contraseña?</a>
                    <span className="place-self-center">¿No tienes cuenta? <a href="#" className="text-Primary">Regístrate</a></span>
                </div>
                <Button color="primary" variant="ghost" className="w-6/12 place-self-center  hover:text-white text-sm"><FontAwesomeIcon className="text-lg" icon={faGoogle} /> Continuar con Google</Button>
                <Button color="default" variant="ghost" className="w-6/12 place-self-center hover:text-white text-sm"><FontAwesomeIcon className="text-lg" icon={faFacebookF} /> Continuar con Google</Button>
                <Link to='/' className="text-Primary text-sm font-semibold">Volver</Link>
            </div>
        </form>
    )
}
// 