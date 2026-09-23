import type { Metadata } from "next";
import { anton } from "@/styles/fonts"
import Button from "@/components/button";
import Container from "@/components/container"
import Card from "@/components/card"
import { CardData } from "@/types"

const cards: CardData[] = [
  {
    title: 'Marine',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/running-rigging.jpg`,
    body: [
      'From replacement standing rigging and lifelines, to sailboat running rigging and sail handling systems, we will ensure you get the correct rigging solution for your boat the first time.'
    ],
    linkUrl: '/marine',
    linkText: 'Learn More',
  },
  {
    title: 'Industrial',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/winch-line.jpg`,
    body: [
      'Our heavy-duty industrial winch lines and auger sling lines are popular in construction and utility industries. We ship nationwide.'
    ],
    linkUrl: '/industrial',
    linkText: 'Learn More',
  },
  {
    title: 'Architectural',
    imageUrl: `${process.env.NEXT_PUBLIC_BASE_PATH}/images/wire-railing-2_1920x600.jpg`,
    body: [
      'Wire railings can give your architectural project a clean, modern look. For local projects, we can work with your builder to measure and install railings.'
    ],
    linkUrl: '/architectural',
    linkText: 'Learn More',
  }
]

export const metadata: Metadata = {
  title: "Rope & Wire Rigging Industries Served | Bourne's Ropeworks",
  description: "Rigging solutions for marine, industrial, and architectural applications in Manitowoc and Sheboygan, WI, including splicing, swaging, and custom lines. Nationwide shipping available.",
};

export default function Services() {
  return (
    <>
      <div className="intro-text">
        <h1 className={`${anton.className} text-center text-4xl mb-4 tracking-wide`}>Wisconsin Rope &amp; Wire Rigging Industries Served</h1>
        <p className="text-center">We provide dependable rigging solutions for a range of marine, industrial, and architectural applications. Our experience includes sailboat rigging and dock lines, truck-mounted winch lines and auger sling lines, as well as swaged wire systems for porch and stair railings. Whether you need custom splicing, measured rigging components, or reliable cable assemblies, we deliver practical solutions tailored to your project.</p>
        <p className="text-center">Installation services are available locally in the Manitowoc and Sheboygan, Wisconsin area, while customers outside this service area are responsible for providing accurate measurements and completing or arranging correct installation.</p>
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
            />
          ))}
        </div>
      </Container>
      <Container className="flex justify-center py-8 md:py-12">
        <Button
          buttonType="link"
          buttonText="Contact Bourne's Ropeworks for your next rigging project"
          linkUrl="/contact"
        />
      </Container>

    </>
  )
}