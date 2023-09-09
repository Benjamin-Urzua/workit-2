import { Header } from "../Global/Header"
import { Dropdown, DropdownTrigger, Input, Button, DropdownMenu, DropdownItem } from "@nextui-org/react"
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMemo, useState } from "react"

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

    return (
        <>
            <Header />
            <div className="container m-auto  px-32">
                <section className="sticky inline-flex p-5 border-b-1 w-full gap-5">
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
                    <span className="flex gap-3">
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
                                    label="hasta:"
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
            </div>
        </>
    )
}
