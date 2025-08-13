'use client'
import { FormEvent, useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import RecaptchaWrapper from "./recaptchaprovider";



const ContactComp = () => {

    const {executeRecaptcha} = useGoogleReCaptcha()

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const submitFunc = async (e: FormEvent) => {
        e.preventDefault()
        console.log("submitted")

        if (!executeRecaptcha){
            console.log("Error with captcha")
            alert("There was an error with captcha")
            return;
        }

        const token = await executeRecaptcha('contact')

        try {
            const res = await fetch('/api', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    message,
                    token
                }),
                headers: {
                    'content-type': 'application/json'
                },
            })
        }
        catch(err) {
            console.log("error", err)
        }
    }

    return (
        <div >
            <form onSubmit={submitFunc} className="flex flex-col gap-[2rem] min-w-[30rem]">
                <div className="text-2xl">
                    <h1>Name</h1>
                    <input
                        value={name}
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                        className="w-full border-1 rounded-2xl p-2"
                    />
                </div>

                <div className="max-w-[40rem] text-2xl">
                    <h1>
                        Message
                    </h1>

                    <textarea 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message"
                        className="w-full border-1 rounded-2xl p-2"
                    />
                </div>

                <button type="submit" className="border-1 px-[3rem] py-[1rem] rounded-2xl hover:bg-white hover:text-black" >Submit</button>

            </form>
        </div>
    )
}

export default ContactComp;