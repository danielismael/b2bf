'use client';
import MainDirectDistributor from "@/app/components/Main/page";
import Header from "@/app/components/Header/page";
import {Nav} from "@/app/utils/constants/navigationDirectDistributor";
import Breadcrumb from "@/app/components/Breadcrumb/page";
import {breadcrumb, TitleConst} from "@/app/utils/constants/quotation/new/util";
import Title from "@/app/components/Title/page";
import Label from "@/app/components/Label/label";
import ButtonSmall from "@/app/components/ButtonSmall/buttonSmall";
import {useState} from "react";
import { useRouter } from 'next/navigation'

const Page = () => {
    const [clientName, setClientName] = useState<string | null>(null);
    const [clientOrder, setClientOrder] = useState<string | null>(null);
    const [requestedBy, setRequestedBy] = useState<string | null>(null);
    const [urgent, setUrgent] = useState<string | null>(null);
    const [deadline, setDeadline] = useState<string | null>(null);
    const [type, setType] = useState<number | null>(null);

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const submitData = {
            client_name: clientName,
            client_order: clientOrder,
            requested_by: requestedBy,
            urgent: (urgent == 'false') ? 0 : 1,
            deadline: deadline,
            type: type,
            status: 0
        };

        try {
            const res = await fetch('http://localhost:8000/api/directDistributor/quotation/create',{
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                    'content-type': 'application/json'
                }
            })
            if(res.ok){
                router.push("/quotation")
            }else{
                console.log("Deu merda")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header list={Nav()} />

            <MainDirectDistributor>
                <Breadcrumb list={breadcrumb()} />
                <Title title={TitleConst} />

                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <div className="flex p-35px mt-35px rounded-8px border-1 border-grey_six mb-35px">
                    <div className="flex-auto w-6/12 pr-5">
                        <Label>Client name</Label>
                        <input type="text"
                               placeholder="Insert cliente name"
                               className="w-100% border-1 border-grey_six rounded-8px py-8px px-12px text-14px text-grey_seven font-inter font-normal"
                               required
                               onChange={(e) => {setClientName(e.target.value)}}
                        />
                    </div>
                    <div className="flex-auto w-2/12 pr-5">
                        <Label>Client order number</Label>
                        <input type="text"
                               placeholder="Insert cliente order number"
                               className="w-100% border-1 border-grey_six rounded-8px py-8px px-12px text-14px text-grey_seven font-inter font-normal"
                               required
                               onChange={(e) => {setClientOrder(e.target.value)}}
                        />
                    </div>
                    <div className="flex-auto w-2/12 pr-5">
                        <Label>Requested by</Label>
                        <input type="text"
                               placeholder="Raul Vasquez"
                               className="w-100% border-1 border-grey_six rounded-8px py-8px px-12px text-14px text-grey_seven font-inter font-normal"
                               required
                               onChange={(e) => {setRequestedBy(e.target.value)}}
                        />
                    </div>
                    <div className="flex-auto w-auto pr-5">
                        <Label>Urgent?</Label>
                        <div>
                            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                <input type="checkbox"
                                       id="toggle"
                                       className="sr-only peer"
                                       onChange={(e) => {setUrgent(e.target.value)}}
                                />
                                    <div className="block relative bg-grey_eight w-60px h-32px p-1 rounded-full before:absolute before:bg-white before:w-6 before:h-6 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 peer-checked:before:left-8 peer-checked:before:bg-white peer-checked:bg-red_one"></div>
                            </label>
                        </div>
                    </div>
                    <div className="flex-auto w-auto pr-5">
                        <Label>Deadline</Label>
                        <input type="datetime-local"
                               className="w-100% border-1 border-grey_six rounded-8px py-8px px-12px text-14px text-grey_seven font-inter font-normal"
                               required
                               onChange={(e) => {setDeadline(e.target.value)}}
                        />
                    </div>
                    <div className="flex-auto w-auto">
                        <Label>Type</Label>
                        <select className="w-100% border-1 border-grey_six rounded-8px py-9px px-12px text-14px text-grey_seven font-inter font-normal"
                                required
                                onChange={(e) => {setType(e.target.value)}}>
                            <option value="0">Spot</option>
                            <option value="1">Contrato</option>
                            <option value="2">Template</option>
                        </select>
                    </div>
                    </div>

                    <ButtonSmall bgColor="bg-grey_seven">Create</ButtonSmall>
                </form>
            </MainDirectDistributor>
        </>
    )
}

export default Page;