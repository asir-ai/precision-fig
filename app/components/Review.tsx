import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { IoStar } from "react-icons/io5";
import Comment from "./Comment";

export default function Review() {
    return (
        <section className="grid lg:grid-cols-[2fr_3fr] px-40 w-full py-42">
            <div className="pr-42 flex flex-col gap-12 sticky top-36 h-fit">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl font-bold">Customer Reviews</h2>
                    <p className="flex items-center gap-2 text-2xl">
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
                    <h2 className="text-3xl font-bold">Share Your Thoughts</h2>
                    <p className="text-lg">If you have used our services, share your experience with others.</p>
                </div>
                <Button variant={"ghost"} className={'border border-amber-50 w-full font-semibold rounded-full text-xl p-6 flex gap-4 cursor-pointer'}>
                    <span>Write a review</span>
                    <HiMiniArrowLongRight className="scale-140" aria-hidden />
                </Button>
                <div className="self-center flex flex-col items-center gap-4">
                    <Image
                        src={'/images/qr.png'}
                        alt="qr"
                        height={140}
                        width={140}
                        className="rounded-2xl"
                    />
                    <p className="text-xl">Scan me!</p>
                </div>
            </div>
            <div>
                <Comment/>
            </div>
        </section>
    )
}