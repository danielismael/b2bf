'use client';
import Header from "@/app/components/Header/page";
import {Nav} from "@/app/utils/constants/navigationDirectDistributor";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import {
    breadcrumb,
    TitleConst,
    ButtonsDatatable
} from "@/app/utils/constants/quotation/util";
import DataTable from "@/app/components/Datatable/page";
import MainDirectDistributor from "@/app/components/Main/page";
import Title from "@/app/components/Title/page";
import Image from "next/image";

type QuotationItem = {
    id: number,
    client_name: string,
    client_order: string,
    requested_by: string,
    urgent: string,
    deadline: string,
    type: string,
    status: string,
    created_at: string,
    updated_at: string
}

type Quotations = {
    quotations: QuotationItem[]
}

async function getQuotations(){
    const res = await fetch('http://localhost:8000/api/directDistributor/quotation');
    return res.json();
}

const NewQuotation = async () => {
    const data = await getQuotations();

    const handleView = (id: number) => {
        alert(id)
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
                <button
                    onClick={() => handleView(row.original.id)}
                    className="w-25px h-25px flex items-center justify-center">
                    <Image
                        src="/icon/icon-view.svg"
                        width="18"
                        height="18"
                        alt="icon edit"
                    />
                </button>
            ),
        },
    ];

    return (
        <>
            <Header list={Nav()} />
            <MainDirectDistributor>
                <Breadcrumb list={breadcrumb()} />
                <Title title={TitleConst} />
                <DataTable columns={columns()}
                           data={data}
                           buttons={ButtonsDatatable()}/>
            </MainDirectDistributor>
        </>
    )
}
export default NewQuotation;