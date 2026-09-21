import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CgArrowTopRight } from "react-icons/cg";

export default function AboutUs() {
    return (
        <section className="mt-50 bg-black w-full">
            <div className="wContainer py-24 px-8 grid grid-cols-2 gap-12 items-center mx-auto">
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl font-bold">About Us</h2>
                    <p className="text-xl leading-relaxed">
                        Born at the intersection of raw motorsport adrenaline and uncompromising luxury, our showroom is more than an automotive gallery—it is a sanctuary dedicated to the world’s most extraordinary driving machines. We meticulously curate a rarefied collection of exotic hypercars, limited-production supercars, and track-honed thoroughbreds from the globe’s most storied marques.
                    </p>
                    <p className="text-xl leading-relaxed">
                        Acquisition here transcends the conventional transaction into an intimate, bespoke journey. From private consultations in our black-marble VIP atelier—where clients tailor carbon weaves, hand-stitched leathers, and custom calibrations—to white-glove handover.
                    </p>
                    <Button className={'bg-(--red) text-white font-semibold rounded-full text-xl p-6 flex gap-4 w-fit'}>
                        <span>Learn More</span>
                        <CgArrowTopRight className="scale-150" aria-hidden />
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto h-full">
                    {/* Top Black Car */}
                    <div className="relative w-full md:col-span-2 overflow-hidden rounded-3xl">
                        <Image
                        src="/images/detailed_bespoke.png" 
                        alt="Front view of black BMW"
                        fill
                        className="object-cover"
                        priority
                        />
                    </div>

                    {/* Bottom Left Red Truck */}
                    <div className="relative w-full overflow-hidden rounded-3xl">
                        <Image
                        src="/images/exotic_supercar.png"
                        alt="Side view of red RAM truck"
                        fill
                        className="object-cover"
                        />
                    </div>

                    {/* Bottom Right Detailing */}
                    <div className="relative w-full overflow-hidden rounded-3xl">
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