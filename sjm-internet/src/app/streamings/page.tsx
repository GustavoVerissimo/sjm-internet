import Header from "@/components/header"
import Footer from "@/components/footer"
import { CarouselSectionPrice }from "@/components/carousel"
import TabsStreaming from "@/components/table"
import ImagemWatch from "../../../public/image/watch-tecnologia-2.webp"
import Image from "next/image"

export default function Streamings(){
    return(
        <>
            <Header />
                <main className="h-full bg-black justify-items-center">
                    <section className="flex flex-col md:flex-row py-[30px] items-center">
                        <div className="">
                            <Image src={ImagemWatch} alt="imagem da Watch dispositivos" className="w-[600px] h-[400px]" />
                        </div>
                        <div className="w-[500px] max-sm:w-[330px] h-[300px]">
                            <p className="text-[20px] max-sm:text-[17px] text-white">Com o <span className="font-black text-(--color-text-orange)">streaming by Watch</span>, além dos conteúdos exclusivos da Paramount+, você assiste canais ao vivo como Paramount, MTV, MTV Live, Nick Jr, Nickelodeon e Comedy Central, além de conteúdos gravados da Sony Channel, CNN Brasil, Universal e Xpeed by XP Investimentos.</p>
                            <p className="mt-[10px] text-[20px] max-sm:text-[17px] max-sm:ml-2 text-left text-white"> Disponiveis nos planos:</p>
                            <p className="text-[20px] font-black max-sm:text-[17px] text-left max-sm:pl-2 text-white">450, 650 e 800 MEGA</p>
                        </div>
                    </section>
                    <TabsStreaming />
                    <CarouselSectionPrice />
                </main>
            <Footer />
        </>
    )
}