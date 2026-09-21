import { Button } from "@/components/ui/button"
import cardCompItems from "@/lib/content/cardCompItems"
import Image from "next/image"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import { VscLockSmall } from "react-icons/vsc"

export default function CardComp() {    
    return (
        <section className="mt-50 w-full">
            <div className="wContainer bg-[url('/images/bgImage1.png')] bg-cover bg-center py-12 px-22 flex flex-col items-center rounded-xl">
                <div className="flex gap-112">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Protect Now, Pay Over Time</h2>
                        <p className="text-xl font-semibold mb-10">Premium vehicle protection shouldnt wait. Enjoy stress-free financing that fits your lifestyle so you can hit the road with confidence today.</p>
                        <div className="flex justify-between items-center">
                            {
                                cardCompItems.map((item, index) => {
                                    return(
                                        <div key={index} className="flex items-center gap-4">
                                            <div className="bg-(--yellow) p-3 text-black text-3xl rounded-md">
                                                <item.img/>     
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold">{item.h2}</h2>
                                                <p className="font-semibold">{item.p}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <Image
                            src={'/images/qr.png'}
                            alt="qr"
                            height={140}
                            width={140}
                            className="rounded-2xl"
                        />
                        <hr className="border-t border-t-gray-700 w-full" />
                        <Button className={'bg-(--yellow) text-black font-semibold rounded-full text-xl p-6 flex gap-4'}>
                            <span>Get Approved Now</span>
                            <HiMiniArrowLongRight className="scale-140" aria-hidden />
                        </Button>
                        <p className="flex gap-2 whitespace-nowrap items-center"><VscLockSmall /> No impact on your credit score</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl">Financing provided by Synchrony</p>
                </div>
            </div>
        </section>
    )
}