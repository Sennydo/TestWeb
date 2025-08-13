import ContactComp from "@/components/contactcomp"
import ContactWrapper from "@/components/contactWrapper";

const Contact = () => {

    return(
        <div className="h-screen flex flex-col w-screen gap-[3rem]">
            <h1 className="text-6xl text-center">Contact Page</h1>
            <div className="flex justify-center">
                <ContactWrapper />
            </div>
        </div>
    )
}

export default Contact;