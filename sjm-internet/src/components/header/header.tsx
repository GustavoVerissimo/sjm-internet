import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.webp"

export default function Header() {
    return (
      <header className="bg-(--color-blue)">
        <div className="flex flex-row items-center py-[15px] px-[20px] w-[1200px] h-[100px]">
          <div className="py">
            <Image src={sjmLogo} alt="Imagem que contém a logo da empresa SJM INTERNET" width='200' height='73.5' />
          </div>
          
          <div className="color-white">
            <ul className="flex flex-row pr-4">
              <li className="pr-4"><a href="/">Início</a></li>
              <li className="pr-4"><a href="/">Sobre</a></li>
              <li className="pr-4"><a href="/">Preço</a></li>
              <li className="pr-4"><a href="/">Promoções</a></li>
              <li className="pr-4"><a href="/">Contato</a></li>
            </ul>
          </div>
        </div>
      </header>
    ) 
  }