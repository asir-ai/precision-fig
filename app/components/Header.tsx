import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { LuUser } from "react-icons/lu";

export default function Header() {
    return (
        <header className="w-full absolute z-10 left-0 right-0 py-4 sm:py-6">
            <div className="wContainer flex items-center justify-between gap-3 sm:gap-4">
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logos/precLogo.png"
                        alt="Precision Window Tinting"
                        width={210}
                        height={60}
                        priority
                        className="w-[120px] sm:w-[160px] lg:w-[210px]"
                    />
                </Link>

                <div className="hidden lg:block lg:pr-10">
                    <nav aria-label="Main">
                        <ul className="navlis flex gap-6 xl:gap-10 font-medium text-base xl:text-xl">
                            <li className="after:w-full">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="flex items-center gap-1.5">
                                <Link href="/automotive-tinting">Services</Link>
                                <FaChevronDown className="text-sm" aria-hidden />
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 text-xl sm:text-2xl">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-lg"
                        className="text-inherit hidden sm:inline-flex"
                        aria-label="Account"
                    >
                        <LuUser aria-hidden />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-lg"
                        className="text-inherit hidden sm:inline-flex"
                        aria-label="Shopping cart"
                    >
                        <BsCart3 aria-hidden />
                    </Button>
                    <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        className="bg-(--red) text-sm sm:text-base lg:text-lg font-semibold pl-4 pr-5 py-3 sm:pl-6 sm:pr-8 sm:py-5 lg:pl-6 lg:pr-10 lg:py-6 rounded-full"
                        size="lg"
                    >
                        <span className="hidden sm:inline">Contact Us</span>
                        <span className="sm:hidden">Contact</span>
                        <CgArrowTopRight aria-hidden />
                    </Button>
                </div>
            </div>
        </header>
    );
}
