'use client';
import Header from "@/app/components/Header/page";
import {Nav} from "@/app/utils/constants/navigationDirectDistributor";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import Title from "@/app/components/Title/page";
import {breadcrumb, columns, dataDataTableProductUpdate} from "@/app/utils/constants/product/update/util";
import {useState} from "react";
import LinkSmall from "@/app/components/LinkSmall/page";
import DataTable from "@/app/components/Datatable/page";

const Product = () => {
    const [tab, setTab] = useState<number>(0);

    const handleClick = (e: number) => {
        setTab(e);
    }

    return (
        <main className="bg-white w-screen min-h-screen pb-20">
            <Header list={Nav()} />

            {/* breadcrumb */}
            <div className="flex mx-25px md:mx-45px my-35px box-border">
                <div className="w-50% flex flex-col">
                    <Breadcrumb list={breadcrumb()}/>
                    <Title title={'Update products'} />
                </div>
            </div>

            {/* nav */}
            <nav className="flex items-center mx-25px md:mx-45px border-b-1 z-0">
                <button className={`flex items-center justify-center p-5 z-10 text-14px font-inter font-normal ${tab === 0 ? 'text-yellow_one border-b-yellow_one border-b-2' : 'text-black_one'}`}
                        onClick={(e) => {handleClick(0)}}>
                    Single product
                </button>

                <button className={`flex items-center justify-center p-5 z-10 text-14px font-inter font-normal ${tab === 1 ? 'text-yellow_one border-b-yellow_one border-b-2' : 'text-black_one'}`}
                        onClick={(e) => {handleClick(1)}}>
                    General update
                </button>
            </nav>

            {/* aba */}
            <div className={`${tab === 0 ? 'flex' : 'hidden'} mt-10`}>
                <DataTable columns={columns()} data={dataDataTableProductUpdate()} />
            </div>
        </main>
    )
}

export default Product;