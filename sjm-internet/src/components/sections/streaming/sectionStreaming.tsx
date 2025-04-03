import Image from "next/image"
import imageMax450 from "../../../../public/image/planos/max-450.jpg"
import imageMax650 from "../../../../public/image/planos/max-650.jpg"
import imageMax800 from "../../../../public/image/planos/max-800.jpg"
import imageParamount450 from "../../../../public/image/planos/paramount-450.jpg"
import imageParamount650 from "../../../../public/image/planos/paramount-650.jpg"
import imageParamount800 from "../../../../public/image/planos/paramount-800.jpg"
import bannerMax from "../../../../public/image/planos/banner-max.png"
import bannerParamount from "../../../../public/image/planos/banner-paramount.png"

export default function Streaming() {
    return (
        <section className="items-center justify-center bg-white"> 
            <div className="flex flex-col mt-2 items-center text-center">
                <h2 className="text-(--color-text-darkblue) font-bold text-[40px] max-sm:text-[25px]">Fibra + Watch Streaming</h2>
                <div className="w-[100%] h-[100%] bg-white justify-center">
                    <Image alt="banner max" src={bannerMax} className="w-[2000px] h-[200px] max-sm:h-[100px]" />
                    <div className="pb-5 flex flex-row max-sm:flex-col justify-end max-sm:justify-center">
                        <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                            <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageMax450} className="w-[100%] h-[100%] rounded-xl" />
                        </div>
                        <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                            <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageMax650} className="w-[100%] h-[100%] rounded-xl" />
                        </div>
                        <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                            <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageMax800} className="w-[100%] h-[100%] rounded-xl" />
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}
