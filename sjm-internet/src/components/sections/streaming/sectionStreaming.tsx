import Image from "next/image"
import bannerMax from "../../../../public/image/planos/banner-max.png"
import { CarouselSectionPrice} from "@/components/carousel"

export default function Streaming() {
    return (
        <>
        <div className="bg-black justify-center items-center">
            <Image alt="banner max" src={bannerMax} className="w-[1000px] max-sm:w-[300px] h-[200px] max-sm:h-[90px]" />
        </div>
        <section className="items-center justify-center bg-white"> 
            <div className="flex flex-col mt-2 items-center text-center">
                <div className="w-[100%] h-[100%] bg-white justify-around">
                    <div className="flex flex-row max-sm:flex-col-reverse m-3 items-center justify-around">
                        <div className="max-w-[500px] max-h-[500px] justify-items-start">
                            <h2 className="mt-1 text-(--color-text-darkblue) font-bold text-center text-[40px] max-sm:text-[30px]">Fibra + Watch Streaming</h2>
                            <p className="text-[20px] max-sm:text-[18px] text-left max-sm:pl-2 text-(--color-text-grey)">Fibra Ótica de alta velocidade para assistir a filmes e series no seu Streaming Favorito</p><br />
                            <p className="text-[20px] max-sm:text-[18px] text-left max-sm:pl-2 text-(--color-text-grey) ">Muito mais do que uma plataforma de streaming, a Watch é o maior hub de conteúdo do Brasil, Tudo isso por meio de um app inovador e parceria com os principais estúdios e emissoras do Brasil e do mundo, como Paramount+, Max, Globo e muito mais.</p>
                            <button className="mt-3 w-64 bg-(--color-button-blue) hover:bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Assine Já</button>
                        </div>
                            <CarouselSectionPrice />
                    </div>
                </div>
            </div> 
        </section>
        </>
    )
}
