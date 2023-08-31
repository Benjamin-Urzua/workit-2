import { Input, Button, Select, SelectItem, Tab, Tabs } from "@nextui-org/react"
import { formatRut } from 'rutlib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"
import { v4 } from 'uuid'
import { Link } from "react-router-dom";

export const RegisterEspecialista = () => {
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
        <main className="container flex justify-between flex-row  p-3">
            <div className="basis-8/12 text-center pt-10">
                <span className="mb-4 flex flex-col">
                    <h1 className="text-[2.5rem] font-[500]">Bienvenido a Work<span className="text-Primary">It.</span></h1>
                    <h4 className="text-[1.25rem] font-[500]">¡Regístrate como profesional!</h4>
                    <h4 className="text-[1.10rem] font-[500] mb-10">Y ¡sé el profesional que tus clientes necesitan!</h4>
                    <p className="text-[1.25rem] font-[600]">Documentación necesaria:</p>
                    <span className="text-justify place-self-center">
                        <li>Copia de cédula de identidad</li>
                        <li>Certificado de antecedentes</li>
                        <li>Certificado de residencia</li>
                    </span>
                    <Link to='/' className="text-Primary text-sm font-semibold place-self-start ml-24 mt-10">Volver</Link>
                </span>

            </div>
            <form className=" gap-3 basis-5/12 pt-20 col-span-6 flex flex-col ">

                <Tabs aria-label="Pasos" variant="underlined" color="secondary">
                    <Tab className="grid grid-cols-2 gap-3" key="paso1" title="Paso 1">
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

                                <Select variant="underlined" className="mt-2" labelPlacement={'outside'} disabled label="Región" placeholder="Seleccione una región"></Select>

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

                                <Select variant="underlined" className="mt-2" labelPlacement={'outside'} disabled label="Comuna" placeholder="Seleccione una comuna"></Select>

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
                                className="mt-2"
                                type="email"
                                label="Correo electrónico"
                                labelPlacement="outside"
                                placeholder="email@workit.cl"
                                id="txt_email"
                                name="txt_email"

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

                        <div className="col-span-6 text-sm mt-2 flex flex-col gap-2">
                            <span className="place-self-center">¿Ya estás registrado? <Link to="/especialistas/login" className="text-Primary">Inicia sesión</Link></span>
                        </div>
                    </Tab>

                    <Tab className="grid grid-cols-2 gap-3 relative" key="paso2" title="Paso 2">
                        <div>
                            <span>
                                <label className="block text-sm mb-1 font-medium text-foreground-900 pb-[1.5]">Cédula de identidad</label>
                                <Input
                                    className="mb-2"
                                    id="fl_cedulaIdentidad"
                                    name="fl_cedulaIdentidad"
                                    variant="underlined"
                                    type="file"
                                    endContent={
                                        <Button radius="none" variant="flat" className="px-6" isIconOnly disabled color="none" type="button" >
                                            <span><FontAwesomeIcon className="text-l  text-foreground-400 pointer-events-none" icon={faArrowUpFromBracket} /></span>
                                        </Button>

                                    }
                                    startContent={
                                        <span className="absolute font-normal text-foreground-500 text-sm">Subir archivo...</span>
                                    }
                                    style={{ opacity: 0 }}
                                />
                            </span>

                            <span>
                                <label className="block text-sm mb-1 font-medium text-foreground-900 pb-[1.5]">Títulos profesionales</label>
                                <Input
                                    id="fl_titulosProfesionales"
                                    name="fl_titulosProfesionales"
                                    variant="underlined"
                                    type="file"
                                    multiple
                                    endContent={
                                        <Button radius="none" variant="flat" className="px-6" isIconOnly disabled color="none" type="button" >
                                            <span><FontAwesomeIcon className="text-l  text-foreground-400 pointer-events-none" icon={faArrowUpFromBracket} /></span>
                                        </Button>

                                    }
                                    startContent={
                                        <span className="absolute font-normal text-foreground-500 text-sm">Subir archivos...</span>
                                    }
                                    style={{ opacity: 0 }}
                                />
                            </span>

                            <Select
                                id="txt_rubro"
                                name="txt_rubro"
                                variant="underlined"
                                className="mt-2"
                                labelPlacement={'outside'}
                                label="Rubro"
                                placeholder="Seleccione su rubro"
                            >
                                <SelectItem>
                                    Informática
                                </SelectItem>

                                <SelectItem>
                                    Construcción
                                </SelectItem>

                                <SelectItem>
                                    Mecánica
                                </SelectItem>
                            </Select>
                        </div>


                        <div>
                            <span>
                                <label className="block text-sm mb-1 font-medium text-foreground-900 pb-[1.5]">Certificado de residencia</label>
                                <Input
                                    className="mb-2"
                                    id="fl_certResidencia"
                                    name="fl_certResidencia"
                                    variant="underlined"
                                    type="file"
                                    endContent={
                                        <Button radius="none" variant="flat" className="px-6" isIconOnly disabled color="none" type="button" >
                                            <span><FontAwesomeIcon className="text-l  text-foreground-400 pointer-events-none" icon={faArrowUpFromBracket} /></span>
                                        </Button>

                                    }
                                    startContent={
                                        <span className="absolute font-normal text-foreground-500 text-sm">Subir archivo...</span>
                                    }
                                    style={{ opacity: 0 }}
                                />
                            </span>
                            <span>
                                <label className="block text-sm mb-1 font-medium text-foreground-900 pb-[1.5]">Certificado de residencia</label>
                                <Input
                                    id="fl_certResidencia"
                                    name="fl_certResidencia"
                                    variant="underlined"
                                    type="file"
                                    endContent={
                                        <Button radius="none" variant="flat" className="px-6" isIconOnly disabled color="none" type="button" >
                                            <span><FontAwesomeIcon className="text-l  text-foreground-400 pointer-events-none" icon={faArrowUpFromBracket} /></span>
                                        </Button>

                                    }
                                    startContent={
                                        <span className="absolute font-normal text-foreground-500 text-sm">Subir archivo...</span>
                                    }
                                    style={{ opacity: 0 }}
                                />
                            </span>
                            <Input variant="underlined"
                                className="mt-2"
                                type="text"
                                label="Especifique su profesión"
                                labelPlacement="outside"
                                placeholder="Ej: Programador"
                                id="txt_email"
                                name="txt_email"

                            />

                        </div>
                        <div className="col-span-6 mt-2 text-sm flex flex-col gap-2">
                            <Button color="secondary" className="w-10/12 place-self-center mb-2">Registrarse</Button>
                            <span className="place-self-center">¿Ya estás registrado? <Link to="/especialistas/login" className="text-Primary">Inicia sesión</Link></span>
                        </div>
                        
                    </Tab>
                </Tabs>



            </form>
        </main>
    )
}
