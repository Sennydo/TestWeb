'use client'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const RecaptchaWrapper = ({children}: {children: React.ReactNode}) => {

    return(
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_KEY!}
        >
            {children}
        </GoogleReCaptchaProvider>
    )
}

export default RecaptchaWrapper;