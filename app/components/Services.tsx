"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { carouselMain } from "@/lib/content/carouselItems";
import Image from "next/image";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function Services() {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    
    return (
        <section className="mt-60 w-full flex flex-col gap-8">
            <div className="wContainer mx-auto justify-between flex items-center">
                <h2 className="text-4xl font-bold">What Services Do You Need?</h2>
                <div className="flex gap-6">
                    <Button onClick={() => carouselApi?.scrollPrev()} className={'text-black p-6 rounded-sm'} variant="outline" size="icon" aria-label="Go Back">
                        <GoChevronLeft className="scale-200" />
                    </Button>
                    <Button onClick={() => carouselApi?.scrollNext()} className={'text-black p-6 rounded-sm'} variant="outline" size="icon" aria-label="Go Back">
                        <GoChevronRight className="scale-200" />
                    </Button>
                </div>
            </div>
            <div className="flex justify-end">
                <Carousel
                setApi={setCarouselApi}
                    opts={{
                        align: "end",
                    }}
                    className="w-full max-w-[96vw]"
                    >
                    <CarouselContent>
                        {carouselMain.map((value, index) => (
                        <CarouselItem key={index} className="basis-1/2 lg:basis-3/11">
                            <div className="p-1">
                            <Card className="group relative aspect-square w-full overflow-hidden border-0 shadow-md">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image
                                        src={value.img}
                                        alt={value.h1}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 200px) 10vw, 20vw" 
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        <h2 className="text-4xl font-bold font-sans tracking-tight leading-snug text-white z-199">
                                        {value.h1}
                                        </h2>
                                        <p className="mt-2 text-xs text-zinc-300 line-clamp-4 font-inter leading-relaxed">
                                        {value.p}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}