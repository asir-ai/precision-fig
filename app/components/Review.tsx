import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";
import Comment from "./Comment";

export default function Review() {
    return (
        <section className="grid w-full gap-8 px-4 py-12 sm:px-8 lg:grid-cols-[2fr_3fr] lg:gap-12 lg:px-40 lg:py-42">
            <div className="flex flex-col gap-8 lg:sticky lg:top-36 lg:h-fit lg:pr-10 lg:gap-12">
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Customer Reviews</h2>
                    <p className="flex flex-wrap items-center gap-2 text-base sm:text-xl lg:text-2xl">
                        {
                            Array.from({length: 5}).map((_, index) => {
                                return(
                                    <IoStar className="text-(--yellow)" key={index}/>
                                )
                            })
                        }
                        5.0 out of 5 - 569 reviews
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold sm:text-3xl">Share Your Thoughts</h2>
                    <p className="text-base sm:text-lg">If you have used our services, share your experience with others.</p>
                </div>
                <Button variant={"ghost"} className={'border border-amber-50 w-full font-semibold rounded-full text-base p-4 sm:text-xl sm:p-6 flex gap-3 sm:gap-4 cursor-pointer'}>
                    <span>Write a review</span>
                    <HiMiniArrowLongRight className="scale-125 sm:scale-140" aria-hidden />
                </Button>
                <div className="self-center flex flex-col items-center gap-4">
                    <Image
                        src={'/images/qr.png'}
                        alt="qr"
                        height={140}
                        width={140}
                        className="rounded-2xl"
                    />
                    <p className="text-lg sm:text-xl">Scan me!</p>
                </div>
            </div>
            <div>
                <Comment/>
            </div>
        </section>
    )
}