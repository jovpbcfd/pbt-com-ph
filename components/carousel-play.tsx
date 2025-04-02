'use client'

import { useState } from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,

} from "@/components/ui/carousel"

const images = [
    {
        link: '/img/',
    },
    {
        link: '/img/',
    },
    {
        link: '/img/',
    },
]

export default function CarouselPlay() {
    const [autoplay] = useState(() => Autoplay({ delay: 3000, stopOnInteraction: true }));
    // const [api, setApi] = useState<CarouselApi>()
    // const [current, setCurrent] = useState(0)
    // const [count, setCount] = useState(0)

    // useEffect(() => {
    //     if (!api) {
    //         return
    //     }

    //     setCount(api.scrollSnapList().length)
    //     setCurrent(api.selectedScrollSnap() + 1)

    //     api.on("select", () => {
    //         setCurrent(api.selectedScrollSnap() + 1)
    //     })
    // }, [api])
    return (
        <>
            <Carousel
                plugins={[autoplay]}
            >
                <CarouselContent className="w-full h-[150px] md:[h-250px] lg:w-[1245px] lg:h-[300px]">
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="aspect-square flex items-center justify-center border-1 border-dashed flex items-center justify-center rounded-md h-full w-full">{index}</div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden text-white bg-transparent border-none md:block" />
                <CarouselNext className="hidden text-white bg-transparent border-none md:block" />
            </Carousel>
            <div>

            </div>
        </>
    )

}