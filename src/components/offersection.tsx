import Link from "next/link";
import Image from "next/image";
import Cards from "./cards";


const Offering = () => {
    const serviceList = {
        cardTitle: "Services",
        cardInfo: [
                "FPGA",
                "Digital Signal Processing",
                "Hardware Design",
                "PCB Design",
                "Embedded Systems",
              ]
    }

    const productList = {
        cardTitle: "Products",
        cardInfo: [
                "Communication",
                "Data Converters",
                "Control Interface Cards",
              ]
    }
    return(
        <div className="flex flex-col w-full min-h-screen">
            <div className="justify-center flex mt-1">
                <Link href="/contact">
                    <button className="border-white border-2 py-3 px-[3rem] rounded-2xl hover:bg-white hover:text-black cursor-pointer">
                        Contact Us
                    </button>
                </Link>
            </div>

            <div className="flex justify-center mt-[2rem]">
                <h1 className="text-center text-4xl">Our Offerings</h1>
            </div>

            <div className="flex justify-center w-full">
                <Cards cardInformation={serviceList}/>
                <Cards cardInformation={productList}/>
            </div>
        </div>
    )
}

export default Offering;