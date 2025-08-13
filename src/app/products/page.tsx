import ProductCard from "@/components/productCard"

const Products = () => {
    const info = {
        title: "Communication",
        heading: "Digital Transmitters",
        items: [
            {
                itTitle: "Digital transmitters",
                itInfo: ["SDR-based solution with different modulation supports HF, V/UHF, L, S, C and X bands",
                ]
            },
            {
                itTitle: "Digital Receivers",
                itInfo: ["SDR-based solution with different Demodulations supports HF, V/UHF, L, S, C and X bands"]
            }
        ]
    }

    const info2 = {
        title: "Data Converters",
        heading: "Multi Channel Data Acquisition Cards",
        items: [
            {
                itTitle: "Multi Channel Data Acquisition Cards",
                itInfo: ["Supports form 1 kbps to 12.5 Gbps. ",
                    "Supports different interfaces like Parallel, SPI, I2C, LVDS-Serial and JESD204B/C"
                ]
            },
            {
                itTitle: "Multi-channel Data Generation cards",
                itInfo: ["Supports form 1 kbps to 12.5 Gbps.",
                    "Supports different interfaces like Parallel, SPI, I2C, LVDS-Serial and JESD204B/C"
                ]
                
            },
        ]
    }

    const info3 = {
        title: "Control Interface Cards",
        heading: "Interface cards",
        items: [
            {
                itTitle: "Single / Multi Channel 1 Gbps Ethernet cards",
                itInfo: []
            },
            {
                itTitle: "PCI cards",
                itInfo: []
            },
            {
                itTitle: "IO Expansion cards",
                itInfo: []
            },            
        ]
    }

    return (
        <div className="min-h-screen flex flex-col items-center gap-[2rem] m-1">
            <h1 className="w-full text-center mt-[2rem] text-6xl">Products</h1>
            <ProductCard info={info}/>
            <ProductCard info={info2} />
            <ProductCard info={info3} />
        </div>
    )
}

export default Products