import Image from "next/image"
import { BsWhatsapp } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import { MdHomeWork } from "react-icons/md"
import { MdOutlineWork } from "react-icons/md"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { HiPhone } from "react-icons/hi";

export default function Footer() {
    return(
        <footer className="flex flex-col bg-(--color-background-darkblue) justify-center items-center ">
            <div className="w-full h-[full] py-[40px] px-[80px] flex flex-row max-sm:flex-col items-center justify-around">
                <div className="flex flex-col max-sm:mb-[25px] lg:mr-[100px] items-center">
                    <Image src="/image/sjmLogo.webp" alt="Imagem que contém a logo da empresa SJM INTERNET" width={150} height={73} />
                    <div className="mt-[30px] flex flex-row max-sm:flex-col w-[300px] max-sm:items-center">
                        <a href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor" className="md:mr-2 max-sm:mb-2">
                            <Image src="/svg/google-play.svg" width={180} height={40} alt="logo playstore" className="w-[180px] h-[40px]" />
                        </a>
                        <a href="https://apps.apple.com/br/app/meuappprovedor/id1637448837">
                            <Image src="/svg/apple-store.svg" width={180} height={40} alt="logo applestore" className="w-[180px] max-sm:h-[45px] h-[40px]" />
                        </a>
                    </div>
                </div>
                <div className="max-sm:mb-[20px]" id="contatos">
                    <h2 className="text-white font-black text-[30px] text-center">Contatos</h2>
                    <div className="max-sm:mt-5">
                        <ul className="text-white font-bold">
                            <li className="flex flex-row items-center"><HiPhone className="mr-2"/><a href="https://wa.me/552131803223?text=Olá estou vindo do seu site, gostaria de algumas informações sobre os planos.">(21) 3180-3223</a></li>
                            <li className="flex flex-row items-center"><BsWhatsapp className="mr-2" /><a href="https://wa.me/5521999267929?text=Olá estou vindo do seu site, gostaria de algumas informações sobre os planos.">(21) 99926-7929</a></li>
                            <li className="flex flex-row items-center"><CiMail className="h-[18px] mr-2" /> <a href="mailto:sjminternet@yahoo.com.br">sjminternet@yahoo.com.br</a></li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-white font-black text-[30px] text-center">Soluções</h2>
                    <div className="max-sm:mt-5">
                        <ul className="text-white font-bold">
                            <li className="flex flex-row items-center"><FaHome className="mr-2"/><a href="/planos">Residencial</a></li>
                            <li className="flex flex-row items-center"><MdHomeWork className="mr-2"/><a href="/">Empresarial</a></li>
                            <li className="flex flex-row items-center"><MdOutlineWork className="mr-2"/><a href="https://wa.me/552131803223?text=Olá, gostaria de saber se há vagas disponíveis?">Trabalhe Conosco</a></li>
                            <li className="flex flex-row items-center"><VscWorkspaceTrusted className="mr-2"/><a href="/cadastro">Consultar Disponibilidade</a></li>
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