import Header from "@/components/header"
import Footer from "@/components/footer"
import TabsStreaming from "@/components/table"
import Image from "next/image"
import SectionQuestions from "@/components/sections/sectionQuestions"


export default function Streamings(){
    return(
        <>
            <Header />
                <main className="w-full h-full justify-items-center bg-(--color-background-grey)">
                    <h1 className="py-[25px] font-black text-[50px] text-center text-(--color-text-darkblue)">Fibra + <span className="text-(--color-text-orange)">Watch Streaming</span></h1>
                    <section className="flex flex-col md:flex-row py-[30px] items-center">
                        <div className="">
                            <Image src="/image/watch-tecnologia-2.webp" width={600} height={400} alt="imagem da Watch dispositivos" className="w-[600px] h-[400px]" />
                        </div>
                        <div className="w-[500px] max-sm:w-[330px] h-[300px] max-sm:mt-4 ">
                            <p className="text-[20px] max-sm:text-[17px] text-(--color-text-grey) text-justify">Com o <span className="font-black text-(--color-text-orange)">streaming by Watch</span>, além dos conteúdos exclusivos da Paramount+, você assiste canais ao vivo como Paramount, MTV, MTV Live, Nick Jr, Nickelodeon e Comedy Central, além de conteúdos gravados da Sony Channel, CNN Brasil, Universal e Xpeed by XP Investimentos.</p>
                            <p className="mt-[10px] text-[20px] max-sm:text-[17px] max-sm:ml-2 text-left text-(--color-text-grey)"> Disponiveis nos planos:</p>
                            <p className="text-[20px] font-black max-sm:text-[17px] text-left max-sm:pl-2 text-(--color-text-darkblue)">450, 650 e 800 MEGA</p>
                        </div>
                    </section>
                    <section className="w-full h-[700px] md:h-[500px] bg-(--color-background-darkblue) justify-items-center pt-10">
                        <TabsStreaming />
                    </section>
                    <SectionQuestions />
                </main>
            <Footer />
        </>
    )
}