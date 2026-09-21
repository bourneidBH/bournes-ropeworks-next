import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Splicing',
    imageUrl: '/images/running-rigging.jpg',
    body: [
      'From replacement standing rigging and lifelines, to sailboat running rigging and sail handling systems, we will ensure you get the correct rigging solution for your boat the first time.'
    ],
    linkUrl: '/splicing',
    linkText: 'Learn More',
  },
  {
    title: 'Rigging',
    imageUrl: '/images/winch-line.jpg',
    body: [
      'Our heavy-duty industrial winch lines and auger sling lines are popular in construction and utility industries. We ship nationwide.'
    ],
    linkUrl: '/rigging',
    linkText: 'Learn More',
  },
  {
    title: 'Custom',
    imageUrl: '/images/wire-railing-2_1920x600.jpg',
    body: [
      'Wire railings can give your architectural project a clean, modern look. For local projects, we can work with your builder to measure and install railings.'
    ],
    linkUrl: '/custom',
    linkText: 'Learn More',
  }
]

export const metadata: Metadata = {
  title: "Services | Bourne's Ropeworks",
  description: "Explore marine, industrial, and architectural rigging services in Manitowoc and Sheboygan, WI, including splicing, swaging, dock lines, and more.",
};

export default function Services() {
  return (
    <>
      <div className="max-w-prose mx-auto my-12 px-6 md:my-24">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Our Services</h1>
        <p className="text-center">From the water to the job site and home, we provide dependable rigging services for marine, industrial, and architectural applications. Our work includes sailboat standing and running rigging, custom-measured and spliced dock lines, lifelines, halyards, truck-mounted winch lines, auger sling lines, and swaged wire railing systems. Installation services are available locally in the Manitowoc and Sheboygan, Wisconsin area. Customers outside this service area are responsible for providing accurate measurements and completing or arranging correct installation.</p>
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