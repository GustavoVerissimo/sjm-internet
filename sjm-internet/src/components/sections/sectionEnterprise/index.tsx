import Image from "next/image"
import ImagemEmpresaUm from "../../../../public/image/empresas-1.jpg"
import ImagemEmpresaDois from "../../../../public/image/empresas-2.jpg"

export default function SectionEnterprise() {
    return(
        <section className="flex w-full h-[400px] bg-(--color-background-grey) items-center justify-center">
                <div className="bg-white h-[300px] w-[900px] rounded-3xl shadow-2xl">
                    <div>
                        <h2></h2>
                    </div>
                    <div className="w-[400px] h-[400px] rounded-[100px]">
                        <Image src={ImagemEmpresaUm} alt="imagem de empresa adquirido no site unsplash"  className="rounded-[20px]" />
                    </div>
                </div>
        </section>
    )
}