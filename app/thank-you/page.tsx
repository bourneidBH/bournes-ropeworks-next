import type { Metadata } from "next";
import { anton } from "@/styles/fonts";
import Button from "@/components/button";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Thank you for contacting us | Bourne's Ropeworks",
  description: "Thank you for contacting Bourne's Ropeworks. We look forward to helping with your rope and wire rigging needs.",
  robots: {
    index: false,
  }
};


export default function ThankYou() {
  return (
    <>
      <div className="intro-text">
        <h1 className={`${anton.className} text-center text-3xl mb-4 tracking-wide md:text-4xl`}>Thank you for Contacting Bourne's Ropeworks</h1>
        <p className="text-center">We have received your inquiry and we will get back to you as soon as possible.</p>
      </div>
      <Container className="flex justify-center gap-12 py-8 md:py-12">
        <Button
          buttonType="link"
          buttonText="Home"
          linkUrl="/"
        />
        <Button
          buttonType="link"
          buttonText="See our project gallery"
          linkUrl="/"
        />
      </Container>
    </>
  )
}