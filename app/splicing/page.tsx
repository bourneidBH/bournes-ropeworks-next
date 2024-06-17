import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Class II',
    imageUrl: '/images/splice-cards_Class-II.jpg',
    body: [
      'Class II double-braid core-to-core splice: Used in industrial applications, permanent loop for fixed attachment point or around thimble.'
    ],
    priceInfo: 'Call for quote',
    minImageHeight: 300,
  },
  {
    title: 'Double-Braid',
    imageUrl: '/images/splice-cards_double-braid.jpg',
    body: [
      'Double-braided (minimum diameter: 5/16”): Used for halyards, sheets, dock lines, slings, winch lines, mooring pennants.'
    ],
    priceInfo: '$30 per splice',
    minImageHeight: 300,
  },
  {
    title: 'Three-Strand',
    imageUrl: '/images/splice-cards_3-strand.jpg',
    body: [
      'Three-stranded rope: Used for dock lines, anchor lines.'
    ],
    priceInfo: '$20 per splice',
    minImageHeight: 300,
  },
  {
    title: 'Hollow-Braid',
    imageUrl: '/images/splice-cards_hollow-braid.jpg',
    body: [
      'Hollow-braid: Used for dinghy control lines.'
    ],
    priceInfo: '$25 per splice',
    minImageHeight: 300,
  },
  {
    title: 'Tapered',
    imageUrl: '/images/splice-cards_tapered.jpg',
    body: [
      'Tapered lines: Used for sheets and control lines.'
    ],
    priceInfo: '$45 per splice',
    minImageHeight: 300,
  },
  {
    title: 'Wire-to-Rope',
    imageUrl: '/images/splice-cards_wire-to-rope.jpg',
    body: [
      'Wire-to-rope tail splice (double-braided Dacron into twisted stainless steel wire): Used for halyards.'
    ],
    priceInfo: '$100 per splice',
    minImageHeight: 300,
  },
  {
    title: 'Whipping',
    imageUrl: '/images/splice-cards_whipping.jpg',
    body: [
      'Additional security for spliced ends, prevents fraying at bitter end.'
    ],
    priceInfo: 'Spliced ends whipped at no extra charge; Bitter end $20 each.',
    minImageHeight: 300,
  },
]

export const metadata: Metadata = {
  title: "Splicing - Bourne's Ropeworks",
  description: "Bourne's Ropeworks offers a variety of rope splicing and rigging services.",
};

export default function Services() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Types of Splices</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id donec. In eu mi bibendum neque. Volutpat maecenas volutpat blandit aliquam etiam erat. Mi bibendum neque egestas congue. Arcu cursus euismod quis viverra nibh cras. A diam maecenas sed enim ut sem viverra. At consectetur lorem donec massa sapien faucibus et molestie ac. Turpis massa tincidunt dui ut ornare. Dui sapien eget mi proin sed libero enim. Sagittis nisl rhoncus mattis rhoncus urna neque. Habitasse platea dictumst vestibulum rhoncus est pellentesque. Integer feugiat scelerisque varius morbi enim nunc. Accumsan lacus vel facilisis volutpat est velit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Semper eget duis at tellus at urna.</p>
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
            />
          ))}
        </div>

      </Container>
    </>
  )
}