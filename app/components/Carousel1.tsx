import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { carousel1Items } from "@/lib/content/carouselItems";
import Image from "next/image";
import { HiMiniArrowLongRight } from "react-icons/hi2";

export default function Carousel1() {    
    return (
        <section className="mt-50 w-full flex flex-col items-center gap-14">
            <h2 className="text-4xl font-bold">These Humans Are The DNA Of Our Business</h2>
            <div className="flex w-full">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-[100vw]"
                    >
                    <CarouselContent>
                        {carousel1Items.map((value, index) => (
                        <CarouselItem key={index} className="basis-1/2 lg:basis-3/13">
                            <div className="p-1">
                            <Card className="group relative aspect-square w-full overflow-hidden border-0 shadow-md">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <Image
                                        src={`/images/${value.src}.png`}
                                        alt={value.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 200px) 10vw, 20vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <Button className={'bg-(--red) text-white font-semibold rounded-full text-xl p-6 flex gap-4'}>
                <span>Explore Services</span>
                <HiMiniArrowLongRight className="scale-140" aria-hidden />
            </Button>
        </section>
    )
}