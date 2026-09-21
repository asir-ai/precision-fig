import Image from "next/image";

export default function Banner() {
    return (
        <section className="w-full bg-foreground py-8 sm:py-10">
            <div className="max-w-[96vw] mx-auto grid grid-cols-1 gap-6 text-xl font-extrabold sm:text-2xl lg:grid-cols-3 lg:text-5xl">
                <div className="flex items-center gap-3 lg:gap-4">
                    <Image
                        src={'/icons/lines.png'}
                        alt="lines"
                        width={40}
                        height={40}
                        className="h-auto w-8 sm:w-10 lg:w-[40px]"
                    />
                    <h2>EASY FINANCING</h2>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                    <Image
                        src={'/icons/fire.png'}
                        alt="fire1"
                        width={60}
                        height={40}
                        className="h-auto w-10 sm:w-[60px]"
                    />
                    <h2>CERTIFIED INSTALLERS</h2>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                    <Image
                        src={'/icons/fire.png'}
                        alt="fire2"
                        width={60}
                        height={40}
                        className="h-auto w-10 sm:w-[60px]"
                    />
                    <h2>PREMIUM LLUMAR FILMS</h2>
                </div>
            </div>
        </section>
    )
}