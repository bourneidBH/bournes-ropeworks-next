import type { Metadata } from "next";
import Container from "@/components/container";
import QuoteRequest from "@/components/forms/quote-request";
import { anton } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Contact Us | Bourne's Ropeworks",
  description: "Contact Bourne's Ropeworks for all your rope and wire rigging needs in Manitowoc and Sheboygan, WI. Nationwide shipping available.",
};

export default function Contact() {
    return (
        <>
            <div className="intro-text">
                <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Contact Bourne's Ropeworks for Rigging in Wisconsin</h1>
                <p className="text-center">Bourne’s Ropeworks LLC is located in Manitowoc, Wisconsin. We will measure and install in the Sheboygan and Manitowoc, Wisconsin areas or splice to customer supplied dimensions and ship nationwide.</p>
                <p className="text-center">Phone: <a href="tel:+14143804246" className="text-secondary hover:text-primary">414-380-4246</a><br />
                    Email: info@bournesropeworks.com or fill out the form below.
                </p>
            </div>
            <Container className="pb-8 md:pb-12">
                <QuoteRequest />
            </Container>

        </>
    )
}