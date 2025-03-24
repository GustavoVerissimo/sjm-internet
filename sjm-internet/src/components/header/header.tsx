import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.webp"
import Banner from "../../../public/image/banner.jpg"
import Button from "../button/button"

export default function Header() {
    return (
      <header id="Inicio">
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
        <div className="flex flex-row items-center justify-between max-w-[100%] h-full font-(--font-display-rubik)">
          <div className="p-[30px]">
            <h1 className="text-(--color-text-blue) text-[70px] font-bold ">Conecte-se ao Futuro</h1>
            <p className="text-(--color-text-grey) text-[20px] mb-2">Fibra ótica de alta velocidade para sua casa e empresa</p>
            <Button titleButton="Confira Nossos Planos" />
          </div>
            <Image src={Banner} alt="imagem que contém os planos de internet da empresa" className="2xl:w-[1000px] 2xl:h-[500px] rounded-bl-3xl " />
          </div>
      </header>
    ) 
  }