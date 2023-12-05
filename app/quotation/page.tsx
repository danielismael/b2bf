'use client';
import Header from "@/app/components/Header/page";
import {Nav} from "@/app/utils/constants/navigationDirectDistributor";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import {
    breadcrumb,
    dataDataTableQuotation,
    TitleConst,
    ButtonsDatatable
} from "@/app/utils/constants/quotation/new/util";
import DataTable from "@/app/components/Datatable/page";
import MainDirectDistributor from "@/app/components/Main/page";
import Title from "@/app/components/Title/page";
import Image from "next/image";
import {getApiDirectDistributor} from "@/app/api/axios";
import {useEffect, useState} from "react";

type Quotation = {
    id: number
    client_name: string
    client_order: string
    requested_by: string
    urgent: string
    deadline: string
    type: string
    status: string
    created_at: string
}

type QuotationProps = {
    quotation: Quotation[]
}

const getData = async () => {
    const res = await fetch('http://localhost:8000/api/directDistributor/quotation', { next: { revalidate: 10 } })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const NewQuotation = async ({quotation}: QuotationProps) => {
    const response = await getData();

    const handleView = (id: string) => {
        // Lógica de edição aqui
        console.log(`Editando item com ID: ${id}`);
    };

    const handleDownload = (id: string) => {
        // Lógica de exclusão aqui
        console.log(`Excluindo item com ID: ${id}`);
    };

    const columns = () => [
        {
            Header: "ID",
            accessor: "id",
            width: "5%",
        },
        {
            Header: "TYPE",
            accessor: "type",
            width: "5%",
        },
        {
            Header: "CLIENT",
            accessor: "client_name",
            width: "15%",
        },
        {
            Header: "REQUESTED BY",
            accessor: "requested_by",
            width: "8%",
        },
        {
            Header: "CLIENT ORDER",
            accessor: "client_order",
            width: "8%",
        },
        {
            Header: "SUBMITTED AT",
            accessor: "created_at",
            width: "8%",
        },
        {
            Header: "DEADLINE",
            accessor: "deadline",
            width: "8%",
        },
        {
            Header: "STATUS",
            accessor: "status",
            width: "8%",
        },
        {
            Header: "ACTIONS",
            accessor: "actions",
            width: "5%",
            Cell: ({ row }: any) => (
                <div className="flex items-center w-auto text-right">
                    <button
                        onClick={() => handleView(row.original.id)}
                        className="w-25px h-25px flex items-center justify-center"
                    >
                        <Image
                            src="/icon/icon-view.svg"
                            width="18"
                            height="18"
                            alt="icon edit"
                        />
                    </button>

                    <button
                        onClick={() => handleDownload(row.original.id)}
                        className="w-25px h-25px flex items-center justify-center"
                    >
                        <Image
                            src="/icon/icon-document.svg"
                            width="18"
                            height="18"
                            alt="icon edit"
                        />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <Header list={Nav()} />

            <MainDirectDistributor>
                <Breadcrumb list={breadcrumb()} />
                <Title title={TitleConst} />
                <DataTable columns={columns()} data={response} buttons={ButtonsDatatable()}/>
            </MainDirectDistributor>
        </>
    )
}
export default NewQuotation;