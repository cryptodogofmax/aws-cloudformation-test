import React from "react";
import { useMemo, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  Td,
  Th,
  Tr,
  Tbody,
  Thead,
  Button,
  Stack,
  Text,
  Input,
  Select,
  Icon,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function Filter({ column, table }) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === "number" ? (
    <div className="flex space-x-2 mt-2">
      <Input
        type="number"
        value={columnFilterValue?.[0] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [e.target.value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <Input
        type="number"
        value={columnFilterValue?.[1] ?? ""}
        onChange={(e) =>
          column.setFilterValue((old) => [old?.[0], e.target.value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <Input
      type="text"
      value={columnFilterValue ?? ""}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder={`Search...`}
      className="w-36 border shadow rounded mt-2"
    />
  );
}

function NftTable({ nfts: data, isLoading }) {
  const navigate = useNavigate();
  const rerender = useReducer(() => ({}), {})[1];

  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      {
        header: "NFT",
        footer: (props) => props.column.id,
        accessorFn: (row) => row.name,
      },
      {
        header: "Est. Price",
        footer: (props) => props.column.id,
        accessorFn: (row) => `${row.price.toFixed(2)}$`,
      },
      {
        header: "Listed Price",
        footer: (props) => props.column.id,
        accessorFn: (row) => `${row.price.toFixed(2)}$`,
      },
      {
        header: "Time Listed",
        footer: (props) => props.column.id,
        accessorFn: () => `${moment().format("MM/DD/YYYY")}`,
      },
      {
        header: "% Difference on Evaluation",
        footer: (props) => props.column.id,
        accessorKey: "percentDiffEvaluation",
        cell: () => (
          <Text className="text-green-500">
            {(Math.random() * 10).toFixed(2)}% (underpriced)
          </Text>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return isLoading ? (
    <div className="mt-10 flex justify-center">
      <Spinner color="white" />
    </div>
  ) : (
    <Box className="p-2 text-white" overflowX="auto">
      <div className="h-2" />
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <Icon
                              className="ml-1"
                              as={BsChevronUp}
                              color="white"
                              boxSize="4"
                            />
                          ),
                          desc: (
                            <Icon
                              className="ml-1"
                              as={BsChevronDown}
                              color="white"
                              boxSize="4"
                            />
                          ),
                        }[header.column.getIsSorted()] ?? null}
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      </div>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr
                className="cursor-pointer"
                key={row.id}
                onClick={() => navigate(`/value-analytics/${row.id}`)}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <div className="flex items-center gap-2 mt-5">
        <Button
          className="border rounded p-1"
          colorScheme="whatsapp"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {"<<"}
        </Button>
        <Button
          className="border rounded p-1"
          colorScheme="whatsapp"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          className="border rounded p-1"
          colorScheme="whatsapp"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
        <Button
          className="border rounded p-1"
          colorScheme="whatsapp"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {">>"}
        </Button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <Input
            type="number"
            width={150}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <Select
          width={240}
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option
              key={pageSize}
              value={pageSize}
              style={{ backgroundColor: "black" }}
            >
              Show {pageSize}
            </option>
          ))}
        </Select>
      </div>
      <Stack direction="row" className="float-right mt-5">
        <Button onClick={() => rerender()} colorScheme="telegram">
          Force Rerender
        </Button>
      </Stack>
    </Box>
  );
}

export default NftTable;
