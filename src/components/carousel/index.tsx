"use client"

import * as React from "react"

import Autoplay from "embla-carousel-autoplay"

import { type CarouselApi } from "@/components/ui/carousel"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

 
export function CarouselStreaming(){
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
                  <CarouselItem key={data.id} className="md:basis-1/2">
                      <div className="flex aspect-square items-center justify-center">
                          <div className="mt-[20px] mb-[20px] mr-1 p-5 sm:mx-1 bg-white w-[350px] h-[390px] lg:w-[290px] lg:h-[370px] max-sm:w-[250px] max-sm:h-[300px] rounded-xl justify-items-center shadow-2xl">
                          <div className=" w-full justify-items-center items-center border-b">
                              <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">{data.megas}</p>
                              <p className="text-[50px] max-sm:text-[35px] text-(--color-text-darkblue) font-black">MEGA</p>
                              <p className="mb-2 max-sm:text-[10px] text-(--color-text-grey)">Mais Velocidade, Menos Preço</p>
                          </div>
                          <div className="mt-2 justify-items-center">
                              <p className="mt-5 mb-1 flex flex-row text-(--color-text-grey)">R$<p className="text-[40px] max-sm:text-[20px]"><strong>{data.preco}</strong></p>,99/mês</p>
                          </div>
                          <button className="w-64 max-sm:w-52 bg-(--color-button-darkblue) hover:bg-(--color-button-darkblue) text-white px-3 py-2 mt-7 rounded-3xl">Assine Já</button>
                        </div> 
                      </div>  
                  </CarouselItem>
                  ))
          }
        </CarouselContent>
      </Carousel>
      <div className="py-2 pl-[150px] md:pl-[320px] text-sm text-muted-foreground">
        <span className="w-[10px]">{current} de {count}</span>
      </div>
    </div>  
  )
}
