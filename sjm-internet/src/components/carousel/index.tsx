"use client"

import * as React from "react"

import Autoplay from "embla-carousel-autoplay"

import { BsWhatsapp } from "react-icons/bs"

import { type CarouselApi } from "@/components/ui/carousel"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

 
export function CarouselSectionPrice(){
    const data = [
        {
          id: 1, 
          megas: 450,
          preco: 127, 
        },
        {
          id: 2, 
          megas: 650,
          preco: 142, 
        },
        {
          id: 3, 
          megas: 800,
          preco: 152, 
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
                  <CarouselItem key={data.id} className="">
                      <div className="flex aspect-square items-center justify-center">
                          <div className="mt-[20px] mb-[20px] mr-1 p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                          <div className=" w-full justify-items-center items-center border-b">
                              <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">{data.megas}</p>
                              <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">MEGA</p>
                              <p className="mb-2 max-sm:text-[10px] text-(--color-text-grey)">Mais Velocidade, Menos Preço</p>
                          </div>
                          <div className="mt-2 justify-items-center">
                              <p className="mt-2 mb-1 flex flex-row text-(--color-text-grey)">R$<p className="text-[30px] max-sm:text-[20px]"><strong>{data.preco}</strong></p>,99/mês</p>
                          </div>
                          <button className="w-64 max-sm:w-40 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) sm:hover:w-68 text-white px-3 py-2 rounded-3xl">Assine Já</button>
                          <button className="mt-3 w-64 flex flex-row justify-center items-center bg-(--color-button-gren) sm:hover:w-68 text-white px-3 py-2 rounded-3xl"><BsWhatsapp  className="mr-1"/> WhatsApp</button>
                        </div> 
                      </div>  
                  </CarouselItem>
                  ))
          }
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>  
  )
}
