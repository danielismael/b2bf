import Header from "@/app/components/Header/page";
import {Nav} from "@/app/utils/constants/navigationDirectDistributor";

const Home = () => {
    return (
      <main className="w-screen h-screen bg-white">
        <Header list={Nav()}/>

        <h1 className="font-normal text-black text-14px font-inter m-10">
          - Dashboard to be defined -
        </h1>
      </main>
  )
}

export default Home;