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
];


export const dataDataTableProductUpdate = () => [
    {
        part_number: "1u3252",
        value: "100.00",
        option: "Percentage",
        edit: 1,
    },
];