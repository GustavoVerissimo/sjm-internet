
import Button from "@/components/button/button"

export default function Price(){

    return(
        <section className="flex flex-col items-center justify-center p-[20px] bg-(--color-background-grey) 2xl:h-[1000px]">
            <h2 className="text-(--color-text-blue) font-bold text-[50px]">Fibra</h2>
            <div className="mt-10 justify-items-center">
                <div className="flex flex-row max-sm:flex-col">
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[500px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
    
                        <Button titleButton="Assine já" />
                    </div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[500px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
    
                        <Button titleButton="Assine já" />
                    </div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[500px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
    
                        <Button titleButton="Assine já" />
                    </div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[250px] h-[350px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
    
                        <Button titleButton="Assine já"/>
                    </div>
                </div>
            </div>       
        </section>
    )
}