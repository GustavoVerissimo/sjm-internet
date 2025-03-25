export default function sectionPrice(){
    return(
        <section className="flex flex-col items-center justify-center p-[20px] bg-(--color-background-grey) 2xl:h-[1000px]">
            <h2 className="text-[--color-text-blue] text-[30px]">Planos e Preços</h2>
            <div className="mt-10 justify-items-center">
                <h3>Fibra ótica</h3>
                <div className="flex flex-row max-sm:flex-col">
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                </div>
            </div>
            <div className=" mt-10 justify-items-center">
                <h3>Fibra + Streaming</h3>
                <div className="flex flex-row max-sm:flex-col">
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                    <div className="mt-[20px] sm:mr-5 bg-white w-[200px] h-[300px] rounded-xl"></div>
                </div>
            </div>

        </section>
    )
}