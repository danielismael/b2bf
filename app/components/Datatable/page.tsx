'use client';

import React, { useState, useEffect } from 'react';
import { useTable, usePagination, useGlobalFilter } from "react-table";

interface DataTableProps {
    columns: any[];
    data: any[];
}

function DataTable({ columns, data }: DataTableProps): JSX.Element {
    const [pageSize, setPageSize] = useState<number>(10);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        // @ts-ignore
        page,
        // @ts-ignore
        canPreviousPage,
        // @ts-ignore
        canNextPage,
        // @ts-ignore
        nextPage,
        // @ts-ignore
        gotoPage,
        // @ts-ignore
        previousPage,
        // @ts-ignore
        state,
        // @ts-ignore
        setGlobalFilter,
        // @ts-ignore
        pageOptions,
        // @ts-ignore
    } = useTable(
        {
            columns,
            data,
            // @ts-ignore
            initialState: { pageIndex: 0, pageSize },
        },
        useGlobalFilter,
        usePagination
    );

    // @ts-ignore
    const { globalFilter, pageIndex } = state;

    // Use useEffect to observe changes in pageSize and force table update
    useEffect(() => {
        const updateTable = () => {
            setPageSize(pageSize);
            setGlobalFilter(globalFilter || '');
        };

        updateTable();
    }, [pageSize, setPageSize, globalFilter, setGlobalFilter]);

    return (
        <div className="w-auto rounded-12px border-0.5 mx-45px border-grey_one box-border overflow-hidden">
            <div>
                <div className="p-25px">
                    <div className="form-group position-relative">
                        <div></div>
                        <input
                            type="text"
                            value={globalFilter || ''}
                            onChange={(e) => setGlobalFilter(e.target.value)}
                            placeholder="Pesquisar..."
                            className="flex w-280px py-3 px-6 rounded-8px focus:outline-none text-14px text-black border-grey_one border-1"
                        />
                    </div>
                </div>

                <table {...getTableProps()} className="w-screen table caption-top w-auto">
                    <thead className="px-3 bg-grey_three h-50px border-t-1 border-b-1">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <td {...column.getHeaderProps()} style={{ width: column.width }} className="font-semibold text-14px font-inter text-black first:pl-25px">
                                    {column.render('Header')}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map((row: any) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className="bg-white h-50px border-b-1">
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td {...cell.getCellProps()} style={{ width: cell.width }} className="font-normal text-14px font-inter text-black first:pl-25px">
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

                <div className="flex items-center justify-between p-25px">
                    <div className="text-grey_for">
                        Página{' '}
                        {pageIndex + 1} de {Math.ceil(data.length / pageSize)}{' '}
                    </div>

                    <div className="flex items-center justify-center">
                        <button onClick={() => previousPage()} disabled={!canPreviousPage} className="fw-bold w-30px h-30px rounded-8px border-gray flex items-center justify-center border-1 text-black">
                            {'<'}
                        </button>
                        {pageOptions.map((page: any, index: any) => (
                            <button
                                key={index}
                                onClick={() => gotoPage(index)}
                                className={`fw-bold w-30px h-30px rounded-8px border-gray border-1 mx-2 text-black flex items-center justify-center $(pageIndex === index ? 'active' : '')`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button onClick={() => nextPage()} disabled={!canNextPage} className="fw-bold w-30px h-30px rounded-8px border-1 border-gray text-black flex items-center justify-center">
                            {'>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataTable;