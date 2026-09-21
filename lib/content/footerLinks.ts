import { IconType } from "react-icons";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

export type SubLink = {
    name: string;
    hrefLink: string;
    icon?: IconType;
}

export type FooterLinks = {
    id: number;
    heading: string;
    links: SubLink[];    
};

export const footerLinks: FooterLinks[] = [
    {
        id: 1,
        heading: "Services",
        links: [
            {
                name: "Automotive Tinting",
                hrefLink: "/automotive-tinting",
            },
            {
                name: "Clear Bra (PPF)",
                hrefLink: "/clear-bra",
            },
            {
                name: "Flat Grass",
                hrefLink: "/flat-grass",
            },
            {
                name: "Safety Film",
                hrefLink: "/safety-film",
            },
            {
                name: "Vinyl Wraps",
                hrefLink: "/vinyl-wraps",
            },
            {
                name: "Ceramic Coating",
                hrefLink: "/ceramic-coating",
            },
        ]
    },
    {
        id: 2,
        heading: "Company",
        links: [
            {
                name: "About Us",
                hrefLink: "/about",
            },
            {
                name: "Contact",
                hrefLink: "/contact",
            },
            {
                name: "Education Center",
                hrefLink: "/education-center",
            },
        ]
    },
    {
        id: 3,
        heading: "Contact",
        links: [
            {
                name: "(307) 315-0273",
                hrefLink: "tel:+13073150273",
                icon: LuPhone,
            },
            {
                name: "precisionwindow2018@gmail.com",
                hrefLink: "mailto:precisionwindow2018@gmail.com",
                icon: LuMail,
            },
            {
                name: "550 E 1st Street Casper, WY 82601",
                hrefLink: "https://www.google.com/maps/search/?api=1&query=550+E+1st+Street+Casper,+WY+82601",
                icon: IoLocationOutline,
            },
        ]
    },
    {
        id: 4,
        heading: "Hours",
        links: [
            {
                name: "Mon 9am-6pm",
                hrefLink: "",
            },
            {
                name: "Tue 9am-6pm",
                hrefLink: "",
            },
            {
                name: "Wed 9am-6pm",
                hrefLink: "",
            },
            {
                name: "Thu 9am-6pm",
                hrefLink: "",
            },
            {
                name: "Fri 9am-6pm",
                hrefLink: "",
            },
            {
                name: "Sat 9am-6pm",
                hrefLink: "",
            },
            {
                name: "Sun 9am-6pm",
                hrefLink: "",
            },
        ]
    },
] 

export const SOCIAL_LINKS = [
    {
        href: "https://www.facebook.com/",
        label: "Follow us on Facebook",
        icon: FaFacebook,
        className: "bg-white rounded-full h-7.5 flex items-center text-[#1877F2]",
    },
    {
        href: "https://www.youtube.com/",
        label: "Follow us on YouTube",
        icon: IoLogoYoutube,
        className:
            "bg-white rounded-full w-8 h-4 flex justify-center items-center text-[#FF0000]",
    },
] as const;

export function isExternalHref(href: string) {
    return /^(https?:|mailto:|tel:)/.test(href);
}