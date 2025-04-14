import Image from "next/image"
import watchTecnologia from "../../../../public/image/watch-tecnologia-2.webp"
import logoMaxBranca from "../../../../public/image/logo-max-branca.webp"
import logoParamountBranca from "../../../../public/image/logo-paramount-branca.webp"
import logoTelecineBranca from "../../../../public/image/Logo-telecine-branca.png"
import LogoWatch from "../../../../public/image/logo-watch-branca.svg"


export default function Streaming() {
    return (
        <section className="items-center justify-center bg-(--color-background-darkblue)"> 
            <div className="flex flex-col  items-center text-center">
                <div className="w-[100%] h-[100%] my-10 bg-(--color-background-darkblue) justify-around">
                    <div className="flex flex-row max-sm:flex-col-reverse m-3 items-center justify-around">
                        <div className="max-w-[500px] max-h-[500px]">
                            <h2 className="my-5 text-white font-bold text-center text-[40px] max-sm:text-[30px]">Fibra + Watch</h2>
                            <p className="text-[20px] max-sm:text-[18px] max-sm:ml-2 text-left text-white">Fibra Ótica de alta velocidade para assistir a filmes e series no seu Streaming Favorito</p>
                            <div className="flex flex-row my-5 justify-center">
                                <Image src={LogoWatch} alt="logoWatch" className="w-[80px] h-[25px] md:w-[130px] md:h-[45px]"/>
                                <Image src={logoParamountBranca} alt="logoParamount" className="w-[80px] h-[30px] md:w-[130px] md:h-[60px]"/>
                                <Image src={logoMaxBranca} alt="logoMax" className="w-[80px] h-[30px] md:w-[130px] md:h-[60px]"/>
                                <Image src={logoTelecineBranca} alt="logoTelecine" className="w-[80px] h-[30px] md:w-[130px] md:h-[60px]"/>
                            </div>
                            <p className="text-[20px] max-sm:text-[18px] max-sm:ml-2 text-left text-white"> Disponiveis nos planos:</p>
                            <p className="text-[20px] font-black max-sm:text-[18px] text-left max-sm:pl-2 text-white">450, 650 e 800 MEGA</p>
                            <div className="flex flex-col max-sm:items-center max-sm:justify-center">
                                <button className="mt-3 w-64 bg-white hover:bg-(--color-button-blue) sm:hover:w-68 text-(--color-text-blue) px-3 py-2 rounded-3xl">Ligue</button>
                                <button className="mt-3 w-64 bg-(--color-button-gren) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">WhatsApp</button>
                            </div>                            
                        </div>
                            <Image src={watchTecnologia} alt="imagens da watch tecnologia" className="w-[650px] h-[350px] max-sm:w-[400px] max-sm:h-[300px] max-sm:mt-5 rounded-xl"/>
                    </div>
                </div>
            </div> 
        </section>
    )
}
