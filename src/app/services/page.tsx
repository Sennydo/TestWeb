import ProductCard from "@/components/productCard"

const Services = () => {
        const info = {
        title: "FPGA",
        heading: "FPGA",
        items: [
            {
                itTitle: "VHDL / Verilog Design",
                itInfo: []
            },
            {
                itTitle: "Verification and Validation",
                itInfo: []
            },
            {
                itTitle: "Migrations of designs across different FPGAs platforms",
                itInfo:[]
            }
        ]

        }

        const info2 = {
        title: "Digital Signal Processing",
        heading: "DSP",
        items: [
            {
                itTitle: "Conventional DSP IP development",
                itInfo: []
            },
            {
                itTitle: "Customizables signal processing Algorithms Design and Development",
                itInfo: []
            },
            {
                itTitle: "Migrations of designs across different FPGAs platforms",
                itInfo:[]
            }
        ]

        }
        
        const info3 = {
        title: "Hardware Design",
        heading: "Hardware",
        items: [
            {
                itTitle: "HW Requirement Analysis",
                itInfo: []
            },
            {
                itTitle: "HW Architecture Selection",
                itInfo: []
            },
            {
                itTitle: "HW Design",
                itInfo:[]
            },
            {
                itTitle: "Obsolescence Analysis",
                itInfo: []
            },
            {
                itTitle: "Simulation and Performance Analysis",
                itInfo: []
            },
                        {
                itTitle: "Reliability Analysis",
                itInfo: []
            },
        ]

        }         
    return(
        <div className="min-h-screen flex flex-col items-center gap-[2rem] m-1">
            <h1 className="w-full text-center mt-[2rem] text-6xl">Services</h1>
            <ProductCard info={info}/>
            <ProductCard info={info2} />
            <ProductCard info={info3} />
        </div>
    )
}

export default Services