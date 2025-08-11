import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';



export const POST = async(request: NextRequest) => {

    const {name, message, token} = await request.json();
    console.log(name, message, token)
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
            const fetchQuery = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_SECRET}&response=${token}`,
                {
                    method: 'POST',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            )

            const apiGoogleRes = await fetchQuery.json();
            if (!apiGoogleRes?.success || (apiGoogleRes?.score < 0.5)){
                return  new NextResponse(JSON.stringify({message: "verification failed"}), {
                    status: 200,
                    headers: {'Content-Type': 'application/json'}
                })
            }
            else {

                await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: process.env.TO_EMAIL!,
                subject: 'Website Email',
                html: `<p>These are the details ${name} and ${message} is the message </p>`,
                });

                console.log(resend)
            }

    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Something Failed"}),
        {
            status:200,
            headers: {'Content-Type': 'application/json'}
        }
        )
    }



    return new NextResponse(JSON.stringify({message: "Success"}),
        {status: 201,
         headers: {'Content-Type': 'application/json'}
        }
    )
}
