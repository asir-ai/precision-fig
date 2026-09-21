import { Button } from "@/components/ui/button";
import { BsChatSquareDots } from "react-icons/bs";

export default function Hero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[420px] bg-[url('/images/bgImage.png')] bg-cover bg-center md:h-screen">
            <Button className={'absolute right-4 bottom-4 text-(--red) bg-white rounded-full p-5 w-8 h-8 mt-1 scale-150 sm:right-6 sm:bottom-6'}>
                <BsChatSquareDots />
            </Button>
        </section>
    )
}