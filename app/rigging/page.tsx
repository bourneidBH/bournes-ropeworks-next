import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Button from "@/components/button";
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Swaging',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_swaging.jpg`,
    body: [
      'Swaging: Use to permanently attach eyes, forks or threaded studs to wire rope ends.'
    ],
    priceInfo: '$30 per swage, plus one-time setup fee.',
  },
  {
    title: 'Duplex-Sleeve',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_nicopress-duplex.jpg`,
    body: [
      'Duplex Sleeve Nicopress: Used as pressed eyes used on topping lifts, stays on ice boats.'
    ],
    priceInfo: '$15 per Nicopress',
  },
  {
    title: 'Headstays',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_headstay.jpg`,
    body: [
      'In the Sheboygan/Manitowoc County area, we will alter existing or build new headstays to accommodate headsail furlers.'
    ],
    priceInfo: 'Call for quote',
  },

]

export const metadata: Metadata = {
  title: "Wire Rigging Services | Bourne's Ropeworks",
  description: "Bourne's Ropeworks offers a variety of wire and rope rigging solutions for marine and industrial uses.",
};

export default function Services() {
  return (
    <>
      <div className="intro-text">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Wire Rigging Services in Wisconsin</h1>
        <p className="text-center">We provide dependable swaging services for applications requiring secure, precisely finished metal terminations. Using the right materials, correct tooling, and proper inspection standards, we build strong connections for wire rope and hardware for applications such as stays and lifelines for marine applications and wire railings for architectural applications.</p>
        <p className="text-center">All prices quoted are for labor only. Customer can supply their own fittings, or contact us for material price quotes.</p>
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
          buttonText="Contact Bourne's Ropeworks for your next wire rigging project"
          linkUrl="/contact"
        />
      </Container>
    </>
  )
}