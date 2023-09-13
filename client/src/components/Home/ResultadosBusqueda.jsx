import { Header } from "../Global/Header"
import { Dropdown, DropdownTrigger, Input, Button, DropdownMenu, DropdownItem, Card, CardBody, CardFooter, CardHeader, Avatar, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react"
import { faChevronDown, faChevronUp, faLocationDot, faAddressCard, faBriefcase, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMemo, useState } from "react"
import { faWeebly } from "@fortawesome/free-brands-svg-icons"

export const ResultadosBusqueda = () => {
    const [preciosDesde, setPreciosDesde] = useState(new Set(["$100.000"]));

    const precioDesde = useMemo(
        () => Array.from(preciosDesde).join(", "),
        [preciosDesde]
    );

    const [preciosHasta, setPreciosHasta] = useState(new Set(["$2.000.000"]));

    const precioHasta = useMemo(
        () => Array.from(preciosHasta).join(", "),
        [preciosHasta]
    );

    const [estrellas, setEstrellas] = useState(new Set(["5 estrellas"]));

    const estrella = useMemo(
        () => Array.from(estrellas).join(", "),
        [estrellas]
    );

    const [mostrarFiltros, setMostrarFiltros] = useState("hidden")
    const [changeChevron, setChangeChevron] = useState(true)
    const [colorFiltro, setColorFiltro] = useState("")

    const handleFiltros = () => {
        if (mostrarFiltros == "hidden") {
            setChangeChevron(false)
            setMostrarFiltros("flex")
            setColorFiltro("text-Primary")
        } else {
            setChangeChevron(true)
            setMostrarFiltros("hidden")
            setColorFiltro("text-")
        }
    }

    return (
        <>
            <Header />
            <div className="container m-auto">
                <section className={colorFiltro + " flex sm:hidden justify-start gap-3 px-16 py-2 hover:cursor-pointer text-[1.01rem] font-[500]"} onClick={handleFiltros}>
                    <span>Filtros</span>
                    {(changeChevron) ? (
                        <span ><FontAwesomeIcon size="sm" icon={faChevronDown} /></span>

                    ) : (

                        <span ><FontAwesomeIcon size="sm" icon={faChevronUp} /></span>
                    )}

                </section>
                <section className={mostrarFiltros + " sticky flex-col items-start px-16 sm:flex sm:flex-row sm:justify-between lg:px-36 2xl:px-64  p-5 border-b-1 w-full gap-5"}>

                    <Dropdown >
                        <DropdownTrigger>
                            <Button
                                color="secondary"
                                variant="bordered"
                            >
                                Ordenar por <FontAwesomeIcon size="sm" icon={faChevronDown} />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">Reputación</DropdownItem>
                            <DropdownItem key="copy">Relevantes</DropdownItem>
                            <DropdownItem key="edit">Más cercanos</DropdownItem>

                        </DropdownMenu>
                    </Dropdown>
                    <span className="flex flex-col sm:flex-row gap-3">
                        <Dropdown>
                            <DropdownTrigger>
                                <Input
                                    value={precioDesde}
                                    variant="underlined"
                                    label="Precio desde:"
                                    labelPlacement="outside-left"
                                    endContent={<FontAwesomeIcon size="xs" icon={faChevronDown} />}
                                    type="text"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={preciosDesde}
                                onSelectionChange={setPreciosDesde}
                            >
                                <DropdownItem key="$100.000">$100.000</DropdownItem>
                                <DropdownItem key="$200.000">$200.000</DropdownItem>
                                <DropdownItem key="$500.000">$500.000</DropdownItem>
                                <DropdownItem key="$1.000.000">$1.000.000</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown>
                            <DropdownTrigger>
                                <Input
                                    value={precioHasta}
                                    variant="underlined"
                                    label="Precio hasta:"
                                    labelPlacement="outside-left"
                                    endContent={<FontAwesomeIcon size="xs" icon={faChevronDown} />}
                                    type="text"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={precioHasta}
                                onSelectionChange={setPreciosHasta}
                            >
                                <DropdownItem key="$2.000.000">$2.000.000</DropdownItem>
                                <DropdownItem key="$5.000.000">$5.000.000</DropdownItem>
                                <DropdownItem key="$8.000.000">$8.000.000</DropdownItem>
                                <DropdownItem key="$10.000.000">$10.000.000</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </span>
                    <span>
                        <Dropdown>
                            <DropdownTrigger>
                                <Input
                                    value={estrella}
                                    variant="underlined"
                                    label="Calificación mínima"
                                    labelPlacement="outside-left"
                                    endContent={<FontAwesomeIcon size="xs" icon={faChevronDown} />}
                                    type="text"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={estrella}
                                onSelectionChange={setEstrellas}
                            >

                                <DropdownItem key="5 estrellas">5 estrellas</DropdownItem>
                                <DropdownItem key="4 estrellas">4 estrellas</DropdownItem>
                                <DropdownItem key="3 estrellas">3 estrellas</DropdownItem>
                                <DropdownItem key="2 estrellas">2 estrellas</DropdownItem>
                                <DropdownItem key="1 estrella">1 estrella</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </span>
                </section>
                <div className="px-16 sm:flex sm:flex-col sm:justify-between lg:px-36 2xl:px-64  p-5">
                    <h1 className="text-[1.8rem] font-[500] ">Resultados de la búsqueda</h1>
                    <h4 className="text-[1.1rem] font-[500] ">Informáticos en Los Ángeles</h4>

                    <Card className="mt-2">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar color="secondary" isBordered radius="full" size="lg" showFallback src='https://images.unsplash.com/broken' />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                                    <h5 className="text-small tracking-tight text-default-400">Informático</h5>
                                    <h5 className="text-small tracking-tight text-Primary">★★★★★ <span className="text-default-600 text-xs font-semibold">70 opiniones</span></h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 text-small text-default-500">
                            <span className="pb-2">
                                <span>
                                    <FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faLocationDot} />
                                </span>
                                Los Ángeles
                            </span>
                            <p>
                                <span><FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faAddressCard} /></span>
                                Me llamo tal, tengo tanta experiencia, nose que... hago tales trabajos, tal y tal Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea numquam totam dolorum delectus earum quos! Voluptatum, velit explicabo est perferendis ratione dolor distinctio incidunt unde dolorum a eius iste. Accusamus!
                            </p>
                            <span className="pt-2">
                                <span>
                                    <FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faBriefcase} />
                                </span>
                                5 años en la plataforma
                            </span>
                            <span className="pt-2">
                                <span>
                                    <FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faWrench} />
                                </span>
                                <Popover color="none" size="sm" placement="bottom">
                                    <PopoverTrigger>
                                        <Button className="text-default-500 " variant="light"><span className="text-xs">Configurar PC <br /><small>Ver precio <FontAwesomeIcon size="xs" icon={faChevronDown} /></small></span></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">$100.000</div>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                <Popover color="none" size="sm" placement="bottom">
                                    <PopoverTrigger>
                                        <Button className="text-default-500" variant="light"><span className="text-xs">Ensamble de PC <br /><small>Ver precio <FontAwesomeIcon size="xs" icon={faChevronDown} /></small></span></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">$100.000</div>
                                        </div>
                                    </PopoverContent>
                                </Popover>


                                <Popover color="none" size="sm" placement="bottom">
                                    <PopoverTrigger>
                                        <Button className="text-default-500" variant="light"><span className="text-xs">Formatear <br /><small>Ver precio <FontAwesomeIcon size="xs" icon={faChevronDown} /></small></span></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">$100.000</div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </span>
                        </CardBody>
                        <CardFooter className="gap-3 flex justify-end">
                            <div className="flex gap-1">
                                <Button color="light" className="text-Secondary">Visitar perfil</Button>
                                <Button color="secondary">Agendar</Button>
                            </div>
                        </CardFooter>
                    </Card>

                    <Card className="mt-2">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar color="secondary" isBordered radius="full" size="lg" showFallback src='https://images.unsplash.com/broken' />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                                    <h5 className="text-small tracking-tight text-default-400">Informático</h5>
                                    <h5 className="text-small tracking-tight text-Primary">★★★★★ <span className="text-default-600 text-xs font-semibold">70 opiniones</span></h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 text-small text-default-500">
                            <span className="pb-2">
                                <span>
                                    <FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faLocationDot} />
                                </span>
                                Los Ángeles
                            </span>
                            <p>
                                <span><FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faAddressCard} /></span>
                                Me llamo tal, tengo tanta experiencia, nose que... hago tales trabajos, tal y tal Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea numquam totam dolorum delectus earum quos! Voluptatum, velit explicabo est perferendis ratione dolor distinctio incidunt unde dolorum a eius iste. Accusamus!
                            </p>
                            <span className="pt-2">
                                <span>
                                    <FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faBriefcase} />
                                </span>
                                5 años en la plataforma
                            </span>
                            <span className="pt-2">
                                <span>
                                    <FontAwesomeIcon className="text-md text-default-500 pr-2" icon={faWrench} />
                                </span>
                                <Popover color="none" size="sm" placement="bottom">
                                    <PopoverTrigger>
                                        <Button className="text-default-500 " variant="light"><span className="text-xs">Configurar PC <br /><small>Ver precio <FontAwesomeIcon size="xs" icon={faChevronDown} /></small></span></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">$100.000</div>
                                        </div>
                                    </PopoverContent>
                                </Popover>

                                <Popover color="none" size="sm" placement="bottom">
                                    <PopoverTrigger>
                                        <Button className="text-default-500" variant="light"><span className="text-xs">Ensamble de PC <br /><small>Ver precio <FontAwesomeIcon size="xs" icon={faChevronDown} /></small></span></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">$100.000</div>
                                        </div>
                                    </PopoverContent>
                                </Popover>


                                <Popover color="none" size="sm" placement="bottom">
                                    <PopoverTrigger>
                                        <Button className="text-default-500" variant="light"><span className="text-xs">Formatear <br /><small>Ver precio <FontAwesomeIcon size="xs" icon={faChevronDown} /></small></span></Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="px-1 py-2">
                                            <div className="text-small font-bold">$100.000</div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </span>
                        </CardBody>
                        <CardFooter className="gap-3 flex justify-end">
                            <div className="flex gap-1">
                                <Button color="light" className="text-Secondary">Visitar perfil</Button>
                                <Button color="secondary">Agendar</Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}