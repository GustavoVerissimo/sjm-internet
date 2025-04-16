import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.webp"
import Banner from "../../../public/image/banner.jpg"

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
              <li className="pr-4"><a href="/">Preços</a></li>
              <li className="pr-4"><a href="/">Promoções</a></li>
              <li className=""><a href="/">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row max-sm:flex-col-reverse items-center justify-between font-(--font-display-rubik)">
          <div className="p-[30px]">
            <h1 className="font-black text-(--color-text-darkblue) 3xl:text-[70px] xl:text-[55px] lg:text-[50px] md:text-[40px] max-sm:text-[28px]">Conecte-se ao Futuro</h1>
            <p className="mb-2 text-(--color-text-grey) max-sm:text-[15px] text-[20px] ">Fibra ótica de alta velocidade para sua casa e empresa</p>
            <button className="bg-(--color-button-darkblue) w-64 sm:hover:w-68 text-white px-3 py-2 rounded-3xl ">Confira Nossos Planos</button>
          </div>
            <Image src={Banner} alt="imagem que contém os planos de internet da empresa" className="2xl:w-[1000px] 2xl:h-[500px] xl:w-[800px] xl:h-[350px] lg:w-[600px] lg:h-[300px] md:w-[400px] md:h-[300px]  rounded-bl-3xl " />
        </div>
      </header>
    ) 
  }