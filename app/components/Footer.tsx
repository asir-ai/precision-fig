import { footerLinks, isExternalHref, SOCIAL_LINKS, SubLink } from "@/lib/content/footerLinks";
import Image from "next/image";
import Link from "next/link";


export function FooterLinkItem({ linkItem }: { linkItem: SubLink }) {
    const Icon = linkItem.icon;
    const className = "text-lg flex items-center gap-2 hover:underline underline-offset-2";

    if (!linkItem.hrefLink) {
        return (
            <span className={className}>
                {Icon ? <Icon aria-hidden className="shrink-0" /> : null}
                {linkItem.name}
            </span>
        );
    }

    const content = (
        <>
            {Icon ? <Icon aria-hidden className="shrink-0" /> : null}
            {linkItem.name}
        </>
    );

    if (isExternalHref(linkItem.hrefLink)) {
        return (
            <a
                href={linkItem.hrefLink}
                className={className}
                {...(linkItem.hrefLink.startsWith("http")
                    ? { rel: "noopener noreferrer", target: "_blank" }
                    : {})}
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={linkItem.hrefLink} className={className}>
            {content}
        </Link>
    );
}

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="wContainer flex flex-col items-center pt-16 pb-3">
                <div className="flex flex-col items-center mb-10">
                    <Link href="/">
                        <Image
                            src="/logos/precLogo.png"
                            alt="Precision Window Tinting"
                            height={50}
                            width={200}
                        />
                    </Link>
                    <div className="flex gap-8 justify-between items-center mt-6">
                        {SOCIAL_LINKS.map(({ href, label, icon: Icon, className }) => (
                            <a
                                key={label}
                                href={href}
                                className={className}
                                aria-label={label}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Icon className="scale-200" aria-hidden />
                            </a>
                        ))}
                    </div>
                    <p className="text-gray-300 mt-2">FOLLOW US</p>
                </div>

                <hr className="w-full border-t border-t-gray-700" />

                <div className="flex justify-between w-full px-12 py-14">
                    {footerLinks.map((column) => (
                        <div className="flex flex-col gap-6" key={column.id}>
                            <h2 className="text-2xl font-bold">{column.heading}</h2>
                            <ul className="flex flex-col gap-4">
                                {column.links.map((linkItem) => (
                                    <li key={`${column.id}-${linkItem.name}`}>
                                        <FooterLinkItem linkItem={linkItem} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="w-full border-t border-t-gray-700" />

                <div className="flex items-center justify-center py-3">
                    <p className="text-gray-300">
                        Copyright © 2026 Precision Window Tinting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
