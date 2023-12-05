'use client';
import Header from "@/app/components/Header/page";
import { Nav } from "../utils/constants/navigationDirectDistributor";
import DataTable from "@/app/components/Datatable/page";
import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import Title from "@/app/components/Title/page";
import LinkSmall from "@/app/components/LinkSmall/page";
import MainDirectDistributor from "@/app/components/Main/page";

const User = () => {
    // Função para edição
    function handleEdit(directDistributorId: number) {
        //router.push(`/admin/direct-distributor/${directDistributorId}`);
    }

    // Função para excluir
    function handleOpenModel() {
        alert('Deleted');
    }

    // DataTable columns
    const columns = [
        {
            Header: "ID",
            accessor: "id",
            width: "10%",
        },
        {
            Header: "NAME",
            accessor: "name",
            width: "30%",
        },
        {
            Header: "EMAIL",
            accessor: "email",
            width: "40%",
        },
        {
            Header: "Ação",
            accessor: "action",
            width: "10%",
            Cell: ({ row }: any) => (
                <div className="flex items-center w-auto text-right">
                    <button
                        onClick={() => handleEdit(row.original.id)}
                        className="w-25px h-25px flex items-center justify-centers">
                        <Image
                            src="/icon/icon-edit.svg"
                            width="18"
                            height="18"
                            alt="icon edit" />
                    </button>

                    <button
                        onClick={() => {handleOpenModel()}}
                        className="w-25px h-25px flex items-center justify-centers">
                        <Image
                            src="/icon/icon-trash.svg"
                            width="18"
                            height="18"
                            alt="icon edit" />
                    </button>
                </div>
            ),
        },
    ];

    const data = [
        {
            id: "1",
            name: "Daniel",
            email: "daniel.ismael@encoparts.com",
        },
    ];

    const breadcrumb = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Users",
            link: "/user",
        },
    ];

    return (
        <>
        <Header list={Nav()}/>
            <MainDirectDistributor>
                <div className="flex items-start">
                    <div className="w-100% md:w-50% flex flex-col">
                        <Breadcrumb list={breadcrumb}/>
                        <Title title={'Users'} />
                    </div>

                    <div className="w-100% md:w-50% mt-5 md:mt-0 flex items-center justify-end">
                        <LinkSmall href="/user/new" name="New user" bgColor="bg-yellow_one"/>
                    </div>
                </div>

                <DataTable columns={columns} data={data} />
            </MainDirectDistributor>
        </>
    )
}

export default User;