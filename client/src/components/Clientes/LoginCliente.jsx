import { Input, Button } from "@nextui-org/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const LoginCliente = () => {
    const txt_email = useRef()
    const txt_contrasena = useRef()
    const redirect = useNavigate()
    const login = async (e) => {
        e.preventDefault()
        const email = txt_email.current.value
        const contrasena = txt_contrasena.current.value

        const body = JSON.stringify(
            {
                email: email,
                contrasena: contrasena
            }
        )
        const headers = {
            "Content-Type": "application/json"
        }

        await fetch('http://localhost:8080/clientes/login', { method: 'POST', body: body, headers: headers })
            .then(res => res.json().then(msg => {
                const ReactSwal = withReactContent(Swal)
                const toastLogin = ReactSwal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                switch (msg["codigo"]) {
                    case 1:
                        ReactSwal.fire({
                            icon: 'success',
                            title: '¡Genial!',
                            text: msg["msg"],
                        }).then((result) => {
                            if (result['isConfirmed']) {
                                localStorage.setItem("user_id", msg['sessionId'])
                                localStorage.setItem("userName", msg['userName'])
                                return redirect("/",
                                    toastLogin.fire({
                                        icon: 'success',
                                        title: `Bienvenido ${localStorage.getItem("userName")}`
                                    })
                                )
                            }
                        })
                        break;
                    case 2:
                        ReactSwal.fire({
                            icon: 'error',
                            title: 'Problemas...',
                            text: msg["msg"],
                            footer: '<a href="/">Recuperar contraseña</a>'
                        })
                        break;
                    case 3:
                        ReactSwal.fire({
                            icon: 'error',
                            title: 'Problemas...',
                            text: msg["msg"],
                            footer: '<a href="/">Reestablecer cuenta</a>'
                        })
                        break;
                    case 10:
                        ReactSwal.fire({
                            icon: 'error',
                            title: 'Problemas...',
                            text: msg["msg"],
                        })
                        break;

                }

            }))
    }

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <form className="container flex flex-col  gap-4 m-auto mt-20"  onSubmit={(e) => login(e)}  >
            <span className="mb-4">
                <h1 className="text-[2.5rem] font-[500] text-center">Bienvenido a Work<span className="text-Primary">It.</span></h1>
                <h4 className="text-[1.25rem] font-[500] text-center">¡Inicia sesión para encontrar al profesional que salvará tu día!</h4>
            </span>

            <div className="flex px-[5rem] md:px-[10rem] lg:px-[23rem] flex-col gap-4">
                <Input type="email" placeholder="Correo electrónico" color="secondary" variant="underlined" name="txt_email" id="txt_email" ref={txt_email} />
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
                    name="txt_contrasena"
                    id="txt_contrasena"
                    ref={txt_contrasena}
                />

                <div className="flex flex-col text-sm place-self-center mt-2">
                    <Button color="secondary" type="submit" className="w-10/12 place-self-center mb-2" >Iniciar sesión</Button>
                    <a href="#" className="text-Primary place-self-center">¿Olvidaste tu contraseña?</a>
                    <span className="place-self-center">¿No tienes cuenta? <Link to="/clientes/register" className="text-Primary">Regístrate</Link></span>
                </div>
                <Button color="primary" variant="ghost" className="w-full md:w-6/12 lg:w-8/12 place-self-center  hover:text-white text-sm"><FontAwesomeIcon className="text-lg" icon={faGoogle} /> <span className=" hidden sm:block">Continuar con Google</span></Button>
                <Button color="default" variant="ghost" className="w-full md:w-6/12 lg:w-8/12 place-self-center hover:text-white text-sm"><FontAwesomeIcon className="text-lg" icon={faFacebookF} /> <span className=" hidden sm:block">Continuar con Facebook</span></Button>
                <Link to='/' className="text-Primary text-sm font-semibold hover:underline">Volver</Link>
            </div>
        </form>
    )
}
// 