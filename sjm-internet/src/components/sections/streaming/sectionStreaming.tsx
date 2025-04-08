import Image from "next/image"
import bannerMax from "../../../../public/image/planos/banner-max.png"
import { CarouselSectionPrice, CarouselSpacing } from "@/components/carousel"
import paramountImagePrice from "../../../../public/image/paramount-section-price.webp"
import watchImagePrice from "../../../../public/image/watch-section-price.webp"

export default function Streaming() {
    return (
        <section className="items-center justify-center bg-white"> 
            <div className="flex flex-col mt-2 items-center text-center">
                <div className="bg-black">
                    <Image alt="banner max" src={bannerMax} className="w-[2000px] h-[200px] max-sm:h-[100px]" />
                </div>
                <h2 className="text-(--color-text-darkblue) font-bold text-[40px] max-sm:text-[25px]">Fibra + Streaming</h2>
                <div className="w-[100%] h-[100%] bg-white justify-around">
                    <div className="flex flex-row max-sm:flex-col-reverse items-center justify-around">
                        <div className="max-w-[500px] max-h-[300px]">
                            <h3 className="text-[30px]">Fibra + Watch Streaming</h3>
                            <p className="text-[20px]">Fibra Ótica de alta velocidade para assistir a filmes e series no seu Streaming Favorito</p>
                            <div className="flex flex-row items-center justify-around">
                                <div className="bg-(--color-background-grey) rounded-xl mr-1">
                                    <Image src={watchImagePrice} alt="logo watch" className="p-1"/>
                                </div>
                                <div className="bg-(--color-background-grey) rounded-xl">
                                    <Image src={paramountImagePrice} alt="logo paramount" className="p-1"/>
                                </div>
                            </div>
                            <button className="w-64 max-sm:w-40 bg-(--color-button-blue) hover:bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Assine Já</button>
                        </div>
                        <CarouselSectionPrice />   
                    </div>
                </div>
            </div> 
        </section>
    )
}
