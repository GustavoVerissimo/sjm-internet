import WatchBanner from "../../../../public/image/watch-banner-png.png"
import Image from "next/image"
import { BsWhatsapp } from "react-icons/bs"


export default function Streaming() {
    return(
        <section className="flex flex-row items-center justify-center bg-(--color-background-darkblue)">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-[500px] max-sm:w-[350px] h-full">
                    <Image src={WatchBanner} alt="imagem sobre a logo do watch" />
                </div>
                <div className="w-[500px] max-sm:w-[330px] h-[300px] max-sm:h-[350px] mb-[60px]">
                    <p className="text-[20px] max-sm:text-[17px] text-white">Com o <span className="font-black text-(--color-text-orange)">streaming by Watch</span>, além dos conteúdos exclusivos da Paramount+, você assiste canais ao vivo como Paramount, MTV, MTV Live, Nick Jr, Nickelodeon e Comedy Central, além de conteúdos gravados da Sony Channel, CNN Brasil, Universal e Xpeed by XP Investimentos.</p>
                    <p className="mt-[10px] text-[20px] max-sm:text-[17px] max-sm:ml-2 text-left text-white"> Disponiveis nos planos:</p>
                    <p className="text-[20px] font-black max-sm:text-[17px] text-left max-sm:pl-2 text-white">450, 650 e 800 MEGA</p>
                    <button className="mt-3 w-64 bg-white sm:hover:w-68 text-(--color-text-darkblue) px-3 py-2 rounded-3xl">Saiba Mais</button>
                    <button className="mt-3 w-64 flex flex-row justify-center items-center bg-(--color-button-gren) sm:hover:w-68 text-white px-3 py-2 rounded-3xl"><BsWhatsapp  className="mr-1"/> WhatsApp</button>
                </div>
            </div>    
        </section>
    )
}