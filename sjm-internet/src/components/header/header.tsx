import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.jpg"

export default function Header() {
    return (
      <header className='bg-red'>
        <Image src={sjmLogo} alt="Imagem que contém a logo da empresa SJM INTERNET" width='150' height='73.5' />
        <div className='bg-black'>
        <button className='bg-sky-500/100'> teste </button>
        </div>
      </header>
    )
  }