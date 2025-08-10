import Image from "next/image"

const Hero = () => {
    return (
        <div className="w-full min-h-[35rem] relative">
            <Image src="/231ae870-b12d-4b0c-b8d0-dd75503912b6.png" fill alt="picture of semi" className="object-cover opacity-30" />
             <div className="relative inset-0 z-10 flex flex-col w-[100%] mx-4">
                <h1 className="text-8xl mt-[3rem]">Wireless Communication and Video Experts</h1>
                <h1 className="w-[50%] text-xl mt-[3rem]">
                    We offer FPGA-based system design, providing high-performance and energy-efficient hardware solutions for real-time data processing, embedded systems, and signal processing applications.
                </h1>
             </div>
        </div>
    )
}

export default Hero;