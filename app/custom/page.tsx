import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Leather Work',
    imageUrl: '/images/splice-cards_leather.jpg',
    body: [
      'Leather Work: Use as chafe guard where rope rubs against metal, as hand protection on steering wheels, or for decorative applications.'
    ],
    priceInfo: 'Call for quote.',
  },
  {
    title: 'Fancy Work',
    imageUrl: '/images/splice-cards_fancy.jpg',
    body: [
      'Fancy Work: Use for decorative applications. A wide variety of decorative knots and rope braiding available to suit any project.'
    ],
    priceInfo: 'Call for quote',
  },
  {
    title: 'FPO',
    imageUrl: '/images/splice-cards_3-strand.jpg',
    body: [
      'Lorem ipsum neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.'
    ],
    priceInfo: 'Call for quote',
  },

]

export const metadata: Metadata = {
  title: "Custom Rope and Leather Work - Bourne's Ropeworks",
  description: "Have a custom rope or leather project in mind? Contact Bourne's Ropeworks for help with your idea.",
};

export default function Services() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Custom Rope &amp; Leather Work</h1>
        <p className="text-center">We craft custom ropework and decorative “fancy” pieces built to match your application, style, and specifications including eye-catching ornamental knots and finishing details. Whether you’re outfitting a boat, enhancing event décor, or restoring an antique, we combine clean workmanship, quality materials, and careful attention to detail for results that look great and hold up.</p>
      </div>

      <Container className="mb-12 px-12 md:mb-24 md:px-24">
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
    </>
  )
}