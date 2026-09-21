import { Button } from "@/components/ui/button"
import cardCompItems from "@/lib/content/cardCompItems"
import Image from "next/image"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { VscLockSmall } from "react-icons/vsc"

export default function CardComp() {    
    return (
        <section className="mt-20 w-full sm:mt-32 lg:mt-50">
            <div className="wContainer bg-[url('/images/bgImage1.png')] bg-cover bg-center py-8 px-4 sm:px-6 lg:px-10 xl:px-22 rounded-xl">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div className="w-full lg:flex-1">
                        <h2 className="text-2xl font-bold mb-3 sm:text-3xl lg:text-4xl">Protect Now, Pay Over Time</h2>
                        <p className="text-base font-semibold mb-6 sm:text-lg lg:text-xl lg:mb-10">Premium vehicle protection shouldnt wait. Enjoy stress-free financing that fits your lifestyle so you can hit the road with confidence today.</p>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                            {
                                cardCompItems.map((item, index) => {
                                    return(
                                        <div key={index} className="flex items-center gap-3 sm:gap-4">
                                            <div className="bg-(--yellow) p-3 text-black text-2xl rounded-md sm:text-3xl">
                                                <item.img/>     
                                            </div>
                                            <div>
                                                <h2 className="text-lg font-bold sm:text-xl lg:text-2xl">{item.h2}</h2>
                                                <p className="text-sm font-semibold sm:text-base">{item.p}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center w-full lg:max-w-[260px]">
                        <Image
                            src={'/images/qr.png'}
                            alt="qr"
                            height={140}
                            width={140}
                            className="rounded-2xl"
                        />
                        <hr className="border-t border-t-gray-700 w-full" />
                        <Button className={'bg-(--yellow) text-black font-semibold rounded-full text-base sm:text-xl p-4 sm:p-6 flex gap-3 sm:gap-4 w-full justify-center sm:w-fit'}>
                            <span>Get Approved Now</span>
                            <HiMiniArrowLongRight className="scale-140" aria-hidden />
                        </Button>
                        <p className="flex gap-2 whitespace-nowrap items-center text-sm sm:text-base"><VscLockSmall /> No impact on your credit score</p>
                    </div>
                </div>

                <div className="mt-6 text-center sm:mt-8">
                    <p className="text-base sm:text-xl">Financing provided by Synchrony</p>
                </div>
            </div>
        </section>
    )
}