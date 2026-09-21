import { IconType } from "react-icons";
import { IoLocationOutline } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";

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
                hrefLink: "",
                icon: LuPhone,
            },
            {
                name: "precisionwindow2018@gmail.com",
                hrefLink: "",
                icon: LuMail,
            },
            {
                name: "550 E 1st Street Casper, WY 82601",
                hrefLink: "",
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