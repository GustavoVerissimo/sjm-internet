
export default function SectionMaps() {
    return (
        <section className="justify-items-center">
            <div className="flex flex-col md:flex-row max-sm: my-[20px] mx-[60px] bg-(--color-background-darkblue) w-[800px] h-[300px] max-sm:w-[340px] max-sm:h-full justify-center items-center rounded-3xl shadow-2xl">
                <div className="flex flex-col items-center w-[450px] max-sm:w-[300px] my-[20px] text-white">
                    <h2 className="mb-2 text-[35px] max-sm:text-[30px] font-black">Consulte Disponibilidade</h2>
                    <p className="text-[20px] max-sm:text-[18px]">Quer saber se atuamos na sua região? clique no botão abaixo e consulte a disponibilidade do seu endereço</p>
                    <button className="mt-3 w-64 bg-white sm:hover:w-68 text-(--color-text-darkblue) px-3 py-2 rounded-3xl"><a href="/disponibilidade">Consultar</a></button>
                </div>
            </div>
        </section>
    )
}