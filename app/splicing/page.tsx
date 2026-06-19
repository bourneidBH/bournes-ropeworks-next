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
  },
  {
    title: 'Double-Braid',
    imageUrl: '/images/splice-cards_double-braid.jpg',
    body: [
      'Double-braided (minimum diameter: 5/16”): Used for halyards, sheets, dock lines, slings, winch lines, mooring pennants.'
    ],
    priceInfo: '$30 per splice',
  },
  {
    title: 'Three-Strand',
    imageUrl: '/images/splice-cards_3-strand.jpg',
    body: [
      'Three-stranded rope: Used for dock lines, anchor lines.'
    ],
    priceInfo: '$20 per splice',
  },
  {
    title: 'Hollow-Braid',
    imageUrl: '/images/splice-cards_hollow-braid.jpg',
    body: [
      'Hollow-braid: Used for dinghy control lines.'
    ],
    priceInfo: '$30 per splice',
  },
  {
    title: 'Tapered',
    imageUrl: '/images/splice-cards_tapered.jpg',
    body: [
      'Tapered lines: Used for sheets and control lines.'
    ],
    priceInfo: '$45 per splice',
  },
  {
    title: 'Wire-to-Rope',
    imageUrl: '/images/splice-cards_wire-to-rope.jpg',
    body: [
      'Wire-to-rope tail splice (double-braided Dacron into twisted stainless steel wire): Used for halyards.'
    ],
    priceInfo: '$100 per splice',
  },
  {
    title: 'Whipping',
    imageUrl: '/images/splice-cards_whipping.jpg',
    body: [
      'Additional security for spliced ends, prevents fraying at bitter end.'
    ],
    priceInfo: 'One spliced end whipped at no extra charge; Second end $20 each.',
  },
]

export const metadata: Metadata = {
  title: "Splicing - Bourne's Ropeworks",
  description: "Bourne's Ropeworks offers a variety of rope splicing for marine and industrial uses.",
};

export default function Services() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Types of Splices</h1>
        <p className="text-center">Splicing creates a permanent eye that is stronger and more secure than a simple knot or cut-and-tie. We provide reliable rope splicing for contractors, boat owners, and industrial teams who need strong, clean terminations that perform under real-world loads. We offer many types of splices including eye splices, locking eye splices, back splices, end-to-end constant diameter splices, long splices, and tail splices. If you require a splice not listed here, please contact us.</p>
        <p className="text-center">All prices quoted are for labor only. Customer can supply their own rope (no used rope, please), or contact us for material price quotes.</p>
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