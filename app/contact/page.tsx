import Container from "@/components/container";
import QuoteRequest from "@/components/forms/quote-request";
import { anton } from "@/styles/fonts";

export default function Contact() {
    return (
        <>
            <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
                <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Contact Us</h1>
                <p className="text-center">Bourne’s Ropeworks LLC is located in Manitowoc, Wisconsin. We will measure and install in the Sheboygan and Manitowoc, Wisconsin areas or splice to customer supplied dimensions and ship nationwide.</p>
                <p>Phone: <a href="tel:+14143804246">414-380-4246</a><br />
                    Email: <a href="mailto:info@bournesropeworks.com">info@bournesropeworks.com</a> or fill out the form below.
                </p>
            </div>
            <Container>
                <QuoteRequest />
            </Container>

        </>
    )
}