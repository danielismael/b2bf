import Image from "next/image";

export const breadcrumb= () => [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Products",
        link: "/product",
    },
    {
        name: "Search",
        link: "/product",
    },
];

export const columns = () => [
    {
        Header: "PART NUMBER",
        accessor: "part_number",
        width: "25%",
    },
    {
        Header: "VALUE",
        accessor: "value",
        width: "25%",
    },
    {
        Header: "OPTION",
        accessor: "option",
        width: "25%",
    },
    {
        Header: "ACTIONS",
        accessor: "action",
        width: "10%",
        Cell: ({ row }: any) => (
            <div className="flex items-center w-auto text-right">
                <button
                    onClick={() => {}}
                    className="w-25px h-25px flex items-center justify-centers">
                    <Image
                        src="/icon/icon-edit.svg"
                        width="18"
                        height="18"
                        alt="icon edit" />
                </button>

                <button
                    onClick={() => {}}
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


export const dataDataTableProductUpdate = () => [
    {
        part_number: "1u3252",
        value: "100.00",
        option: "Percentage",
    },
];