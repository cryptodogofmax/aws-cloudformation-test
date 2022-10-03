import React from "react";
import { useMemo, useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table, Td, Th, Tr, Tbody, Thead, Icon, Box } from "@chakra-ui/react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import moment from "moment";

import { makeTransactionData } from "../../utils/makeData";

function TransactionHistory() {
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      {
        header: "Date",
        footer: (props) => props.column.id,
        accessorFn: (row) => moment(row.date).format("Do/MMMM/YYYY"),
      },
      {
        header: "Sender",
        footer: (props) => props.column.id,
        accessorFn: (row) => row.sender,
      },
      {
        header: "Recipient",
        footer: (props) => props.column.id,
        accessorFn: (row) => row.recipient,
      },
      {
        header: "Sale Price",
        footer: (props) => props.column.id,
        accessorFn: (row) => row.salePrice,
      },
    ],
    []
  );

  const [data] = useState(() => makeTransactionData(4));

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

  return (
    <Box className="p-2 text-white" overflowX="auto">
      <div className="h-2" />
      <Table size="sm">
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

export default TransactionHistory;
