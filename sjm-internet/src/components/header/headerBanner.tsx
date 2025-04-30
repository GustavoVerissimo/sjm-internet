import Image from "next/image"
import Banner from "../../../public/image/banner.jpg"

import { HiBriefcase } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiWifi } from "react-icons/hi";
import { HiSignal } from "react-icons/hi2";

export default function HeaderBanner() {
    return(
        <div className="flex flex-row max-sm:flex-col-reverse items-center justify-between font-(--font-display-rubik)">
          <div className="p-[30px]">
            <h1 className="font-black text-(--color-text-darkblue) 3xl:text-[70px] xl:text-[55px] lg:text-[50px] md:text-[40px] max-sm:text-[35px]">Conecte-se ao Futuro</h1>
            <p className="mb-2 text-(--color-text-grey) max-sm:text-[15px] text-[20px] ">Fibra ótica de alta velocidade para sua casa e empresa</p>
              <div className="">
                <p className="flex flex-row items-center text-(--color-text-grey)"><HiWifi className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />Wifi-Business</p>
                <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiSignal className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />100% Fibra ótica</p>
                <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiChartBar className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />Alta velocidade de conexão</p>
                <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiBriefcase className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" /> Para todos os negócios</p>
              </div>
            <button className="bg-(--color-button-darkblue) w-64 sm:hover:w-68 text-white px-3 py-2 rounded-3xl ">Confira Nossos Planos</button>
          </div>
            <Image src={Banner} alt="imagem que contém os planos de internet da empresa" className="2xl:w-[1000px] 2xl:h-[500px] xl:w-[800px] xl:h-[350px] lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[300px]  rounded-bl-[30px] " />
        </div>
    )
}