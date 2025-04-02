
import Button from "@/components/button/button"

export default function Price(){

    return(
        <section className="flex flex-col items-center justify-center p-[20px] bg-(--color-background-grey) 2xl:h-[1000px]">
            <h2 className="text-(--color-text-blue) font-bold text-[50px]">Fibra</h2>
            <div className="mt-10 justify-items-center">
                <div className="flex flex-row max-sm:flex-col">
                    <div className="mt-[20px] sm:mr-5 bg-white w-[350px] h-[350px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl justify-items-center">
                        <div className=" w-full justify-items-center items-center border-b">
                            <p className="text-[50px] text-(--color-text-blue2) font-black">100</p>
                            <p className="text-[50px] text-(--color-text-blue2) font-black">MEGA</p>
                            <p className="mb-2">Mais Velocidade, Menos Preço</p>
                        </div>
                        <div className="mt-2">
                            <p className="flex flex-row text-(--color-text-grey)">R$<p className="text-[30px]"><strong>75</strong></p>,90/mês</p>
                            <p className="text-[10px]">Pagando até o vencimento</p>
                            <p className="flex flex-row text-(--color-text-grey)">R$<p className="text-[30px]"><strong>65</strong></p>,90/mês</p>
                        </div>
                        <Button titleButton="Assine já" />
                    </div>
                </div>
            </div>       
        </section>
    )
}