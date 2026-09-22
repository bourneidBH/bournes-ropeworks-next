import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Splicing',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/running-rigging.jpg`,
    body: [
      'From replacement sailboat running rigging and sail handling systems, to industrial block-and-tackle or winch systems, we have the expertise to choose the right splicing type for your rope material and construction.'
    ],
    linkUrl: '/splicing',
    linkText: 'Learn More',
  },
  {
    title: 'Wire Rigging',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_swaging.jpg`,
    body: [
      'We provide custom wire rigging and swaging for sail and powerboat lifelines and sailboat stays. In architectural applications, swaged wire railings can give any project a clean, modern look.'
    ],
    linkUrl: '/rigging',
    linkText: 'Learn More',
  },
  {
    title: 'Custom',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/splice-cards_leather.jpg`,
    body: [
      'Have a unique rope or leather project? We can do decorative knotwork, leather stitching for boat or hotrod steering wheels, and other applications we\'ve never thought off. Bring your ideas!'
    ],
    linkUrl: '/custom',
    linkText: 'Learn More',
  }
]

export const metadata: Metadata = {
  title: "Services | Bourne's Ropeworks",
  description: "Explore rope and wire rigging services in Manitowoc and Sheboygan, WI, including splicing, swaging, dock lines, and more.",
};

export default function Services() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Our Services</h1>
        <p className="text-center">From the water to the job site and home, we provide dependable rope and wire rigging services for marine, industrial, and architectural applications. Our rope splicing services include sailboat running rigging, custom-measured and spliced dock lines, halyards, truck-mounted winch lines, and auger sling lines. Wire rope rigging includes stays, lifelines and swaged wire railing systems. Don't see what you're looking for? Check out our custom project work for less common rope and leather applications. Installation services are available locally in the Manitowoc and Sheboygan, Wisconsin area. Customers outside this service area are responsible for providing accurate measurements and completing or arranging correct installation.</p>
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