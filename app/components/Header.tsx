import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { LuUser } from "react-icons/lu";

export default function Header() {    
    return (
        <header className="w-full absolute z-10 left-0 right-0 py-6">
            <div className="wContainer flex justify-between items-center">
                <div>
                    <Image
                        src={'/logos/precLogo.png'}
                        alt="precLogo"
                        width={210}
                        height={0}
                    />
                </div>
                <div className="pr-10">
                    <nav>
                        <ul className="navlis flex gap-10 font-medium text-xl">
                            <li className="after:w-full">Home</li>
                            <li className="flex items-center gap-1.5">Services <FaChevronDown className="text-sm" /></li>
                            <li>About Us</li>
                        </ul>
                    </nav>
                </div>
                <div className="flex gap-6 text-3xl items-center">
                    <span>
                        <LuUser />
                    </span>
                    <span>
                        <BsCart3 />
                    </span>
                    <span>
                        <Button className={'bg-(--red) text-lg font-semibold pl-6 pr-10 py-6 rounded-full'} size={"lg"}>Contact Us <CgArrowTopRight /></Button>
                    </span>
                </div>
            </div>
        </header>
    )
}