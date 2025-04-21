import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.webp"

export default function Footer() {
    return(
        <footer className="flex flex-col bg-black justify-center items-center ">
            <div className="w-full h-[full] py-[40px] px-[80px] flex flex-row max-sm:flex-col items-center justify-around">
                <div className="max-sm:mb-[25px] lg:mr-[100px]">
                    <Image src={sjmLogo} alt="Imagem que contém a logo da empresa SJM INTERNET" width='150' height='73.5' />
                </div>
                <div className="max-sm:mb-[20px]">
                    <h2 className="text-white font-black text-[30px] text-center">Contatos</h2>
                    <div className="max-sm:mt-5">
                        <ul className="text-white font-bold">
                            <li><a href="https://wa.me/552131803223?text=Olá estou vindo do seu site, gostaria de algumas informações sobre os planos.">(21) 3180-3223</a></li>
                            <li><a href="https://wa.me/5521999267929?text=Olá estou vindo do seu site, gostaria de algumas informações sobre os planos.">(21) 99926-7929</a></li>
                            <li><a href="mailto:sjminternet@yahoo.com.br">sjminternet@yahoo.com.br</a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-white font-black text-[30px] text-center">Soluções</h2>
                    <div className="max-sm:mt-5">
                        <ul className="text-white font-bold">
                            <li><a href="/">Residencial</a></li>
                            <li><a href="/">Empresarial</a></li>
                            <li><a href="/">Trabalhe Conosco</a></li>
                            <li><a href="/">Consultar Disponibilidade</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p></p>
                <p className="text-white text-center">Desenvolvido por <a href="https://wa.me/5521991133620?text=Olá, vi um site criado por você e gostaria de solicitar um orçamento." className="font-bold">Gustavo Veríssimo</a></p>
            </div>
        </footer>
    )
}