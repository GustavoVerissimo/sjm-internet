import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogoTelecine from "../../../public/image/telecine-logo.png"
import LogoMax from "../../../public/image/max-logo.png"
import LogoParamount from "../../../public/image/paramount-logo.png"
import BannerParamountStreaming from "../../../public/image/banner-paramount-streaming.jpeg"
import BannerMaxStreaming from "../../../public/image/banner-max-streaming.webp"
import BannerTelecineStreaming from "../../../public/image/banner-telecine-streaming.webp"
import Image from "next/image"

export default function TabsStreaming(){
    return(
        <div>
             <Tabs defaultValue="paramount" className="w-[350px] md:w-[800px] h-[400px]">    
                <TabsList className="grid w-full grid-cols-3 h-auto bg-gray-50 shadow-2xl">
                    <TabsTrigger value="paramount" className="ml-1 mr-2 "><Image src={LogoParamount} alt=" logo da paramount" className="w-[90px] h-[20px]"/></TabsTrigger>
                    <TabsTrigger value="max" className="mr-2" ><Image src={LogoMax} alt="logo da max" className="w-[50px] h-[50px]"/></TabsTrigger>
                    <TabsTrigger value="telecine" className="mr-1"><Image src={LogoTelecine} alt="logo da telecine" className="w-[40px] h-[30px]"/></TabsTrigger>
                </TabsList>
                 <TabsContent value="paramount" className="">
                    <div className=" flex  flex-col-reverse md:flex-row  justify-center items-center md:justify-between bg-white rounded-2xl mb-2 shadow-2xl">
                        <div className="w-[250px] h-[300px] md:pl-5 justify-items-center">
                            <h2 className="mt-5 text-[25px] text-center font-black text-(--color-text-darkblue)">Bem vindo ao Paramount +</h2>
                            <p className="mt-2 text-[17px] text-justify text-(--color-text-grey)">A escolha ideal para desfrutar de séries incríveis, personagens marcantes, estreias do cinema, futebol, realities e documentários.</p>
                            <button className="w-64 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 mt-3 rounded-3xl">Saiba Mais</button>
                        </div>
                        <Image src={BannerParamountStreaming} alt="banner da paramount" className="w-[350px] md:w-[500px] h-[200px] md:h-[300px] rounded-r-2xl"/>
                    </div>
                 </TabsContent>
                 <TabsContent value="max">
                    <div className="flex  flex-col-reverse md:flex-row  justify-center items-center md:justify-between bg-white rounded-2xl mb-2 shadow-2xl">
                        <div className="w-[250px] h-[300px] md:pl-5 justify-items-center">
                            <h2 className="mt-5 text-[25px] text-center font-black text-(--color-text-darkblue)">Bem vindo ao Max</h2>
                            <p className="mt-4 text-[17px] text-justify text-(--color-text-grey)">A escolha ideal para desfrutar de séries incríveis, personagens marcantes, estreias do cinema, futebol, realities e documentários.</p>
                            <button className="w-64  bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 mt-10 rounded-3xl"><a href="/streamings/max">Saiba Mais</a></button>
                        </div>
                        <Image src={BannerMaxStreaming} alt="banner da paramount" className="w-[350px] md:w-[500px] h-[200px] md:h-[300px] rounded-r-2xl"/>
                    </div>
                 </TabsContent>
                 <TabsContent value="telecine">
                    <div className="flex  flex-col-reverse md:flex-row  justify-center items-center md:justify-between bg-white rounded-2xl mb-2 shadow-2xl">
                        <div className="w-[250px] h-[300px] md:pl-5 justify-items-center">
                            <h2 className="mt-5 text-[25px] text-center font-black text-(--color-text-darkblue)">Bem vindo ao Telecine</h2>
                            <p className="mt-2 text-[17px] text-justify text-(--color-text-grey)">A escolha ideal para desfrutar de séries incríveis, personagens marcantes, estreias do cinema, futebol, realities e documentários.</p>
                            <button className="w-64 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 mt-3 rounded-3xl">Saiba Mais</button>
                        </div>
                        <Image src={BannerTelecineStreaming} alt="banner da telecine" className="w-[350px] md:w-[500px] h-[200px] md:h-[300px] rounded-r-2xl"/>
                    </div>
                 </TabsContent>
             </Tabs>
        </div>
    )
}