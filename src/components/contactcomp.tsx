'use client'
import { FormEvent, useState } from "react";


const ContactComp = () => {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const submitFunc = async (e: FormEvent) => {
        e.preventDefault()
        console.log("submitted")

        try {
            const res = await fetch('/api', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    message,
                }),
                headers: {
                    'content-type': 'application/json'
                },
            })
        }
        catch(err: any) {
            console.log("error", err)
        }
    }

    return (
        <div>
            Contact Component
            <form onSubmit={submitFunc}>
                <h1>Name</h1>
                <input
                    value={name}
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                 />

                 <h1>
                    Message
                 </h1>

                 <input 
                    value={message}
                    type='text'
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                 />

                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactComp;