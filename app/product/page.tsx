'use client';
import Header from "@/app/components/Header/page";
import {Nav} from "@/app/utils/constants/navigationDirectDistributor";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import Title from "@/app/components/Title/page";
import Image from "next/image";
import {useEffect, useState} from "react";
import CardProduct from "@/app/components/CardProduct/page";

const Product = () => {
    const [input, setInput] = useState();

    const breadcrumb = [
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

    return (
        <main className="bg-white w-auto min-h-screen pb-10">
            <Header list={Nav()} />

            <div className="flex mx-25px md:mx-45px my-35px box-border">
                <div className="w-50% flex flex-col">
                    <Breadcrumb list={breadcrumb}/>
                    <Title title={'Search product'} />
                </div>
            </div>

            <form className="mx-25px md:mx-45px box-border relative z-0">
                <button type="submit" className="w-50px h-100% absolute top-0 left-0 flex items-center justify-center">
                    <Image
                        src="/icon/icon-search.svg"
                        alt="Icon search"
                        width="18"
                        height="18" />
                </button>
                <input
                    type="text"
                    placeholder="Type the Part Number..."
                    className="w-100% h-auto border-1 rounded-8px p-15px focus:outline-yellow_one pl-50px text-black font-normal font-inter text-14px"
                    onChange={(e: any) => {setInput(e.target.value)}}
                />
            </form>

            <div className="box-border flex mx-25px md:mx-45px my-35px">
                { input  <= 1 ? (
                    <CardProduct display={input}/>
                ) : (
                    <>
                        { input && (
                            <h2 className="w-100% flex items-center text-14px font-medium font-inter text-yellow_two">
                                <Image src="/icon/icon-warning-yellow.svg"
                                       alt="Icon Warning"
                                       width="16"
                                       height="16"
                                       className="mr-2"
                                />
                                Part Number not found in our database. Check your spelling and try again
                            </h2>
                        )}
                    </>
                )}
            </div>
        </main>
    )
}

export default Product;