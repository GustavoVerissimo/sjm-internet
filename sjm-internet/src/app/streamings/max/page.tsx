import Footer from "@/components/footer";
import Header from "@/components/header";
import bannerMax from "../../../../public/image/planos/banner-max.png"
import Image from "next/image";
import MaxWatch from "../../../../public/image/max-watch.webp"
import { CarouselStreaming } from "@/components/carousel";

export default function max(){
    return(
        <>
            <Header />
            <main className="h-auto w-full justify-items-center bg-black">
                <Image src="/image/planos/banner-max.png" width={1440} height={250} alt="banner max" className="w-[400px] h-[100px] sm:w-[1440px] sm:h-[250px]" />
                <h1 className=" my-20 text-center text-[35px] md:text-[50px] text-white font-black"><span className="text-(--color-text-orange)">Watch Streaming</span> + MAX</h1>
                <div className="flex flex-col md:flex-row items-center justify-around">
                    <Image src="/image/max-watch.webp" width={700} height={400} alt="banner max e watch" className="w-[350px] h-[250px] md:w-[700px] md:h-[400px] rounded-2xl" />
                    <div className="w-[300px] md:w-[500px] mt-[15px] md:ml-10">
                        <p className=" text-[15px] md:text-[20px] text-justify text-white">Ser assinante da <span className="text-(--color-text-orange)">Watch Brasil</span> é ter aquele combo de vantagens que todo mundo ama! Com um catálogo recheado de conteúdos incríveis, nossos assinantes têm acesso a filmes e séries exclusivas da Max com o login da Watch. Por isso, se a ideia é maratonar aquela série que está super hypada, você está no lugar certo! Confira nossas indicações imperdíveis e prepare-se para dar o play nos conteúdos incríveis da Max.</p>
                    </div>
                </div>
                <div className="mt-30 flex flex-col md:flex-row items-start justify-center">
                    <div className="w-[350px] md:w-[500px]">
                        <h2 className="text-[25px] text-white">Escolha seu plano e assine já</h2>
                        <p className="w-[300px] text-white text-[15px] md:text-[20px]">Temos diversos os planos de Fibra + streaming para sua casa ou empresa</p>
                    </div>
                    <div className="max-sm:w-[350px]">
                        <CarouselStreaming />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}