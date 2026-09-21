import { customerReviews } from "@/lib/content/customerReviews";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function Comment() {
    return (
        <div className="pl-12 flex flex-col gap-12">
            {
                customerReviews.map((review, index) => (
                    <div className="flex flex-col gap-6 border-b-2 border-b-gray-700 pb-12" key={index}>
                        <div className="flex gap-8">
                            <Image
                            src={`/images/${review.img}.png`}
                            alt={review.alt}
                            height={50}
                            width={50}
                            className="rounded-full"
                            />
                            <span>
                                <h2 className="text-2xl font-bold">{review.name}</h2>
                                <p className="flex items-center gap-2 text-2xl">
                                    {
                                        Array.from({length: review.starCount}).map((_, index) => {
                                            return(
                                                <IoStar className="text-(--yellow)" key={index}/>
                                            )
                                        })
                                    }
                                    <p className="text-sm pl-2 text-gray-300">{formatDistanceToNow(new Date(review.lastComment), { addSuffix: true })}</p>
                                </p>
                            </span>
                        </div>
                        <div className="relative max-h-32 overflow-hidden text-gray-300 leading-relaxed text-xl">
                            <p>
                                {review.comment}
                            </p>
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[--(gray)] via-[--(gray)/50] to-transparent pointer-events-none"/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}