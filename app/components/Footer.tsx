import { footerLinks } from "@/lib/content/footerLinks";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="wContainer flex flex-col items-center pt-16 pb-3">
                <div className="flex flex-col items-center mb-10">
                    <Image
                    src={'/logos/precLogo.png'}
                    alt="precLogo"
                    height={50}
                    width={200}
                    />
                    <span className="flex gap-8 justify-between items-center mt-6">
                        <span className=" bg-white rounded-full h-7.5 flex items-center">
                            <FaFacebook className="text-[#1877F2] scale-200" />
                        </span>
                        <span className=" bg-white rounded-full w-8 h-4 flex justify-center items-center">
                            <IoLogoYoutube className="text-[#FF0000] scale-200" />
                        </span>
                    </span>
                    <p className="text-gray-300 mt-2">FOLLOW US</p>
                </div>

                <hr className="w-full border-t border-t-gray-700"/>

                <div className="flex justify-between w-full px-12 py-14">
                    {
                        footerLinks.map((link, index) => {
                            return (
                                <div className="flex flex-col gap-6" key={index}>
                                    <h2 className="text-2xl font-bold">
                                        {link.heading}
                                    </h2>
                                    <div className="flex flex-col gap-4">
                                    {
                                        link.links.map((linkItem, index) => {
                                            return (
                                                <div className="text-lg" key={index}>
                                                    {linkItem.name}
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <hr className="w-full border-t border-t-gray-700"/>
                
                <div className="flex items-center justify-center py-3">
                    <p className="text-gray-300">Copyright © 2026 Precision Window Tinting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}