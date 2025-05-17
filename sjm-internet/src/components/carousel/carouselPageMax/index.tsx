"use client"

import * as React from "react"

import Autoplay from "embla-carousel-autoplay"

import { BsWhatsapp } from "react-icons/bs"

import { type CarouselApi } from "@/components/ui/carousel"

import MaxSports from "../../../../public/image/max-sports.webp"
import MaxSeries from "../../../../public/image/series-max.jpg"
import MaxReality from "../../../../public/image/reality-max.jpg"
import MaxNovelas from "../../../../public/image/novelas-max.avif"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

 
export function CarouselMax(){
    const data = [
        {
            id: 1, 
            titulo: "Séries",
            image: MaxSeries, 
            altImage: "banner the last of us",
            texto1: "THE LAST OF US",
            texto2: "Joel, um sobrevivente duro e cínico, e a jovem e impetuosa Ellie se conectam pela dificuldade do mundo em que vivem. Juntos, eles enfrentam circunstâncias brutais e monstros impiedosos durante uma difícil jornada pelos EUA após um surto apocalíptico.", 
        },
        {
            id: 2, 
            titulo: "Esporte",
            image: MaxSports,
            altImage: "banner champions league", 
            texto1: "O lugar para quem ama futebol é aqui!",
            texto2: "O Melhor da Champions League: Um torneio europeu de clubes para os campeões nacionais e outros clubes de topo das principais ligas nacionais do futebol europeu.",
        },
        {
            id: 3, 
            titulo: "Reality" ,
            image: MaxReality, 
            altImage: "banner Christina Reforma",
            texto1: "Christina Reforma - Novos Ares",
            texto2: "Especialista em imóveis e designer Christina Hall amplia seu negócio e se estabelece no Tennessee para fazer reformas incríveis para seus clientes e criar lembranças com sua família no interior.", 
        },
        {
            id: 4, 
            titulo: "Novelas" ,
            image: MaxNovelas,
            altImage: "banner Beleza Fatal", 
            texto1: "Beleza Fatal",
            texto2: "conta a história de Sofia, que busca vingança pela injusta prisão e morte da mãe, causada por sua prima Lola, uma mulher ambiciosa no mundo da beleza e cirurgias plásticas.",
        },
    ];
    const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api]);

  return (
    <div className="">
      <Carousel 
        className=" w-full max-w-2xl"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent className="-ml-1">
          {
              data.map((data) => (
                    <CarouselItem key={data.id} className="w-[1000px] h-auto">
                        <h1 className="py-[25px] text-center text-[40px] text-gray-50 font-bold">{data.titulo}</h1>
                        <div className="flex flex-row items-center justify-between w-[600px]">
                            <div className="w-[1000px] h-[300px] ">
                                <Image src={data.image} alt={data.altImage} className="w-full h-full rounded-2xl" />
                            </div>
                            <div className="pl-5 w-[700px]">
                                <h2 className="text-white text-[20px]">{data.texto1}</h2>
                                <p className="mt-5 text-white text-justify text-[15px]">{data.texto2}</p>
                            </div>
                        </div>  
                    </CarouselItem>
                  ))
          }
        </CarouselContent>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        <span className="w-[10px]">{current} de {count}</span>
      </div>
    </div>  
  )
}