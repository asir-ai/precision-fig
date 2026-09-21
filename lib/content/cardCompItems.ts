import { TbReceipt2 } from "react-icons/tb";
import { PiLightning } from "react-icons/pi";
import { IoShieldOutline } from "react-icons/io5";
import { IconType } from "react-icons";

export type CardCompItem = {
    img: IconType;
    h2: string;
    p: string;
    id: string;
};

export const cardCompItems: CardCompItem[] = [
    { 
        id: "interest", 
        img: TbReceipt2, 
        h2: "0% Interest", 
        p: "For up to 24 months" 
    },
    { 
        id: "instant", 
        img: PiLightning, 
        h2: "Instant Decisions", 
        p: "Apply online in minutes" 
    },
    { 
        id: "transparent", 
        img: IoShieldOutline, 
        h2: "No Hidden Fees", 
        p: "100% transparency" 
    },
];

export default cardCompItems;