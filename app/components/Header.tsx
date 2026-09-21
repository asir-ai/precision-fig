import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { LuUser } from "react-icons/lu";

export default function Header() {
    return (
        <header className="w-full absolute z-10 left-0 right-0 py-6">
            <div className="wContainer flex justify-between items-center">
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logos/precLogo.png"
                        alt="Precision Window Tinting"
                        width={210}
                        height={60}
                        priority
                    />
                </Link>
                <div className="pr-10">
                    <nav aria-label="Main">
                        <ul className="navlis flex gap-10 font-medium text-xl">
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
                <div className="flex gap-6 text-3xl items-center">
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-lg"
                        className="text-inherit"
                        aria-label="Account"
                    >
                        <LuUser aria-hidden />
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon-lg"
                        className="text-inherit"
                        aria-label="Shopping cart"
                    >
                        <BsCart3 aria-hidden />
                    </Button>
                    <Button
                        nativeButton={false}
                        render={<Link href="/contact" />}
                        className="bg-(--red) text-lg font-semibold pl-6 pr-10 py-6 rounded-full"
                        size="lg"
                    >
                        Contact Us <CgArrowTopRight aria-hidden />
                    </Button>
                </div>
            </div>
        </header>
    );
}
