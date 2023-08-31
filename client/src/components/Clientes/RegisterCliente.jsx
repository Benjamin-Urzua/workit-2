import { Input, Button, Select, SelectItem } from "@nextui-org/react"
import { formatRut } from 'rutlib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from "react"
import { v4 } from 'uuid'
import { Link } from "react-router-dom";

export const RegisterCliente = () => {

    const [regiones, setRegiones] = useState([{}])
    const [provincias, setProvincias] = useState([{}])
    const [comunas, setComunas] = useState([{}])


    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const [run, setRun] = useState("")

    const fetchCombos = async (evt, tipo) => {
        const { target } = evt;
        const { value } = target;


        if (tipo == "provincia") {
            const key = value.slice(0, 2)
            await fetch(`https://apis.digital.gob.cl/dpa/regiones/${key}/provincias`).then(
                response => response.json()
            ).then(
                data => {
                    setProvincias(data)

                }
            )
        } else {
            const key = value.slice(0, 3)
            await fetch(`https://apis.digital.gob.cl/dpa/provincias/${key}/comunas`).then(
                response => response.json()
            ).then(
                data => {
                    setComunas(data)
                }
            )
        }

    }


    const formatearRun = (evt) => {
        const { target } = evt;
        const { value } = target;

        setRun(formatRut(value))
    }



    useEffect(() => {
        fetch("https://apis.digital.gob.cl/dpa/regiones").then(
            response => response.json()
        ).then(
            data => {
                setRegiones(data)
            }
        )
    }, [])



    return (
        <main className="container flex justify-between flex-col px-5 lg:flex-row gap-4 m-auto">
            <div className="basis-8/12 text-center pt-10">
                <span className="mb-4 px-4 md:px-0 flex flex-col">
                    <h1 className="text-[2.5rem] font-[500]">Bienvenido a Work<span className="text-Primary">It.</span></h1>
                    <h4 className="text-[1.25rem] font-[500] mb-10">¡Regístrate con nosotros para obtener al profesional que necesitas!</h4>
                    <p className="text-[1.10rem] font-[600]">Todos estos datos serán necesarios para: </p>
                    <span className="text-start place-self-center">
                        <li>Ofrecerle una experiencia personalizada dentro de WorkIt.</li>
                        <li>Entregarle seguridad dentro de WorkIt.</li>
                        <li>Cubrirle a nivel legal con el uso de WorkIt.</li>
                    </span>
                    <Link to='/' className="text-Primary text-sm font-semibold place-self-center lg:place-self-start  mt-10">Volver</Link>
                </span>

            </div>
            <form className=" gap-3 basis-8/12 lg:basis-5/12 pt-3 lg:pt-20 col-span-6 flex flex-col ">
                <div className="grid grid-cols-2 gap-3">
                    <div >
                        <Input variant="underlined"
                            type="text"
                            label="Nombres"
                            labelPlacement="outside"
                            placeholder="Ingrese sus nombres"
                            id="txt_nombres"
                            name="txt_nombres"

                        />
                        <Input variant="underlined"
                            id="txt_contrasena"
                            name="txt_contrasena"
                            className="mt-2"
                            labelPlacement="outside"
                            label="Contraseña"
                            placeholder="************"
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
                        <Input variant="underlined"
                            className="mt-2"
                            type="email"
                            label="Correo electrónico"
                            labelPlacement="outside"
                            placeholder="email@workit.cl"
                            id="txt_email"
                            name="txt_email"

                        />
                        <Input variant="underlined"
                            className="mt-2"
                            type="text"
                            label="Run"
                            labelPlacement="outside"
                            placeholder="12.345.678-k"
                            id="txt_run"
                            name="txt_run"
                            value={run}
                            maxLength={12}
                            onChange={formatearRun}
                        />

                        {(typeof regiones === 'undefined') ? (

                            <Select className="mt-2" variant="underlined" labelPlacement={'outside'} disabled label="Región" placeholder="Seleccione una región"></Select>

                        ) : (

                            <Select
                                variant="underlined"
                                className="mt-2"
                                labelPlacement={'outside'}
                                label="Región"
                                placeholder="Seleccione una región"
                                items={regiones}
                                onChange={(evt) => fetchCombos(evt, 'provincia')}
                            >
                                {(region) => <SelectItem key={region.codigo + '__' + v4()}>{region.nombre}</SelectItem>}

                            </Select>

                        )}

                        {(comunas.length == 1) ? (

                            <Select
                                className="mt-2" variant="underlined" labelPlacement={'outside'} disabled label="Comuna" placeholder="Seleccione una comuna"></Select>

                        ) : (

                            <Select
                                variant="underlined"
                                className="mt-2"
                                labelPlacement={'outside'}
                                label="Comuna"
                                placeholder="Seleccione una comuna"
                                items={comunas}
                            >
                                {(comuna) => <SelectItem key={comuna.codigo + '__' + v4()}>{comuna.nombre}</SelectItem>}

                            </Select>

                        )}

                    </div>


                    <div>
                        <Input variant="underlined"
                            id="txt_apellidos"
                            name="txt_apellidos"
                            type="text"
                            label="Apellidos"
                            labelPlacement="outside"
                            placeholder="Ingrese sus apellidos"
                        />
                        <Input variant="underlined"
                            id="txt_confirmaContrasena"
                            name="txt_confirmaContrasena"
                            className="mt-2"
                            labelPlacement="outside"
                            label="Confirme contraseña"
                            placeholder="************"
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
                        <Input variant="underlined"
                            startContent={
                                <span className="text-sm text-default-500 align-bottom">+569</span>
                            }
                            className="mt-2"
                            type="text"
                            label="Teléfono"
                            labelPlacement="outside"
                            placeholder="12345678"
                            maxLength={8}
                            id="txt_telefono"
                            name="txt_telefono"
                        />
                        <Input variant="underlined"
                            className="mt-2"
                            type="date"
                            label="Fecha de nacimiento"
                            labelPlacement="outside"
                            placeholder="dd-mm-aaaa"
                            id="txt_fechaNacto"
                            name="txt_fechaNacto"
                        />

                        {(provincias.length == 1) ? (
                            <Select variant="underlined" className="mt-2" labelPlacement={'outside'} disabled label="Provincia" placeholder="Seleccione una provincia"></Select>

                        ) : (

                            <Select
                                variant="underlined"
                                className="mt-2"
                                labelPlacement={'outside'}
                                label="Provincia"
                                placeholder="Seleccione una provincia"
                                items={provincias}
                                onChange={(evt) => fetchCombos(evt, 'comuna')}
                            >
                                {(provincia) => <SelectItem key={provincia.codigo + '__' + v4()}>{provincia.nombre}</SelectItem>}

                            </Select>

                        )}

                        <Input variant="underlined"
                            className="mt-2"
                            id="txt_calle"
                            name="txt_calle"
                            type="text"
                            label="Calle y número"
                            labelPlacement="outside"
                            placeholder="Calle 123"
                        />
                    </div>
                </div>

                <div className="col-span-6 text-sm mt-2 flex flex-col gap-2">

                    <Button color="secondary" className="w-8/12 place-self-center mb-2" >Registrarse</Button>
                    <span className="place-self-center">¿Ya estás registrado? <Link to="/clientes/login" className="text-Primary">Inicia sesión</Link></span>
                    <Button color="primary" variant="ghost" className="w-6/12 place-self-center  hover:text-white text-sm"><FontAwesomeIcon className="text-lg" icon={faGoogle} /> Continuar con Google</Button>
                    <Button color="default" variant="ghost" className="w-6/12 place-self-center hover:text-white text-sm"><FontAwesomeIcon className="text-lg" icon={faFacebookF} /> Continuar con Google</Button>

                </div>
            </form>
        </main>
    )
}
