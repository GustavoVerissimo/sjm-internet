"use client"

import * as React from "react"

import Autoplay from "embla-carousel-autoplay"

import imageMax450 from "../../../public/image/planos/max-450.jpg"
import imageMax650 from "../../../public/image/planos/max-650.jpg"
import imageMax800 from "../../../public/image/planos/max-800.jpg"
import imageParamount450 from "../../../public/image/planos/paramount-450.jpg"
import imageParamount650 from "../../../public/image/planos/paramount-650.jpg"
import imageParamount800 from "../../../public/image/planos/paramount-800.jpg"
import Image from "next/image"

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
        {id: 1 , image: imageMax450},
        {id: 2  , image: imageParamount450},
        {id: 3 , image: imageMax650},
        {id: 4 , image: imageParamount650},
        {id: 5 , image: imageMax800},
        {id:6 , image: imageParamount800},
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
    <div className="md:hidden">
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
                        <div className="items-center w-[450px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                          <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={data.image} className="w-[100%] h-[100%] rounded-xl" />
                        </div>
                      </div>  
                  </CarouselItem>

                  ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>  
  )
}
