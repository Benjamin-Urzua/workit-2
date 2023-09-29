import { Table, Pagination, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, Dropdown, DropdownItem, DropdownTrigger, Input, DropdownMenu, Checkbox } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil, faBan, faCircleUp, faChevronDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { columns, users } from "../../data/data";
import { useCallback, useState, useMemo } from "react";

const statusColorMap = {
  activo: "success",
  baneado: "warning",
};


export const AdminClientes = () => {
  const [ordenes, setOrdenes] = useState(new Set(["A-Z"]));

  const orden = useMemo(
    () => Array.from(ordenes).join(", "),
    [ordenes]
  );

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "usuario":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "fecha_registro":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "estado":
        return (
          <Chip className="capitalize" color={statusColorMap[user.estado]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "trabajos_solicitados":
        return (
          <Tooltip content={user.content}>
            <Chip className="capitalize" color="secondary" size="sm" variant="solid">
              {cellValue}
            </Chip>
          </Tooltip>

        );
      case "acciones":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Editar usuario">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
              </span>
            </Tooltip>
            <Tooltip content="Actualizar usuario">
              <span className="text-lg text-cyan-600 cursor-pointer active:opacity-50">
                <FontAwesomeIcon icon={faCircleUp}></FontAwesomeIcon>
              </span>
            </Tooltip>
            <Tooltip color="warning" content="Banear usuario">
              <span className="text-lg text-warning cursor-pointer active:opacity-50">
                <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Borrar usuario">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <main className="container mx-auto">
      <section className="flex justify-evenly py-4">
        <span>
          <Dropdown>
            <DropdownTrigger>
              <Input
                value={orden}
                variant="underlined"
                label="Ordenar por:"
                labelPlacement="outside-left"
                endContent={<FontAwesomeIcon size="xs" icon={faChevronDown} />}
                type="text"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={ordenes}
              onSelectionChange={setOrdenes}
            >
              <DropdownItem key="A-Z">A-Z</DropdownItem>
              <DropdownItem key="Fecha de Registro">Fecha de Registro</DropdownItem>
              <DropdownItem key="Estado">Estado</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </span>
        <span className="pt-2 ml-4">
          <span className="text-sm font-semibold ">Mostrar: </span >
          <Checkbox defaultSelected className="px-4" size="sm" color="secondary">Baneados</Checkbox>
          <Checkbox defaultSelected className="px-4" size="sm" color="secondary">Activos</Checkbox>
        </span>

        <span >
          <Input
            type="text"
            label="Buscar:"
            placeholder="tony.reichert@example.com"
            labelPlacement="outside-left"
            endContent={
              <button className="focus:outline-none" type="button" >
                <FontAwesomeIcon className="text-sm text-default-400 pointer-events-none" icon={faMagnifyingGlass} />
              </button>
            }
          />
        </span>
      </section>

      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <section className="flex justify-end py-2">
        <Pagination color="secondary" className="" total={10} initialPage={1} />
      </section>
    </main>
  );

}
