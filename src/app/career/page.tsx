import Image from "next/image"
const Career = () => {
    return(
        <div className="min-h-screen relative">
            <Image src="/carImg.jpg" alt="img" fill className="object-cover opacity-25"/>
            <div className="w-full mt-[2rem] z-10 inset-0 relative flex flex-col items-center">
                <h1 className="text-6xl text-center">Career</h1>
                <h1 className="text-3xl mt-[2rem] w-[70%]">
                    We at C2R are creating unique wired and wireless communication solutions by combining tried-and-true engineering principles with cutting-edge components and the most recent advancements in semiconductor technology.
                    <br /><br />
                    C2R could be the place for those who want to push beyond the limits of innovation and take on challenging problems. Become part of our vibrant ecosystem where your knowledge will directly influence the development of new technologies. We turn individual talents into group success with our state-of-the-art platform and collaborative atmosphere. Let's accomplish big things jointly if you're willing to have a significant impact on the fields of semiconductor technology and wireless communication.
                    <br /> <br />
                    Mail your resume to hr@c2r.in

                </h1>
            </div>
        </div>
    )
}

export default Career