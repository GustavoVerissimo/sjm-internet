import Footer from "@/components/footer";
import Header from "@/components/header";
import bannerMax from "../../../../public/image/planos/banner-max.png"
import Image from "next/image";
import MaxWatch from "../../../../public/image/max-watch.webp"
import { CarouselStreaming } from "@/components/carousel";
import { CarouselMax } from "@/components/carousel/carouselPageMax";

export default function max(){
    return(
        <>
            <Header />
            <main className="h-auto w-full px-[40px] justify-items-center bg-black">
                <Image src={bannerMax} alt="banner max" className="w-[1440px] h-[250px]" />
                <h1 className=" my-20 text-center text-[50px] text-white font-black"><span className="text-(--color-text-orange)">Watch Streaming</span> + MAX</h1>
                <div className="flex flex-row items-center justify-around">
                    <Image src={MaxWatch} alt="banner max e watch" className="w-[700px] h-[400px] rounded-2xl" />
                    <div className="w-[500px] ml-10">
                        <p className=" text-[20px] text-justify text-white">Ser assinante da <span className="text-(--color-text-orange)">Watch Brasil</span> é ter aquele combo de vantagens que todo mundo ama! Com um catálogo recheado de conteúdos incríveis, nossos assinantes têm acesso a filmes e séries exclusivas da Max com o login da Watch. Por isso, se a ideia é maratonar aquela série que está super hypada, você está no lugar certo! Confira nossas indicações imperdíveis e prepare-se para dar o play nos conteúdos incríveis da Max.</p>
                    </div>
                </div>
                <div className="my-30 flex flex-row items-start justify-center">
                    <div className="w-[500px]">
                        <h2 className="text-[30px] text-white">Escolha seu plano e assine já</h2>
                        <p className="w-[300px] text-white">Temos diversos os planos de Fibra + streaming para sua casa ou empresa</p>
                    </div>
                    <div className="">
                        <CarouselStreaming />
                    </div>
                </div>
                <section className="pb-20">
                    <h1 className="font-black text-white text-[40px] text-center mb-10">Conteúdos</h1>
                    <CarouselMax />
                </section>
            </main>
            <Footer />
        </>
    )
}