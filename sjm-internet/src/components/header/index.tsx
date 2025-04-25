import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.webp"

export default function Header() {
    return (
      <header id="Inicio" className="min-w-[320px]  h-[auto]">
        <div className="flex flex-row max-sm:flex-col items-center sm:justify-around py-[15px] px-[20px] text-white bg-(--color-background-darkblue)">
          <div>
            <Image src={sjmLogo} alt="Imagem que contém a logo da empresa SJM INTERNET" width='150' height='73.5' />
          </div>
          <div className="max-sm:mt-5">
            <ul className="flex flex-row">
              <li className="pr-4"><a href="/">Início</a></li>
              <li className="pr-4"><a href="/">Sobre</a></li>
              <li className="pr-4"><a href="/disponibilidade">Disponibilidade</a></li>
              <li className="pr-4"><a href="/">Promoções</a></li>
              <li className=""><a href="/">Contato</a></li>
            </ul>
          </div>
        </div>
      </header>
    ) 
  }