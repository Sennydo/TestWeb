import { NextRequest, NextResponse } from "next/server";

export const POST = async(request: NextRequest) => {

    const body = await request.json();
    console.log(body)

    return new NextResponse(JSON.stringify({message: "Success"}),
        {status: 201,
         headers: {'Content-Type': 'application/json'}
        }
    )
}
