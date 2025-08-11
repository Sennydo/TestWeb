import ContactComp from "./contactcomp"
import RecaptchaWrapper from "./recaptchaprovider"

const ContactWrapper = () => {
    return(
        <RecaptchaWrapper>
            <ContactComp />
        </RecaptchaWrapper>
    )
}

export default ContactWrapper