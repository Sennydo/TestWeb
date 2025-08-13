import Image from "next/image";

type cardInfo = {
    cardInformation : {
        cardTitle: string
        cardInfo: string[]
    }
}

const Cards = ({cardInformation}: cardInfo) => {
    return(
        <div className="w-[30rem] min-h-[30rem] relative flex-col m-[1rem] bg-[#212122]">
            <div className="text-center text-4xl p-3">
                <h1>{cardInformation.cardTitle}</h1>
            </div>
            <div className="flex relative h-[10rem] w-full">
                <Image src="/aea10ccc-d16e-4188-bacc-f56e9d6918ba.png" fill alt="testpic" className="object-contains" />

            </div>
            <div className="flex flex-col justify-center">
                <ul className="text-center m-[2rem] text-2xl list-disc gap-1">
                    {cardInformation.cardInfo.map(
                        (info, index) => (
                            <li key={index} className="hover:text-4xl">{info}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Cards;