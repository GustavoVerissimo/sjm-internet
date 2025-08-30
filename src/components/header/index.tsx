import Image from "next/image"
import Dropdown from "@/components/header/dropdownHeader/"

export default function Header() {
    return (
      <header id="Inicio" className="min-w-[320px]  h-[auto]">
        <div className="flex flex-row items-center max-sm:justify-between sm:justify-around py-[15px] px-[20px] text-white bg-(--color-background-darkblue)">
          <div>
            <Image src="/image/sjm-logo.png" alt="Imagem que contém a logo da empresa SJM INTERNET" width={70} height={73} />
          </div>
          <div className="max-sm:mt-5 max-sm:hidden">
            <ul className="flex flex-row">
              <li className="pr-4 hover:border-b-2 hover:border-white hover:pb-1"><a href="/">Início</a></li>
              <li className="pr-4 hover:border-b-2 hover:border-white hover:pb-1"><a href="/#planos">Planos</a></li>
              <li className="lg:pr-4 hover:border-b-2 hover:border-white hover:pb-1"><a href="#contatos">Contato</a></li>
            </ul>
          </div>
          <div className="sm:hidden">
            <Dropdown />
          </div>
        </div>
      </header>
    ) 
  }