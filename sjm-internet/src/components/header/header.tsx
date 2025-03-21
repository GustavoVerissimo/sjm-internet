import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.webp"

export default function Header() {
    return (
      <header>
        <div className="flex flex-row items-center justify-around py-[15px] px-[20px] text-white bg-(--color-background-blue)">
          <div>
            <Image src={sjmLogo} alt="Imagem que contém a logo da empresa SJM INTERNET" width='150' height='73.5' />
          </div>
          <div>
            <ul className="flex flex-row pr-4">
              <li className="pr-4"><a href="/">Início</a></li>
              <li className="pr-4"><a href="/">Sobre</a></li>
              <li className="pr-4"><a href="/">Preços</a></li>
              <li className="pr-4"><a href="/">Promoções</a></li>
              <li className="pr-4"><a href="/">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="bg-(--color-background-grey) w-full h-[300px]">
            <p className="text-white">ideias</p>
        </div>
      </header>
    ) 
  }