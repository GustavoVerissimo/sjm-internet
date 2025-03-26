import Image from "next/image"
import imageMax450 from "../../../../public/image/planos/max-450.jpg"
import imageMax650 from "../../../../public/image/planos/max-650.jpg"
import imageMax800 from "../../../../public/image/planos/max-800.jpg"
import imageParamount450 from "../../../../public/image/planos/paramount-450.jpg"
import imageParamount650 from "../../../../public/image/planos/paramount-650.jpg"
import imageParamount800 from "../../../../public/image/planos/paramount-800.jpg"
import bannerMax from "../../../../public/image/planos/banner-max.png"
import bannerParamount from "../../../../public/image/planos/banner-paramount.png"
import Button from "@/components/button/button"

export default function sectionPrice(){

    return(
        <section className="flex flex-col items-center justify-center p-[20px] bg-(--color-background-grey) 2xl:h-[1000px]">
            <h2 className="text-(--color-text-blue) font-bold text-[50px]">Fibra</h2>
            <div className="mt-10 justify-items-center">
                <div className="flex flex-row max-sm:flex-col">
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[500px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                        <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageMax450} className="w-[100%] h-[300px] rounded-t-lg" />
                        <Button titleButton="Assine já" />
                    </div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[500px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                        <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageMax450} className="w-[100%] h-[300px] rounded-t-lg" />
                        <Button titleButton="Assine já" />
                    </div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[500px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                        <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageMax450} className="w-[100%] h-[300px] rounded-t-lg" />
                        <Button titleButton="Assine já" />
                    </div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[350px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                        <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageMax450} className="w-[100%] h-[300px] rounded-t-lg" />
                        <Button titleButton="Assine já"/>
                    </div>
                </div>
            </div>
            <div className=" mt-10 justify-items-center">
            <h2 className="text-(--color-text-blue) font-bold text-[50px]">Fibra + Watch Streaming</h2>
                <div className="w-[100%] h-[100%] bg-white justify-center">
                    <Image alt="banner max" src={bannerMax} className="w-[100%] h-[100%]" />
                    <div className="pb-10 flex flex-row max-sm:flex-col justify-around">
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
                <div className="w-[100%] h-[100%] bg-white justify-center">
                        <Image alt="banner paramount" src={bannerParamount} className="w-[100%] h-[100%]" />
                        <div className="pb-10 flex flex-row max-sm:flex-col justify-around">
                            <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                                <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageParamount450} className="w-[100%] h-[100%] rounded-xl" />
                            </div>
                            <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                                <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageParamount650} className="w-[100%] h-[100%] rounded-xl" />
                            </div>
                            <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                                <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={imageParamount800} className="w-[100%] h-[100%] rounded-xl" />
                            </div>
                        </div>
                </div>
            </div>        
        </section>
    )
}