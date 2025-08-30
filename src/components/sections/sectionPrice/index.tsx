import Image from "next/image"



export default function Price(){

    return(
        <section className="flex flex-col px-3 max-sm:pb-10 items-center justify-center bg-(--color-background-grey)">
            <div className="justify-items-center  mb-[20px]">
                <div className="flex flex-row max-sm:flex-col max-lg:flex-wrap max-xl:flex-wrap justify-center">
                    <div className="mt-[20px] md:mr-[30px] p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl" id="planos">
                        <div className=" w-full justify-items-center items-center border-b">
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">100</p>
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px]">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="max-sm:mt-3 ">
                            <p className="flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>75</strong></p>,90/mês</p>
                            <p className="text-[10px]">Pagando até o vencimento</p>
                            <p className="flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>65</strong></p>,90/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-52 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 rounded-3xl"><a href="/cadastro">Assine Já</a></button>
                    </div>
                    <div className="mt-[20px] md:mr-[30px] p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                        <div className=" w-full justify-items-center items-center border-b">
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">450</p>
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px] text-(--color-text-grey)">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2 justify-items-center">
                            <div className="flex flex-row items-center justify-around">
                                <div className="mr-1 max-w-[100px]">
                                    <Image src="/image/watch-section-price.webp" width={100} height={0} alt="logo watch" className="p-1"/>
                                </div>
                                <div className="max-w-[100px]">
                                    <Image src="/image/paramount-logo.png" width={100} height={0} alt="logo paramount" className="p-1"/>
                                </div>
                            </div>
                            <p className="mt-2 mb-1 flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>104</strong></p>,99/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-52 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 rounded-3xl"><a href="/cadastro">Assine Já</a></button>
                    </div>
                    <div className="mt-[20px] md:mr-[30px] p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                        <div className=" w-full justify-items-center items-center border-b">
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">650</p>
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px] text-(--color-text-grey)">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2 justify-items-center">
                            <div className="flex flex-row items-center justify-around">
                                <div className="mr-1 max-w-[100px]">
                                    <Image src="/image/watch-section-price.webp" width={100} height={0} alt="logo watch" className="p-1"/>
                                </div>
                                <div className=" max-w-[100px]">
                                    <Image src="/image/paramount-logo.png" width={100} height={0} alt="logo paramount" className="p-1"/>
                                </div>
                            </div>
                            <p className="mt-2 mb-1 flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>119</strong></p>,99/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-52 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 rounded-3xl"><a href="/cadastro">Assine Já</a></button>
                    </div>
                    <div className="mt-[20px] mr-1 p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                        <div className=" w-full justify-items-center items-center border-b">
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">800</p>
                            <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">MEGA</p>
                            <p className="mb-2 max-sm:text-[10px] text-(--color-text-grey)">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2 justify-items-center">
                            <div className="flex flex-row items-center justify-around">
                                <div className="mr-1 max-w-[100px]">
                                    <Image src="/image/watch-section-price.webp" width={100} height={0} alt="logo watch" className="p-1"/>
                                </div>
                                <div className="max-w-[100px]">
                                    <Image src="/image/paramount-logo.png" width={100} height={0} alt="logo paramount" className="p-1"/>
                                </div>
                            </div>
                            <p className="mt-2 mb-1 flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>129</strong></p>,99/mês</p>
                        </div>
                        <button className="w-64 max-sm:w-52 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 rounded-3xl"><a href="/cadastro">Assine Já</a></button>
                    </div>      
                </div>
            </div>       
        </section>
    )
}