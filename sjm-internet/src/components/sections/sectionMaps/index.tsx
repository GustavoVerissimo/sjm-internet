import Image from "next/image"
import ImagemMapa from "../../../../public/image/imagem-section-mapa.jpg"

export default function SectionMaps() {
    return (
        <section className="justify-items-center bg-(--color-background-grey) py-[40px]">
            <div className="flex flex-col-reverse md:flex-row mx-[60px] bg-(--color-background-darkblue) w-[800px] h-[300px] max-sm:w-[340px] max-sm:h-full lg:justify-between max-sm:justify-center items-center rounded-3xl shadow-xl">
                <div className="flex flex-col md:items-start items-center w-[450px] max-sm:w-[300px] my-[20px] md:pr-2 md:ml-5 text-white">
                    <h2 className="mb-2 text-[32px] max-sm:text-[30px] font-black">Consulte Disponibilidade</h2>
                    <p className="mb-5 text-[20px] max-sm:text-[18px] text-left">Quer saber se atuamos na sua região? clique no botão abaixo e consulte a disponibilidade do seu endereço</p>
                    <button className="mt-3 w-64 bg-white sm:hover:w-68 text-(--color-text-darkblue) px-3 py-2 rounded-3xl"><a href="/disponibilidade">Consultar</a></button>
                </div>
                <div className="md:ml-2 max-sm:w-full md:pl-2 h-full">
                    <Image src={ImagemMapa} alt="imagem com a localização da empresa" className="md:rounded-3xl max-sm:rounded-bl-3xl w-[370px] h-full max-sm:w-full max-sm:h-[250px] "/>
                </div>
            </div>
        </section>
    )
}