import Image from "next/image";

export default function Banner() {
    return (
        <div className="w-full bg-foreground py-8">
            <div className="flex max-w-[96vw] mx-auto justify-between text-5xl font-extrabold">
                <div className="flex gap-4">
                    <Image
                        src={'/icons/lines.png'}
                        alt="lines"
                        width={40}
                        height={40}
                    />
                    <h2>EASY FINANCING</h2>
                </div>
                <div className="flex gap-4">
                    <Image
                        src={'/icons/fire.png'}
                        alt="fire1"
                        width={60}
                        height={40}
                    />
                    <h2>CERTIFIED INSTALLERS</h2>
                </div>
                <div className="flex gap-4">
                    <Image
                        src={'/icons/fire.png'}
                        alt="fire2"
                        width={60}
                        height={40}
                    />
                    <h2>PREMIUM LLUMAR FILMS</h2>
                </div>
            </div>
        </div>
    )
}