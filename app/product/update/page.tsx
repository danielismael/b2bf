'use client';
import Header from "@/app/components/Header/page";
import {Nav} from "@/app/utils/constants/navigationDirectDistributor";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import Title from "@/app/components/Title/page";
import {breadcrumb, columns, dataDataTableProductUpdate} from "@/app/utils/constants/product/update/util";
import {useEffect, useState} from "react";
import LinkSmall from "@/app/components/LinkSmall/page";
import DataTable from "@/app/components/Datatable/page";
import MainDirectDistributor from "@/app/components/Main/page";

const Product = () => {
    const [tab, setTab] = useState<number>(0);
    const [inputUnity, setInputUnity] = useState('0');

    const handleClick = (e: number) => {
        setTab(e);
    }

    return (
        <main className="bg-white w-auto min-h-screen pb-20">
            <Header list={Nav()} />

            <MainDirectDistributor>
                {/* breadcrumb */}
                <div className="flex mb-35px box-border">
                    <div className="w-50% flex flex-col">
                        <Breadcrumb list={breadcrumb()}/>
                        <Title title={'Update products'} />
                    </div>
                </div>

                {/* nav */}
                <nav className="flex items-center border-b-1 z-0">
                    <button className={`flex items-center justify-center p-5 z-10 text-14px font-inter font-normal ${tab === 0 ? 'text-yellow_one border-b-yellow_one border-b-2' : 'text-black_one'}`}
                            onClick={(e) => {handleClick(0)}}>
                        Single product
                    </button>

                    <button className={`flex items-center justify-center p-5 z-10 text-14px font-inter font-normal ${tab === 1 ? 'text-yellow_one border-b-yellow_one border-b-2' : 'text-black_one'}`}
                            onClick={(e) => {handleClick(1)}}>
                        General update
                    </button>
                </nav>

                {/* windows */}
                <div className={`${tab === 0 ? 'block' : 'hidden'} mt-10`}>
                    <DataTable columns={columns()} data={dataDataTableProductUpdate()} />
                </div>

                <div className={`${tab === 1 ? 'flex' : 'hidden'} mt-10`}>
                    <div className="flex items-center flex-wrap">
                        <div className="flex flex-col mr-5">
                            <label className="text-14px font-inter font-normal text-black mb-2">Unity :</label>
                            <select className="w-200px p-2 border-1 rounded-8px text-14px font-inter font-normal text-black focus:outline-yellow_two"
                                    onChange={(e) : void => {setInputUnity(e.target.value)}}>
                                <option value="0">Price</option>
                                <option value="1">Percentual</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-14px font-inter font-normal text-black mb-2">Value :</label>
                            <div className={`relative ${inputUnity == '0' ? 'before:content-["$"]' : 'before:content-["%"]'}  before:absolute text-grey_for before:left-10px before:top-7px`}>
                                <input type="number" placeholder="0.00" className="w-100px p-2 border-1 rounded-8px text-14px font-inter font-normal text-black pl-7 focus:outline-yellow_two placeholder:text-black"/>
                            </div>
                        </div>

                        <div className="w-100% mt-5 lg:mt-10">
                            <button className="px-18px py-10px bg-yellow_one rounded-60px text-14px font-medium font-inter text-black shadow-shadow_btn_small">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </MainDirectDistributor>
        </main>
    )
}

export default Product;