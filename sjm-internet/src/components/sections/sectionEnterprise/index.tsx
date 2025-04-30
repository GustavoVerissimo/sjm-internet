import Image from "next/image"
import ImagemEmpresaUm from "../../../../public/image/empresas-1.jpg"
import ImagemEmpresaDois from "../../../../public/image/empresas-2.jpg"

import { HiBriefcase } from "react-icons/hi";
import { HiChartBar } from "react-icons/hi";
import { HiWifi } from "react-icons/hi";
import { HiSignal } from "react-icons/hi2";

export default function SectionEnterprise() {
    return(
        <section className="flex w-full h-[400px] max-sm:h-[500px] bg-(--color-background-grey) items-center justify-center">
                <div className="flex flex-row max-sm:flex-col-reverse bg-white w-[900px] max-sm:w-[340px] h-[300px] max-sm:h-[400px] rounded-3xl shadow-2xl">
                    <div className="flex flex-col py-5 px-5 justify-items-center ">
                        <h2 className="mb-2 text-center text-[32px] max-sm:text-[30px] font-black text-(--color-text-darkblue)">Plano Empresarial</h2>
                        <div className="">
                            <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiWifi className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />Wifi-Business</p>
                            <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiSignal className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />100% Fibra ótica</p>
                            <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiChartBar className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" />Alta velocidade de conexão</p>
                            <p className="flex flex-row items-center text-(--color-background-darkblue)"><HiBriefcase className="w-[25px] h-[25px] mr-4 text-(--color-background-darkblue)" /> Para todos os negócios</p>
                        </div>
                        <div className="flex flex-col items-center py-2">
                            <button className="w-64 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Saiba Mais</button>
                        </div>
                    </div>
                    <div className="w-[400px] max-sm:w-full h-[400px] rounded-[100px]">
                        <Image src={ImagemEmpresaUm} alt="imagem de empresa adquirido no site unsplash"  className="rounded-bl-3xl" />
                    </div>
                </div>
        </section>
    )
}