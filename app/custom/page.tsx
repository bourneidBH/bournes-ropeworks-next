import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Button from "@/components/button";
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Leather Work',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_leather.jpg`,
    body: [
      'Leather Work: Use as chafe guard where rope rubs against metal, as hand protection on steering wheels, or for decorative applications.'
    ],
    priceInfo: 'Call for quote.',
  },
  {
    title: 'Fancy Work',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_fancy.jpg`,
    body: [
      'Fancy Work: Use for decorative applications. A wide variety of decorative knots and rope braiding available to suit any project.'
    ],
    priceInfo: 'Call for quote',
  },
  {
    title: 'Custom Projects',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_rope-handle.jpg`,
    body: [
      'Custom Projects: If it\'s made from rope we can probably create it. See our project gallery for examples of unique applications.'
    ],
    linkUrl: '/gallery',
    linkText: 'See our project gallery'
  },

]

export const metadata: Metadata = {
  title: "Custom Rope and Leather Work | Bourne's Ropeworks",
  description: "Have a custom rope or leather project in mind? Contact Bourne's Ropeworks for help with your idea.",
};

export default function Services() {
  return (
    <>
      <div className="intro-text">
        <h1 className={`${anton.className} text-center text-3xl mb-4 tracking-wide md:text-4xl`}>Custom Rope &amp; Leather Work in Wisconsin</h1>
        <p className="text-center">We craft custom ropework and decorative “fancy” pieces built to match your application, style, and specifications including eye-catching ornamental knots and finishing details. Whether you’re outfitting a boat, enhancing event décor, or restoring an antique, we combine clean workmanship, quality materials, and careful attention to detail for results that look great and hold up.</p>
      </div>

      <Container className="mb-12 px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, idx) => (
            <Card 
                key={idx}
                title={card.title}
                imageUrl={card.imageUrl}
                body={card.body}
                linkUrl={card.linkUrl}
                linkText={card.linkText}
                priceInfo={card.priceInfo}
            />
          ))}
        </div>

      </Container>
      <Container className="flex justify-center py-8 md:py-12">
        <Button 
          buttonType="link"
          buttonText="Contact Bourne's Ropeworks for your next custom rope or leather project"
          linkUrl="/contact"
        />
      </Container>

    </>
  )
}