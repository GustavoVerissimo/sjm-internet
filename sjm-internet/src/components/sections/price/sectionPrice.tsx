import paramountImagePrice from "../../../../public/image/paramount-section-price.webp"
import watchImagePrice from "../../../../public/image/watch-section-price.webp"
import Image from "next/image"

export default function Price(){

    return(
        <section className="flex flex-col p-3 items-center justify-center bg-(--color-background-grey) 2xl:h-[1000px]">
            <div className="justify-items-center">
                <div className="flex flex-row max-sm:flex-col max-lg:flex-wrap max-xl:flex-wrap justify-center">
                    <div className="mt-[20px] mr-1 p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                        <div className=" w-full justify-items-center items-center border-b">
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-blue) font-black">100</p>
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-blue) font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px]">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2 2xl:mb-2 ">
                            <p className="flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>75</strong></p>,90/mês</p>
                            <p className="text-[10px]">Pagando até o vencimento</p>
                            <p className="flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>65</strong></p>,90/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-40 bg-(--color-button-blue) hover:bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Assine Já</button>
                    </div>
                    <div className="mt-[20px] mr-1 p-5 sm:mx-1 bg-(--color-background-blue) w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                        <div className=" w-full justify-items-center items-center border-b border-white">
                            <p className="text-[50px] max-sm:text-[35px] text-white font-black">450</p>
                            <p className="text-[50px] max-sm:text-[35px] text-white font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px] text-white">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2 justify-items-center">
                            <div className="flex flex-row items-center justify-around">
                                <div className="bg-(--color-background-grey) rounded-xl mr-1">
                                    <Image src={watchImagePrice} alt="logo watch" className="p-1"/>
                                </div>
                                <div className="bg-(--color-background-grey) rounded-xl">
                                    <Image src={paramountImagePrice} alt="logo paramount" className="p-1"/>
                                </div>
                            </div>
                            <p className="mt-2 mb-1 flex flex-row text-white">R$<p className="text-[30px] max-sm:text-[20px]"><strong>104</strong></p>,99/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-40 bg-white hover:bg-(--color-button-darkblue) hover:text-white sm:hover:w-68 text-(--color-background-blue) px-3 py-2 rounded-3xl">Assine Já</button>
                    </div>
                    <div className="mt-[20px] mr-1 p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                        <div className=" w-full justify-items-center items-center border-b">
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-blue) font-black">650</p>
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-blue) font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px]">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2 justify-items-center">
                            <div className="flex flex-row items-center justify-around">
                                <div className="bg-(--color-background-grey) rounded-xl mr-1">
                                    <Image src={watchImagePrice} alt="logo watch" className="p-1"/>
                                </div>
                                <div className="bg-(--color-background-grey) rounded-xl">
                                    <Image src={paramountImagePrice} alt="logo paramount" className="p-1"/>
                                </div>
                            </div>
                            <p className="mt-2 mb-1 flex flex-row">R$<p className="text-[30px] max-sm:text-[20px]"><strong>119</strong></p>,99/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-40 bg-(--color-button-blue) hover:bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Assine Já</button>
                    </div>
                    <div className="mt-[20px] mr-1 p-5 sm:mx-1 bg-(--color-background-blue) w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                        <div className=" w-full justify-items-center items-center border-b border-white">
                            <p className="text-[50px] max-sm:text-[35px] text-white font-black">800</p>
                            <p className="text-[50px] max-sm:text-[35px] text-white font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px] text-white">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2 justify-items-center">
                            <div className="flex flex-row items-center justify-around">
                                <div className="bg-(--color-background-grey) rounded-xl mr-1">
                                    <Image src={watchImagePrice} alt="logo watch" className="p-1"/>
                                </div>
                                <div className="bg-(--color-background-grey) rounded-xl">
                                    <Image src={paramountImagePrice} alt="logo paramount" className="p-1"/>
                                </div>
                            </div>
                            <p className="mt-2 mb-1 flex flex-row text-white">R$<p className="text-[30px] max-sm:text-[20px]"><strong>129</strong></p>,99/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-40 bg-white hover:bg-(--color-button-darkblue) hover:text-white sm:hover:w-68 text-(--color-background-blue) px-3 py-2 rounded-3xl">Assine Já</button>
                    </div>      
                </div>
            </div>       
        </section>
    )
}