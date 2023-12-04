'use client';
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

interface ProductsType {
    display: number
}

const CardProduct = (props: ProductsType) => {
    const [isUpdated, setIsUpdated] = useState(props.display);

    useEffect(() => {
        setIsUpdated(props.display)
    }, [props.display]);

    return (
        <div className="w-100% md:w-1/2 lg:w-1/4 bg-white h-auto flex flex-col border-1 border-grey_one rounded-8px overflow-hidden">
            <div className={`w-100% px-25px py-20px flex flex-nowrap items-center justify-between ${isUpdated == 0 ? 'bg-grey_three' : 'bg-red_one' }`}>
                <h2 className={`w-auto font-inter font-semibold text-16px text-black ${isUpdated == 0 ? 'text-black' : 'text-white'}`}>1U3252 - TIP</h2>
                {isUpdated != 0 && (
                    <p className="font-inter font-normal text-14px flex flex-nowrap items-center">
                        Item outdated

                        <Image src="/icon/icon-alert.svg"
                               alt="Flag USA"
                               width="16"
                               height="16"
                               className="ml-2" />
                    </p>
                )}
            </div>

            <ul className="w-100% px-25px py-20px bg-white shadow-card_product">
                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5">
                    <strong>Price:</strong> 22.50
                </li>

                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5">
                    <strong>Weight:</strong> 2.81 kg
                </li>

                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5">
                    <strong>NCM:</strong> 84314929
                </li>

                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5">
                    <strong>HS Code:</strong> 8431491990
                </li>

                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5">
                    <strong>General notes:</strong>
                </li>

                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5 flex items-center">
                    <strong>Supplying location:</strong>
                    <Image src="/icon/icon-usa-flag.svg"
                           alt="Flag USA"
                           width="24"
                           height="20"
                           className="ml-2" />
                </li>

                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5">
                    <strong>Stock quantity:</strong> 0
                </li>

                <li className="w-100% font-inter font-normal text-14px text-black mb-2.5">
                    <strong>Lead time:</strong> 90
                </li>
            </ul>

            <div className="w-100% px-25px py-15px shadow-card_product flex items-center justify-between">
                <p className={`w-4/5 font-inter font-normal text-14px flex items-center ${isUpdated == 0 ? 'text-green_one' : 'text-red_one'}`}>
                    <Image src={isUpdated == 0 ? '/icon/icon-task-green_one.svg' : '/icon/icon-message.svg'}
                           alt="Task success"
                           width="20"
                           height="20"
                           className="mr-2"
                    />

                    {isUpdated == 0 ? (
                        'Item available to quote'
                    ) : (
                        'Update this item by submiting a quotation'
                    )}
                </p>

                <Link href="#" className="w-1/1 border-l-1 border-grey_one pl-25px">
                    <Image src="/icon/icon-gallery.svg"
                           alt="Icon gallery"
                           width="20"
                           height="20"
                           className="mr-2"
                    />
                </Link>
            </div>
        </div>
    )
}

export default CardProduct;