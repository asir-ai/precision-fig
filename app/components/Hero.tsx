import { Button } from "@/components/ui/button";
import { BsChatSquareDots } from "react-icons/bs";

export default function Hero() {
    return (
        <div className="relative w-full h-screen bg-[url('/images/bgImage.png')] bg-cover bg-center">
            <Button className={'absolute right-6 bottom-0 text-(--red) bg-white rounded-full p-5 w-8 h-8 mt-1 scale-150'}>
                <BsChatSquareDots />
            </Button>
        </div>
    )
}