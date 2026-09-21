import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

export default function AboutUs() {
    return (
        <section className="mt-20 bg-black w-full sm:mt-32 lg:mt-50">
            <div className="wContainer py-12 px-4 sm:px-6 lg:px-8 lg:py-24 grid grid-cols-1 gap-8 items-center mx-auto lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col gap-6 sm:gap-8">
                    <h2 className="text-3xl font-bold sm:text-4xl">About Us</h2>
                    <p className="text-base leading-relaxed sm:text-lg lg:text-xl">
                        Born at the intersection of raw motorsport adrenaline and uncompromising luxury, our showroom is more than an automotive gallery—it is a sanctuary dedicated to the world’s most extraordinary driving machines. We meticulously curate a rarefied collection of exotic hypercars, limited-production supercars, and track-honed thoroughbreds from the globe’s most storied marques.
                    </p>
                    <p className="text-base leading-relaxed sm:text-lg lg:text-xl">
                        Acquisition here transcends the conventional transaction into an intimate, bespoke journey. From private consultations in our black-marble VIP atelier—where clients tailor carbon weaves, hand-stitched leathers, and custom calibrations—to white-glove handover.
                    </p>
                    <Button className={'bg-(--red) text-white font-semibold rounded-full text-base sm:text-xl p-4 sm:p-6 flex gap-3 sm:gap-4 w-fit'}>
                        <span>Learn More</span>
                        <CgArrowTopRight className="scale-125 sm:scale-150" aria-hidden />
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 w-full max-w-5xl mx-auto h-full">
                    <div className="relative w-full overflow-hidden rounded-3xl sm:col-span-2 aspect-[16/10]">
                        <Image
                            src="/images/detailed_bespoke.png" 
                            alt="Front view of black BMW"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/3]">
                        <Image
                            src="/images/exotic_supercar.png"
                            alt="Side view of red RAM truck"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/3]">
                        <Image  
                            src="/images/close_up.png"
                            alt="Man inspecting car door wrap"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}