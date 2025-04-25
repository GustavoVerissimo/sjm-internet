import Image from "next/image"
import ImagemMapa from "../../../../public/image/imagem-mapa.png"

export default function SectionMaps() {
    return (
        <section className="justify-items-center">
            <div className="flex flex-col-reverse md:flex-row max-sm: my-[20px] mx-[60px] bg-(--color-background-darkblue) w-[800px] h-[300px] max-sm:w-[340px] max-sm:h-full justify-center items-center rounded-3xl shadow-2xl">
                <div className="flex flex-col md:items-start items-center w-[450px] max-sm:w-[300px] my-[20px] text-white">
                    <h2 className="mb-2 text-[35px] max-sm:text-[30px] font-black">Consulte Disponibilidade</h2>
                    <p className="text-[20px] max-sm:text-[18px] text-left">Quer saber se atuamos na sua região? clique no botão abaixo e consulte a disponibilidade do seu endereço</p>
                    <button className="mt-3 w-64 bg-white sm:hover:w-68 text-(--color-text-darkblue) px-3 py-2 rounded-3xl"><a href="/disponibilidade">Consultar</a></button>
                </div>
                <div className="md:ml-2 max-sm:mt-2 border-white b-2">
                    <Image src={ImagemMapa} alt="imagem com a localização da empresa" className="rounded-full w-[250px] h-[250px] "/>
                </div>
            </div>
        </section>
    )
}