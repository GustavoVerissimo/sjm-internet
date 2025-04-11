import * as React from "react"
import imageMax450 from "../../../public/image/planos/max-450.jpg"
import imageMax650 from "../../../public/image/planos/max-650.jpg"
import imageMax800 from "../../../public/image/planos/max-800.jpg"
import imageParamount450 from "../../../public/image/planos/paramount-450.jpg"
import imageParamount650 from "../../../public/image/planos/paramount-650.jpg"
import imageParamount800 from "../../../public/image/planos/paramount-800.jpg"
import Image from "next/image"

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
    ]
  return (
    <Carousel className=" w-full max-w-2xl">
      <CarouselContent className="-ml-1">
        {
            data.map((data) => (
                <CarouselItem key={data.id} className="pl-1 lg:basis-1/2 xl:basis-1/3">
                    <div className="flex aspect-square items-center justify-center">
                      <div className="items-center w-[450px] h-[300px] max-sm:w-[200px] max-sm:h-[300px] rounded-xl">
                        <Image alt="Imagem que descreve o plano fibra 450 megas + streaming max" src={data.image} className="w-[100%] h-[100%] rounded-xl" />
                      </div>
                    </div>  
                </CarouselItem>
                ))
        }
      </CarouselContent>
    </Carousel>
  )
}
