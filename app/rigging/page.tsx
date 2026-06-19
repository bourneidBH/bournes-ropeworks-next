import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Swaging',
    imageUrl: '/images/splice-cards_swaging.jpg',
    body: [
      'Swaging: Use to permanently attach eyes, forks or threaded studs to wire rope ends.'
    ],
    priceInfo: '$30 per swage, plus one-time setup fee.',
  },
  {
    title: 'Duplex-Sleeve',
    imageUrl: '/images/splice-cards_nicopress-duplex.jpg',
    body: [
      'Duplex Sleeve Nicopress: Used as pressed eyes used on topping lifts, stays on ice boats.'
    ],
    priceInfo: '$15 per Nicopress',
  },
  {
    title: 'Headstays',
    imageUrl: '/images/splice-cards_3-strand.jpg',
    body: [
      'In the Sheyboygan/Manitowoc County area, we will alter existing or build new headstays to accommodate headsail furlers.'
    ],
    priceInfo: 'Call for quote',
  },

]

export const metadata: Metadata = {
  title: "Rigging - Bourne's Ropeworks",
  description: "Bourne's Ropeworks offers a variety of wire and rope rigging solutions for marine and industrial uses.",
};

export default function Services() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Wire Rigging Services</h1>
        <p className="text-center">We provide dependable swaging services for rigging teams that need secure, precisely finished metal terminations. Using the right materials, correct tooling, and proper inspection standards, we build strong connections for wire rope and hardware for applications such as stays and lifelines for marine applications and wire railings for architectural applications.</p>
        <p className="text-center">All prices quoted are for labor only. Customer can supply their own fittings, or contact us for material price quotes.</p>
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