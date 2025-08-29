import Image from "next/image"

import { HiBriefcase } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { FaHome } from "react-icons/fa"
import { HiSignal } from "react-icons/hi2";

export default function HeaderBanner() {
    return(
        <div className="flex flex-row max-sm:flex-col-reverse items-center justify-between font-(--font-display-rubik)">
          <div className="p-[30px]">
            <h1 className="font-black text-(--color-text-darkblue) 3xl:text-[70px] xl:text-[55px] lg:text-[50px] md:text-[40px] max-sm:text-[35px]">Conecte-se ao Futuro</h1>
            <p className="mb-2 text-(--color-text-grey) max-sm:text-[15px] text-[20px] ">Fibra ótica de alta velocidade para sua casa e empresa</p>
              <div className="flex flex-row max-sm:flex-col my-5">
                <div className="lg:mr-5">
                  <p className="flex flex-row lg:mb-2 items-center text-(--color-text-darkblue)"><FaHome className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />Para sua Residencia</p>
                  <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiSignal className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />100% Fibra ótica</p>
                </div>
                <div>
                  <p className="flex flex-row lg:mb-2 items-center text-(--color-background-darkblue)"><HiChartBar className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />Alta velocidade de conexão</p>
                  <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiBriefcase className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" /> Para todos os negócios</p>
                </div>  
              </div>
            <button className="bg-(--color-button-darkblue) w-64 sm:hover:w-68 text-white px-3 py-2 rounded-3xl "><a href="#planos">Confira Nossos Planos</a></button>
          </div>
            <Image src="/image/banner.jpg" width={2000} height={1500} alt="imagem que contém os planos de internet da empresa" className="2xl:w-[1000px] 2xl:h-[500px] xl:w-[800px] xl:h-[400px] lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[300px]  rounded-bl-[30px] " />
        </div>
    )
}