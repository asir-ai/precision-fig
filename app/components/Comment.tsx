import { customerReviews } from "@/lib/content/customerReviews";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

export default function Comment() {
    return (
        <div className="flex flex-col gap-8 sm:gap-10 lg:pl-12 lg:gap-12">
            {customerReviews.map((review, index) => (
                <article
                    className="flex flex-col gap-5 border-b-2 border-b-gray-700 pb-8 sm:gap-6 sm:pb-10 lg:pb-12"
                    key={index}
                >
                    <div className="flex gap-4 sm:gap-8">
                        <Image
                            src={`/images/${review.img}.png`}
                            alt={review.alt}
                            height={50}
                            width={50}
                            className="rounded-full h-12 w-12 sm:h-[50px] sm:w-[50px]"
                        />
                        <div>
                            <h3 className="text-lg font-bold sm:text-2xl">{review.name}</h3>
                            <div className="flex items-center gap-2 text-lg sm:text-2xl">
                                {Array.from({ length: review.starCount }).map((_, starIndex) => (
                                    <IoStar
                                        className="text-(--yellow)"
                                        key={starIndex}
                                        aria-hidden
                                    />
                                ))}
                                <span className="text-xs pl-2 text-gray-300 sm:text-sm">
                                    {formatDistanceToNow(new Date(review.lastComment), {
                                        addSuffix: true,
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative max-h-28 overflow-hidden text-gray-300 leading-relaxed text-base sm:text-lg lg:text-xl">
                        <p>{review.comment}</p>
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-[--(gray)] via-[--(gray)/50] to-transparent pointer-events-none" />
                    </div>
                </article>
            ))}
        </div>
    );
}
