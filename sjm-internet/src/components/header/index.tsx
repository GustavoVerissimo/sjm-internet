import Image from "next/image"
import sjmLogo from "../../../public/image/sjmLogo.webp"
{/*import GooglePlay from "../../../public/svg/google-play.svg"
import AppleStore from "../../../public/svg/apple-store.svg"*/}
import Dropdown from "@/components/header/dropdownHeader/"
{/*import { TiThMenu } from "react-icons/ti";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu" */}

export default function Header() {
    return (
      <header id="Inicio" className="min-w-[320px]  h-[auto]">
        <div className="flex flex-row items-center max-sm:justify-between sm:justify-around py-[15px] px-[20px] text-white bg-(--color-background-darkblue)">
          <div>
            <Image src={sjmLogo} alt="Imagem que contém a logo da empresa SJM INTERNET" width='70' height='73.5' />
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
             {/*<DropdownMenu>
              <DropdownMenuTrigger className=""><TiThMenu className="w-full h-full"/></DropdownMenuTrigger>
              <DropdownMenuContent className="w-[600px] h-[300px] pt-10 bg-(--color-background-darkblue) pl-[50px]">
                <DropdownMenuItem className="pl-4 text-white"><a href="/">Início</a></DropdownMenuItem>
                <DropdownMenuItem className="pl-4 text-white">Planos</DropdownMenuItem>
                <DropdownMenuItem className="pl-4 text-white"><a href="#contato">Contato</a></DropdownMenuItem>
                <DropdownMenuItem className="pl-4 text-white"></DropdownMenuItem>
                <DropdownMenuItem>
                  <div className=" flex flex-col w-[300px]">
                        <a href="https://play.google.com/store/apps/details?id=br.net.tsmx.meuappprovedor" className="md:mr-2 max-sm:mb-2">
                            <Image src={GooglePlay} alt="logo playstore" className="w-[180px] h-[40px]" />
                        </a>
                        <a href="https://apps.apple.com/br/app/meuappprovedor/id1637448837">
                            <Image src={AppleStore} alt="logo applestore" className="w-[180px] max-sm:h-[45px] h-[40px]" />
                        </a>
                    </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </div>
      </header>
    ) 
  }