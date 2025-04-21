import Image from "next/image"
import CelularImage from "../../../../public/image/celular-sjm.png"

export default function SectionApp() {
    return (
        <section className="bg-(--color-background-darkblue) h-[400px]">
            <Image src={CelularImage} alt="celular com a logo sjm" className="w-[200px]" /> 
            <div>
            </div>
        </section>
    )
}