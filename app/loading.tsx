import MainDirectDistributor from "@/app/components/Main/page";
import Title from "@/app/components/Title/page";

export default function Loading() {
    return (
        <MainDirectDistributor>
            <div className="w-100% h-100% flex items-center justify-center">
                <Title title='Loading...' />
            </div>
        </MainDirectDistributor>
    )
}