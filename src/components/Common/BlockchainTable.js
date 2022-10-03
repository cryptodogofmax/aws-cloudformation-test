import React from "react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  Td,
  Th,
  Tr,
  Tbody,
  Thead,
  Text,
  Box,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function BlockchainTable({ nfts: data, isLoading }) {
  const navigate = useNavigate();
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
        accessorFn: () => `${moment().format("MM-DD-YYYY")}`,
      },
      {
        header: "% Difference on Evaluation",
        footer: (props) => props.column.id,
        accessorKey: "percentDiffEvaluation",
        cell: (info) => (
          <Text className="text-green-500">
            {info.getValue()}% (underpriced)
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
              <Tr className="cursor-pointer" key={row.id}>
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
    </Box>
  );
}

export default BlockchainTable;
