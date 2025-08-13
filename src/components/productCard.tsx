import Image from "next/image"

type productProp = {
    info: {
        title: string;
        heading: string;
        items: {
            itTitle: string,
            itInfo: string[],
        }[]
    }
}

const ProductCard = ({info}: productProp) => {

    return(
        <div className="min-h-[30rem] w-[70%] rounded-3xl bg-[#161616] flex p-1">
            <div className="w-[35%] relative">
                <Image src="/231ae870-b12d-4b0c-b8d0-dd75503912b6.png" alt="prodImg" fill className="object-cover h-full rounded-l-3xl" />
            </div>
            <div>
                <div className="flex flex-col gap-[1rem]">
                    <h1 className="text-center text-4xl">
                        {info.title}
                    </h1>
                    <ul className="text-2xl list-disc list-inside flex flex-col gap-[3rem]">
                        {info.items.map(
                            (inf, index) => (
                                <div key={index}>
                                    <li className="text-3xl font-semibold">{inf.itTitle}</li>
                                    <ul className="list-disc list-inside ml-5 font-extralight text-[#d8d8d8]">
                                        {inf.itInfo.map(
                                            (infDes, ind) => (
                                                <li key={ind}>{infDes}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )
                        )}

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default ProductCard