import Image from "next/image"

export default function SectionApp() {
    return (
        <section className="justify-items-center">
            <div className="flex flex-col md:flex-row max-sm: my-[20px] mx-[60px] bg-(--color-background-darkblue) w-[800px] h-[300px] max-sm:w-[340px] max-sm:h-full items-center justify-araound rounded-3xl shadow-2xl">
                <Image src="/image/celular-sjm.png" width={400} height={250} alt="celular com a logo sjm" className="w-[400px] h-[250px] max-sm:w-[200px] max-sm:h-[150px] max-sm:my-5" /> 
                <div className="flex flex-col max-sm:items-center w-[450px] max-sm:w-[300px] my-[20px] text-white">
                    <h2 className="max-sm:mb-2 text-[35px] max-sm:text-[30px] font-black">Baixe o nosso App</h2>
                    <p className="text-[20px] max-sm:text-[18px]">Tenha acesso à tudo relacionado aos benefícios e gerenciamento de seu plano</p>
                    <div className="mt-[30px] flex flex-row max-sm:flex-col w-[300px] max-sm:items-center">
                        <a href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor" className="md:mr-2 max-sm:mb-2">
                            <Image src="/svg/google-play.svg" width={180} height={40} alt="logo playstore" className="w-[180px] h-[40px]" />
                        </a>
                        <a href="https://apps.apple.com/br/app/meuappprovedor/id1637448837">
                            <Image src="/svg/apple-store.svg" width={180} height={40} alt="logo applestore" className="w-[180px] max-sm:h-[45px] h-[40px]" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}